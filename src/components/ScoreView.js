import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, FontSize} from '../constants';
import {H1, H2} from './Text';

const styles = StyleSheet.create({
  playerNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 40,
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: 5,
  },
  scoreContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  winTitle: {
    fontSize: FontSize.H3,
    color: Colors.lightGray,
    width: '40%',
    textAlign: 'right',
  },
  scoreValue: {
    fontSize: 42,
    marginLeft: 20,
    width: '40%',
  },
});

export const ScoreView = ({name, winCount, onAddWin}) => {
  return (
    <>
      <View style={styles.playerNameContainer}>
        <H1 fontWeight="600">{name}</H1>
        <TouchableOpacity style={styles.button} onPress={onAddWin}>
          <H2 fontWeight="normal" color={Colors.blue}>
            + Add Win
          </H2>
        </TouchableOpacity>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.winTitle}>Wins:</Text>
        <Text style={styles.scoreValue}>{winCount}</Text>
      </View>
    </>
  );
};

export default ScoreView;
