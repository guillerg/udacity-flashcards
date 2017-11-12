import React, { Component } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View, Button, FlatList, Text } from 'react-native';
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
    <TouchableOpacity style={styles.deck}
      onPress={() => this.props.navigation.navigate('Deck', item.title)}
    >
      <View>
        <Text style={styles.deckContent}>{item.title} - {item.questions.length} Cards </Text>
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

const styles = StyleSheet.create({
  deck: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#CCC',
        borderWidth: 1,
        marginBottom: 10,
        shadowOpacity: .5,
        shadowColor: 'rgba(0,0,0,24)',
        shadowOffset: {
            width: 1,
            height: 5
        }
  },
  deckContent: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
    marginTop: 10,
  }
});

const mapStateToProps = state => ({
  decks: Object.keys(state).map(title => state[title])
});

const mapDispatchToProps = {
  fetchDecks
};


export default connect(mapStateToProps, mapDispatchToProps) (DecksListView);
