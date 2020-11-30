import { useDispatch, useSelector } from 'react-redux';
import { increment, disable, reset } from '../reducers/actions';

const VotesCounter = (props) => {
  // mapStateToProps
  const state = useSelector((state) => {
    return {
      candidates: state.candidates,
      votes: state.votes,
    };
  });
  // ~ mapDispatchToProps
  const dispatch = useDispatch();
  return (
    <section>
      <ul>
        {state.candidates.map((person) => {
          return (
            <li key={person.name}>
              <button
                onClick={() =>
                  person.disabled ? {} : dispatch(increment(person))
                }
              >
                +
              </button>
              <span
                className={`${person.disabled ? 'disabled' : ''}`}
                onClick={() => dispatch(disable(person))}
              >
                {person.name} : {person.votes}
              </span>
            </li>
          );
        })}
      </ul>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </section>
  );
};

export default VotesCounter;
