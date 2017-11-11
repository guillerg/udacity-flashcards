import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class QuizView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params
  });

  state = {
    currentQuestion: 0,
    correctAnswers: 0,
    showAnswer: false
  };

  render(){
    return(

    )
  }
}

const mapStateToProps = (state, { navigation }) => ({
  questions: state[navigation.state.params].questions
});

export default connect(mapStateToProps)(QuizView);
