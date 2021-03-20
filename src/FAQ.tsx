import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

function Q({ style, ...props }: Text['props']) {
  return <Text style={[styles.q, style]} {...props} />;
}
function A({ style, ...props }: Text['props']) {
  return <Text style={[styles.a, style]} {...props} />;
}

export function FAQ({ ...props }) {
  return (
    <ScrollView>
      <Q>Why do I have to verify my phone number upon registration?</Q>
      <A>
        Phone number verification is a security feature for us to verify that
        you are the account holder using the app and conducting transactions.
      </A>
      <Q>Why do I have to verify my phone number upon registration?</Q>
      <A>
        Phone number verification is a security feature for us to verify that
        you are the account holder using the app and conducting transactions.
      </A>
      <Q>Why do I have to verify my phone number upon registration?</Q>
      <A>
        Phone number verification is a security feature for us to verify that
        you are the account holder using the app and conducting transactions.
      </A>
      <Q>Why do I have to verify my phone number upon registration?</Q>
      <A>
        Phone number verification is a security feature for us to verify that
        you are the account holder using the app and conducting transactions.
      </A>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  q: {
    padding: 20,
    backgroundColor: '#F7F7F7',
    color: '#4972C4',
    fontSize: 24,
  },
  a: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#FEFFFE',
    color: '#5A5A5A',
    fontSize: 16,
  },
});
