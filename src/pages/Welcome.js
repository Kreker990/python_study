import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { block, colors, verticalIndent } from '../common/CommonStyle'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import icon from '../../assets/img/icon.webp'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { getTest } from '../redux/actions/getTest';

const Welcome = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getTest())
  },[])
  return (
    <View style={[styles.container]}>
      {verticalIndent(insets.top + 100)}
      <View style={[styles.screen, block.container]}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>Добро пожаловать в BrainBox</Text>
        <Text style={styles.content}>Здесь начинается ваше увлекательное путешествие в мир программирования. Наше приложение поможет вам шаг за шагом освоить Python – один из самых популярных и востребованных языков программирования в мире.</Text>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('tabbar')}>
          <Text style={styles.btnText}>Начать</Text>
        </TouchableOpacity>
      </View>
      {verticalIndent(insets.bottom)}
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.phon,
    flexDirection: 'column',
  },
  icon: {
    width: 200,
    height: 200,
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 22,
    backgroundColor: colors.blue25,
    borderRadius: 10,
  },
  btnText: {
    color: colors.blue,
    fontSize: 14
  },
  title: {
    fontSize: 22,
    color: colors.blue,
    fontWeight: '600'
  },
  content: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    width: '100%',
    lineHeight: 20
  },
  screen: {
    flex: 1,
    flexDirection: 'column',
    gap: 30,
    alignItems: 'center',
  }
})