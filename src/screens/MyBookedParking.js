import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, TouchableOpacity } from "react-native";
import CupertinoHeaderWithBackground from "../components/CupertinoHeaderWithBackground";
import CupertinoButtonWarning12 from "../components/CupertinoButtonWarning12";
import CupertinoButtonWarning14 from "../components/CupertinoButtonWarning14";
import CupertinoButtonWarning15 from "../components/CupertinoButtonWarning15";

function MyBookedParking(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <CupertinoHeaderWithBackground
        style={styles.cupertinoHeaderWithBackground1}
      ></CupertinoHeaderWithBackground>
      <Text style={styles.text}>My Booked Parking</Text>
      <TouchableOpacity
        style={styles.cupertinoButtonWarning12}
        onPress={()=>props.navigation.navigate("SuccessfullyBooked")}
      >
                  <Text style={{color:'black', fontSize: 20, textAlign:"center", top:30}}>My QR code</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cupertinoButtonWarning14}
        onPress={()=>props.navigation.navigate("EntryA")}

      >
      <Text style={{color:'black', fontSize: 20, textAlign:"center", top:28}}>Navigate to my Parking</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cupertinoButtonWarning15}
        onPress={()=>props.navigation.navigate("EntryB")}
      >
        <Text style={{color:'black', fontSize: 20, textAlign:"center", top:28}}>Check-out</Text>

      </TouchableOpacity>
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
  text: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 23,
    marginLeft: 19
  },
  cupertinoButtonWarning12: {
    height: 76,
    width: 309,
    borderRadius: 80,
    backgroundColor: "rgba(248,156,28,1)",
    marginTop: 50,
    marginLeft: 22
  },
  cupertinoButtonWarning14: {
    height: 76,
    width: 309,
    borderRadius: 80,
    backgroundColor: "rgba(248,156,28,1)",
    marginTop: 28,
    marginLeft: 19
  },
  cupertinoButtonWarning15: {
    height: 76,
    width: 309,
    borderRadius: 80,
    backgroundColor: "rgba(248,156,28,1)",
    marginTop: 33,
    marginLeft: 19
  }
});

export default MyBookedParking;
