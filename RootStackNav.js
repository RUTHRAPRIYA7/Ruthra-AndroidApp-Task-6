import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from"../Screens";
import SecondScreen from"../Screens";

const Stack = createNativeStackNavigator();

export default function RootStackNav()
{
    <Stack.Navigator>
     <Stack.Screen name="First" component={FirstScreen}/>
     <Stack.Screen name="Second" component={SecondScreen}/>
    </Stack.Navigator>
  
}