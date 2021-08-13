import React from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "./style";

const SORDI_PICTURE = require("../../../assets/images/sordi.jpeg");
const HIRASAWA_PICTURE = require("../../../assets/images/hirasawa.jpeg");
const YODONO_PICTURE = require("../../../assets/images/yodono.png");

function RenderGroupMembers({ picture, name, children }) {
  return (
    <View style={style.groupMember}>
      <Image source={picture} style={style.image} />
      <View style={style.text}>
        <Text style={style.title}>{name}</Text>
        <Text style={style.description}>{children}</Text>
      </View>
    </View>
  );
}

function About() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.scrollView}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#FFFFFF", "#E5E5E5", "#C4C4C4"]}
          style={style.background}
        >
          <RenderGroupMembers
            picture={SORDI_PICTURE}
            name="Matheus Siqueira Sordi"
          >
            Sou estudante do terceiro ano do ensino médio da ETEC de
            Hortolândia, cursando nela Desenvolvimento de Sistemas e pretendo
            continuar minha carreira como programador. Gosto muito de assistir,
            de jogar, de esportes e, claro, de programar.
          </RenderGroupMembers>

          <RenderGroupMembers
            picture={HIRASAWA_PICTURE}
            name="Raphaella Hirasawa"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </RenderGroupMembers>

          <RenderGroupMembers picture={YODONO_PICTURE} name="Victor Yodono">
            Programador por paixão, guitarrista por hobby e gamer nas horas
            vagas. Gosto de me aventurar no mundo dos códigos, com foco
            principal em Web Development. Estudante de React, Node, TypeScript,
            Java e afins.
          </RenderGroupMembers>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

export default About;
