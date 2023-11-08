import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ElementVisualizarBike() {

  const navigation = useNavigation();


  const handleVoltar = () => {
    navigation.navigate('Home');
  };

  const handleEditBike = () => {
    navigation.navigate('ElementEditarBike');
  };

  const handleHelp = () => {
    navigation.navigate('ElementVisualizarBike');
  };

  const handleTutoriais = () => {
    navigation.navigate('');
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" styles={styles.container} enabled>
        <View style={styles.titleArea}>

          <TouchableOpacity onPress={handleVoltar}>
            <Image source={require('../../../assets/Keyboard.png')}
              style={styles.logo} />
          </TouchableOpacity>
          <Text style={styles.textBemVindo}>Minha Bike</Text>
          <TouchableOpacity onPress={handleEditBike}>
            <Image source={require('../../../assets/more.png')}
              style={styles.logo} />
          </TouchableOpacity>

        </View>
        <View style={styles.line}></View>


        <TouchableOpacity onPress={handleEditBike}>
          <Image source={require('../../../assets/bike.png')}
            style={styles.bike} />
        </TouchableOpacity>
        <View style={styles.line}></View>

        
          <View style={styles.texto}>
            <View style={styles.pneu}>
              <Image
                style={styles.img2}
                source={require("../../../assets/1.png")}
              />
              <Text style={styles.div}>Michelin Force 2,25</Text>
            </View>
            <View style={styles.cambio}>
              <Text style={styles.div}>Shimano Alivio</Text>
              <Image
                style={styles.imagesRemovebg}
                source={require("../../../assets/2.png")}
              />
            </View>
            <View style={styles.passadores}>
              <Text style={styles.div}>Shimano Altus</Text>
              <Image
                style={styles.img2}
                source={require("../../../assets/3.png")}
              />
            </View>
            <View style={styles.catraca}>
              <Text style={styles.div}>Shimano 11V 11-51t</Text>
              <Image
                style={styles.gripshiftRemovebg}
                source={require("../../../assets/4.png")}
              />
            </View>
            <View style={styles.freios}>
              <Text style={styles.textWrapper2}>Shimano Deore</Text>
              <Image
                style={styles.gripshiftRemovebg2}
                source={require("../../../assets/5.png")}
              />
            </View>
          </View>
        


      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const styles = {
  titleArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFF',
    padding: 15,
  },
  containerPesquisa: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  textBemVindo: {
    color: '#000',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 24,
  },
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: 'rgba(0, 85, 250, 0.1)',
  },
  iconsContainer: {
    width: 375,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
  },
  elementVisualizarBike: {
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
  overlap: {
    height: 225,
    width: 377,
  },
  titulo: {
    height: 60,
    width: 377,
  },
  overlapGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "#00000040",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  iconsContainer: {
    marginHorizontal: 8,
  },
  icon: {
    height: 50,
    width: 50,
    marginHorizontal: 10,
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
  bike: {
    width: 100,
    height: 100,
    marginBottom: 14,
    alignSelf: 'center',
  },
  img: {
    height: 200,
    left: 88,
    position: "absolute",
    top: 0,
    width: 200,
  },
  line2: {
    height: 1,
    left: 0,
    position: "absolute",
    top: 208,
    width: 375,
  },
  texto: {
    height: 379,
    left: 24,
    position: "absolute",
    top: 245,
    width: 333,
  },
  pneu: {
    height: 69,
    left: 0,
    position: "absolute",
    top: 0,
    width: 335,
  },
  img2: {
    height: 57,
    left: 0,
    position: "absolute",
    top: 7,
    width: 57,
  },
  div: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold",
    height: 69,
    left: 58,
    letterSpacing: 0,

    position: "absolute",
    top: 0,
    width: 275,
  },
  cambio: {
    height: 69,
    left: 0,
    position: "absolute",
    top: 79,
    width: 335,
  },
  imagesRemovebg: {
    height: 57,
    left: 0,
    position: "absolute",
    top: 6,
    width: 58,
  },
  passadores: {
    height: 69,
    left: 0,
    position: "absolute",
    top: 153,
    width: 335,
  },
  catraca: {
    height: 69,
    left: 0,
    position: "absolute",
    top: 232,
    width: 335,
  },
  gripshiftRemovebg: {
    height: 57,
    left: 0,
    position: "absolute",
    top: 6,
    width: 57,
  },
  freios: {
    height: 69,
    left: 1,
    position: "absolute",
    top: 310,
    width: 334,
  },
  textWrapper2: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold",
    height: 69,
    left: 57,
    letterSpacing: 0,

    position: "absolute",
    top: 0,
    width: 275,
  },
  gripshiftRemovebg2: {
    height: 54,
    left: 0,
    position: "absolute",
    top: 8,
    width: 57,
  },
};
