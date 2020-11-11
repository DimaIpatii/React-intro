import React from "react";

function Details(param) {
  return (
    <pre>
      <code>{JSON.stringify(param, null, 4)}</code>
    </pre>
  );
}

export default Details;
