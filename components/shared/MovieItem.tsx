import React from "react";
import {Col} from "reactstrap";
import {MovieResult} from "../../types/Movie";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const MovieItem = ({movie}: { movie: MovieResult }) => {
  return (
    <Col md={6} lg={4} sm={12} className="mt-4">
      <div className="bg-light text-dark p-2 shadow rounded">
        <img src={`${movie.image}`} className="w-100" height="auto" alt=""/>
      </div>
      <div>

        <b>{movie.name} {movie.stars} <FontAwesomeIcon className="text-orange" icon={faStar}/></b>
        <hr/>
        <p className="text-justify">{movie.description.slice(0, 220)}. <i className="text-primary">Show more...</i></p>
      </div>
    </Col>
  )
}

export default MovieItem;


/*
* # Pro icons styles


* */