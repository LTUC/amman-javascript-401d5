import { connect } from 'react-redux';
import { increment, disable, reset } from '../reducers/actions';

const VotesCounter = (props) => {
  return (
    <section>
      <ul>
        {props.candidates.map((person) => {
          return (
            <li key={person.name}>
              <button
                onClick={() => (person.disabled ? {} : props.increment(person))}
              >
                +
              </button>
              <span
                className={`${person.disabled ? 'disabled' : ''}`}
                onClick={() => props.disable(person)}
              >
                {person.name} : {person.votes}
              </span>
            </li>
          );
        })}
      </ul>
      <button onClick={props.reset}>RESET</button>
    </section>
  );
};

const MapStateToProps = (state) => {
  return {
    candidates: state.candidates,
    votes: state.votes,
  };
};

const mapDispatchToProps = { increment, disable, reset };

export default connect(MapStateToProps, mapDispatchToProps)(VotesCounter);
