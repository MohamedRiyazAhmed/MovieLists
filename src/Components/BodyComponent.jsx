import React from "react";
import { Link } from "react-router-dom";

const Images_API = "https://image.tmdb.org/t/p/w1280";

const BodyComponent = ({ movies }) => {
  return (
    <>
      <div className="grid">
        {movies.map((data, index) => (
          <div className="poster" key={index}>
            {/* {JSON.stringify(data)} */}
            <Link to={"/details/" + data.title + "/" + data.id}>
              <img src={Images_API + data.poster_path} alt="Movie" />
            </Link>

            <div className="movieInfo">
              <h3>{data.title}</h3>
              <span> {data.vote_average} </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BodyComponent;
