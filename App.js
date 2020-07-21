import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from './src/constants';
import Navigator from './src/navigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
};

export default App;
