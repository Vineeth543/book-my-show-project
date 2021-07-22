import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import MovieNavbar from "../components/Navbar/movieNavbar.component";
import { MovieContext } from "../context/Movie.context";

const Movielayout = (props) => {
  const { id } = useParams();
  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
};

export default Movielayout;
