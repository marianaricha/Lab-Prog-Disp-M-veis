import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import Lp from './ListaPlana';

export default function Tutoriais() {
  const navigation = useNavigation();

  const handleVoltar = () => {
    navigation.navigate('Home');
  };

  const handleHelp = () => {
    navigation.navigate('Tutoriais');
  };

  const handleMore = () => {
    navigation.navigate('Tutoriais');
  };

  return (
    <View>
       <View style={styles.container}>
          <View style={styles.innerContainer}>

            <View style={styles.iconsContainer}>
                        <TouchableOpacity onPress={handleVoltar}>
                            <Image source={require('../../../assets/Keyboard.png')}
                                style={styles.iconWrapper} />
                        </TouchableOpacity>
                        <Text style={styles.title}>Tutoriais</Text>
                        <TouchableOpacity onPress={handleHelp}>
                            <Image source={require('../../../assets/Help.png')}
                                style={styles.iconWrapper} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleMore}>
                            <Image source={require('../../../assets/more.png')}
                                style={styles.iconWrapper} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.line} />
                    
          </View>
          <Lp />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: 'rgba(0, 85, 250, 0.1)',
  },
  innerContainer: {
    width: 375.02,
    height: 50,
    left: 0,
    top: 0,
    position: 'center',
  },
  iconsContainer: {

    width: 375,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    position: 'relative',
  },
  title: {
    color: '#000',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: 'bold',
},
  line:{
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
},
});