import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Feather from '@expo/vector-icons/Feather'
import { Link, router, Tabs } from 'expo-router'
import avator from '@/assets/images/user.jpeg'
export default function Workbench() {
  const handleUserinfo = () => {
    router.navigate({ pathname: '/users/profile' })
  }

  return (
    <View style={styles.Workbench}>
      <View style={styles.boxs}>
        <View style={styles.itembox}>
          <MaterialIcons name="home-repair-service" size={40} color="#0096fa" />
          <Text style={styles.texts}>报修</Text>
        </View>
        <View style={styles.itembox}>
          <AntDesign name="barschart" size={40} color="#0096fa" />
          <Text style={styles.texts}>报表</Text>
        </View>
        <View style={styles.itembox}>
          <Feather name="database" size={40} color="#0096fa" />
          <Text style={styles.texts}>入库</Text>
        </View>
        <View style={styles.itembox}>
          <AntDesign name="calendar" size={40} color="#0096fa" />
          <Text style={styles.texts}>登记</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Workbench: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  boxs: {
    padding: 20,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 30,
  },
  itembox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 6
  },
  texts: {
    fontSize: 14
  }
})
