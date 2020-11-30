const initialState = [
  { name: 'Mahmoud', votes: 0 },
  { name: 'Aya', votes: 0 },
  { name: 'Bayan', votes: 0 },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      return state.map((candidate) => {
        if (candidate.name === payload.name) {
          return { name: candidate.name, votes: candidate.votes + 1 };
        } else {
          return candidate;
        }
      });
    case 'DISABLE':
      return state.map((candidate) =>
        candidate.name === payload.name
          ? { ...candidate, disabled: true }
          : candidate
      );
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};
