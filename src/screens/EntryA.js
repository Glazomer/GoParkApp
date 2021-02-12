import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import CupertinoHeaderWithBackground from "../components/CupertinoHeaderWithBackground";
import CupertinoButtonInfo3 from "../components/CupertinoButtonInfo3";
import MapView from "react-native-maps";

function EntryA(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.cupertinoHeaderWithBackground1Column}>
        <CupertinoHeaderWithBackground
          style={styles.cupertinoHeaderWithBackground1}
        ></CupertinoHeaderWithBackground>
        <Text style={styles.text}>Navigate to my Parking</Text>
        <CupertinoButtonInfo3
          style={styles.cupertinoButtonInfo3}
        ></CupertinoButtonInfo3>
      </View>
      <View style={styles.cupertinoHeaderWithBackground1ColumnFiller}>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          customMapStyle={[]}
          style={styles.mapView}
        ></MapView>
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
    borderStyle: "solid"
  },
  text: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 34,
    marginLeft: 16
  },
  cupertinoButtonInfo3: {
    height: 44,
    width: 181,
    marginTop: 524,
    marginLeft: 97
  },
  cupertinoHeaderWithBackground1Column: {
    width: 360,
    marginTop: 43
  },
  mapView: {
    height: 462,
    width: 375
  },
  cupertinoHeaderWithBackground1ColumnFiller: {
    flex: 1,
    justifyContent: "center"
  }
});

export default EntryA;
