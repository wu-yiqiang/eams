import { View, Text } from "react-native";
import { Link, Stack } from 'expo-router'
export default function Question() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
          title: '常见问题',
        }}
      />
    </View>
  )
}
