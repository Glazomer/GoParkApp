import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, TouchableOpacity } from "react-native";
import CupertinoHeaderWithBackground from "../components/CupertinoHeaderWithBackground";
import CupertinoButtonDanger1 from "../components/CupertinoButtonDanger1";

function SuccessfullyBooked(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <Text style={styles.text}>Successfully Booked!</Text>
      <CupertinoHeaderWithBackground
        style={styles.cupertinoHeaderWithBackground1}
      ></CupertinoHeaderWithBackground>
 <Text style={{color:'orange', fontSize: 16, textAlign:"center", top:80}}>Dear User, your parking is Successfully Booked!</Text>
      <Text style={styles.bestPosts2}>
        Please scan this QR Code to the scanner for the {"\n"}Check-in Process.
        The QR Code will be available{"\n"}in My Booked Parking section.
      </Text>
      <Text style={styles.bestPosts3}>Please arrive before:</Text>
      <TouchableOpacity
        style={{ paddingLeft: 16, paddingRight: 16,justifyContent: "center",alignItems: "center",
        flexDirection: "row",  borderRadius: 5, backgroundColor: "rgba(74,144,226,1)", width: 330,
        height: 45, top:70, left:20}}
        onPress={()=>props.navigation.navigate("Dashboard")}
      >
         <Text style={{color:'white', fontSize: 17, textAlign:"center", top:0}}> Back to dashboard</Text>
      </TouchableOpacity>
      <Text style={styles.bestPosts4}>
        Location: Ipoh Parade{"\n"}
        {"\n"}Floor: Basement{"\n"}
        {"\n"}Parking Slot: B3
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  text: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 112,
    marginLeft: 60
  },
  cupertinoHeaderWithBackground1: {
    height: 45,
    width: 360,
    borderWidth: 1,
    borderColor: "rgba(10,13,91,1)",
    borderStyle: "solid",
    marginTop: -98
  },
  bestPosts1: {
    color: "rgba(249,241,241,1)",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 75,
    marginLeft: 25
  },
  bestPosts2: {
    color: "rgba(249,241,241,1)",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 300,
    marginLeft: 25
  },
  bestPosts3: {
    color: "rgba(249,241,241,1)",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 153,
    marginLeft: 11
  },
  cupertinoButtonDanger1: {
    height: 44,
    width: 192,
    marginTop: 33,
    marginLeft: 84
  },
  bestPosts4: {
    color: 'orange',
    fontSize: 14,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1,
    marginTop: -180,
    marginLeft: 14
  }
});

export default SuccessfullyBooked;
