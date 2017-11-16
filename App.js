import React from 'react';
import { View, StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { Constants } from 'expo';
import reducer from './reducers';
import {setLocalNotification} from './utils/Notification'
import {accent1 } from './utils/colors'
import Navigation from './components/Navigation'

const AppStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);



export default class App extends React.Component {

  componentDidMount(){
      setLocalNotification()
    }

  render() {
    return (
       <Provider store={createStore(reducer, applyMiddleware(reduxThunk))}>
          <View style={{ flex: 1 }}>
              <AppStatusBar  backgroundColor={accent1} barStyle="light-content" />
              <Navigation />
          </View>
        </Provider>
    );
  }
}
