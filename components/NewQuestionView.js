import React, { Component } from 'react';
import { Button, Alert, KeyboardAvoidingView, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../actions';

class NewQuestionView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params
  });

  state = {
    question: '',
    answer: '',
  };

  onSubmit = () => {
    const { question, answer } = this.state;
    if (question === '' || answer === '') {
      Alert.alert('Please complete all fields')
    } else {
      const card = { question, answer }
      const deck = this.props.navigation.state.params
      this.props.addCard(deck, card)
      this.props.navigation.goBack()
    }
  };

  render() {
    return (
      <KeyboardAvoidingView>
        <TextInput
          onChangeText={question => this.setState({ question })}
          multiline={true}
          placeholder="Question"
        />
        <TextInput
          onChangeText={answer => this.setState({ answer })}
          multiline={true}
          placeholder="Answer"
        />
        <Button title="Submit" onPress={this.onSubmit}/>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = {
  addCard
};

export default connect(null, mapDispatchToProps)(NewQuestionView);
