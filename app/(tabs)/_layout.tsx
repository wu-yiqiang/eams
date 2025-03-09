import { View, Button, StyleSheet, ScrollView } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Link, Stack, router, Tabs } from 'expo-router'

function TabBarIcon(props) {
  return <SimpleLineIcons size={28} {...props} />
}

export default function TabLayout() {
  const handleAdd = () => {
    router.navigate({ pathname: '/assets/add' })
  }
  const handleScan = () => {}
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0096fa',
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          headerShown: true,
          headerRight(props) {
            return (
              <View style={styles.HomeToolBar}>
                <AntDesign name="search1" size={26} color="black" />
                <Ionicons name="scan-outline" onPress={handleScan} size={26} color="black" />
                <Ionicons onPress={handleAdd} name="add-circle-outline" size={28} color="black" />
              </View>
            )
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
        }}
      />
      <Tabs.Screen
        name="workbench"
        options={{
          title: '工作台',
          headerShown: true,
          tabBarIcon: ({ color }) => <MaterialIcons name="workspaces" size={28} color={color} />
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: '用户',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  HomeToolBar: {
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    columnGap: 10
  }
})
