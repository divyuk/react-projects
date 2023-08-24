import { useEffect, useState } from "react";
import pokemonAPI from "./api/PokemonAPI";

const PokemonList = () => {
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [totalCount, setTotalCount] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const pokemonData = await pokemonAPI.get(
          `/pokemon?limit=5&offset=${offset}`
        );
        setPokemons([...pokemons, ...pokemonData.data.results]);
        setTotalCount(pokemonData.data.count);
        setLoading(false);
      } catch (err) {
        console.log("There was an error in fetching...", err);
      }
    };
    fetchData();
  }, [offset]);

  return (
    <div>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>

      <p>
        Displaying {pokemons.length} of {totalCount} results
      </p>
      {loading && <p>Loading...</p>}
      <button onClick={() => setOffset((prev) => prev + 5)}>Load more</button>
    </div>
  );
};

export default PokemonList;
