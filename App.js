import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Stack from "./src/routes/Stack"

export default function App() {
  return <NavigationContainer><Stack></Stack></NavigationContainer>;
}

registerRootComponent(App);
