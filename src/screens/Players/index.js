import React, {useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {FlexContainer, LabelledTextInput} from '../../components';
import {H1, H2} from '../../components/Text';
import {Colors, Screens} from '../../constants';
import {isValidInput} from '../../utils';

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 5,
    width: '100%',
    backgroundColor: Colors.blue,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexContainer: {
    padding: 25,
  },
  player1Input: {
    marginTop: 25,
  },
  player2Input: {
    marginTop: 20,
  },
});

const PlayerScreen = ({navigation}) => {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  /**
   * Navigate to score screen if both player1 and player2 name are provided.
   * If not provided then an alert message is displayed.
   */
  const onContinue = () => {
    if (!isValidInput(player1Name) || !isValidInput(player2Name)) {
      Alert.alert('Player name missing', 'Please enter both player names');
      return;
    }

    navigation.navigate(Screens.Scores, {
      player1Name,
      player2Name,
    });
  };

  return (
    <SafeAreaView>
      <FlexContainer style={styles.flexContainer}>
        <H1 fontWeight="600">Enter player details to continue</H1>
        <LabelledTextInput
          wrapperStyle={styles.player1Input}
          label="Player 1 name"
          onChangeText={setPlayer1Name}
          maxLength={15}
          autoCapitalize="words"
          value={player1Name}
          placeholder="Enter player 1 name"
        />
        <LabelledTextInput
          wrapperStyle={styles.player2Input}
          label="Player 2 name"
          onChangeText={setPlayer2Name}
          maxLength={15}
          autoCapitalize="words"
          value={player2Name}
          placeholder="Enter player 2 name"
        />
        <TouchableOpacity style={styles.button} onPress={onContinue}>
          <H2 color={Colors.white} fontWeight="normal">
            Continue
          </H2>
        </TouchableOpacity>
      </FlexContainer>
    </SafeAreaView>
  );
};

export default PlayerScreen;
