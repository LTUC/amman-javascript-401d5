// redux-thunk

// eslint-disable-next-line import/no-anonymous-default-export
export default (store) => (next) => (action) =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
