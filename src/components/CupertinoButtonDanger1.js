import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonDanger1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.backToDashboard}>Back to Dashboard</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(74,144,226,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  backToDashboard: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonDanger1;
