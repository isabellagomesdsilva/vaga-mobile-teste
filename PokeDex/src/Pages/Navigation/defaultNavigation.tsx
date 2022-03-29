import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../Home/';
import { Welcome } from '../Welcome/';
import { About } from '../About/';

const StackNavigator = createStackNavigator();

export function DefaultNavigation() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Welcome" component={Welcome} />
      <StackNavigator.Screen name="Home" component={Home} />
      <StackNavigator.Screen name="About" component={About} />
    </StackNavigator.Navigator>
  )
}
