import { useEffect, useState } from "react";
import pokemonAPI from "./api/PokemonAPI";

const PokemonList = () => {
  const [limit, setLimit] = useState(5);
  const offset = 0;
  const [pokemons, setPokemons] = useState([]);
  const [all, setAll] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await pokemonAPI.get(
          `/pokemon?limit=${limit}&offset=${offset}`
        );
        setPokemons(pokemonData.data.results);
        setAll(pokemonData.data.count);
      } catch (err) {
        console.log("There was an error in fetching...", err);
      }
    };
    fetchData();
  }, [limit]);
  // console.log(pokemons);

  return (
    <div>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
      <p>
        Displaying {pokemons.length} of {all} result
      </p>
      <button onClick={() => setLimit((prev) => prev + 5)}>Load More</button>
    </div>
  );
};

export default PokemonList;
