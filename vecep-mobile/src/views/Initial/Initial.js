import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function Initial({ navigation }) {
  const getStarted = () => {
    navigation.replace("TabScreen");
  };

  return (
    <View>
      <TouchableOpacity onPress={getStarted}>
        <Text>Next Page</Text>
        <MaterialIcons name="east" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default Initial;
