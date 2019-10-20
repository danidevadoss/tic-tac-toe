import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, Button, StyleSheet, View } from 'react-native';
import Game from '../game/Game';

export default class Base extends Component {
     constructor(props) {
        super(props);
     }        

     render() {
        return (
                    <View style={{ flex: 1 ,flexDirection: "column", backgroundColor: '#24478f' }}>
                        <Text style={{ fontSize: 50, textAlign: 'center', marginTop: 100, color: 'white' }}>TIC TAC TOE</Text>
                        <Text style={{ fontSize: 50, textAlign: 'center' }}>  ❌ ⭕ </Text>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Game')}>
                            <View style={{
                                backgroundColor: '#00CA4E', justifyContent: 'center', alignItems: 'center',
                                marginLeft: 30, marginRight: 30, marginTop: 50, borderRadius: 60, height: 80
                            }}>
                                <Text style={{ color: 'white', fontSize: 25 }}>Two Player Offline </Text>
                            </View>
                        </TouchableOpacity> 
                        <View style={{
                            backgroundColor: '#8c8c8c', justifyContent: 'center', alignItems: 'center',
                            marginLeft: 30, marginRight: 30, marginTop: 50, borderRadius: 60, height: 80
                        }}
                        >
                            <Text style={{ color: 'white', fontSize: 25 }}>Single Player 🔜 </Text>
                        </View>
                        <View style={{
                            backgroundColor: '#8c8c8c', justifyContent: 'center', alignItems: 'center',
                            marginLeft: 30, marginRight: 30, marginTop: 50, borderRadius: 60, height: 80
                        }}
                        >
                            <Text style={{ color: 'white', fontSize: 25 }}>Two Player Online 🔜</Text>
                        </View>
                    </View>
        );
    }
} 