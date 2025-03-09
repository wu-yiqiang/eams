import { View, Text, StyleSheet,ScrollView } from 'react-native'
import { Link, Stack } from 'expo-router'
export default function Theme() {
  return (
    <View style={styles.Theme}>
      <Stack.Screen
        options={{
          title: '主题设置'
        }}
      />
      <Text>主题设置</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Theme: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 20,
    overflow: 'scroll'
  }
})