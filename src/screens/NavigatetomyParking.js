import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import CupertinoHeaderWithBackground from "../components/CupertinoHeaderWithBackground";
import EntypoIcon from "react-native-vector-icons/Entypo";
import CupertinoButtonWarning16 from "../components/CupertinoButtonWarning16";
import CupertinoButtonWarning17 from "../components/CupertinoButtonWarning17";
import CupertinoRadio from "../components/CupertinoRadio";
import CupertinoRadio3 from "../components/CupertinoRadio3";
import CupertinoRadio1 from "../components/CupertinoRadio1";
import CupertinoRadio4 from "../components/CupertinoRadio4";
import CupertinoRadio2 from "../components/CupertinoRadio2";
import CupertinoRadio5 from "../components/CupertinoRadio5";

function NavigatetomyParking(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <CupertinoHeaderWithBackground
        style={styles.cupertinoHeaderWithBackground1}
      ></CupertinoHeaderWithBackground>
      <Text style={styles.text1}>Navigate to my Parking</Text>
      <View style={styles.icon1Row}>
        <EntypoIcon
          name="chevron-with-circle-down"
          style={styles.icon1}
        ></EntypoIcon>
        <Text style={styles.selectEntry}>Select Entry</Text>
      </View>
      <View style={styles.icon2Row}>
        <EntypoIcon
          name="chevron-with-circle-down"
          style={styles.icon2}
        ></EntypoIcon>
        <Text style={styles.selectParking}>Select Parking</Text>
      </View>
      <CupertinoButtonWarning16
        style={styles.cupertinoButtonWarning16}
      ></CupertinoButtonWarning16>
      <CupertinoButtonWarning17
        style={styles.cupertinoButtonWarning17}
      ></CupertinoButtonWarning17>
      <View style={styles.cupertinoRadioRow}>
        <CupertinoRadio style={styles.cupertinoRadio}></CupertinoRadio>
        <Text style={styles.b1}>B1</Text>
        <CupertinoRadio3 style={styles.cupertinoRadio3}></CupertinoRadio3>
      </View>
      <View style={styles.cupertinoRadio1Row}>
        <CupertinoRadio1 style={styles.cupertinoRadio1}></CupertinoRadio1>
        <CupertinoRadio4 style={styles.cupertinoRadio4}></CupertinoRadio4>
      </View>
      <View style={styles.cupertinoRadio2Row}>
        <CupertinoRadio2 style={styles.cupertinoRadio2}></CupertinoRadio2>
        <CupertinoRadio5 style={styles.cupertinoRadio5}></CupertinoRadio5>
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
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 29
  },
  selectEntry: {
    fontFamily: "verdana-regular",
    color: "rgba(245,237,237,1)",
    fontSize: 18,
    marginLeft: 6,
    marginTop: 5
  },
  icon1Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 42,
    marginLeft: 5,
    marginRight: 225
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 29
  },
  selectParking: {
    fontFamily: "verdana-regular",
    color: "rgba(245,237,237,1)",
    fontSize: 18,
    marginLeft: 6,
    marginTop: 4
  },
  icon2Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 227,
    marginLeft: 5,
    marginRight: 206
  },
  cupertinoButtonWarning16: {
    height: 76,
    width: 309,
    marginTop: -235,
    marginLeft: 34
  },
  cupertinoButtonWarning17: {
    height: 79,
    width: 309,
    marginTop: 27,
    marginLeft: 34
  },
  cupertinoRadio: {
    height: 40,
    width: 40
  },
  b1: {
    color: "rgba(249,241,241,1)",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 12
  },
  cupertinoRadio3: {
    height: 40,
    width: 40,
    marginLeft: 93
  },
  cupertinoRadioRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 59,
    marginLeft: 38,
    marginRight: 147
  },
  cupertinoRadio1: {
    height: 40,
    width: 40
  },
  cupertinoRadio4: {
    height: 40,
    width: 40,
    marginLeft: 110
  },
  cupertinoRadio1Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 38,
    marginRight: 147
  },
  cupertinoRadio2: {
    height: 40,
    width: 40
  },
  cupertinoRadio5: {
    height: 40,
    width: 40,
    marginLeft: 110
  },
  cupertinoRadio2Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 38,
    marginRight: 147
  }
});

export default NavigatetomyParking;
