import React, { Component } from "react";
import { Container, StyleSheet, View, Image, Text,TouchableOpacity } from "react-native";

function MaterialCard3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardItem1Style}>
        <View style={styles.headerStyle}>
          <Image 
            source={require("../assets/images/Logo1.png")}
            style={styles.leftImage}
          ></Image>
          <View style={styles.headerContent}>
            <Text style={styles.textStyle}>
              Tutorial on how to Book A parking
            </Text>
            <Text style={styles.noteTextStyle}>By GoPark Application</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
      onPress={()=> props.navigation.navigate("Dashboard")}
      ><Image
        source={require("../assets/images/poster.png")}
        style={styles.cardItemImagePlace}
      ></Image>
      </TouchableOpacity>

      <View style={styles.body}>
        <Text style={styles.bodyText}>
          This is the basic video on how to book a parking
        </Text>
      </View>
      <View style={styles.actionBody}></View>
      <Text style={styles.loremIpsum}></Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardItem1Style: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    height: 72
  },
  headerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  leftImage: {
    height: 40,
    width: 40,
    backgroundColor: "#CCC",
    borderRadius: 20
  },
  headerContent: {
    paddingLeft: 16,
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 16,
    color: "#000",
    lineHeight: 20
  },
  noteTextStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    flex: 1,
    minHeight: 400,
    left: -45
  },
  body: {
    padding: 16
  },
  bodyText: {
    lineHeight: 800,
    fontSize: 14,
    color: "#424242"
  },
  actionBody: {
    padding: 10,
    flexDirection: "row"
  },
  loremIpsum: {
    top: 30,
    left: 103,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  }
});

export default MaterialCard3;
