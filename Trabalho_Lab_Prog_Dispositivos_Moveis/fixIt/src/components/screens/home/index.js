import React, { useState } from "react";
import { ScrollView, StatusBar, TouchableWithoutFeedback, Button } from "react-native";
import { Text, TextInput, View, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';





export default function Home() {

    const [nome, setNome] = useState('');

    const navigationimc = useNavigation();

    const handleTutoriais = () => {
        navigationimc.navigate('Tutoriais'); 
    };
    const handlePecas= () => {
        navigationimc.navigate('Pecas'); 
    };
    const handleLojasProximas= () => {
        navigationimc.navigate('ElementLojasProximas'); 
    };
    const handleBikeFit= () => {
        navigationimc.navigate('BikeFit'); 
    };
    const handleAtividades= () => {
        navigationimc.navigate('Atividades'); 
    };

    const handleBike = () => {
        navigationimc.navigate('ElementVisualizarBike'); 
    };
    const handleLogin = () => {
        navigationimc.navigate('Login'); 
    };
    const handleHome = () =>{
        navigationimc.navigate('Home'); 
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" styles={styles.container} enabled>
                <View style={styles.titleArea}>
                    <TouchableOpacity onPress={handleHome}>
                        <Icon name="settings" size={30} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.textBemVindo}>Olá Renan!</Text>
                    <TouchableOpacity onPress={handleHome}>
                        <Image source={require('../../../assets/logo_1.png')}
                            style={styles.logo} />
                    </TouchableOpacity>
                </View>
                <View style={styles.line}></View>
                <TouchableOpacity onPress={handleBike}>
                    <Image source={require('../../../assets/bike.png')}
                        style={styles.bike} />
                </TouchableOpacity>
                <View style={styles.line}></View>
                <View style={styles.container}>
                    <View style={styles.areaPesquisa}>
                        <TextInput
                            style={styles.pesquisa}
                            placeholder="Pesquisar..."
                        />
                    </View>
                </View>
                <View style={styles.containerPesquisa}>
                    <TouchableOpacity
                        onPress={() => handleTutoriais()}
                        style={styles.button}>
                        <Text style={styles.buttonText}>. Tutoriais</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePecas()}
                        style={styles.button}>
                        <Text style={styles.buttonText}>. Peças</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleLojasProximas()}
                        style={styles.button}>
                        <Text style={styles.buttonText}>. Lojas Próximas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleBikeFit()}
                        style={styles.button}>
                        <Text style={styles.buttonText}>. Bike Fit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleAtividades()}
                        style={styles.button}>
                        <Text style={styles.buttonText}>. Registro de atividades</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerPesquisa: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
    },
    areaItens: {
        marginTop: 20,
        width: 304,
        height: 39,
        flexShrink: 0,
    },
    areaPesquisa: {
        width: 304,
        height: 39,
        flexShrink: 0,
        borderRadius: 50,
        backgroundColor: 'rgba(0, 85, 251, 0.15)',
    },
    pesquisa: {
        flex: 1,
        paddingHorizontal: 10,
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#000',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 30,
    },
    titleArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFF',
        padding: 15,
    },
    textBemVindo: {
        color: '#000',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 24,
    },
    logo: {
        width: 50,
        height: 50,
        marginBottom: 24,
        alignSelf: 'center',
    },
    bike: {
        width: 100,
        height: 100,
        marginBottom: 24,
        alignSelf: 'center',
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'gray',
    },
});