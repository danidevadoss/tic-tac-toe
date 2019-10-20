import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, Button, StyleSheet, View } from 'react-native';
import Game from '../game/Game';

export default class Base extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column", backgroundColor: '#24478f' }}>
                <View style={{ flex: 2, flexDirection: "column", justifyContent: "space-around", alignItems: "stretch" }}>
                    <Text style={{ fontSize: 50, textAlign: 'center', color: 'white',marginTop:25 }}>TIC TAC TOE</Text>
                    <Text style={{ fontSize: 50, textAlign: 'center' }}>  ❌ ⭕ </Text>
                </View>

                <View style={{ flex: 3, flexDirection: "column", justifyContent: "space-around", alignItems: "stretch" }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Game')}>
                        <View style={{
                            backgroundColor: '#00CA4E', justifyContent: 'center', alignItems: 'center',
                            marginLeft: 30, marginRight: 30, borderRadius: 60, height: 80
                        }}>
                            <Text style={{ color: 'white', fontSize: 25 }}> Two Player Offline </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        backgroundColor: '#8c8c8c', justifyContent: 'center', alignItems: 'center',
                        marginLeft: 30, marginRight: 30, borderRadius: 60, height: 80
                    }}
                    >
                        <Text style={{ color: 'white', fontSize: 25 }}>Single Player 🔜 </Text>
                    </View>
                    <View style={{
                        backgroundColor: '#8c8c8c', justifyContent: 'center', alignItems: 'center',
                        marginLeft: 30, marginRight: 30, borderRadius: 60, height: 80
                    }}
                    >
                        <Text style={{ color: 'white', fontSize: 25 }}>Two Player Online 🔜</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: "column", backgroundColor: '#24478f' }}>
                </View>
            </View>
        );
    }
} 