import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

import Navigation from "./Navigation";
import * as SplashScreen from "expo-splash-screen";
import No_internet from "./No_internet";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    // Subscribe to network state changes
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    // Hide splash screen after 2 seconds
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);

    // Unsubscribe when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return isConnected ? <Navigation /> : <No_internet />;
}
