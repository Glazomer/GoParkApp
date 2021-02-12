import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text,Image, TouchableOpacity } from "react-native";
import CupertinoHeaderWithBackground from "../components/CupertinoHeaderWithBackground";
import CupertinoButtonWarning from "../components/CupertinoButtonWarning";
import CupertinoButtonWarning1 from "../components/CupertinoButtonWarning1";
import CupertinoButtonLight2 from "../components/CupertinoButtonLight2";
import CupertinoButtonWarning2 from "../components/CupertinoButtonWarning2";
import CupertinoSegmentWithTwoTabs from "../components/CupertinoSegmentWithTwoTabs";

function Dashboard(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <CupertinoHeaderWithBackground
        style={styles.cupertinoHeaderWithBackground}
      ></CupertinoHeaderWithBackground>



      <View style={styles.cupertinoButtonWarning1Stack}>
        <TouchableOpacity style={styles.cupertinoButtonWarning1}
          onPress={()=>props.navigation.navigate("FindAparking")}

        >
          <Text style={{color:'black', fontSize: 20, textAlign:"center", top:37}}>Find A Parking</Text>
        </TouchableOpacity>
        <Image
          source={require("../assets/images/loupe.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>


      </View>



      <View style={styles.cupertinoButtonWarning2Stack}>
        <TouchableOpacity
          style={styles.cupertinoButtonWarning2}
          onPress={()=>props.navigation.navigate("MyBookedParking")}
        >
          <Text style={{color:'black', fontSize: 20, textAlign:"center", top:40}}>My Booked Parking</Text>
        </TouchableOpacity>
        <Image
          source={require("../assets/images/profile.png")}
          resizeMode="contain"
          style={styles.image5}
        ></Image>
      </View>

      <View style={styles.cupertinoButtonLight2Stack}>
        <TouchableOpacity
          style={styles.cupertinoButtonLight2}
          onPress={()=> props.navigation.navigate("TutorialVideo")}
        >
          <Text style={{color:'black', fontSize: 20, textAlign:"center", top:40}}>Tutorial Video</Text>
        </TouchableOpacity>
        <Image
          source={require("../assets/images/video.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
      </View>


      <View style={styles.cupertinoButtonWarning2Stack}>
        <TouchableOpacity
          style={styles.cupertinoButtonWarning2}
          onPress={()=> props.navigation.navigate("NeedHelp")}
        >
          <Text style={{color:'black', fontSize: 20, textAlign:"center", top:40}}>Need Help?</Text>
        </TouchableOpacity>
        <Image
          source={require("../assets/images/help.png")}
          resizeMode="contain"
          style={styles.image4}
        ></Image>
      </View>

      <CupertinoSegmentWithTwoTabs
        style={styles.cupertinoSegmentWithTwoTabs1}
      ></CupertinoSegmentWithTwoTabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  cupertinoHeaderWithBackground: {
    height: 45,
    width: 360,
    borderWidth: 1,
    borderColor: '"rgba(10,13,91,1)"',
    borderStyle: "solid",
    marginTop: 43
  },
  cupertinoButtonWarning2: {
    height: 99,
    width: 325,
    position: "absolute",
    left: 0,
    top: 180,
    borderRadius: 13,
    backgroundColor: "rgba(248,156,28,1)"
  },
  image5: {
    top: 195,
    left: 18,
    width: 50,
    height: 79,
    position: "absolute"
  },
  cupertinoButtonWarning2Stack: {
    width: 325,
    height: 99,
    top: 0,
    marginLeft: 19
  },
  cupertinoButtonWarning1: {
    height: 99,
    width: 325,
    position: "relative",
    left: 0,
    top: 10,
    borderRadius: 13,
    backgroundColor: "rgba(248,156,28,1)"
  },
  image: {
    top: 20,
    left: 24,
    width: 50,
    height: 74,
    position: "absolute"
  },
  cupertinoButtonWarning1Stack: {
    width: 325,
    height: 99,
    position: "absolute",
    top: 120,
    left: 17
  },
  cupertinoButtonLight2: {
    height: 99,
    width: 325,
    position: "absolute",
    backgroundColor: "rgba(248,156,28,1)",
    top: 200,
    borderRadius: 13,
    left: -5
  },
  image3: {
    left: 14,
    width: 50,
    height: 106,
    position: "absolute",
    top: 200
  },
  cupertinoButtonLight2Stack: {
    width: 325,
    height: 99,
    top: 240,
    marginLeft: 25
  },
  image4: {
    top: 180,
    left: 18,
    width: 52,
    height: 109,
    position: "absolute"
  },
  cupertinoSegmentWithTwoTabs1: {
    height: 56,
    width: 375,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: -440,
    marginLeft: -7
  }
});

export default Dashboard;
