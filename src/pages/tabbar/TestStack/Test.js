import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { block, colors, verticalIndent } from '../../../common/CommonStyle'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

const Test = () => {
  const insets = useSafeAreaInsets();
  const test = useSelector(s => s.test)
  console.log(test)
  return (
    <ScrollView>
      {verticalIndent(insets.top)}
      <View style={[styles.container, block.container]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.title}>Тест</Text>
        </View>
        {
          test.map(el => {
            return (
              <TouchableOpacity key={el.id} style={styles.card}>
                <View style={{flexDirection: 'column', gap: 10}}>
                  <Text style={styles.name}>{el.name}</Text>
                  <Text style={styles.text}>{el.name}</Text>
                </View>
                <View style={styles.countBlock}>
                  <Text style={styles.count}>{el.test.length}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
      {verticalIndent(insets.bottom)}
    </ScrollView>
  )
}

export default Test

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600'
  },
  card: {
    backgroundColor: '#7284cf',
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  count: {
    color: 'black',
    fontSize: 12
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400'
  },
  countBlock: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  }
})