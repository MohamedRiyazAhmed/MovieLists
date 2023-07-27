import React from "react";
import { Link } from "react-router-dom";

const Header = ({ handleMovieInput, handleOnSubmimt,handleOnHome }) => {
  return (
    <>
      <div className="header">
        
          <h1 onClick={handleOnHome} style={{cursor:"pointer" }}>MOVIE BUFF</h1>
      
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
