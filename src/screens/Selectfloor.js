import React, { Component } from "react";
import { StyleSheet, View, StatusBar, ScrollView, Text,TouchableOpacity } from "react-native";
import CupertinoHeaderWithBackground from "../components/CupertinoHeaderWithBackground";
import Icon from "react-native-vector-icons/Entypo";

function Selectfloor(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
    <TouchableOpacity
            style={styles.cupertinoButtonWarning3}
            onPress={()=> props.navigation.navigate("Selectparkingslot")}
          >
                   <Text style={{color:'Black', fontSize: 20, textAlign:"center", top:25}}>Basement</Text>
          </TouchableOpacity>
        
        </ScrollView>
      </View>
      <CupertinoHeaderWithBackground
        style={styles.cupertinoHeaderWithBackground1}
      ></CupertinoHeaderWithBackground>
      <View style={styles.iconRow}>
        <Icon name="chevron-with-circle-down" style={styles.icon}></Icon>
        <Text style={styles.selectAFloor}>Select a Floor</Text>
      </View>
      <Text style={styles.text1}>Find a Parking</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  scrollArea: {
    width: 360,
    height: 327,
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    marginTop: 233
  },
  scrollArea_contentContainerStyle: {
    height: 250,
    width: 250,
    flexDirection: "row"
  },
  cupertinoButtonWarning3: {
    height: 73,
    width: 313,
    borderRadius: 20,
    backgroundColor: "rgba(248,156,28,1)",
    marginLeft: 24,
    marginTop: 120,
    
  },
  cupertinoButtonWarning4: {
    height: 73,
    width: 314,
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 20,
    backgroundColor: "rgba(248,156,28,1)"
  },
  loremIpsum: {
    top: 44,
    left: 13,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  cupertinoButtonWarning4Stack: {
    width: 314,
    height: 73,
    marginLeft: -314,
    marginTop: 132
  },
  cupertinoButtonWarning5: {
    height: 73,
    width: 309,
    borderRadius: 20,
    backgroundColor: "rgba(248,156,28,1)",
    marginLeft: -314,
    marginTop: 232
  },
  cupertinoHeaderWithBackground1: {
    height: 45,
    width: 360,
    borderWidth: 1,
    borderColor: "rgba(10,13,91,1)",
    borderStyle: "solid",
    backgroundColor: "rgba(248,156,28,1)",
    marginTop: -517
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 29
  },
  selectAFloor: {
    fontFamily: "verdana-regular",
    color: "rgba(245,237,237,1)",
    fontSize: 18,
    marginLeft: 6,
    marginTop: 5
  },
  iconRow: {
    height: 33,
    flexDirection: "row",
    marginTop: 94,
    marginLeft: 5,
    marginRight: 212
  },
  text1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: -104,
    marginLeft: 19
  }
});

export default Selectfloor;
