import { View, Text, StyleSheet, ScrollView } from 'react-native'
import {useState} from 'react'
import { Link, router } from 'expo-router'
import { Appbar, RadioButton } from 'react-native-paper'
export default function Theme() {
  const [checked, setChecked] = useState('first')
  return (
    <View style={styles.Theme}>
      <Appbar.Header mode="small" elevated>
        <Appbar.BackAction
          onPress={() => {
            router.back()
          }}
        />
        <Appbar.Content title="主题设置" />
      </Appbar.Header>
      <View style={styles.ThemeContents}>
        <View style={styles.ThemeItem}>
          <RadioButton value="first" status={checked === 'first' ? 'checked' : 'unchecked'} onPress={() => setChecked('first')} />
          <Text style={styles.themeText}>浅色模式</Text>
        </View>
        <View style={styles.ThemeItem}>
          <RadioButton value="second" status={checked === 'second' ? 'checked' : 'unchecked'} onPress={() => setChecked('second')} />
          <Text style={styles.themeText}>深色模式</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Theme: {
    flex: 1
  },
  ThemeContents: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 20,
    overflow: 'scroll',
    backgroundColor: '#fff'
  },
  ThemeItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  themeText: {
    fontSize: 14,
    fontWeight: 500
  }
})