import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

// App => Component:
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Havanese",
      description: "A wonderful and an intelligent ",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "bird",
      breed: "Cockatiel",
      description: "A wonderful and an intelligent ",
    }),
  ]);
};

render(
  //React.createElement('h1', {class : 'caption', id: 'captionId', data : 'main-caption'}, 'Hello, World!'), // What to render...
  React.createElement(App), // What to render...
  document.getElementById("root") // Where to render...
);
