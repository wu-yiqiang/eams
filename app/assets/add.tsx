import { View, Text, StyleSheet } from "react-native";
import { Link, Stack } from 'expo-router'
export default function AssetsAdd() {
  return (
    <View style={styles.AssetsAdd}>
      <Stack.Screen
        options={{
          title: "资产新增",
        }}
      />
      <Text>资产新增页面</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  AssetsAdd: {
    flex: 1,
    padding: 10,
  },
});