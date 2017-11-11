import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { Constants } from 'expo';
import DecksListView from './components/DecksListView';
import reducer from './reducers';
import NewDeckView from './components/NewDeckView';
import DeckView from './components/DeckView'

const AppStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const Navigation = StackNavigator({
Default: { screen: DecksListView },
AddDeck: { screen: NewDeckView },
   Deck: { path: 'deck/:deck',screen: DeckView},

});

export default class App extends React.Component {



  render() {
    return (
       <Provider store={createStore(reducer, applyMiddleware(reduxThunk))}>
          <View style={{ flex: 1 }}>
              <AppStatusBar  barStyle="light-content" />
              <Navigation />
          </View>
        </Provider>
    );
  }
}
