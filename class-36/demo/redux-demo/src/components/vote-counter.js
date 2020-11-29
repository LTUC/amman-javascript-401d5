import { connect } from 'react-redux';
import { increment, reset } from '../store/votes-reducer';

const VotesCounter = (props) => {
  return (
    <section>
      <ul>
        {props.votes.candidates.map((candidate) => {
          return (
            <li
              onClick={() => props.increment(candidate.name)}
              key={candidate.name}
            >
              {candidate.name} : {candidate.votes}
            </li>
          );
        })}
      </ul>
      <button onClick={props.reset}>Reset</button>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { votes: state.votes };
};
const mapDispatchToProps = { increment, reset };

/*
you might also see it in this format 
const mapDispatchToProps = (dispatch)=>{
  return(
    {
      increment:()=> {dispatch(increment())},
      reset:()=> dispatch(reset())
    }
  )
}
*/

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);
