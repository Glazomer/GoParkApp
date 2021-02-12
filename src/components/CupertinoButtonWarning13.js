import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonWarning13(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.parkingNumber}>Parking Number</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(221,146,203,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    paddingLeft: 16,
    paddingRight: 16
  },
  parkingNumber: {
    color: "rgba(0,0,0,1)",
    fontSize: 17
  }
});

export default CupertinoButtonWarning13;
