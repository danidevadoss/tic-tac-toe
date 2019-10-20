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
            showPlayerTurns: true,
            isWon: false,
            winningList: ''
        }
    }


    render() {
        return (<>
            <View style={{ flex: 1, flexDirection: "column", }}>
                <View style={{ flex: 2, flexDirection: "column", backgroundColor: '#24478f' }}>

                    <View style={{ flex: 1, flexDirection: "column", }}>

                        <Text style={{ fontSize: 50, textAlign: 'center', marginTop: 25, color: 'white' }}>TIC TAC TOE</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>

                        {this.state.showPlayerTurns ?
                            <Text style={{ fontSize: 30, textAlign: 'center', color: 'white' }}>
                                Turn: {this.state.isFirstPlayer ? '❌' : '⭕'} Player </Text>
                            : <></>}

                        {this.state.greetings ?
                            <Text style={{ fontSize: 30, textAlign: 'center', color: 'white' }}>
                                😎 Lets Start..! 👍</Text> : <></>
                        }
                        {this.state.drawMessage ?
                            <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 25, color: 'white' }}>
                                😅 No Win </Text> : <></>
                        }
                        {this.state.isWon ?
                            <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 25, color: 'white' }}>
                                {this.state.isFirstPlayer ? '⭕' : '❌'} Player  Won 🏆 </Text> : <></>
                        }
                    </View>
                </View>
                <View style={{ flex: 4, flexDirection: "column", backgroundColor: '#734d26', }}>
                    <View style={{ flex: 4, flexDirection: "column", margin: 10 }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <InputBox values={this.state.values} position={[0, 0]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer} isWon={this.state.isWon} backgroundColor={this.isHighlight('0,0')} ></InputBox>
                            <InputBox values={this.state.values} position={[0, 1]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer} isWon={this.state.isWon} backgroundColor={this.isHighlight('0,1')} ></InputBox>
                            <InputBox values={this.state.values} position={[0, 2]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer} isWon={this.state.isWon} backgroundColor={this.isHighlight('0,2')} ></InputBox>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <InputBox values={this.state.values} position={[1, 0]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer} isWon={this.state.isWon} backgroundColor={this.isHighlight('1,0')}></InputBox>
                            <InputBox values={this.state.values} position={[1, 1]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer} isWon={this.state.isWon} backgroundColor={this.isHighlight('1,1')}></InputBox>
                            <InputBox values={this.state.values} position={[1, 2]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer} isWon={this.state.isWon} backgroundColor={this.isHighlight('1,2')}></InputBox>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <InputBox values={this.state.values} position={[2, 0]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer} isWon={this.state.isWon} backgroundColor={this.isHighlight('2,0')} ></InputBox>
                            <InputBox values={this.state.values} position={[2, 1]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer} isWon={this.state.isWon} backgroundColor={this.isHighlight('2,1')}></InputBox>
                            <InputBox values={this.state.values} position={[2, 2]} onClick={this.onClick} isFirstPlayer={this.state.isFirstPlayer} isWon={this.state.isWon} backgroundColor={this.isHighlight('2,2')}></InputBox>
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
        let isFirstPlayer = this.state.isFirstPlayer;
        if (this.state.isFirstPlayer) {
            values[position[0]][position[1]] = "X";
        } else {
            values[position[0]][position[1]] = "O";
        }
        this.setState({ isFirstPlayer: !this.state.isFirstPlayer, values: values, greetings: false });
        this.count++;
        if (this.isWin(position, isFirstPlayer)) {
            this.setState({ showPlayAgain: true, isWon: true, showPlayerTurns: false });
        } else if (this.count == 9) {
            this.setState({ showPlayAgain: true, drawMessage: true, showPlayerTurns: false });
        }

    }

    onPlayAgain = () => {
        let resetArray = [['', '', ''], ['', '', ''], ['', '', '']];
        this.count = 0;
        this.setState({
            isFirstPlayer: true, values: resetArray, showPlayAgain: false,
            greetings: true, drawMessage: false, showPlayerTurns: true, isWon: false,
            winningList: ''
        });

    }
    isHighlight = (position) => {
        return this.state.winningList.includes(position) ? '#00CA4E' : '#734d26'
    }
    isWin = (position, isFirstPlayer) => {
        let positionString = position.toString();
        let isWon = false;
        let value = isFirstPlayer ? 'X' : 'O';
        let array = this.state.values;

        if ("0,0" == positionString) {

            // alert([0, 0].toString() == position.toString());
            if ((array[0][1] == value && array[0][2] == value)) {
                isWon = true;
                this.setState({ winningList: "0,0)(0,1)(0,2" });
            } else if ((array[1][1] == value && array[2][2] == value)) {
                isWon = true;
                this.setState({ winningList: "0,0)(1,1)(2,2" });
            } else if ((array[1][0] == value && array[2][0] == value)) {
                isWon = true;
                this.setState({ winningList: "0,0)(1,0)(2,0" });
            }
        } else if ("0,1" == positionString) {
            if ((array[0][0] == value && array[0][2] == value)) {
                isWon = true;
                this.setState({ winningList: "0,1)(0,0)(0,2" });
            } else if (array[1][1] == value && array[2][1] == value) {
                this.setState({ winningList: "0,1)(1,1)(2,1" });
                isWon = true;
            }
        } else if ("0,2" == positionString) {
            if (array[0][0] == value && array[0][1] == value) {
                isWon = true;
                this.setState({ winningList: "0,2)(0,0)(0,1" });
            } else if (array[1][1] == value && array[2][0] == value) {
                isWon = true;
                this.setState({ winningList: "0,2)(1,1)(2,0" });
            } else if (array[1][2] == value && array[2][2] == value) {
                isWon = true;
                this.setState({ winningList: "0,2)(1,2)(2,2" });
            }
        } else if ("1,0" == positionString) {
            if ((array[0][0] == value && array[2][0] == value)) {
                isWon = true;
                this.setState({ winningList: "1,0)(0,0)(2,0" });
            } else if (array[1][1] == value && array[1][2] == value) {
                isWon = true;
                this.setState({ winningList: "1,0)(1,1)(1,2" });
            }
        } else if ("1,1" == positionString) {
            if ((array[0][0] == value && array[2][2] == value)) {
                isWon = true;
                this.setState({ winningList: "1,1)(0,0)(2,2" });
            } else if (array[0][1] == value && array[2][1] == value) {
                isWon = true;
                this.setState({ winningList: "1,1)(0,1)(2,1" });
            } else if (array[0][2] == value && array[2][0] == value) {
                isWon = true;
                this.setState({ winningList: "1,1)(0,2)(2,0" });
            } else if ((array[1][0] == value && array[1][2] == value)) {
                isWon = true;
                this.setState({ winningList: "1,1)(1,0)(1,2" });
            }

        } else if ("1,2" == positionString) {
            if ((array[0][2] == value && array[2][2] == value)) {
                isWon = true;
                this.setState({ winningList: "1,2)(0,2)(2,2" });
            } else if (array[1][0] == value && array[1][1] == value) {
                isWon = true;
                this.setState({ winningList: "1,2)(1,0)(1,1" });
            }
        } else if ("2,0" == positionString) {
            if ((array[0][0] == value && array[1][0] == value)) {
                isWon = true;
                this.setState({ winningList: "2,0)(0,0)(1,0" });
            } else if (array[1][1] == value && array[0][2] == value) {
                isWon = true;
                this.setState({ winningList: "2,0)(1,1)(0,2" });
            } else if (array[2][1] == value && array[2][2] == value) {
                isWon = true;
                this.setState({ winningList: "2,0)(2,1)(2,2" });
            }

        } else if ("2,1" == positionString) {
            if ((array[1][1] == value && array[0][1] == value)) {
                isWon = true;
                this.setState({ winningList: "2,1)(1,1)(0,1" });
            } else if (array[2][0] == value && array[2][2] == value) {
                isWon = true;
                this.setState({ winningList: "2,1)(2,0)(2,2" });
            }

        } else if ("2,2" == positionString) {
            if ((array[0][2] == value && array[1][2] == value)) {
                isWon = true;
                this.setState({ winningList: "2,2)(0,2)(1,2" });
            } else if (array[1][1] == value && array[0][0] == value) {
                isWon = true;
                this.setState({ winningList: "2,2)(1,1)(0,0" });
            } else if (array[2][0] == value && array[2][1] == value) {
                isWon = true;
                this.setState({ winningList: "2,2)(2,0)(2,1" });
            }
        }

        return isWon;

    }

}