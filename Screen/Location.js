import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  Linking,
  Alert,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  FadeInUp,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from "react-native-reanimated";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { ref, onValue } from "firebase/database";
import { db } from "../config";

export default function Location() {
  const [latitudeValue, setLatitudeValue] = useState(null);
  const [longitudeValue, setLongitudeValue] = useState(null);
  const [SpeedValue, setSpeedValue] = useState(null);

  useEffect(() => {
    const locationRef = ref(db, "Location");

    onValue(locationRef, (snapshot) => {
      const data = snapshot.val();
      if (
        (data &&
          typeof data === "object" &&
          "Latitude" in data &&
          "Longitude" in data) ||
        "Speed" in data
      ) {
        setLatitudeValue(data.Latitude);
        setLongitudeValue(data.Longitude);
        setSpeedValue(data.Speed);
      }
    });
  }, []);

  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleOpenGoogleMaps = () => {
    if (latitudeValue !== null && longitudeValue !== null) {
      const label = "Bus Route";
      const url = `https://www.google.com/maps/search/?api=1&query=${latitudeValue},${longitudeValue}&query_place_id=${label}`;

      Linking.openURL(url);
    } else {
      Alert.alert("Error", "Latitude or Longitude value is missing.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#E8EEF1" />
      <View style={styles.view1}>
        <Animated.Text
          entering={FadeInUp.delay(100).duration(100).springify()}
          style={styles.head}
        >
          {" "}
          Location
        </Animated.Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.view2_1}>
          <View style={styles.Route}>
            <Animated.View
              entering={FadeInLeft.delay(100).duration(100).springify()}
              style={styles.RouteBox}
            >
              <Text style={styles.RouteNumText}>EX 1-2</Text>
              <Text style={styles.RouteText}>Colombo - Matara</Text>
            </Animated.View>
          </View>
          <View style={styles.BookInfo}>
            <Animated.View
              entering={FadeInRight.delay(100).duration(100).springify()}
              style={styles.ReservedView}
            >
              <View style={styles.ReservedBox}>
                <Ionicons name="speedometer" size={24} color="#2889eb" />
              </View>
              <Text style={styles.BookInfoText}>
                {SpeedValue ? SpeedValue.toFixed(1) : "0.00"} km/h
              </Text>
            </Animated.View>
          </View>
        </View>

        <Animated.View
          entering={FadeInDown.delay(100).duration(100).springify()}
          style={styles.view2_2}
        >
          <TouchableHighlight
            style={styles.button}
            underlayColor={"#2b5cad"}
            onPress={handleOpenGoogleMaps}
          >
            <Text style={styles.ButtonText}>Track Location</Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8EEF1",
    flex: 1,
  },
  view1: {
    flex: 1,
    justifyContent: "center",
  },
  view2: {
    flex: 6,
  },
  head: {
    marginTop: 50,
    fontSize: 29,
    color: "#252525",
    alignSelf: "flex-start",
    fontFamily: "Poppins_500Medium",
  },
  view2_1: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
  view2_2: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  Route: {
    justifyContent: "center",
    flex: 1.5,
  },
  RouteBox: {
    backgroundColor: "#3F86FA",
    width: "100%",
    height: 70,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
  },
  BookInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  BookInfoText: {
    marginLeft: 10,
    marginTop: 4,
    color: "#252525",
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
  },
  ReservedView: {
    marginVertical: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  ReservedBox: {
    marginLeft: 10,
  },
  RouteNumText: {
    marginLeft: 20,
    alignSelf: "flex-start",
    color: "#FFFFFF",
    fontFamily: "Poppins_500Medium",
    fontSize: 30,
    marginVertical: -5,
  },
  RouteText: {
    marginLeft: 20,
    alignSelf: "flex-start",
    color: "#FFFFFF",
    fontFamily: "Poppins_300Light",
    fontSize: 16,
    marginVertical: -5,
  },
  button: {
    backgroundColor: "#569eff",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: 50,
    borderRadius: 10,
  },
  ButtonText: {
    alignSelf: "center",
    color: "#FFFFFF",
    fontFamily: "Poppins_400Regular",
    fontSize: 22,
    marginVertical: -5,
  },
});
