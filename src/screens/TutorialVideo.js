import React, { Component } from "react";
import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import CupertinoHeaderWithBackground from "../components/CupertinoHeaderWithBackground";
import MaterialCard3 from "../components/MaterialCard3";

function TutorialVideo(navigation) {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithBackground
        style={styles.cupertinoHeaderWithBackground1}
      ></CupertinoHeaderWithBackground>
      <View style={styles.tutorialVideosStack}>
        <Text style={styles.tutorialVideos}>Tutorial Videos</Text>
        <Text style={styles.loremIpsum}></Text>
      </View>
 
      <MaterialCard3 
      style={styles.materialCard3}
      >
        <TouchableOpacity
        onPress={()=>navigation.navigate("Dashboard")}
        ></TouchableOpacity>

      </MaterialCard3>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  cupertinoHeaderWithBackground1: {
    height: 45,
    width: 360,
    borderWidth: 1,
    borderColor: "rgba(10,13,91,1)",
    borderStyle: "solid",
    marginTop: 43
  },
  tutorialVideos: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  loremIpsum: {
    top: 15,
    left: 40,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  tutorialVideosStack: {
    width: 170,
    height: 29,
    marginTop: 31,
    marginLeft: 10
  },
  materialCard3: {
    height: 550,
    width: 359,
    marginTop: 22,
    marginLeft: 3
  }
});

export default TutorialVideo;
