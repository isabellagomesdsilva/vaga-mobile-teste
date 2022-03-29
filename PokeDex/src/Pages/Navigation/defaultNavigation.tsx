import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../Home/';
import { Welcome } from '../Welcome/';
import { About } from '../About/';

const Navegacao = createStackNavigator();

export function DefaultNavigation() {
  return (
    <Navegacao.Navigator>
      <Navegacao.Screen name="Welcome" component={Welcome} />
      <Navegacao.Screen name="Home" component={Home} />
      <Navegacao.Screen name="About" component={About} />
    </Navegacao.Navigator>
  )
}
