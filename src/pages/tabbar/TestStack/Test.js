import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'react-native';
import { block, widthScale } from '../../../common/CommonStyle';
import { useDispatch, useSelector } from 'react-redux';

const Test = ({ route }) => {
  const data = route.params.id;
  console.log(data)
  const navigation = useNavigation();
  const [currentId, SetCurrentId] = useState(0);
  const [countCorrect, SetCountCorrect] = useState(0);
  const [countInCorrect, SetCountInCorrect] = useState(0);
  const save1 = async (value) => {
    try {
      await AsyncStorage.setItem('countCorrect', String(value))
    } catch (err) {
      alert(err)
    }
  }
  const save2 = async (value) => {
    try {
      await AsyncStorage.setItem('countInCorrect', String(value))
    } catch (err) {
      alert(err)
    }
  }
  return (
    <View style={[block.upperIndent, block.container,]}>
      {
        data.test.map((el, id) => {
          return (
            id == currentId && <View key={id}>
              <Text style={styles.titleQues}>
                Вопрос №{id + 1}
              </Text>
              <Text style={styles.desc}>
                {el.question}
              </Text>
              <View style={styles.blockButton}>
                <TouchableOpacity style={styles.card}
                  onPress={() => {
                    if (currentId + 1 == data.test.length) {
                      navigation.navigate('result')
                      if (el.answer == 'A') {
                        save1(countCorrect + 1)
                        save2(countInCorrect)
                      } else {
                        save1(countCorrect)
                        save2(countInCorrect + 1)
                      }
                    } else {
                      SetCurrentId(currentId + 1)
                      if (el.answer == 'A') {
                        SetCountCorrect(countCorrect + 1)
                      } else {
                        SetCountInCorrect(countInCorrect + 1)
                      }
                    }
                  }}
                >
                  <Text style={{ width: '100%', color: 'white' }}>a) {el.a}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}
                  onPress={() => {
                    if (currentId + 1 == data.test.length) {
                      navigation.navigate('result')
                      if (el.answer == 'B') {
                        save1(countCorrect + 1)
                        save2(countInCorrect)
                      } else {
                        save1(countCorrect)
                        save2(countInCorrect + 1)
                      }
                    } else {
                      SetCurrentId(currentId + 1)
                      if (el.answer == 'B') {
                        SetCountCorrect(countCorrect + 1)
                      } else {
                        SetCountInCorrect(countInCorrect + 1)
                      }
                    }
                  }}
                >
                  <Text style={{ width: '100%', color: 'white' }}>b) {el.b}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}
                  onPress={() => {
                    if (currentId + 1 == data.test.length) {
                      navigation.navigate('result')
                      if (el.answer == 'C') {
                        save1(countCorrect + 1)
                        save2(countInCorrect)
                      } else {
                        save1(countCorrect)
                        save2(countInCorrect + 1)
                      }
                    } else {
                      SetCurrentId(currentId + 1)
                      if (el.answer == 'C') {
                        SetCountCorrect(countCorrect + 1)
                      } else {
                        SetCountInCorrect(countInCorrect + 1)
                      }
                    }
                  }}
                >
                  <Text style={{ width: '100%', color: 'white' }}>c) {el.c}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}
                  onPress={() => {
                    if (currentId + 1 == data.test.length) {
                      navigation.navigate('result')
                      if (el.answer == 'D') {
                        save1(countCorrect + 1)
                        save2(countInCorrect)
                      } else {
                        save1(countCorrect)
                        save2(countInCorrect + 1)
                      }
                    } else {
                      SetCurrentId(currentId + 1)
                      if (el.answer == 'D') {
                        SetCountCorrect(countCorrect + 1)
                      } else {
                        SetCountInCorrect(countInCorrect + 1)
                      }
                    }
                  }}
                >
                  <Text style={{ width: '100%', color: 'white' }}>d) {el.d}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        })
      }
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
  button: {
    width: widthScale * 165,
    height: widthScale * 165,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    padding: widthScale * 10,
    marginBottom: widthScale * 15,
    alignItems: 'center'
  },
  blockButton: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: widthScale * 50,
  },
  titleQues: {
    fontSize: 22,
    textAlign: 'center'
  },
  desc: {
    fontSize: 18,
    marginTop: 20
  },
  img: {
    width: widthScale * 90,
    height: widthScale * 90,
  },
  card: {
    backgroundColor: '#7284cf',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
})