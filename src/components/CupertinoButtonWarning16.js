import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonWarning16(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.entryA}>Entry A</Text>
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
  entryA: {
    color: "rgba(0,0,0,1)",
    fontSize: 17
  }
});

export default CupertinoButtonWarning16;
