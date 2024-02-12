import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screen/Home";
import Location from "./Screen/Location";
import Info from "./Screen/Info";
import Bus from "./Bus";
import { FontAwesome5, FontAwesome6, AntDesign } from "@expo/vector-icons";

// Navigation Imported
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Bottom Navigation Screens
function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#2889eb",
        tabBarInactiveTintColor: "#a8a8aa",
        tabBarStyle: { height: 70 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome6 name="bus-simple" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5 name="map-marked-alt" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="infocirlce" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Stack Navigation Screens
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Stack.Screen name="Bus" component={Bus} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
