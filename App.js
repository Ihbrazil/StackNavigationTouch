import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from "./componentes/Inicio/index.js";
import Carros from "./componentes/Carros/index.js";
import Motos from "./componentes/Motos/index.js";

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component = { Inicio } />
        <Stack.Screen name="Carros" component = { Carros } />
        <Stack.Screen name="Motos" component = { Motos } />
      </Stack.Navigator>
    </NavigationContainer>
  )
};