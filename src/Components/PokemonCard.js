import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      <p>Name: {pokemon.name}</p>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>ID {pokemon.id}</p>
    </div>
  );
};

export default PokemonCard;
