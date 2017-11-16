import { StackNavigator } from 'react-navigation';
import DecksListView from './DecksListView';
import NewDeckView from './NewDeckView';
import DeckView from './DeckView'
import NewQuestionView from './NewQuestionView'
import QuizView from './QuizView'
import { accent2a } from '../utils/colors'

const Navigation = StackNavigator({
       Default: { screen: DecksListView },
       AddDeck: { screen: NewDeckView },
          Deck: { path: 'deck/:deck',screen: DeckView},
   NewQuestion: { path: 'new/:deck', screen: NewQuestionView },
          Quiz: { path: 'quiz/:deck', screen: QuizView},
},
{
    navigationOptions: {
      headerTintColor: "#ffffff",
      alignItem: 'center',
      headerStyle: {backgroundColor: accent2a}
    }
  }
);

export default Navigation;
