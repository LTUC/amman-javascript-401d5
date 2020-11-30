import { connect } from 'react-redux';

const status = (props) => {
  const currentLeader = { name: 'No Leader', votes: 0 };
  props.candidates.forEach((candidate) => {
    if (!candidate.disabled && candidate.votes !== 0) {
      if (candidate.votes > currentLeader.votes) {
        currentLeader.name = candidate.name;
        currentLeader.votes = candidate.votes;
      } else if (candidate.votes === currentLeader.votes) {
        currentLeader.name = currentLeader.name + ' & ' + candidate.name;
        currentLeader.votes = candidate.votes;
      }
    }
  });
  return (
    <section>
      Current Leader: {currentLeader.name} Votes cast: {props.votes.totalVotes}
    </section>
  );
};

const mapStateToProps = (state) => ({
  votes: state.votes,
  candidates: state.candidates,
});
export default connect(mapStateToProps)(status);
