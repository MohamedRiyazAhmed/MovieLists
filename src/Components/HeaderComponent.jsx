import React from "react";
import { Link } from "react-router-dom";

const Header = ({ handleMovieInput, handleOnSubmimt }) => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <h1>MOVIE BUFF</h1>
        </Link>
        <form action="" onSubmit={handleOnSubmimt}>
          <input
            type="text"
            onChange={handleMovieInput}
            placeholder="Search Movies..."
            className="input"
          />
        </form>

        {/* <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Header;
