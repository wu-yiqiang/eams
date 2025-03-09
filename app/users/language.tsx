import { View, Text, StyleSheet, ScrollView,Alert } from 'react-native'
// import { CheckBox } from '@rneui/themed'
import { Link, Stack } from 'expo-router'
import * as Updates from 'expo-updates'
import { useState } from 'react'
// import { getLocales } from 'expo-localization'
// import i18n  from '@/local'
export default function Language() {
  // const [language, setLanguage] = useState(i18n.locale)
  const handleLanguage = (value: string) => {
    // setLanguage(value)
    // i18n.locale = value
    // Alert.alert('确认重启')
    // Updates.reloadAsync()
  }
  return (
    <View style={styles.Language}>
      <Stack.Screen
        options={{
          title: '语言设置'
        }}
      />
      {/* <CheckBox checked={i18n.locale === 'en'} onPress={() => handleLanguage('en')} checkedIcon="dot-circle-o" uncheckedIcon="circle-o" title="English" />
      <CheckBox checked={i18n.locale === 'zh'} onPress={() => handleLanguage('zh')} checkedIcon="dot-circle-o" uncheckedIcon="circle-o" title="简体中文" /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  Language: {
    // flex: 1,
    // display: 'flex',
    // justifyContent: 'flex-start',
    // flexDirection: 'column',
    padding: 20,
    // overflow: 'scroll'
  }
})