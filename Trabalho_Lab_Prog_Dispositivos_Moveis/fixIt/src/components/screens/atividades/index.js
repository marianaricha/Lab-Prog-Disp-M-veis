import React from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity, View,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Atividades(){

    const navigationimc = useNavigation();

    const handleVoltar = () => {
        navigationimc.navigate('Home');
    };
    const handleHelp = () => {
        navigationimc.navigate('Atividades');
    };
    const handleMore = () => {
        navigationimc.navigate('Atividades');
    };
    const handleIconPress = () => {
        navigationimc.navigate('Atividades'); 
    };

    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                                           
                    <View style={styles.iconsContainer}>
                        <TouchableOpacity onPress={handleVoltar}>
                            <Image source={require('../../../assets/Keyboard.png')}
                                style={styles.iconWrapper} />
                        </TouchableOpacity>
                        <Text style={styles.title}>Atividades</Text>
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

                    <Image source={require('../../../assets/imagemstrava.png')}
                        style={styles.imagemstrava} />  
                    <Text style={styles.text}>compartilhar com</Text>
                    <Image source={require('../../../assets/stravalogo1.png')}
                        style={styles.stravalogo1} />  
                    <Image source={require('../../../assets/stravalogo2.png')}
                        style={styles.stravalogo2} />  
                
                </View>

                <Image source={require('../../../assets/imagemstrava2.png')}
                    style={styles.imagemstrava2} /> 
                
            </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: 'rgba(0, 85, 250, 0.1)',
    },
    innerContainer: {
        width: 375.02,
        height: 60,
        left: 0,
        top: 0,
        position: 'absolute',
    },
    line:{
        width: '100%',
        height: 1,
        backgroundColor: 'gray',
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
        lineHeight: 'normal',
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
    text: {
        width: 175,
        height: 28,
        left: 120,
        top: 103,
        position: 'absolute',
        textAlign: 'center',
        color: '#FC4C02',
        fontSize: 20,
        fontWeight: 'normal',
        wordWrap: 'break-word',
    },
    imagemstrava: {
        width: 137,
        height: 123,
        left: 2,
        top: 69,
        position: 'absolute',
    },
    stravalogo1: {
        width: 130,
        height: 27.08,
        left: 147,
        top: 131,
        position: 'absolute',
    },
    stravalogo2: {
        width: 70,
        height: 70,
        left: 285,
        top: 96,
        position: 'absolute',
        borderRadius: 35,
    },
    imagemstrava2: {
        width: 287,
        height: 410,
        left: 44,
        top: 234,
        position: 'absolute',
    },


});