import React, {Component} from "react";
import MovieItem from "./MovieItem";
import Spinner from "./Spinner";

class AllMovies extends Component {
    id = 1;

    constructor() {
        super();
        this.state = {
            results: [],
            page: 1,
            maxPages: 1,
            loading: true
        }

    }

    handleOnClickSimilar = async (id) => {
        let category = this.props.category;
        if (category.includes("tv")) {
            await this.setState({page: 1})
            let url = `https://api.themoviedb.org/3/tv/${id}/similar?api_key=d2859c9002bea2d24a555f5fe983aca3&page=${this.state.page}`
            this.setState({loading: true})
            let response = await fetch(url);
            let parsedResponse = await response.json();
            console.log(parsedResponse["results"]);
            this.setState({
                results: parsedResponse["results"],
                maxPages: parsedResponse["total_pages"],
                loading: false
            });
        } else {
            await this.setState({page: 1})
            let url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=d2859c9002bea2d24a555f5fe983aca3&page=${this.state.page}`
            this.setState({loading: true})
            let response = await fetch(url);
            let parsedResponse = await response.json();
            console.log(parsedResponse["results"]);
            this.setState({
                results: parsedResponse["results"],
                maxPages: parsedResponse["total_pages"],
                loading: false
            });
        }
    }
    handleHeading = () => {
        let heading = this.props.category
        heading = heading.replace("/", " ")
        heading = heading.replaceAll("_", " ")
        heading = heading.toUpperCase();
        return (
            <h1 className={`text-center text-${this.props.mode === "light" ? "dark" : "light"} my-3`}>
                {heading}
            </h1>
        )
    }
    handleOnClickNext = async () => {
        await this.setState({page: this.state.page + 1});
        this.componentDidMount();

    }
    handleOnClickPrev = async () => {
        this.setState({page: this.state.page - 1});
        this.componentDidMount();

    }

    async componentDidMount() {
        let url = `https://api.themoviedb.org/3/${this.props.category}?api_key=d2859c9002bea2d24a555f5fe983aca3&page=${this.state.page}`
        console.log(this.state.page);
        this.setState({loading: true})
        let response = await fetch(url);
        let parsedResponse = await response.json();
        console.log(parsedResponse["results"]);
        this.setState({results: parsedResponse["results"], maxPages: parsedResponse["total_pages"], loading: false});


    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        window.scrollTo(0, 0)
    }

    render() {
        return this.state.results && (
            <div className="container">
                {this.handleHeading()}
                {this.state.loading && <Spinner/>}
                <div className="row container mx-5">

                    {this.state.results.map((result) => {
                        return (
                            <div className="col-md-4 my-3" key={result.id}>

                                <MovieItem key={this.id + 1} body={result.overview}
                                           title={this.props.category.includes("tv") ? result.name : result.title}
                                           imageUrl={result.poster_path} handleDarkMode={this.props.handleDarkMode}
                                           mode={this.props.mode} rating={result.vote_average} id={result.id}
                                           handleOnClickSimilar={this.handleOnClickSimilar}
                                           category={this.props.category}/>

                            </div>


                        );


                    })}

                </div>
                <div className="container justify-content-between d-flex">
                    <button disabled={this.state.page === 1} onClick={this.handleOnClickPrev}
                            className={`btn btn-${this.props.mode === "light" ? "dark" : "light"}`}> &larr; Previous
                    </button>
                    <button disabled={this.state.page >= this.state.maxPages} onClick={this.handleOnClickNext}
                            className={`btn btn-${this.props.mode === "light" ? "dark" : "light"}`}> Next &rarr;
                    </button>
                </div>

            </div>
        );
    }
}

export default AllMovies;