const initialState = {
  candidates: [
    { name: 'Mahmoud', votes: 0 },
    { name: 'Malek', votes: 0 },
    { name: 'Eshtaiwi', votes: 0 },
  ],
  totalVotes: 0,
};
//Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  console.log('STATE??', state, 'Action', action);
  const { type, payload } = action;
  switch (type) {
    case 'INCREMENT':
      const candidates = state.candidates.map((candidate) => {
        if (candidate.name === payload) {
          return { name: candidate.name, votes: candidate.votes + 1 };
        } else {
          return candidate;
        }
      });
      const totalVotes = state.totalVotes + 1;
      return { totalVotes, candidates };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export const increment = (name) => {
  return {
    type: 'INCREMENT',
    payload: name,
  };
};

export const reset = () => {
  return {
    type: 'RESET',
  };
};
