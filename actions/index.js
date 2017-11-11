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

const add_deck = deck => ({
  type: ADD_DECK,
  deck
});

export const addDeck = deck => dispatch => {
  api.addDeck(deck).then(() => dispatch(add_deck(deck)));
};

const add_card = (deck, card) => ({
  type: ADD_CARD,
  deck,
  card
});

export const addCard = (deck, card) => dispatch => {
  api.addCard(deck, card).then(() => dispatch(add_card(deck, card)));
};
