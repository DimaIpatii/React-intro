import React from "react";
// Check for React:
/* console.log(React);
console.log(ReactDOM); */
// **************************************
//
// **************************************
// App => Component:
export const Pet = (prop) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, prop.name),
    React.createElement("p", { className: "type" }, prop.animal),
    React.createElement("p", {}, prop.breed),
    React.createElement("p", { className: "description" }, prop.description),
    React.createElement("button", {}, "Visit me"),
  ]);
};
