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
        return (<TicTacToeApp></TicTacToeApp>);
    }

    start2PlayerOfflineGame = () => {
        this.setState({ landingScreen: false })

    }

}