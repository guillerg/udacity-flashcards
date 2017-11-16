import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Alert, Button, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import { addDeck } from '../actions';

class NewDeckView extends Component {
  static navigationOptions = {
    title: 'Add New Deck'
  };

  state = {
    title: ''
  };

  onSubmit = () => {

    if(this.state.title.length===0){
      Alert.alert('You forgot the title!')
    }
    else{

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
                params: this.state.title
              })
            ]
          })
        );
      }, 500);

    }


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

export default connect(mapStateToProps, {addDeck})(NewDeckView);
