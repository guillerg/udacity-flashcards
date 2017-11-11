import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Button, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import { addDeck } from '../actions';

class NewDeckView extends Component {
  static navigationOptions = {
    title: 'Add New Deck'
  };

  state = {
    title: ''
  };

  onSubmit = () => {
    const { title } = this.state;
    const { decks } = this.props;
      const deck = {
        [this.state.title]: {
          title: this.state.title,
          questions: []
        }
      };
      this.props.addDeck(deck);
      setTimeout(() => {
        this.props.navigation.dispatch(
          NavigationActions.reset({
            index: 1,
            actions: [
              NavigationActions.navigate({ routeName: 'Default' }),
              NavigationActions.navigate({
                routeName: 'Deck',
                params: title
              })
            ]
          })
        );
      }, 500);
  };

  render() {
    return (
      <KeyboardAvoidingView>
        <TextInput
          onChangeText={title => this.setState({ title })}
          placeholder="Deck title"
        />
        <Button title="Submit" onPress={this.onSubmit} />
      </KeyboardAvoidingView>
    );
  }
}


const mapStateToProps = state => ({
  decks: state
});

const mapDispatchToProps = {
  addDeck
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckView);
