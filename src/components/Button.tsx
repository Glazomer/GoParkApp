import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function Button({
  style,
  children,
  ...props
}: TouchableOpacity['props']) {
  const backgroundColor = props.disabled ? '#393960' : '#3F48F2';
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor }, style]}
      {...props}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#EEEEEE',
  },
});
