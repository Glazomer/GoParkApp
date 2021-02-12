import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonWarning7(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.b3}>B3</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(126,211,33,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  b3: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonWarning7;
