import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonWarning14(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.navigate}>Navigate to my Parking</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(184,233,134,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    paddingLeft: 16,
    paddingRight: 16
  },
  navigate: {
    color: "rgba(0,0,0,1)",
    fontSize: 17
  }
});

export default CupertinoButtonWarning14;
