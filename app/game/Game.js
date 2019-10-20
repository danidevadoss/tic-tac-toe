import React, { Component } from 'react';
import TicTacToeApp from './tic-tac-toe'
import { Text, TextInput, TouchableOpacity, Button, StyleSheet, View } from 'react-native';

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            landingScreen: true
        }
    }

    render() {
        return (
            <>
                {this.state.landingScreen ?
                    <View style={{ flex: 1, flexDirection: "column", backgroundColor: '#24478f' }}>
                        <Text style={{ fontSize: 50, textAlign: 'center', marginTop: 100, color: 'white' }}>TIC TAC TOE</Text>
                        <Text style={{ fontSize: 50, textAlign: 'center' }}>  ❌ ⭕ </Text>
                        <TouchableOpacity onPress={this.start2PlayerOfflineGame} >
                            <View style={{
                                backgroundColor: '#00CA4E', justifyContent: 'center', alignItems: 'center',
                                marginLeft: 30, marginRight: 30, marginTop: 50, borderRadius: 60, height: 80
                            }}
                            >
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
                    :
                    <TicTacToeApp></TicTacToeApp>
                }

            </>
        );
    }

    start2PlayerOfflineGame = () => {
        this.setState({ landingScreen: false })

    }

}