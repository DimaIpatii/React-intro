import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParam from "./SearchParam";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  var themeHook = useState({
    buttonColor: "darkblue",
    textColor: "white",
  });
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
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
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(
  <App />, // What to render...
  document.getElementById("root") // Where to render...
);
