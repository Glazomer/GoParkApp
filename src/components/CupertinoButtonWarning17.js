import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonWarning17(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.entryB}>Entry B</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(248,156,28,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  entryB: {
    color: "rgba(0,0,0,1)",
    fontSize: 17
  }
});

export default CupertinoButtonWarning17;
