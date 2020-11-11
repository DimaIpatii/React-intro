import React from "react";
import { Link } from "@reach/router";

export const Pet = ({ name, animal, breed, id, media, location } = {}) => {
  var imageAdress = "https://placecorgi.com/300/300";

  if (media.length > 0) {
    imageAdress = media[0].small;
  }

  return (
    <div className="pet">
      <div className="image-container">
        <img src={imageAdress} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
      <div>
        <Link to={`details/${id}`}>Details</Link>
      </div>
    </div>
  );
};
