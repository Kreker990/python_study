import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { block, verticalIndent } from '../../../common/CommonStyle'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import logo from '../../../../assets/img/logo.png'
import book from '../../../../assets/Python-1.pdf'
import WebView from 'react-native-webview'

const Home = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView>
      {verticalIndent(insets.top)}
      <View style={[styles.container, block.container]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.title}>BrainBox</Text>
        </View>
        <TouchableOpacity>
          <Text>
            Полезные ссылки
          </Text>
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
  title: {
    fontSize: 20,
    fontWeight: '600'
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'stretch'
  },
})