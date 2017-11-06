import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Constants } from 'expo';
import DecksListView from './components/DecksListView';

const AppStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const Navigation = StackNavigator({
Default: { screen: DecksListView },

});

export default class App extends React.Component {



  render() {
    return (
      <View style={{ flex: 1 }}>
          <AppStatusBar  barStyle="light-content" />
          <Navigation />
      </View>
    );
  }
}