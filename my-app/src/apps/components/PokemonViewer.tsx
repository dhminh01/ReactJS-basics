import React, { useEffect, useState } from "react";

interface PokemonSprites {
  front_default: string;
  back_default: string;
}

interface PokemonData {
  id: number;
  name: string;
  weight: number;
  sprites: PokemonSprites;
}

const PokemonViewer: React.FC = () => {
  const [pokemonId, setPokemonId] = useState<number>(1);
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );
        if (!response.ok) {
          throw new Error(`Error: Pokémon with ID ${pokemonId} not found`);
        }
        const data: PokemonData = await response.json();
        setPokemonData(data);
      } catch (err: any) {
        setError(err.message);
        setPokemonData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonId]);

  const handleNext = () => setPokemonId((prev) => prev + 1);
  const handlePrevious = () =>
    setPokemonId((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div style={{ fontFamily: "serif" }}>
      <h2>Pokemon: </h2>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {pokemonData && (
        <div>
          <p>
            <strong>ID:</strong> {pokemonData.id}
          </p>
          <p>
            <strong>Name:</strong> {pokemonData.name}
          </p>
          <p>
            <strong>Weight:</strong> {pokemonData.weight}
          </p>
          <img src={pokemonData.sprites.front_default} alt="Front sprite" />
          <img src={pokemonData.sprites.back_default} alt="Back sprite" />
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePrevious} disabled={pokemonId === 1}>
          Previous
        </button>
        <button onClick={handleNext} style={{ marginLeft: "10px" }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonViewer;
