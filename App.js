/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { AppRegistry } from "react-native";
import Game from './app/game/Game';
import Base from './app/base/Base';


 const MainNavigator = createStackNavigator({
        Base: {screen: Base, navigationOptions: {
            header: null,
        }},
        Game: {screen: Game, navigationOptions: {
            header: null,
        }},
},
{
    initialRouteName: 'Base',
});

const App = createAppContainer(MainNavigator); 

export default App;
