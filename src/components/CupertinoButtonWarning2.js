import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonWarning2(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.needHelp}>Need Help?</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(65,117,5,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  needHelp: {
    color: "rgba(0,0,0,1)",
    fontSize: 17
  }
});

export default CupertinoButtonWarning2;
