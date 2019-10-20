import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, Button, StyleSheet, View } from 'react-native';
import InputBox from './input-box'

export default class TicTacToeApp extends Component {

    array = [['', '', ''], ['', '', ''], ['', '', '']];
    count = 0;
    constructor(props) {
        super(props);
        this.state = {
            isFirstPlayer: true,
            values: this.array,
            showPlayAgain: false,
            greetings: true,
            drawMessage: false,
            showPlayerTurns: true
        }
    }


    render() {
        return (<>
            <View style={{ flex: 1, flexDirection: "column", }}>
                <View style={{ flex: 2, flexDirection: "column", backgroundColor: '#24478f' }}>

                    <Text style={{ fontSize: 50, textAlign: 'center', marginTop: 25, color: 'white' }}>TIC TAC TOE</Text>

                    {this.state.showPlayerTurns ?
                        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 25, color: 'white' }}>
                            Player {this.state.isFirstPlayer ? 'One' : 'Two'} Turn</Text>
                        : <></>}

                    {this.state.greetings ?
                        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 25, color: 'white' }}>
                            😎 Lets Start..! 👍</Text> : <></>
                    }
                    {this.state.drawMessage ?
                        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 35, color: 'white' }}>
                            😅 No Win </Text> : <></>
                    }
                </View>
                <View style={{ flex: 4, flexDirection: "column", backgroundColor: '#734d26', }}>
                    <View style={{ flex: 4, flexDirection: "column", margin: 10 }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <InputBox values={this.state.values} position={[0, 0]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer}></InputBox>
                            <InputBox values={this.state.values} position={[0, 1]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer}></InputBox>
                            <InputBox values={this.state.values} position={[0, 2]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer}></InputBox>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <InputBox values={this.state.values} position={[1, 0]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer}></InputBox>
                            <InputBox values={this.state.values} position={[1, 1]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer}></InputBox>
                            <InputBox values={this.state.values} position={[1, 2]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer}></InputBox>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <InputBox values={this.state.values} position={[2, 0]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer}></InputBox>
                            <InputBox values={this.state.values} position={[2, 1]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer}></InputBox>
                            <InputBox values={this.state.values} position={[2, 2]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer}></InputBox>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: "column", alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#24478f' }}>
                    {

                        this.state.showPlayAgain ?
                            <TouchableOpacity onPress={this.onPlayAgain} >
                                <View style={{
                                    backgroundColor: '#00CA4E', alignItems: 'center',
                                    justifyContent: 'center', borderRadius: 60, width: 200, height: 60
                                }}
                                >
                                    <Text style={{ color: 'white', fontSize: 20 }}>Play Agian</Text>
                                </View>
                            </TouchableOpacity>
                            : <></>
                    }
                </View>
            </View>
        </>)
    }

    onClick = (position) => {
        //alert('clicked on position' + position);
        let values = this.state.values;
        if (this.state.isFirstPlayer) {
            values[position[0]][position[1]] = "X";
        } else {
            values[position[0]][position[1]] = "O";
        }
        this.setState({ isFirstPlayer: !this.state.isFirstPlayer, values: values, greetings: false });

        //this.isWon();
        this.count++;
        if (this.count == 9) {
            this.setState({ showPlayAgain: true, drawMessage: true, showPlayerTurns: false });
        }

    }

    onPlayAgain = () => {
        let resetArray = [['', '', ''], ['', '', ''], ['', '', '']];
        this.count = 0;
        this.setState({ isFirstPlayer: true, values: resetArray, showPlayAgain: false, greetings: true, drawMessage: false, showPlayerTurns: true });

    }

}