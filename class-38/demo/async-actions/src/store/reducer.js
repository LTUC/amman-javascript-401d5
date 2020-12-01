let initialState = { results: [] };

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET':
      return payload;

    default:
      return state;
  }
};
