import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Test from './TestStack/Test';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const test = 'test';

const TestStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={test} component={Test} />
        </Stack.Navigator>
    )
}

export default TestStack

const styles = StyleSheet.create({})