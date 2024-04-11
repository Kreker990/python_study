import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SimpleLineIcons } from '@expo/vector-icons';
import { colors } from '../../common/CommonStyle';
import HomeStack from '../tabbar/HomeStack';
import TestStack from '../tabbar/TestStack';

const home = 'homeStack';
const test = 'testStack';
const TabBar = createBottomTabNavigator();

const TabbarNav = () => {
    return (
        <TabBar.Navigator initialRouteName={home}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;
                    if (rn == home) {
                        iconName = focused ? 'graduation' : 'graduation'
                    } else if (rn == test) {
                        iconName = focused ? 'layers' : 'layers'
                    } 
                    return <SimpleLineIcons name={iconName} color={color} size={24} />
                },
                title: route.name == home ? 'Главная' : 'Тест',
                tabBarActiveTintColor: colors.blue,
                tabBarInactiveTintColor: '#B7B7B7',
                tabBarShowLabel: true,
                tabBarStyle: {
                    height: 80,
                    paddingBottom: 20,
                    backgroundColor: '#F8F8F8',
                },
                tabBarHideOnKeyboard: true,
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: '600',
                    lineHeight: 17,
                }
            })}
        >
            <TabBar.Screen name={home} options={{ headerShown: false }} component={HomeStack} />
            <TabBar.Screen name={test} options={{ headerShown: false }} component={TestStack} />
        </TabBar.Navigator>
    )
}

export default TabbarNav

const styles = StyleSheet.create({})