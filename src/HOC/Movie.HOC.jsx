import React from "react";
import { Route } from "react-router-dom";
import Movielayout from "../layouts/Movie.layout";

const MovieHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <Movielayout>
            <Component {...props }/>
          </Movielayout>
        )}
      />
    </>
  );
};

export default MovieHOC;
