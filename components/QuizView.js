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

  correctAnswer = () =>{
    this.setState(({ correctAnswers }) => ({
     correctAnswers: correctAnswers + 1
   }));
   this.nextQuestion();
  }

  nextQuestion = () => {
    this.setState(({ currentQuestion }) => ({
      currentQuestion: currentQuestion + 1,
      showAnswer: false
    }));
  };

  toggleCard = () => {
      this.setState(({ showAnswer }) => ({ showAnswer: !showAnswer }));
    };

  return = () => {
      this.props.navigation.goBack();
    }

  render(){
    const { questions } = this.props;
    const { currentQuestion, correctQuestion, showAnswer } = this.state;

    return(
      <View style={{ flex: 1 }}>
        {currentQuestion < questions.length ? (
          <View >

          </View>

        ) : (
          <View >

          </View>
        )}
      </View>

    )
  }
}

const mapStateToProps = (state, { navigation }) => ({
  questions: state[navigation.state.params].questions
});

export default connect(mapStateToProps)(QuizView);
