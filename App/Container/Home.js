import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


import CurrencyList from './CurrencyList';
import LoginView from './LoginView';
import SignUp from './SignUp';
import CurrencyDetails from '../Components/List/CurrencyDetails';
import AddCurrency from '../Components/List/AddCurrency';
import CameraScan from '../Components/CameraScan';

//konstruerer en stacknavigator til å håndtere views(currency list)
const StackNavigator = createStackNavigator({
    'Currency List': {screen: CurrencyList},
    Login: {screen: LoginView},
    'Sign Up' : {screen: SignUp},
    'Detailed currency': {screen: CurrencyDetails},
},
{initialRouteKey: 'CurrencyList'}
);
//konstruerer en annen stack navigator for camera (her kommer andre views i videre utvikling)
const CameraNavigator = createStackNavigator({
    'Scan to convert': {screen: CameraScan}
});

//bottom tab navigator for å skille mellom de to forskjellige stacknavigators
const TabNavigator = createBottomTabNavigator({
    Camera: {screen: CameraNavigator,
        navigationOptions: {
            tabBarLabel:"Scan",
            tabBarIcon: ({ tintColor }) => (
                <SimpleLineIcons name="camera" size={24} color={tintColor} />
            )
        },
    },
    Currency: {screen: StackNavigator,
        navigationOptions: {
            tabBarLabel:"Currency",
            tabBarIcon: ({ tintColor }) => (
                <Entypo name="credit" size={24} color={tintColor} />
            )
        },
    },
  });
  const AppContainer = createAppContainer(TabNavigator);


//eksporterer klassen home (og da appcontainer), som vil bli kaldt i index.js
export default class Home extends React.Component{
    render() {
        return <AppContainer/>;
    }
};
