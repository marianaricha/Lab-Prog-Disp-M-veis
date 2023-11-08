import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Linking, ScrollView, KeyboardAvoidingView } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ElementLojasProximas() {

    const navigationimc = useNavigation();

    const handleVoltar = () => {
        navigationimc.navigate('Home');
    };
    const handleMaps = () => {
        const url = `https://www.google.com.br/maps/place/S%C3%A3o+Pedro,+Juiz+de+Fora+-+MG/@-21.7736809,-43.4044465,14z/data=!3m1!4b1!4m6!3m5!1s0x989b9a2acd70df:0xec63b3c9f4e8c2ad!8m2!3d-21.7732997!4d-43.3815506!16s%2Fg%2F1ymsmq74c?entry=ttu`;

        Linking.openURL(url);
    };
    const handleLojas = () => {
        navigationimc.navigate('ElementLojasProximas');
    };


    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" style={styles.container} enabled>
                <View>
                    <View style={styles.titleArea}>
                        <TouchableOpacity onPress={handleVoltar}>
                            <Image source={require('../../../assets/Keyboard.png')} />
                        </TouchableOpacity>
                        <Text style={styles.textBemVindo}>Lojas Próximas</Text>
                        <TouchableOpacity onPress={handleLojas}>
                            <Image source={require('../../../assets/more.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.containerPesquisa}>
                        <View style={styles.areaPesquisa}>
                            <TextInput
                                style={styles.pesquisa}
                                placeholder="Pesquisar..."
                                placeholderTextColor="#666"
                                textAlign="center"
                            />
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View>
                        <TouchableOpacity onPress={handleMaps}>
                            <Image style={styles.maps} source={require("../../../assets/maps1.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = {
    containerPesquisa: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    textBemVindo: {
        color: '#000',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 24,
    },
    titleArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFF',
        padding: 15,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pesquisa: {
        flex: 1,
        paddingHorizontal: 10,
    },
    areaPesquisa: {
        width: 304,
        height: 39,
        borderRadius: 50,
        backgroundColor: 'rgba(0, 85, 251, 0.15)',
        justifyContent: 'center', // Centralizar verticalmente
    },
    line: {
        marginTop: 10,
        width: '100%',
        height: 1,
        backgroundColor: 'gray',
    },
    maps: {
        width: 353,
        height: 312,
        marginTop: 10,
        alignSelf: 'center',
    },
};
