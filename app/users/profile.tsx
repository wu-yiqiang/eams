import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import Octicons from '@expo/vector-icons/Octicons'
import { router, Stack } from 'expo-router'
import { Appbar } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Profile() {
  const { bottom } = useSafeAreaInsets()
  const handleEditInfo = () => {}
  return (
    <View style={styles.Profile}>
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
        <Appbar.Content title="用户信息" />
      </Appbar.Header>
      <View style={styles.ProfileContents}>
        <View style={styles.infoitems}>
          <View style={styles.infoitem}>
            <View style={styles.left}>
              <AntDesign name="user" size={18} color="black" />
              <Text style={styles.texts}>用户</Text>
            </View>
            <Text style={styles.info}>Sutter</Text>
          </View>
          <View style={styles.infoitem}>
            <View style={styles.left}>
              <AntDesign name="contacts" size={18} color="black" />
              <Text style={styles.texts}>联系方式</Text>
            </View>
            <Text style={styles.info}>157709670845</Text>
          </View>
          <View style={styles.infoitem}>
            <View style={styles.left}>
              <AntDesign name="mail" size={18} color="black" />
              <Text style={styles.texts}>邮箱</Text>
            </View>
            <Text style={styles.info}>sutter.jhon@outlook.com</Text>
          </View>
          <View style={styles.infoitem}>
            <View style={styles.left}>
              <Octicons name="organization" size={18} color="black" />
              <Text style={styles.texts}>部门</Text>
            </View>
            <Text style={styles.info}>系统一部</Text>
          </View>
          <View style={styles.infoitem}>
            <View style={styles.left}>
              <SimpleLineIcons name="organization" size={18} color="black" />
              <Text style={styles.texts}>岗位</Text>
            </View>
            <Text style={styles.info}>网络工程师</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Profile: {
    flex: 1,
  },
  ProfileContents: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    rowGap: 30
  },
  infoitems: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column'
  },
  infoitem: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    columnGap: 4
  },
  texts: {
    fontSize: 14
  },
  info: {
    fontSize: 12
  },
  footer: {
    padding: 20
  }
})

