import React from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import style from "./style";

function VECEP_MEANING() {
  return (
    <Text style={{ fontWeight: "bold" }}>
      Venha Estudar Conteúdos Específicos Para
    </Text>
  );
}

function FeatureList({ item }) {
  return (
    <View style={style.list}>
      <MaterialIcons name="check" size={17} color="#48A7FF" />
      <Text style={style.listText}>{item}</Text>
    </View>
  );
}

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
              Sigla de {VECEP_MEANING()} [insira aqui uma prova de vestibular],
              estamos abraçando, nesse primeiro momento, a prova da USP, a
              Fuvest.
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

            <FeatureList item="Provas na íntegra desde 2010." />
            <FeatureList item="Filtragem por matérias e (((PASMEM))) por conteúdos das mesmas!" />
            <FeatureList item="Simulação de provas com tempo..." />
            <FeatureList item="Análise de performance individual." />
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
