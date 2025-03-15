import { View, Text, StyleSheet } from "react-native";
import { Link, Stack, router } from 'expo-router'
import { Appbar } from "react-native-paper";
export default function AssetsAdd() {
  return (
    <View style={styles.AssetsAdd}>
      <Appbar.Header mode="small" elevated>
        <Appbar.BackAction
          onPress={() => {
            router.back()
          }}
        />
        <Appbar.Content title="资产新增" />
      </Appbar.Header>
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      <Text>资产新增页面</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  AssetsAdd: {
    flex: 1,
  },
});