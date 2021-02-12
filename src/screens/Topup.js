import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import CupertinoHeaderWithBackground from "../components/CupertinoHeaderWithBackground";
import CupertinoSegmentWithTwoTabs from "../components/CupertinoSegmentWithTwoTabs";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";

function Topup(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated barStyle="dark-content" />
      <CupertinoHeaderWithBackground
        style={styles.cupertinoHeaderWithBackground1}
      ></CupertinoHeaderWithBackground>
      <CupertinoSegmentWithTwoTabs
        style={styles.cupertinoSegmentWithTwoTabs}
      ></CupertinoSegmentWithTwoTabs>
      <View style={styles.rect}>
        <Text style={styles.totalCredit}>Total Credit:</Text>
        <Text style={styles.rm2500}>RM 25.00</Text>
        <Text style={styles.loremIpsum}></Text>
        <View style={styles.hotPostsStack}>
          <Text style={styles.hotPosts}>9756 4759 5747 ****</Text>
          <Text style={styles.hotPosts1}>9756 4759 5747 ****</Text>
        </View>
        <Text style={styles.estherLim}>Esther Lim</Text>
      </View>
      <CupertinoButtonInfo
        style={styles.cupertinoButtonInfo}
      ></CupertinoButtonInfo>
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
  cupertinoSegmentWithTwoTabs: {
    height: 56,
    width: 375,
    backgroundColor: "rgba(0,0,0,1)"
  },
  rect: {
    width: 325,
    height: 156,
    backgroundColor: "rgba(106,113,200,1)",
    borderRadius: 20,
    marginTop: 29,
    marginLeft: 22
  },
  totalCredit: {
    color: "rgba(22,2,2,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1,
    marginTop: 17,
    marginLeft: 13
  },
  rm2500: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1,
    marginTop: 4,
    marginLeft: 166
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 10,
    marginLeft: 225
  },
  hotPosts: {
    left: 0,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1,
    top: 0
  },
  hotPosts1: {
    left: 0,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 10,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1,
    top: 0
  },
  hotPostsStack: {
    width: 122,
    height: 13,
    marginTop: 17,
    marginLeft: 13
  },
  estherLim: {
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1,
    marginTop: 5,
    marginLeft: 13
  },
  cupertinoButtonInfo: {
    height: 44,
    width: 320,
    marginTop: 44,
    marginLeft: 22
  }
});

export default Topup;
