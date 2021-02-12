import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonWarning1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.CupertinoButtonWarning1}>Find a parking</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFCC00",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15,
    paddingLeft: 16,
    paddingRight: 16
  },
  CupertinoButtonWarning1: {
    color: "rgba(0,0,0,1)",
    fontSize: 17,
    textAlign: "auto" 
  }
});

export default CupertinoButtonWarning1;
