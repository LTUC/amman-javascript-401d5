import React from 'react';
import ListItem from './list-item';

const List = ({ pokemons }) => (
  <ul>
    {pokemons.map((pokemon) => {
      return <ListItem key={pokemon.name} pokemon={pokemon} />;
    })}
  </ul>
);

export default List;
