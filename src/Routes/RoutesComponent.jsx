import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import MovieDetail from "../Pages/MovieDetail";

const RouteComponent = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/details/:title/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
};

export default RouteComponent;
