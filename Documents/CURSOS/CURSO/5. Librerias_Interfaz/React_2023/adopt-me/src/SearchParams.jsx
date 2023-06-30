import { useState, useContext /*useEffect*/ } from "react";
//import Pet from "./Pet";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
import AdoptedPetContext from "./AdoptetPetContext";

let counter = 0;
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  counter++;

  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  // eslint-disable-next-line no-unused-vars
  const [adoptedPet, _] = useContext(AdoptedPetContext);

  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  /*
  const [pets, setPets] = useState([]);
  const [breed, setBreed] = useState("");
  const [location, setLocation] = useState("");

  const locationHook = setState("");
  const location = locationHook[0];
  const setLocation = locationHook[1];

  const breeds = []; //"poodle"

  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  const location = "Seattle, WA";
  */

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="my-0 mx-auto w-11/12">
      <h3>Cambio de evento = {counter}</h3>
      <form
        className="mb-10 flex flex-col items-center justify-center rounded-lg bg-cyan-200 p-10 shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          //requestPets();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}

        <label htmlFor="location">
          Location
          <input
            /*onChange={(event) => setLocation(event.target.value)}
            value={location}*/
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            className="search-input"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            className="search-input"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              //setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            className="search-input grayed-out-disabled"
            disabled={!breeds.length}
            id="breed"
            name="breed"
            /*</label>value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            onBlur={(e) => setBreed(e.target.value)}
            }}*/
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button className="rounded border-none bg-pink-500 px-6 py-2 text-white hover:opacity-50">
          Submit
        </button>
      </form>
      <div>
        <Results pets={pets} />
        {/*
        {pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            especie={pet.animal}
            raza={pet.breed}
          />
        ))}
        */}
      </div>
    </div>
  );
};

export default SearchParams;
