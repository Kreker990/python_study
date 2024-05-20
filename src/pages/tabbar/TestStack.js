import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Test from './TestStack/Test';
import TestScreen from './TestStack/TestScreen';
import Results from './TestStack/Results';

const Stack = createStackNavigator();
const test = 'test';
const result = 'result';
const testScreen = 'testScreen';

const TestStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={testScreen} options={{ headerShown: false, gestureEnabled: false, }} component={TestScreen} />
            <Stack.Screen name={test} options={{ headerShown: false, gestureEnabled: false, }} component={Test} />
            <Stack.Screen name={result} options={{ headerShown: false, gestureEnabled: false, }} component={Results} />
        </Stack.Navigator>
    )
}

export default TestStack

const styles = StyleSheet.create({})