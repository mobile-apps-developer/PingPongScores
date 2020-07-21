import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../constants';

const styles = StyleSheet.create({
  flexContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
  },
});

export const FlexContainer = ({children, style}) => {
  return <View style={[styles.flexContainer, style]}>{children}</View>;
};
