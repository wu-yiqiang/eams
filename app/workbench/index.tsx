import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Link, router, Tabs } from 'expo-router'
import { Appbar, Icon,Snackbar } from 'react-native-paper'
import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
export default function Workbench() {
    const { bottom } = useSafeAreaInsets()
  
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
        <Appbar.Content title="工作台" />
      </Appbar.Header>

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
      <Snackbar visible={visible} onDismiss={closeTips} duration={2000} style={styles.snackbar}>
        该功能正在加紧开发中，请耐心等待。。。
      </Snackbar>
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
