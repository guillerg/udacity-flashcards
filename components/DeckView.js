import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Button
        title="Add Question"
        onPress={() =>
          navigation.navigate('NewQuestion', navigation.state.params)}
      />
    )
  });

  render() {
    const { title, questions } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View>
          <Text>{title}</Text>
          <Text>{questions.length} Cards</Text>
        </View>
        <Button title='Start quiz' onPress={() => navigate('Quiz', title)}/>
      </View>
    );
  }
}

const mapStateToProps = (state, { navigation }) => {
  const { title, questions } = state[navigation.state.params];
  return {
    title,
    questions
  };
};

export default connect(mapStateToProps)(DeckView);
