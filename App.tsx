import 'react-native-gesture-handler';

import React from 'react'
import { Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { StarckNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StarckNavigator/>
    </NavigationContainer>
  )
}

export default App