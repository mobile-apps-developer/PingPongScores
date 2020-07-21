import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors, FontSize} from '../constants';
import {H3} from './Text';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  label: {
    fontWeight: 'normal',
    marginBottom: 5,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.lightBlue,
    fontSize: FontSize.H3,
    paddingHorizontal: 20,
  },
});

export const LabelledTextInput = ({
  wrapperStyle,
  labelStyle,
  inputStyle,
  label,
  ...props
}) => {
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <H3 style={[styles.label, labelStyle]}>{label}</H3>
      <TextInput {...props} style={[styles.textInput, inputStyle]} />
    </View>
  );
};
