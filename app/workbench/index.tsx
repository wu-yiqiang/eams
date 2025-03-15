import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Link, router, Tabs } from 'expo-router'
import { Appbar, Icon,Snackbar } from 'react-native-paper'
import { useState } from 'react'
export default function Workbench() {
  const [visible, setVisible] = useState(false)
  const handleUserinfo = () => {
    router.navigate({ pathname: '/users/profile' })
  }
  const handleTip = () => {
     setVisible(true)
  }
  const closeTips = () => {
    setVisible(false)
  }

  return (
    <View style={styles.Workbench}>
      <Appbar.Header mode="small" elevated>
        <Appbar.Content title="工作台" />
      </Appbar.Header>
      <Snackbar visible={visible} onDismiss={closeTips} duration={2000}>
        该功能正在加紧开发中，请耐心等待。。。
      </Snackbar>
      <View style={styles.boxs}>
        <Text onPress={handleTip}>
          <View style={styles.itembox}>
            <Icon source="screwdriver" size={40} />
            <Text style={styles.texts}>报修</Text>
          </View>
        </Text>
        <Text onPress={handleTip}>
          <View style={styles.itembox}>
            <Icon source="chart-bar" size={40} />
            <Text style={styles.texts}>报表</Text>
          </View>
        </Text>
        <Text onPress={handleTip}>
          <View style={styles.itembox}>
            <Icon source="database-arrow-up" size={40} />
            <Text style={styles.texts}>入库</Text>
          </View>
        </Text>
        <Text onPress={handleTip}>
          <View style={styles.itembox}>
            <Icon source="clipboard-edit-outline" size={40} />
            <Text style={styles.texts}>登记</Text>
          </View>
        </Text>
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
