import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors, FontSize} from '../constants';

const styles = StyleSheet.create({
  h: (fontWeight, color) => ({
    fontWeight,
    color,
  }),
  h1: {
    fontSize: FontSize.H1,
  },
  h2: {
    fontSize: FontSize.H2,
  },
  h3: {
    fontSize: FontSize.H3,
  },
});

export const H1 = ({children, style, fontWeight, color, ...props}) => {
  return (
    <Text
      {...props}
      style={[
        styles.h(fontWeight ?? 'bold', color ?? Colors.black),
        styles.h1,
        style,
      ]}>
      {children}
    </Text>
  );
};

export const H2 = ({children, style, fontWeight, color, ...props}) => {
  return (
    <Text
      {...props}
      style={[
        styles.h(fontWeight ?? 'bold', color ?? Colors.black),
        styles.h2,
        style,
      ]}>
      {children}
    </Text>
  );
};

export const H3 = ({children, style, fontWeight, color, ...props}) => {
  return (
    <Text
      {...props}
      style={[
        styles.h(fontWeight ?? 'bold', color ?? Colors.black),
        styles.h3,
        style,
      ]}>
      {children}
    </Text>
  );
};
