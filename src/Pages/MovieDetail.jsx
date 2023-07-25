import React from "react";
import Header from "../Components/HeaderComponent";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Images_API = "https://image.tmdb.org/t/p/w1280";
import { Link } from "react-router-dom";



const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState({});

  const params = useParams();

  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=04c35731a5ee918f014970082a0088b1`;

  const getMovieRequest = async (api) => {
    const response = await fetch(api);
    const responseJson = await response.json();

    if (responseJson) {
      setMovieDetail(responseJson);
    }
  };
  useEffect(() => {
    getMovieRequest(url);
  }, []);

  return (
    <>
      <Header />
      <>
        <div className="movie-container1">
          <div className="content">
            <h1> Details </h1>
            <h2>
              {movieDetail.title} <span> ({movieDetail.release_date})</span>
            </h2>
            <p className="rating">Rating: {movieDetail.vote_average}</p>
            <div className="plot">
              <img src={Images_API + movieDetail.poster_path} alt={movieDetail.title} />
              <p>{movieDetail.overview}</p>
            </div>
            <p>Release Date: {movieDetail.release_date}</p>
            <p>Total vote: {movieDetail.vote_count}</p>
            <p>Original Language: {movieDetail.original_language}</p>
            <p>Popularity count: {movieDetail.popularity}</p>
            <Link to="/">
              <button className="close">Home</button>
            </Link>
          </div>
        </div>
      </>
    </>
  );
};

export default MovieDetail;
