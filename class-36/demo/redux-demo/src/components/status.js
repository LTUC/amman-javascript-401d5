import { connect } from 'react-redux';

const Status = (props) => {
  return <section>TotalVotes: {props.totalVotes}</section>;
};

const mapStateToProps = (state) => {
  console.log('STATE????', state);
  return { totalVotes: state.votes.totalVotes };
};

export default connect(mapStateToProps)(Status);
