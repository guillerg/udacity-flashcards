import React, { Component } from 'react';
import { TouchableOpacity, View, Button, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchDecks } from '../actions'

class DecksListView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      headerTitle: 'Flash Cards',
      headerRight: (
        <Button
          title="New Deck"
          onPress={() => navigate('AddDeck')}
        />
      )
    };
  };

  componentDidMount = () => {
    this.props.fetchDecks();
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate('Deck', item.title)}
    >
      <View>
        <Text> {item.title} </Text>
        <Text> {item.questions.length} Cards </Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View>
        <FlatList
          data={this.props.decks}
          renderItem={this.renderItem}
          keyExtractor={item => item.title}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  decks: Object.keys(state).map(title => state[title])
});

const mapDispatchToProps = {
  fetchDecks
};


export default connect(mapStateToProps, mapDispatchToProps) (DecksListView);
