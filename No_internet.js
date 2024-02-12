import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { ScaledSheet } from "react-native-size-matters";

export default function No_internet() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.view}>
      <LottieView
        source={require("./animation.json")} // Change 'animation.json' to your Lottie animation file
        autoPlay
        loop
        style={{ height: 400 }}
      />

      <Text style={styles.text}>Please turn on your internet</Text>
    </View>
  );
}

const styles = ScaledSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#E8EEF1",
    alignContent: "center",
  },

  text: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: "20@s",
    fontFamily: "Poppins_400Regular",
    color: "#515151",
  },
});
