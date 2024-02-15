import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { ScaledSheet } from "react-native-size-matters"; // Responsive scaling Library
import Animated, {
  FadeInUp,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from "react-native-reanimated";

function Bus({ navigation }) {
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
    <SafeAreaView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
    >
      <StatusBar barStyle="dark-content" backgroundColor="#E8EEF1" />
      <View style={styles.view1}>
        <Animated.Text
          entering={FadeInUp.delay(100).duration(100).springify()}
          style={styles.head}
        >
          {" "}
          Select your route
        </Animated.Text>
      </View>
      <View style={styles.view2}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")} // Navigate to the "HomeScreen" screen
            style={styles.box1}
          >
            <View style={styles.box1Top}>
              <Text style={styles.RouteHeadText}>EX 1-2</Text>
              <Text style={styles.RouteNameText}>Kaduwela - Matara</Text>
            </View>

            <View style={styles.box1Bottom}>
              <Image
                source={require("./assets/Bus.png")} // Bus Image path
                style={styles.image}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.box1}>
            <View style={styles.box1Top}>
              <Text style={styles.RouteHeadText}>EX 1-2</Text>
              <Text style={styles.RouteNameText}>Kaduwela - Matara</Text>
            </View>

            <View style={styles.box1Bottom}>
              <Image
                source={require("./assets/Bus.png")}
                style={styles.image}
              />
            </View>
          </View>

          <View style={styles.box1}>
            <View style={styles.box1Top}>
              <Text style={styles.RouteHeadText}>EX 1-2</Text>
              <Text style={styles.RouteNameText}>Kaduwela - Matara</Text>
            </View>

            <View style={styles.box1Bottom}>
              <Image
                source={require("./assets/Bus.png")}
                style={styles.image}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Bus;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: "#E8EEF1",
    flex: 1,
  },
  view1: {
    flex: 1,
    justifyContent: "center",
    elevation: 6,
  },
  view2: {
    flexDirection: "column",
    flex: 7,
  },
  scroll: {
    paddingVertical: 20,
  },
  head: {
    marginTop: "26@s",
    fontSize: "25@s",
    color: "#252525",
    alignSelf: "center",
    fontFamily: "Poppins_500Medium",
  },
  box1: {
    overflow: "hidden",
    marginTop: "15@s",
    alignSelf: "center",
    width: "80%",
    height: "300@s",
    backgroundColor: "#ffff",
    borderRadius: "20@s",
    marginBottom: "20@s",
    elevation: 10,
  },

  box1Top: {
    justifyContent: "flex-end",
    width: "100%",
    height: "90@s",
    backgroundColor: "#3F86FA",
  },

  RouteHeadText: {
    marginBottom: "-9@s",
    fontSize: "34@s",
    color: "#ffff",
    alignSelf: "center",
    fontFamily: "Poppins_500Medium",
  },

  RouteNameText: {
    marginBottom: "9@s",
    fontSize: "20@s",
    color: "#ffff",
    alignSelf: "center",
    fontFamily: "Poppins_300Light",
  },

  box1Bottom: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    height: "100%",
    color: "#ffff",
  },

  image: {
    top: "10@s",
    left: "20@s",
    width: "140%",
    height: "110%",
  },
});
