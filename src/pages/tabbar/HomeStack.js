import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './HomeStack/Home';

const Stack = createStackNavigator();
const home = 'home'

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, }}>
      <Stack.Screen name={home} component={Home}/>
    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})