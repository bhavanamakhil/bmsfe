import React from "react";
import {Link} from "react-router-dom";

function MovieItem(props) {

    return (
        <div className={`bg-${props.mode==="light"?"light":"dark"} card border-${props.mode==="light"?"dark":"light"}  text-${props.mode==="light"?"dark":"light"}`} style={{height: "400px" }}>
            <img src={`https://image.tmdb.org/t/p/original/${props.imageUrl}`} style={{height: "200px"}}
                 className="card-img-top " alt="..."/>
            <div className="card-body">
                {props.title && props.title.length > 1 && <h5 className="card-title">{props.title.length < 31 ? props.title : props.title.slice(0, 31) + "....."}</h5>}
                {props.body && props.body.length >1 && <p className="card-text">{props.body.length < 161 ? props.body : props.body.slice(0, 161) + "...."}</p>}
                <Link to="/" className="btn btn-primary disabled ">Rating : {props.rating}...</Link>
                <button type="submit" href={`${props.category.includes("tv")?"tv":"movie"}/${props.id}/similar`} onClick={() => props.handleOnClickSimilar(props.id)} className="btn btn-primary mx-4">Get Similar Content</button>
            </div>
        </div>
    );
}

export default MovieItem;