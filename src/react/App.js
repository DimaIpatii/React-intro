import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParam from "./SearchParam";
import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">
            <h1 id="something-important">Adopt me!</h1>
          </Link>
        </header>
        <Router>
          <SearchParam path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(
  <App />, // What to render...
  document.getElementById("root") // Where to render...
);
