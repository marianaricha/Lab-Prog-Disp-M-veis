import React from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity, View,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BikeFit(){

    const navigationimc = useNavigation();

    const handleVoltar = () => {
        navigationimc.navigate('Home');
    };
    const handleHelp = () => {
        navigationimc.navigate('BikeFit');
    };
    const handleMore = () => {
        navigationimc.navigate('BikeFit');
    };
    const handleIconPress = () => {
        navigationimc.navigate('BikeFit'); 
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
                        <Text style={styles.title}>BikeFit</Text>
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

                    <Text style={styles.tutorialTitle}>Tutorial (Bike Fit)</Text>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../../assets/bikefit.png')} style={styles.image} />
                    </View>
                    <View style={styles.descriptionContainer}>
                        <View style={styles.descriptionBackground} />
                        <Text style={styles.descriptionText}>
                            O bike fit, ou ajuste postural na bicicleta, é um processo realizado por um profissional gabaritado, que utiliza técnicas e ferramentas especiais para adaptar a bicicleta perfeitamente ao corpo do ciclista
                        </Text>
                    </View>
                
                </View>

                
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
    tutorialTitle: {
        width: 323,
        height: 49,
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
        wordWrap: 'break-word',
        marginTop: 16,
        marginBottom: 16,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 'normal',
    },
    imageContainer: {
       alignSelf: 'center',
        width: 332,
        height: 190,
        position: 'relative',
    },
    image: {
        width: 332,
        height: 190,
        position: 'absolute',
    },
    descriptionContainer: {
        alignSelf: 'center',
        width: 331,
        height: 212,
        position: 'relative',
    },
    descriptionBackground: {
        width: 331,
        height: 212,
        position: 'absolute',
        backgroundColor: '#AFCAFF',
    },
    descriptionText: {
        width: 309,
        height: 209,
        alignSelf: 'center',
        top: 0,
        position: 'absolute',
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: '400',
        wordWrap: 'break-word',
    },


});