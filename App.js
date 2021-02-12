import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import ConfirmationScreen from "./src/screens/ConfirmationScreen";
import Dashboard from "./src/screens/Dashboard";
import EntryA from "./src/screens/EntryA";
import EntryB from "./src/screens/EntryB";
import FindAparking from "./src/screens/FindAparking";
import MyBookedParking from "./src/screens/MyBookedParking";
import NavigateEntryA from "./src/screens/NavigateEntryA";
import NavigateEntryB from "./src/screens/NavigateEntryB";
import NavigatetomyParking from "./src/screens/NavigatetomyParking";
import SuccessfullyBooked from "./src/screens/SuccessfullyBooked";
import Topup from "./src/screens/Topup";
import Selectfloor from "./src/screens/Selectfloor";
import Selectparkingslot from "./src/screens/Selectparkingslot";
import TutorialVideo from "./src/screens/TutorialVideo";
import NeedHelp from "./src/screens/NeedHelp";



const DrawerNavigation = createDrawerNavigator({
  ConfirmationScreen: ConfirmationScreen,
  Dashboard: Dashboard,
  EntryA: EntryA,
  EntryB: EntryB,
  FindAparking: FindAparking,
  MyBookedParking: MyBookedParking,
  NavigateEntryA: NavigateEntryA,
  NavigateEntryB: NavigateEntryB,
  NavigatetomyParking: NavigatetomyParking,
  SuccessfullyBooked: SuccessfullyBooked,
  Topup: Topup,
  Selectfloor: Selectfloor,
  Selectparkingslot: Selectparkingslot,
  TutorialVideo: TutorialVideo,
  NeedHelp: NeedHelp


});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    ConfirmationScreen: ConfirmationScreen,
    Dashboard: Dashboard,
    EntryA: EntryA,
    EntryB: EntryB,
    FindAparking: FindAparking,
    MyBookedParking: MyBookedParking,
    NavigateEntryA: NavigateEntryA,
    NavigateEntryB: NavigateEntryB,
    NavigatetomyParking: NavigatetomyParking,
    SuccessfullyBooked: SuccessfullyBooked,
    Topup: Topup,
    Selectfloor: Selectfloor,
    Selectparkingslot: Selectparkingslot,
    TutorialVideo: TutorialVideo,
    NeedHelp: NeedHelp

  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "ibm-plex-sans-regular": require("./src/assets/fonts/ibm-plex-sans-regular.ttf"),
      "verdana-regular": require("./src/assets/fonts/verdana-regular.ttf"),
      "ibm-plex-sans-700": require("./src/assets/fonts/ibm-plex-sans-700.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
