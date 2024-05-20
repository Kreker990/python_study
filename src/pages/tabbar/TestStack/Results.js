import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { block } from '../../../common/CommonStyle';

const Results = () => {
    console.log(1111)
    const navigation = useNavigation();
    const [countCorrect, SetCountCorrect] = useState(0);
    const [countInCorrect, SetCountInCorrect] = useState(0);
    const get1 = async () => {
        try {
            let ochko = await AsyncStorage.getItem('countCorrect')
            SetCountCorrect(ochko)
        } catch (err) {
            alert(err)
        }
    }
    const get2 = async () => {
        try {
            let ochko = await AsyncStorage.getItem('countInCorrect')
            SetCountInCorrect(ochko)
        } catch (err) {
            alert(err)
        }
    }
    useEffect(() => {
        get1()
        get2()
    }, [])

    return (
        <View style={[block.container, block.upperIndent]}>
            <Text style={styles.result}>Результаты:</Text>
            <Text style={styles.text}>правильные ответы: {countCorrect}</Text>
            <Text style={styles.text}>не правильные ответы: {countInCorrect}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate('testScreen')} style={styles.button}>
                    <Text style={{ fontSize: 16, color: 'white' }}>Перейти к тесту</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Results

const styles = StyleSheet.create({
    result: {
        fontSize: 24,
        marginVertical: 30
    },
    text: {
        fontSize: 20,
        marginVertical: 5
    },
    button: {
        backgroundColor: '#7284cf',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})