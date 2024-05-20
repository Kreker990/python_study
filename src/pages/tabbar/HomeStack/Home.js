import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { block, verticalIndent } from '../../../common/CommonStyle'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import logo from '../../../../assets/img/logo.png'
import book from '../../../../assets/Python-1.pdf'
import { MaterialIcons } from '@expo/vector-icons';

const Home = () => {
  const links = [
    {
      id: 1,
      text: 'Знакомство с компьютером',
      link: 'https://www.youtube.com/watch?v=MunPNYumw6M',
    },
    {
      id: 2,
      text: 'Что такое Python?',
      link: 'https://www.youtube.com/watch?v=12rcdJKSGFc',
    },
    {
      id: 3,
      text: 'Кто разработал Python?',
      link: 'https://tproger.ru/articles/python-v-licah-kto-sozdal-yazyk-i-kogo-vspominat-za-lyambda-funkcii',
    },
  ]
  const handleClick = (url) => {
    Linking.openURL(url);
  }

  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={{ backgroundColor: '#d4ebff' }}>
      {verticalIndent(insets.top)}
      <View style={[styles.container, block.container,]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.main}>BrainBox</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.title}>
            Полезные ссылки
          </Text>
          {
            links.map((el, i) => {
              return (
                <TouchableOpacity key={i} style={styles.linkCard} onPress={() => handleClick(el.link)}>
                  <Text style={styles.textLink}>{el.text}</Text>
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
                </TouchableOpacity>
              )
            })
          }
        </TouchableOpacity>
      </View>
      {verticalIndent(insets.bottom)}
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    fontSize: 20,
    fontWeight: '600'
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'stretch'
  },
  linkCard: {
    backgroundColor: '#7284cf',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  icon: {
    width: 5,
    height: 10,
  },
  textLink: {
    fontSize: 15,
    lineHeight: 20,
    color: 'white',
  },
})