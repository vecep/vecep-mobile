import React from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "./style";

function Home() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.scrollView}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#35C1E8", "#48A7FF", "#1B4469"]}
          style={style.background}
        >
          <Image source={require("../../../assets/images/humaaan.png")} />
          <View style={style.text}>
            <Text style={[style.title, { color: "white" }]}>
              Afinal de contas, o que é VECEP?
            </Text>

            <Text style={[style.description, { color: "white" }]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </LinearGradient>
        <View style={style.statistics}>
          <Text style={style.statisticsText}>
            +3600{"\n"}
            questões
          </Text>
          <Text style={style.statisticsText}>
            +170.000{"\n"}
            candidatos
          </Text>
          <Text style={style.statisticsText}>
            +40{"\n"}
            provas
          </Text>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#FFFFFF", "#E5E5E5", "#C4C4C4"]}
          style={style.background}
        >
          <View style={style.text}>
            <Text style={style.title}>Um pouco sobre nossas features...</Text>

            <Text style={style.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>

            <Text style={style.description}>
              Duis aute irure dolor inreprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Text>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
