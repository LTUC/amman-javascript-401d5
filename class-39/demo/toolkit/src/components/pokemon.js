import { connect } from 'react-redux';
import { addAll, remove, get } from '../store/pokemon.js';
import { useEffect, useState } from 'react';
const Pokemon = (props) => {
  const [name, setName] = useState('');
  useEffect(() => {
    props.get();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addAll(name);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="enter name" />
        <button>Add Name</button>
      </form>
      <ul>
        {props.pokemon.map((poke) => {
          return (
            <li key={poke.name} onClick={() => props.remove(poke.name)}>
              {poke.name}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
const mapStateToProps = (state) => {
  console.log('hello', state);
  return {
    pokemon: state.pokemon,
  };
};
const mapDispatchToProps = { addAll, remove, get };
export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
