import superagent from 'superagent';

const api = 'https://digimon-api.vercel.app/api/digimon';

export const getRemoteData = () => {
  return (dispatch) => {
    return superagent.get(api).then((response) => {
      dispatch(getAction({ results: response.body }));
    });
  };
};

const getAction = (payload) => {
  return {
    type: 'GET',
    payload: payload,
  };
};
