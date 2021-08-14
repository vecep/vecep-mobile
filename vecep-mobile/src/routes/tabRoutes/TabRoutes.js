import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../views/Home/Home";
import About from "../../views/About/About";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const icons = {
  Home: { name: "home" },
  Sobre: { name: "groups" },
};

const TabRoute = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const { name } = icons[route.name];
          return <MaterialIcons name={name} size={30} color={color} />;
        },
        tabBarActiveTintColor: "#35C1E8",
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            backgroundColor: "#FFFFFF",
          },
        ],
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={About}
        options={{
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoute;
