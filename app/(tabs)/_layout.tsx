import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Link, Stack, router, Tabs } from 'expo-router'
import { Button } from 'react-native-paper'
import { BottomNavigation, Text } from 'react-native-paper'
import { useState } from 'react'
import Assets from '@/app/assets/index'
import Users from '@/app/users/index'
import Workbench from '../workbench'
function TabBarIcon(props: any) {
  return <SimpleLineIcons size={28} {...props} />
}

export default function TabLayout() {
  const handleAdd = () => {
    router.navigate({ pathname: '/assets/add' })
  }
  const handleScan = () => {}
  // return (
  //   <Tabs
  //     screenOptions={{
  //       tabBarActiveTintColor: '#0096fa',
  //       headerShown: false
  //     }}
  //   >
  //     <Tabs.Screen
  //       name="index"
  //       options={{
  //         title: '首页',
  //         headerShown: true,
  //         headerRight(props) {
  //           return (
  //             <View style={styles.HomeToolBar}>
  //               <AntDesign name="search1" size={26} color="black" />
  //               <Ionicons name="scan-outline" onPress={handleScan} size={26} color="black" />
  //               <Ionicons onPress={handleAdd} name="add-circle-outline" size={28} color="black" />
  //             </View>
  //           )
  //         },
  //         tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
  //       }}
  //     />
  //     <Tabs.Screen
  //       name="workbench"
  //       options={{
  //         headerShown: true,
  //         tabBarIcon: ({ color }) => (
  //           <Button icon="camera" mode="contained">
  //             dasda1
  //           </Button>
  //         )
  //       }}
  //     />
  //     <Tabs.Screen
  //       name="users"
  //       options={{
  //         title: '用户',
  //         tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />
  //       }}
  //     />
  //   </Tabs>
  // )
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'assets', title: '资产', focusedIcon: 'clipboard-list', unfocusedIcon: 'clipboard-list-outline' },
    { key: 'workbench', title: '工作台', focusedIcon: 'sitemap', unfocusedIcon: 'sitemap-outline' },
    { key: 'user', title: '用户', focusedIcon: 'account', unfocusedIcon: 'account-outline' }
  ])
  const AssetsRoute = () => <Assets />
  const WorkBenckRoute = () => <Workbench />
  const UserRoute = () => <Users />
  const renderScene = BottomNavigation.SceneMap({
    assets: AssetsRoute,
    workbench: WorkBenckRoute,
    user: UserRoute
  })
  return <BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />
}

const styles = StyleSheet.create({})
