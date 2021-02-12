import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import CupertinoHeaderWithBackground from "../components/CupertinoHeaderWithBackground";
import CupertinoButtonInfo3 from "../components/CupertinoButtonInfo3";
import MapView from "react-native-maps";

function EntryB(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.textColumn}>
        <Text style={styles.text}>Entry B</Text>
        <CupertinoHeaderWithBackground
          style={styles.cupertinoHeaderWithBackground1}
        ></CupertinoHeaderWithBackground>
        <CupertinoButtonInfo3
          style={styles.cupertinoButtonInfo1}
        ></CupertinoButtonInfo3>
      </View>
      <View style={styles.textColumnFiller}>
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
  text: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 79,
    marginLeft: 16
  },
  cupertinoHeaderWithBackground1: {
    height: 45,
    width: 360,
    borderWidth: 1,
    borderColor: "rgba(10,13,91,1)",
    borderStyle: "solid",
    marginTop: -108
  },
  cupertinoButtonInfo1: {
    height: 44,
    width: 181,
    marginTop: 589,
    marginLeft: 97
  },
  textColumn: {
    width: 360,
    marginTop: 43
  },
  mapView: {
    height: 462,
    width: 383
  },
  textColumnFiller: {
    flex: 1,
    justifyContent: "center"
  }
});

export default EntryB;
