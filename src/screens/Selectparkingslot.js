import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, TouchableOpacity } from "react-native";
import CupertinoHeaderWithBackground from "../components/CupertinoHeaderWithBackground";
import Divider from "../components/Divider";
import CupertinoButtonWarning6 from "../components/CupertinoButtonWarning6";
import CupertinoButtonWarning8 from "../components/CupertinoButtonWarning8";
import CupertinoButtonGrey1 from "../components/CupertinoButtonGrey1";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";
import CupertinoButtonWarning7 from "../components/CupertinoButtonWarning7";
import CupertinoButtonWarning9 from "../components/CupertinoButtonWarning9";
import Icon from "react-native-vector-icons/Entypo";

function Selectparkingslot(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <CupertinoHeaderWithBackground
        style={styles.cupertinoHeaderWithBackground1}
      ></CupertinoHeaderWithBackground>
      <Text style={styles.text1}>Find a Parking</Text>
      <Divider style={styles.divider1}></Divider>
      <Divider style={styles.divider2}></Divider>
      <Divider style={styles.divider3}></Divider>
      <Divider style={styles.divider4}></Divider>
      <View style={styles.divider5Stack}>
        <Divider style={styles.divider5}></Divider>
        <CupertinoButtonWarning6
          style={styles.cupertinoButtonWarning6}
        ></CupertinoButtonWarning6>
        <CupertinoButtonWarning8
          style={styles.cupertinoButtonWarning8}
        ></CupertinoButtonWarning8>
      </View>
      <View style={styles.cupertinoButtonGrey1Row}>
        <CupertinoButtonGrey1
          style={styles.cupertinoButtonGrey1}
        ></CupertinoButtonGrey1>
        <CupertinoButtonDanger
          style={styles.cupertinoButtonDanger}
        ></CupertinoButtonDanger>
      </View>
      <View style={styles.cupertinoButtonWarning7Row}>
        <TouchableOpacity
          style={{ paddingLeft: 16, paddingRight: 16,justifyContent: "center",alignItems: "center",
          flexDirection: "row",  borderRadius: 5, backgroundColor: "rgba(126,211,33,1)", width: 100,
    height: 45}}
          onPress={()=> props.navigation.navigate("ConfirmationScreen"
          )}
    
        >
<Text style={{color:'white'}}>B3</Text>
        </TouchableOpacity>
        <CupertinoButtonWarning9
          style={styles.cupertinoButtonWarning9}
        ></CupertinoButtonWarning9>
      </View>
      <View style={styles.rectRow}>
        <View style={styles.rect}></View>
        <Text style={styles.available}>Available</Text>
      </View>
      <View style={styles.rect1Row}>
        <View style={styles.rect1}></View>
        <Text style={styles.notAvailable}>Not Available</Text>
      </View>
      <View style={styles.icon1Row}>
        <Icon name="chevron-with-circle-down" style={styles.icon1}></Icon>
        <Text style={styles.selectAFloor1}>Select a Parking Slot</Text>
      </View>
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
  text1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 23,
    marginLeft: 19
  },
  divider1: {
    height: 1,
    marginTop: 94,
    marginLeft: 1,
    marginRight: 73
  },
  divider2: {
    height: 1,
    marginTop: 72,
    marginRight: 74
  },
  divider3: {
    height: 1,
    marginTop: 81,
    marginRight: 74
  },
  divider4: {
    height: 1,
    marginTop: 79,
    marginRight: 74
  },
  divider5: {
    top: 29,
    left: 4,
    height: 2,
    position: "absolute",
    right: 0,
    transform: [
      {
        rotate: "90.00deg"
      }
    ]
  },
  cupertinoButtonWarning6: {
    height: 44,
    width: 100,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(208,2,27,1)"
  },
  cupertinoButtonWarning8: {
    height: 44,
    width: 100,
    position: "absolute",
    left: 141,
    top: 2
  },
  divider5Stack: {
    height: 46,
    marginTop: -148,
    marginLeft: 13,
    marginRight: 107
  },
  cupertinoButtonGrey1: {
    height: 44,
    width: 100,
    backgroundColor: "rgba(208,2,27,1)"
  },
  cupertinoButtonDanger: {
    height: 44,
    width: 100,
    marginLeft: 41,
    marginTop: 1
  },
  cupertinoButtonGrey1Row: {
    height: 45,
    flexDirection: "row",
    marginTop: -117,
    marginLeft: 13,
    marginRight: 121
  },
  cupertinoButtonWarning7: {
    height: 44,
    width: 100
  },
  cupertinoButtonWarning9: {
    height: 44,
    width: 100,
    marginLeft: 42
  },
  cupertinoButtonWarning7Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 109,
    marginLeft: 13,
    marginRight: 120
  },
  rect: {
    width: 87,
    height: 41,
    backgroundColor: "rgba(131,210,38,1)",
    borderRadius: 20
  },
  available: {
    fontFamily: "verdana-regular",
    color: "rgba(245,237,237,1)",
    fontSize: 18,
    marginLeft: 12,
    marginTop: 9
  },
  rectRow: {
    height: 41,
    flexDirection: "row",
    marginTop: 95,
    marginLeft: 19,
    marginRight: 176
  },
  rect1: {
    width: 87,
    height: 41,
    backgroundColor: "rgba(140,19,19,1)",
    borderRadius: 20
  },
  notAvailable: {
    fontFamily: "verdana-regular",
    color: "rgba(208,2,27,1)",
    fontSize: 18,
    marginLeft: 12,
    marginTop: 6
  },
  rect1Row: {
    height: 41,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 19,
    marginRight: 138
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 29
  },
  selectAFloor1: {
    fontFamily: "verdana-regular",
    color: "rgba(245,237,237,1)",
    fontSize: 18,
    marginLeft: 6,
    marginTop: 5
  },
  icon1Row: {
    height: 33,
    flexDirection: "row",
    marginTop: -452,
    marginLeft: 5,
    marginRight: 148
  }
});

export default Selectparkingslot;
