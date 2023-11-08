import React, { Component } from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';

const tutoriais = [
        {id: '1', nome: 'Troca de Catraca', image: require("../../../assets/tuto-catraca.png")},
        {id: '2', nome: 'Trocar passador de marcha', image: require("../../../assets/tuto-passador.png")},
        {id: '3', nome: 'Calibrar pneu', image: require("../../../assets/tuto-pneu.png")},
        {id: '4', nome: 'Ajustar altura do banco', image: require("../../../assets/tuto-banco.png")},
        {id: '5', nome: 'Instalar dínamo', image: require("../../../assets/tuto-dinamo.png")},
    ]
    
export default function(){
    return (
        <View>
            <FlatList
                data={tutoriais}
                keyExtractor={item=>item.id}
                renderItem={({item}) => 
                <View style = {styles.flatListContainer}>
                  <Image source = {item.image} style={{height: 160, width: '100%'}}/>
                  <Text style={styles.Text}>{item.nome}</Text>
                </View>
              }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flatListContainer: {
      marginTop: 10,
      backgroundColor: '#8cb2fd',
      marginVertical: 10,
      marginHorizontal: 16,
      paddingBottom: 32,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    Text: {
      fontSize: 26,
      fontWeight: 'bold',
      paddingTop: 25,
    },
});