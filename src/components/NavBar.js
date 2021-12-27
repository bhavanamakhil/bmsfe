import React from "react";
import {Link} from "react-router-dom";

function NavBar(props) {
    const genres = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}];
    return (
        <nav className={`  navbar navbar-expand-lg navbar-${props.mode==="light"?"light":"dark"} bg-${props.mode==="light"?"light":"dark"}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">All-About-Movies</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                Movies
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/movie/popular">Popular</Link></li>
                                <li><Link className="dropdown-item" to="/movie/upcoming">Up Coming</Link></li>
                                <li><Link className="dropdown-item" to="/movie/now_playing">Now Playing</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                TV Shows
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/tv/popular">Popular</Link></li>
                                <li><Link className="dropdown-item" to="/tv/airing_today">Airing Today</Link></li>
                                <li><Link className="dropdown-item" to="/tv/on_the_air">On the Air</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                Genres
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    genres.map((genre) => {

                                        return (

                                            <li key={genre.id}><Link className="dropdown-item" to="/">{genre.name}</Link></li>
                                        );
                                    })

                                }
                            </ul>
                        </li>

                    </ul>
                    <form className="d-flex my-3">
                        <div className="form-check form-switch">
                            <input className="form-check-input " type="checkbox" role="switch"
                                   id="flexSwitchCheckDefault" onClick={props.handleDarkMode}/>
                            <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">Enable Dark
                                Mode</label>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;