import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import CupertinoHeaderWithBackground from "../components/CupertinoHeaderWithBackground";

function NeedHelp(props) {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithBackground
        style={styles.cupertinoHeaderWithBackground1}
      ></CupertinoHeaderWithBackground>
      <Text style={styles.text}>Need Help?</Text>
     
      <Text style={{color:'yellow', fontSize: 20, textAlign:"center", top:40}}>Frequently Asked Questions </Text>
      <Text style={{color:'white', fontSize: 16, textAlign:"left", top:60, marginLeft: 10}}>1. Can we make payment via cash?</Text>
      <Text style={{color:'orange', fontSize: 14, textAlign:"left", top:80, marginLeft: 10}}>Yes. Payment can be done either by credit or cash.If you are using cash, please tap on "Check-out" button on "My Booked Parking Section". There will be a QR given for you to scan and pay using cash </Text>
      <Text style={{color:'white', fontSize: 16, textAlign:"left", top:120, marginLeft: 10}}>2. What happened if I arrived exceeding 15minutes?</Text>
      <Text style={{color:'orange', fontSize: 14, textAlign:"left", top:140, marginLeft: 10}}>Your booking will be automatically cancelled, and the QR code given will be expired. Please place a new booking.</Text>
      <Text style={{color:'white', fontSize:16, textAlign:"left", top:160, marginLeft: 10}}>3. For navigation option, is the feature use GPS and Map to navigate?</Text>
      <Text style={{color:'orange', fontSize: 14, textAlign:"left", top:180, marginLeft: 10}}>No. We are not using Map for navigation option. We will be showing an animation for the navigation. As the GPS signal are hardly to be found in most of the shopping malls</Text>
      <Text style={{color:'white', fontSize:16, textAlign:"left", top:200, marginLeft: 10}}>4. I accidently place a booking for a parking slot, do I still be able to cancel my booking?</Text>
      <Text style={{color:'orange', fontSize: 14, textAlign:"left", top:220, marginLeft: 10}}>No. There are no cancellation for the booking be placed. But the booking will be automatically cancelled after 15minutes</Text>


      
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
    marginTop: 31,
    marginLeft: 10
  }
});

export default NeedHelp;
