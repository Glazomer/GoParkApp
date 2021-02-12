import React, { Component, useState, useEffect} from "react";
import { StyleSheet, View, StatusBar, Text, Image, TextInput, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import CupertinoHeaderWithBackground from "../components/CupertinoHeaderWithBackground";
import Icon from "react-native-vector-icons/Entypo";
import cupertinoSearchBarWithMic from "../components/CupertinoSearchBarWithMic";


const FindAparking=(props)=> {
  const [mall,setMall] =useState("null");
  const [level, setlevel] = useState("");

  const listmall ={
    "Ipoh Parade": {
      "level":"Basement"

    },

    "Aeon Mall Klebang": {
      "level": "Not Available"
    }
  }

  useEffect(()=>{
  if(mall.search=="Ipoh Parade"){
    getIpohParade()
  }
  else{
    defaultstate()
  }
});

const defaultstate=()=> {
  setMall("No mall Available");

}

const getIpohParade =()=>{
  setMall(listmall['Ipoh Parade']);
}

  
  

  return (
    <View style={styles.container}>
      <StatusBar animated />
      <CupertinoHeaderWithBackground
        style={styles.cupertinoHeaderWithBackground1}
      ></CupertinoHeaderWithBackground>
      <Text style={styles.loremIpsum}></Text>
      <Text style={styles.text}>Find a Parking</Text>
      <Image
        source={require("../assets/images/kisspng-clip-art-car-park-parking-transport-transportation-amp-parking-services-5d1355eb07fc73.7568358915615482670327-removebg-preview.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.iconRow}>
        <Icon name="location" style={styles.icon}></Icon>
        <Text style={styles.bestPosts1}>Choose a Shopping Mall</Text>
      </View>
      <TextInput
        placeholder="Search for Mall"
        placeholderTextColor="rgba(249,241,241,1)"
        style={{backgroundColor:'#2f363c', height:30, fontSize:18, padding:20, borderBottomWidth: 0.5, borderRadius: 20}}
        onChangeText={(text)=>console.log(text)}
     ></TextInput>
      
      <TouchableOpacity
        style={{ paddingLeft: 16, paddingRight: 16,justifyContent: "center",alignItems: "center",
        flexDirection: "row",  borderRadius: 5, backgroundColor: "rgba(74,144,226,1)", width: 330,
  height: 45, top:70, left:20}}
        onPress={()=>props.navigation.navigate("Selectfloor")}
      >
        <Text style={{color:'white', fontSize: 17, textAlign:"center", top:0}}>Select Parking</Text>
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
  loremIpsum: {
    fontFamily: "verdana-regular",
    color: "rgba(235,227,227,1)",
    marginTop: 61,
    marginLeft: 88
  },
  text: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: -38,
    marginLeft: 19
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 18,
    marginLeft: 80
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 19
  },
  bestPosts1: {
    color: "rgba(249,241,241,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1,
    marginLeft: 13,
    marginTop: 2
  },
  iconRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 47,
    marginLeft: 21,
    marginRight: 144
  },
  cupertinoSearchBarWithMic: {
    height: 42,
    width: 336,
    marginTop: 18,
    marginLeft: 12
  },
  cupertinoButtonInfo1: {
    height: 44,
    width: 320,
    marginTop: 57,
    marginLeft: 21
  }
});

export default FindAparking;
