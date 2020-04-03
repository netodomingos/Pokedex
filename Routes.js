import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Home from './src/Pages/Home/Home'
import Pokedex from './src/Pages/Pokedex/Pokedex'

const Stack = createStackNavigator();

export default function Routes(){
    return(
    <NavigationContainer>
      <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pokedex" component={Pokedex} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}