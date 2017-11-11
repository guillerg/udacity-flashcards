import * as api from '../utils/api';

export const GET_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

const get_decks = decks => ({
  type: GET_DECKS,
  decks
});

export const fetchDecks = () => dispatch => {
  api.fetchDecks().then(decks => dispatch(get_decks(decks)));
};
