import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import MaterialButtonHamburger from "./MaterialButtonHamburger";

function CupertinoHeaderWithBackground(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View
        gradientImage="Gradient_L8kKdRI.png"
        style={styles.leftWrapper}
      ></View>
      <Image
        source={require("../assets/images/Logo.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <MaterialButtonHamburger
        style={styles.materialButtonHamburger}
      ></MaterialButtonHamburger>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(248,156,28,1)",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "rgba(248,156,28,1)"
  },
  image: {
    top: -32,
    left: 140,
    width: 93,
    height: 103,
    position: "absolute"
  },
  materialButtonHamburger: {
    height: 36,
    width: 36,
    position: "absolute",
    left: 7,
    top: 3
  }
});

export default CupertinoHeaderWithBackground;
