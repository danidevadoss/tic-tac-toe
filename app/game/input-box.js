import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class InputBox extends Component {

    inputStye = StyleSheet.create({
        input: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#ffff66',
            borderStyle: 'solid',
            borderWidth: 2,
            borderRadius: 1,
        }

    });

    style = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffe6',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 1,
    }

    constructor(props) {
        super(props);
        this.state = {
            isFirstPlayer: props.isFirstPlayer,
            position: props.position,
            style: this.style,
        }
    }

    render() {
        return (<>
            <View style={this.state.style}>
                <TouchableOpacity onPress={this.onClick} underlayColor="white">
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        {
                            this.props.values[this.state.position[0]][this.state.position[1]] == 'X' ?
                                <Text style={{ fontSize: 70, color: 'white' }}>❌</Text> :
                                this.props.values[this.state.position[0]][this.state.position[1]] == 'O' ?
                                    <Text style={{ fontSize: 70, color: 'white' }}>⭕</Text> :
                                    <View style={{ flex: 1, width: 120, alignItems: 'stretch' }} />
                        }
                    </View>
                </TouchableOpacity>
            </View>
        </>);
    }



    onClick = () => {
        //alert(this.state.position);
        //alert(this.props.values);
        //alert(this.props.values[this.state.position[0]][this.state.position[1]]);
        if (!this.props.values[this.state.position[0]][this.state.position[1]]) {
            // if (this.props.isFirstPlayer) {
            //     this.setState({ input: 'X' });
            // } else {
            //     this.setState({ input: 'O' });
            // }

            this.props.onClick(this.state.position);
        }

    }





    

}
