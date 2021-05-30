import React from "react";
import {
  createBottomTabNavigator,
  createDrawerNavigator,
} from "@react-navigation/drawer";

import Main from "../screens/Main";
import Profile from "../screens/Profile";

import { DrawerLayoutAndroid } from "react-native";

const Drawer = createDrawerNavigator();

export default (props) => (
  <Drawer.Navigator initialRouteName="Main">
    <Drawer.Screen name="Main" component={Main}></Drawer.Screen>
    <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
  </Drawer.Navigator>
);
