import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonWarning10(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.cancel}>Cancel</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "rgba(208,2,27,1)"
  },
  cancel: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonWarning10;
