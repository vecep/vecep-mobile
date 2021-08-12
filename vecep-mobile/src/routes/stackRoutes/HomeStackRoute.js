import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import style from "./style";
import Initial from "../../views/Initial/Initial";
import TabRoute from "../tabRoutes/TabRoutes.js";

const Stack = createStackNavigator();

const HomeStackRoute = () => {
  return (
    <Stack.Navigator initialRouteName="Initial">
      <Stack.Screen
        name="Initial"
        component={Initial}
        options={{ cardStyle: style.initialScreen, headerShown: false }}
      />
      <Stack.Screen
        name="TabScreen"
        component={TabRoute}
        options={{ cardStyle: style.homeScreen, headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackRoute;
