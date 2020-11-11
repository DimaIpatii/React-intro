import React from "react";
import { Pet } from "./Pet";

const ShowPet = ({ pets }) => {
  console.log("show pets", pets);
  return (
    <div className="search">
      {pets.length == 0 ? (
        <h1>No pets found😢! Try again...</h1>
      ) : (
        // name, animal, breed, description
        pets.map((pet) => (
          <Pet
            animal={pet.type}
            name={pet.name}
            key={pet.id}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default ShowPet;
