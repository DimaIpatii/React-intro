import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import UseDropDown from "./UseDropDown";
import ShowPet from "./ShowPet";
import ThemeContext from "./ThemeContext";

const SearchParam = () => {
  var [getLocation, setLocation] = useState("Seattle, Wa");
  var [listOfBreeds, setListOfBreeds] = useState([]);
  var [animalName, AnimalsDropDown] = UseDropDown("Animals", "", ANIMALS);
  var [animalBreed, AnimalsBreedDropDown, selectBreed] = UseDropDown(
    "Breeds",
    "",
    listOfBreeds
  );
  var [getPetsList, setPets] = useState([]);
  var [{ buttonColor }, setTheme] = useContext(ThemeContext);
  console.log(buttonColor);
  //
  // ********************************************
  async function submitAnimal() {
    var { animals } = await pet.animals({
      location: getLocation,
      breed: animalBreed,
      type: animalName,
    });

    console.log("Submit", animals, name);
    console.log("Name", getLocation);

    setPets(animals || []);
  }

  useEffect(() => {
    setListOfBreeds([]);
    selectBreed("");

    pet.breeds(animalName).then(({ breeds }) => {
      const breedsNames = breeds.map(({ name }) => name);
      setListOfBreeds(breedsNames);

      console.log(animalName);
    }, console.error);
  }, [animalName, selectBreed, setListOfBreeds]);

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
      <ShowPet pets={getPetsList} />
    </div>
  );
};
export default SearchParam;
