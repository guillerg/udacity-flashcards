import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Button,
  FlatList,
  StyleSheet,
  Platform
} from 'react-native';
import { connect } from 'react-redux';



class DecksListView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      headerTitle: 'Flash Cards',
      headerRight: (
        <Button
          title="Add Deck"
          onPress={() => navigate('AddDeck')}
        />
      )
    };
  };

  componentDidMount = () => {

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

        />
      </View>
    );
  }
}



export default DecksListView;
