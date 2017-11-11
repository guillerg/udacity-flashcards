import React, { Component } from 'react';
import { TouchableOpacity, View, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchDecks } from '../actions'
import DecksListItem from './DecksListItem'

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
    <DecksListItem deck={item} />
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
