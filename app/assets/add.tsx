import { View, Text, StyleSheet } from "react-native";
import { Link, Stack, router } from 'expo-router'
import { Appbar } from "react-native-paper";
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function AssetsAdd() {
  const { bottom } = useSafeAreaInsets()
  return (
    <View style={styles.AssetsAdd}>
      <Appbar.Header
        mode="small"
        elevated
        style={[
          {
            height: 40
          }
        ]}
        safeAreaInsets={{ bottom }}
      >
        <Appbar.BackAction
          onPress={() => {
            router.back()
          }}
        />
        <Appbar.Content title="维修新增" />
      </Appbar.Header>
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      <Text>维修新增页面</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  AssetsAdd: {
    flex: 1,
  },
});