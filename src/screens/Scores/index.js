import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {FlexContainer, ScoreView} from '../../components';
import {H1} from '../../components/Text';
import {Colors} from '../../constants';

const styles = StyleSheet.create({
  separator: {
    backgroundColor: Colors.veryLightGray,
    height: 1,
    width: '100%',
    marginVertical: 40,
  },
  flexContainer: {
    padding: 25,
  },
  header: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
});

const ScoreScreen = ({route}) => {
  const {player1Name, player2Name} = route.params;

  const [playerWinRecords, setPlayerWinRecords] = useState({
    player1WinsCount: 0,
    player2WinsCount: 0,
  });

  return (
    <SafeAreaView>
      <FlexContainer style={styles.flexContainer}>
        <H1 fontWeight="600" style={styles.header}>
          Add players win details
        </H1>
        <ScoreView
          name={player1Name}
          winCount={playerWinRecords.player1WinsCount}
          onAddWin={() => {
            setPlayerWinRecords({
              ...playerWinRecords,
              player1WinsCount: playerWinRecords.player1WinsCount + 1,
            });
          }}
        />
        <View style={styles.separator} />
        <ScoreView
          name={player2Name}
          winCount={playerWinRecords.player2WinsCount}
          onAddWin={() => {
            setPlayerWinRecords({
              ...playerWinRecords,
              player2WinsCount: playerWinRecords.player2WinsCount + 1,
            });
          }}
        />
      </FlexContainer>
    </SafeAreaView>
  );
};

export default ScoreScreen;
