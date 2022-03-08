import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

import RootStackNav from './Navigation/RootStackNav';

//import CountContextProvider from './src/countcont.js';

import{ NavigationContainer }from '@react-navigation/native';

export default function App() {
  
  const CountContext= useCountContext();
  console.log(CountContext);

  return (
    <NavigationContainer>
    <RootStackNav>

    </RootStackNav>
    </NavigationContainer>
  );
}
