import React, { useState } from "react";
import { ScrollView, StatusBar, TouchableWithoutFeedback } from "react-native";
import { Text, TextInput, View, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmedSenha, setConfirmedSenha] = useState('');

    const navigationimc = useNavigation();

    const handleLogin = () => {
        navigationimc.navigate('Login'); // Navega para a tela de cadastro
    };


    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" styles={styles.container} enabled>

                <Animatable.View>
                    <View style={styles.titleArea}>
                        <Text style={styles.textBemVindo}>Cadastro</Text>
                    </View>

                    <View style={styles.line} />
                    <View style={styles.formArea}>
                        <Text style={styles.title}>Nome:</Text>
                        <TextInput
                            onChangeText={text => setNome(text)}
                            placeholder="Digite seu nome"
                            style={styles.input}
                        />

         
                        <Text style={styles.title}>Email:</Text>
                        <TextInput
                            onChangeText={text => setEmail(text)}
                            placeholder="Digite seu email"
                            style={styles.input}
                        />

              
                        <Text style={styles.title}>Senha:</Text>
                        <TextInput
                            onChangeText={text => setSenha(text)}
                            placeholder="Digite sua senha"
                            style={styles.input}
                        />

                   
                        <Text style={styles.title}>Confirmar Senha:</Text>
                        <TextInput
                            onChangeText={text => setConfirmedSenha(text)}
                            placeholder="Confirme a senha"
                            style={styles.input}
                        />

                    </View>
                    <View style={styles.btnArea}>
                        <TouchableOpacity
                            style={styles.btnvoltar}
                            onPress={() => handleLogin()}
                        >
                            <Text style={styles.textbtncadastro}>Voltar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnCadastro}
                            onPress={() => handleLogin()} >
                            <Text style={styles.textbtncadastro}>Cadastrar</Text>
                        </TouchableOpacity>

                    </View>

                </Animatable.View>

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
        backgroundColor: 'rgba(0, 85, 251, 0.10)',

    },
    line: {
        height: 1,
        backgroundColor: 'gray',
      },
    input: {
        backgroundColor: 'rgba(0, 85, 251, 0.39)',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        shadowOpacity: 1,
    },
    title: {
        color: '#000',
        fontFamily: 'Jockey One',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 'normal',
    },
    titleArea: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFF',
        padding: 15,

    },
    textBemVindo: {
        color: '#000',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
        fontFamily: 'Jockey One',
        fontSize: 40,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 'normal',
    },
    formArea: {
        flex: 1,
        width: 375,
        height: 667,
        paddingBottom: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 43,

    },
    btnArea: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    btnCadastro: {
        width: 141.24,
        height: 52,
        flexShrink: 0,
        backgroundColor: '#0055FB',
        borderRadius: 50,
    },
    btnvoltar: {
        width: 141.24,
        height: 52,
        flexShrink: 0,
        backgroundColor: '#0055FB',
        borderRadius: 50,
    },
    textbtncadastro: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'JockeyOne-Regular',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 52,
    }
})