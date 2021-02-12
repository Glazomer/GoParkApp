import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonWarning9(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.b6}>B6</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(208,2,27,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  b6: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonWarning9;
