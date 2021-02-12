import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonWarning6(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.b2}>B2</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFCC00",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  b2: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonWarning6;
