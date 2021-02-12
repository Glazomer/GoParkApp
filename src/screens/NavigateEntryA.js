import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import CupertinoHeaderWithBackground from "../components/CupertinoHeaderWithBackground";

function NavigateEntryA(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <CupertinoHeaderWithBackground
        style={styles.cupertinoHeaderWithBackground1}
      ></CupertinoHeaderWithBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  cupertinoHeaderWithBackground1: {
    height: 45,
    width: 360,
    borderWidth: 1,
    borderColor: "rgba(10,13,91,1)",
    borderStyle: "solid",
    marginTop: 43
  }
});

export default NavigateEntryA;
