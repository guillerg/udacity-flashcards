import { AsyncStorage } from 'react-native';

const DB_STORAGE_KEY = 'FlashCards:Decks';

const setInitialData = () => {
  const initialData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  };

  AsyncStorage.setItem(DB_STORAGE_KEY, JSON.stringify(initialData));

  return initialData;
};

const formatDecks = (results) => {
  return results === null
    ? setInitialData()
    : JSON.parse(results);
};

export const fetchDecks = () => {
  return AsyncStorage.getItem(DB_STORAGE_KEY)
    .then(formatDecks);
};
