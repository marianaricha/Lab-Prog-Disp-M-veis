import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ElementEditarBike() {

  const navigationimc = useNavigation();

  const handleViweBike = () => {
    navigationimc.navigate('ElementVisualizarBike');
  };
  
  return (
    <View style={styles.elementEditarBike}>
      <View style={styles.iphoneWrapper}>
        <View style={styles.iphone}>
          <View style={styles.pneu}>
            <Text style={styles.textWrapper}>Pneu:</Text>
            <TextInput style={styles.rectangle}></TextInput>
          </View>
          <View style={styles.cambio}>
            <Text style={styles.textWrapper}>Câmbio:</Text>
            <TextInput style={styles.rectangle}></TextInput>
          </View>
          <View style={styles.passadores}>
            <TextInput style={styles.rectangle}></TextInput>
            <Text style={styles.textWrapper}>Passadores:</Text>
          </View>
          <View style={styles.catraca}>
            <TextInput style={styles.rectangle}></TextInput>
            <Text style={styles.textWrapper}>Catraca:</Text>
          </View>
          <View style={styles.freios}>
            <TextInput style={styles.rectangle}></TextInput>
            <Text style={styles.textWrapper}>Freios:</Text>
          </View>

          <View style={styles.titulo}>
            <View style={styles.overlapGroup}>
              <Text style={styles.h1}>Editar Bike</Text>
              <View style={styles.line}></View>
              <TouchableOpacity onPress={handleViweBike}>
                <Image
                  
                  style={styles.keyboardBackspace}
                  source={require("../../../assets/Keyboard.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity  onPress={handleViweBike}>
                <Image
                  style={styles.helpOutline}
                  source={require("../../../assets/Help.png")}
                 
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.moreVert} source={require("../../../assets/more.png")} />
              </TouchableOpacity>

            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.botoes}
          onPress={handleViweBike}
        >
          <Text style={styles.confirmar}>Confirmar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = {

  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
  },
  elementEditarBike: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  iphoneWrapper: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    height: 667,
    width: 375,
  },
  iphone: {
    backgroundColor: "#0055fa1a",
    height: 667,
    overflow: "hidden",
    position: "relative",
  },
  pneu: {
    height: 68,
    left: 68,
    position: "absolute",
    top: 86,
    width: 242,
  },
  rectangle: {
    backgroundColor: "#0055fa63",
    boxShadow: "0px 4px 4px #00000040",
    height: 40,
    left: 0,
    position: "absolute",
    top: 28,
    width: 240,
  },
  textWrapper: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    left: 0,
    letterSpacing: 0,
    lineHeight: "normal",
    position: "absolute",
    top: 0,
    width: 240,
  },
  cambio: {
    height: 68,
    left: 68,
    position: "absolute",
    top: 183,
    width: 242,
  },
  passadores: {
    height: 68,
    left: 68,
    position: "absolute",
    top: 280,
    width: 242,
  },
  catraca: {
    height: 68,
    left: 68,
    position: "absolute",
    top: 377,
    width: 242,
  },
  freios: {
    height: 68,
    left: 68,
    position: "absolute",
    top: 474,
    width: 242,
  },
  botoes: {
    height: 52,
    left: 68,
    position: "absolute",
    top: 571,
    width: 240,
    backgroundColor: 'blue',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmar: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  titulo: {
    height: 60,
    left: 0,
    position: "absolute",
    top: 0,
    width: 377,
  },
  overlapGroup: {
    height: 60,
    position: "relative",
    width: 375,
  },
  h1: {
    color: "#000000",
    fontSize: 40,
    fontWeight: "bold",
    height: 60,
    left: 0,
    letterSpacing: 0,
    lineHeight: "normal",
    position: "absolute",
    textAlign: "center",
    textShadow: "0px 4px 4px #00000040",
    top: 0,
    width: 375,
  },
  line: {
    height: 1,
    left: 0,
    objectFit: "cover",
    position: "absolute",
    top: 59,
    width: 375,
  },
  keyboardBackspace: {
    height: 59,
    left: 0,
    position: "absolute",
    top: 0,
    width: 60,
  },
  helpOutline: {
    height: 40,
    left: 285,
    position: "absolute",
    top: 12,
    width: 40,
  },
  moreVert: {
    height: 48,
    left: 325,
    position: "absolute",
    top: 8,
    width: 48,
  },
};