import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import WaveView from "../../components/wave/WaveView";
import style from "./style";

const WAVE_SVG_PATTERN = `M0,32L48,64C96,96,192,160,288,186.7C384,213,480,203,576,186.7C672,171,768,149,864,
122.7C960,96,1056,64,1152,64C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,
320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z`;

function Initial({ navigation }) {
  const getStarted = () => {
    navigation.replace("TabScreen");
  };

  return (
    <View style={style.container}>
      <View style={style.border}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#FFFFFF", "#E5E5E5", "#C4C4C4"]}
          style={style.background}
        >
          <View style={style.text}>
            <Text style={style.title}>VECEP - Fuvest</Text>

            <Text style={style.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
          <WaveView
            fill="#282727"
            customStyles={style.wave}
            customWavePattern={WAVE_SVG_PATTERN}
          />
          <View style={style.buttonContainer}>
            <TouchableOpacity style={style.button} onPress={getStarted}>
              <Text style={style.buttonText}>Quero saber mais!</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

export default Initial;
