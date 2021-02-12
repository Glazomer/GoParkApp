import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text,TouchableOpacity, Button } from "react-native";
import CupertinoHeaderWithBackground from "../components/CupertinoHeaderWithBackground";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import CupertinoButtonWarning10 from "../components/CupertinoButtonWarning10";
import CupertinoButtonWarning11 from "../components/CupertinoButtonWarning11";

function ConfirmationScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.rect}>
        <Text style={styles.bestPosts1}>
          Location: Ipoh Parade{"\n"}
          {"\n"}Floor: Basement{"\n"}
          {"\n"}Parking Slot: B3
        </Text>
      </View>
      <CupertinoHeaderWithBackground
        style={styles.cupertinoHeaderWithBackground1}
      ></CupertinoHeaderWithBackground>
      <Text style={styles.text1}>Find a Parking</Text>
      <View style={styles.iconRow}>
        <Icon name="question" style={styles.icon}></Icon>
        <Text style={styles.selectAFloor1}>Selected Parking Slot</Text>
      </View>
      <View style={styles.cupertinoButtonWarning10Row}>
        <TouchableOpacity
         style={{ paddingLeft: 16, paddingRight: 16,justifyContent: "center",alignItems: "center",
         flexDirection: "row",  borderRadius: 5, backgroundColor: "rgba(208,2,27,1)", width: 160,
   height: 45}}
          onPress={()=> props.navigation.navigate("Dashboard")}
        >
          <Text style={{color:'white'}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ paddingLeft: 16, paddingRight: 16,justifyContent: "center",alignItems: "center",
          flexDirection: "row",  borderRadius: 5, backgroundColor: "rgba(126,211,33,1)", width: 160,
    height: 45}}
    onPress={()=> props.navigation.navigate("SuccessfullyBooked")}
        >
           <Text style={{color:'white'}}>Yes,Confirm</Text>
        </TouchableOpacity>
      </View>
      <Text style={{color:'orange', fontSize: 12, textAlign:"center", top:-100}}>Please arrived within 15 minutes as soon as booking is placed. The booking will be automatically cancelled if user didnt arrive within the timeframe</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  rect: {
    width: 262,
    height: 135,
    borderWidth: 1,
    borderColor: "rgba(80,227,194,1)",
    borderRadius: 20,
    marginTop: 235,
    marginLeft: 29
  },
  bestPosts1: {
    color: "rgba(249,241,241,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1,
    marginTop: 22,
    marginLeft: 11
  },
  cupertinoHeaderWithBackground1: {
    height: 45,
    width: 360,
    borderWidth: 1,
    borderColor: "rgba(10,13,91,1)",
    borderStyle: "solid",
    marginTop: -327
  },
  text1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 23,
    marginLeft: 19
  },
  icon: {
    color: "rgba(248,231,28,1)",
    fontSize: 28
  },
  selectAFloor1: {
    fontFamily: "verdana-regular",
    color: "rgba(245,237,237,1)",
    fontSize: 18,
    marginLeft: 7,
    marginTop: 5
  },
  iconRow: {
    height: 32,
    flexDirection: "row",
    marginTop: 42,
    marginLeft: 5,
    marginRight: 143
  },
  cupertinoButtonWarning10: {
    height: 44,
    width: 141
  },
  cupertinoButtonWarning11: {
    height: 44,
    width: 141,
    marginLeft: 22
  },
  cupertinoButtonWarning10Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 398,
    marginLeft: 28,
    marginRight: 43
  },
  bestPosts2: {
    color: "rgba(249,241,241,1)",
    fontSize: 10,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: -178,
    alignSelf: "center"
  }
});

export default ConfirmationScreen;
