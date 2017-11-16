import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
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

  reset = () => {
      this.setState({
        currentQuestion: 0,
        correctAnswers: 0,
        showAnswer: false
      });
  }

  render(){
    const { questions } = this.props;
    const { currentQuestion, correctAnswers, showAnswer } = this.state;

    return(
      <View style={{ flex: 1 }}>
        {currentQuestion < questions.length ? (
          <View >
            <Text>
              {currentQuestion+ 1}/{questions.length}
            </Text>
            <View>
              <Text>{questions[currentQuestion].question}</Text>
            </View>
            <View style={[{ justifyContent: 'flex-end' }]}>
              {showAnswer && <Text>{questions[currentQuestion].answer}</Text>}
              {showAnswer ? (
                <Button onPress={()=>this.toggleCard()} title='Hide Answer' />
              ) : (
                <Button onPress={()=>this.toggleCard()} title='Show Answer' />
              )}
            </View>
            <View>
              <Button onPress={()=>this.correctAnswer()} title='Right' />
              <Button onPress={()=>this.nextQuestion()} title='Wrong' />
            </View>
          </View>

        ) : (

          <View>
            <View>
              <Text>
                Correct answers: {correctAnswers}
              </Text>
              <Text>
                Total questions: {questions.length}
              </Text>
            </View>
            <View>
              <Button onPress={()=>this.reset()} title='Restart quiz' />
              <Button onPress={()=>this.return()} title='Return to Deck' />
            </View>
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
