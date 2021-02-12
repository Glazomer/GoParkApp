import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonInfo(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.topUp}>Top Up</Text>
      <Text style={styles.loremIpsum}></Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  topUp: {
    color: "#fff",
    fontSize: 17
  },
  loremIpsum: {
    top: 15,
    left: 63,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  }
});

export default CupertinoButtonInfo;
