import React from 'react';
import { Platform, StyleSheet } from 'react-native';

let DecksListStyles = {
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
};

let CenteredComplete = {
    justifyContent: 'center',
    alignItems: 'center'
}

export const styles = StyleSheet.create({
    CenteredComplete,
    ...DecksListStyles
});
