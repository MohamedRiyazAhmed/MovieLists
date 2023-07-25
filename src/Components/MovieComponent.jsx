import { useState, useEffect } from "react";
import Header from "./HeaderComponent";
import BodyComponent from "./BodyComponent";
import "../Styles/Styles.css";
import Loader from "./Loader/LoaderComponent";

const Feautered_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";

const Search_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const MovieComponent = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState("");
  const [loader, setLoader] = useState(false);
  const val = 1;

  const handleMovieInput = (e) => {
    setSearchMovies(e.target.value);
  };

  const getMovieRequest = async (api) => {
    setLoader(true);

    // const url = `http://www.omdbapi.com/?s=${
    //     searchMovies === "" ? "Mission" : searchMovies
    //   }&apikey=8d870428 `;

    const response = await fetch(api);
    const responseJson = await response.json();
    if (responseJson) {
      setMovies(responseJson.results);
      setLoader(false);
    }
  };
  useEffect(() => {
    getMovieRequest(Feautered_API + val);
  }, []);

  const handleOnSubmimt = (e) => {
    e.preventDefault();

    if (searchMovies) {
      getMovieRequest(Search_API + searchMovies);
      searchMovies("");
    }
  };

  const handleOnHome = (e) =>{
    e.preventDefault();
    getMovieRequest(Feautered_API + val);
  }
  return (
    <div style={{ overflow: "hidden" }}>
      <Header
        handleMovieInput={handleMovieInput}
        handleOnSubmimt={handleOnSubmimt}
        handleOnHome={handleOnHome}
      />
      <div>
        {loader ? (
          <Loader />
        ) : (
          <div>
            {movies.length !== 0 ? (
              <BodyComponent movies={movies} />
            ) : (
              "No Data"
            )}
          </div>
        )}
      </div>

      {/* <DataComponent movies={movies} /> */}
    </div>
  );
};

export default MovieComponent;
