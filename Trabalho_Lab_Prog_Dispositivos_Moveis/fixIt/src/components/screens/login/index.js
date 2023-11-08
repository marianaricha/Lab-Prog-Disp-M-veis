import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Login({ navigation }) {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const navigationimc = useNavigation();

    const handleCadastro = () => {
        navigationimc.navigate('Cadastro'); // Navega para a tela de cadastro
    };

    const handleHome = () => {
        navigationimc.navigate('Home'); // Navega para a tela de Home
    };

    return (

        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Image source={require('../../../assets/logo_1.png')}
                    style={styles.logo} />
            </Animatable.View>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerForm}>

                <Text style={styles.title}>User</Text>
                <TextInput
                    onChangeText={text => setUser(text)}
                    style={styles.input}
                />

                <Text style={styles.title}>Password</Text>
                <TextInput
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    style={styles.input}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleHome()}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonregister}
                    onPress={() => handleCadastro()}
                >
                    <Text style={styles.registerText}>Não tem conta ? Cadastre-se</Text>
                </TouchableOpacity>


            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 24,
        alignSelf: 'center',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },

    containerForm: {
        backgroundColor: '#FFFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28,
        fontWeight: "bold",
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: "#0055FB",
        textDecorationColor: "red",
    },
    button: {
        backgroundColor: 'rgb(0,0,250)',
        width: '100%',
        borderRadius: 15,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        textalign: 'center',
        fontfamily: ' Jockey One',
        fontsize: 20,
        fontstyle: 'normal',
        fontweight: 400,
        lineheight: 'normal',
    },
    buttonregister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: 'black',
        fontWeight: "bold",
        textDecorationLine: 'underline',

    }
});
