// You can retrieve the pokemons by calling the following API
// Make sure to replace limit and offset with the appropriate values
// https://pokeapi.co/api/v2/pokemon?limit=5&offset=0

import { useEffect, useState } from "react";
import pokemonAPI from "./api/PokemonAPI";

const PokemonList = () => {
  const limit = 5;
  const offset = 0;
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await pokemonAPI.get(
          `/pokemon?limit=${limit}&offset=${offset}`
        );
        setPokemons(pokemonData.data.results);
      } catch (err) {
        console.log("There was an error in fetching...", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
      <p>
        Displaying {pokemons.length} of {pokemons.count} result
      </p>
    </div>
  );
};

export default PokemonList;
