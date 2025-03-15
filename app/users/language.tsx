import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useState } from 'react'
import { Link, router } from 'expo-router'
import { Appbar, RadioButton } from 'react-native-paper'
export default function Language() {
  const [checked, setChecked] = useState('first')
  return (
    <View style={styles.Language}>
      <Appbar.Header mode="small" elevated>
        <Appbar.BackAction
          onPress={() => {
            router.back()
          }}
        />
        <Appbar.Content title="语言设置" />
      </Appbar.Header>
      <View style={styles.LanguageContents}>
        <View style={styles.LanguageItem}>
          <RadioButton value="first" status={checked === 'first' ? 'checked' : 'unchecked'} onPress={() => setChecked('first')} />
          <Text style={styles.LanguageText}>中文</Text>
        </View>
        <View style={styles.LanguageItem}>
          <RadioButton value="second" status={checked === 'second' ? 'checked' : 'unchecked'} onPress={() => setChecked('second')} />
          <Text style={styles.LanguageText}>英语</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Language: {
    flex: 1
  },
  LanguageContents: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 20,
    overflow: 'scroll',
    backgroundColor: '#fff'
  },
  LanguageItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  LanguageText: {
    fontSize: 14,
    fontWeight: 500
  }
})
