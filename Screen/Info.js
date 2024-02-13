import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { ScaledSheet } from "react-native-size-matters";
import { ref, onValue } from "firebase/database";
import { db } from "../config";

export default function Info() {
  const [passengerCount, setPassengerCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataRef = ref(db, "Count");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data && typeof data === "object" && "count" in data) {
        setPassengerCount(data.count);
      }
      setLoading(false);
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

  return (
    <SafeAreaView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={styles.view1}>
        <Text style={styles.head}> Additional info</Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.view2_1}>
          <View style={styles.Route}>
            <View style={styles.RouteBox}>
              <Text style={styles.RouteNumText}>EX 1-2</Text>
              <Text style={styles.RouteText}>Colombo - Matara</Text>
            </View>
          </View>
          <View style={styles.BookInfo}></View>
        </View>
        <View style={styles.view2_2}>
          <ScrollView
            contentContainerStyle={styles.scroll}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.InfoDetailsBox}>
              <View style={styles.BoxTop}>
                <Text style={styles.BoxTopText}>Departure on:</Text>
                <Text style={styles.BoxTopText}>Travel time : 2hrs</Text>
              </View>
              <View style={styles.BoxMiddle}>
                <Entypo name="location-pin" size={25} color="#3f86fa" />
                <Text style={styles.NameText}>Colombo</Text>
              </View>
              <View style={styles.BoxMiddle1}>
                <Text style={styles.NameText1}>10.00am</Text>
              </View>

              <View style={styles.BoxMiddle}>
                <Entypo name="location-pin" size={25} color="#fa4c3e" />
                <Text style={styles.NameText}>Matara</Text>
              </View>
              <View style={styles.BoxMiddle1}>
                <Text style={styles.NameText1}>12.00pm</Text>
              </View>
              <View style={styles.BoxMiddle2}>
                <Text style={styles.PassengerText}>Total passengers: </Text>
                {loading ? (
                  <ActivityIndicator size="small" color="#787878" />
                ) : (
                  <>
                    <Text style={styles.PassengerCountText}>
                      {passengerCount}
                    </Text>
                  </>
                )}
              </View>
            </View>
            <View style={styles.ChartBox}>
              <View style={styles.ChartBoxHeader}>
                <Text style={styles.ChartBoxHeaderText}>
                  Average passenger count
                </Text>
                <Text style={styles.ChartBoxHeaderText2}>Based on days</Text>
              </View>
              <View style={styles.Chart}>
                <Image
                  source={require("../assets/Chart.png")} // Bus Image path
                  style={styles.image}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
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
    flexDirection: "row",
    justifyContent: "center",
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

  scroll: {
    paddingVertical: 10,
  },

  InfoDetailsBox: {
    overflow: "hidden",
    marginBottom: 30,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    width: "80%",
    height: "180@s",
    borderTopRightRadius: 10,
    borderRadius: 20,
    // justifyContent: "center",
  },

  ChartBox: {
    marginBottom: 20,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    width: "80%",
    height: "200@s",
    borderTopRightRadius: 10,
    borderRadius: 20,
  },

  BoxTopText: {
    marginLeft: 25,
    alignSelf: "flex-start",
    color: "#787878",
    fontFamily: "Poppins_300Light",
    fontSize: 20,
    marginVertical: -5,
  },

  BoxTop: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "flex-start",
    marginBottom: 20,
  },

  BoxMiddle: {
    marginLeft: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    // backgroundColor: "red",
  },
  BoxMiddle1: {
    marginLeft: 55,
    marginTop: -6,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    // backgroundColor: "red",
  },

  NameText: {
    marginLeft: 5,
    color: "#787878",
    fontFamily: "Poppins_500Medium",
    fontSize: 22,
  },

  NameText1: {
    marginLeft: 5,
    color: "#787878",
    fontFamily: "Poppins_300Light",
    fontSize: 18,
  },

  BoxMiddle2: {
    marginTop: 10,
    marginLeft: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
  },

  PassengerText: {
    marginBottom: 5,
    marginLeft: 10,
    color: "#787878",
    fontFamily: "Poppins_500Medium",
    fontSize: 22,
  },

  PassengerCountText: {
    marginLeft: 5,
    color: "#252525",
    fontFamily: "Poppins_500Medium",
    fontSize: 22,
  },

  ChartBoxHeader: {
    marginTop: 10,
    marginLeft: 15,
  },

  ChartBoxHeaderText: {
    marginLeft: 5,
    color: "#252525",
    fontFamily: "Poppins_500Medium",
    fontSize: 22,
  },

  ChartBoxHeaderText2: {
    marginLeft: 5,
    color: "#787878",
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
  },

  image: {
    top: "10@s",
    left: "20@s",
    width: "80%",
    height: "80%",
  },
});
