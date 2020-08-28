import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from './src/navigator/';
const Stack = createStackNavigator();
const RootStack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function RootStackScreen() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode={'none'}>
        <RootStack.Screen
          name="Main"
          component={App}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootStackScreen;
