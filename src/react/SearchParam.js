import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import UseDropDown from "./UseDropDown";
import ShowPet from "./ShowPet";
import ThemeContext from "./ThemeContext";

function SearchParam() {
  var [getLocation, setLocation] = useState("Seattle, Wa");
  var [listOfBreeds, setListOfBreeds] = useState([]);
  var [animalName, AnimalsDropDown] = UseDropDown("Animals", "All", ANIMALS);
  var [animalBreed, AnimalsBreedDropDown, selectBreed] = UseDropDown(
    "Breeds",
    "",
    listOfBreeds
  );
  var [getPetsList, setPets] = useState("");
  var [{ buttonColor }, setTheme] = useContext(ThemeContext);

  // ********************************************
  async function submitAnimal() {
    var { animals } = await pet.animals({
      location: getLocation,
      breed: animalBreed,
      type: animalName,
    });

    if (animals) {
      setPets(animals);
    } else {
      setPets([]);
    }
  }

  useEffect(() => {
    setListOfBreeds([]);
    selectBreed("");

    pet.breeds(animalName).then(({ breeds }) => {
      if (Array.isArray(breeds)) {
        const breedsNames = breeds.map(({ name }) => name);
        setListOfBreeds(breedsNames);
      }
    }, console.error);
  }, [animalName, selectBreed, setListOfBreeds]);

  // ********************************************
  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitAnimal();
        }}
      >
        <label htmlFor="lovation">
          Location
          <input
            id="location"
            value={getLocation}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <AnimalsDropDown />
        <AnimalsBreedDropDown />
        <label htmlFor="theme">
          Theme
          <select
            value={buttonColor}
            onChange={(event) => setTheme({ buttonColor: event.target.value })}
            onBlur={(event) => setTheme({ buttonColor: event.target.value })}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Darkblue</option>
            <option value="mediumorchid">Mediun Orchid</option>
            <option value="chartreuse">Chart Reuse</option>
          </select>
        </label>
        <button style={{ backgroundColor: buttonColor }}>Submit</button>
      </form>
      {Array.isArray(getPetsList) ? <ShowPet pets={getPetsList} /> : null}
    </div>
  );
}
export default SearchParam;
