import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackRoute from "./src/routes/stackRoutes/HomeStackRoute";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <HomeStackRoute />
    </NavigationContainer>
  );
}
