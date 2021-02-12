import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonWarning11(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.confirm}>Confirm</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(75,118,207,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  confirm: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonWarning11;
