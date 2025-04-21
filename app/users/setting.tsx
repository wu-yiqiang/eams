import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Link, Stack, router, Tabs } from 'expo-router'
import { Appbar, Button } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Setting() {
  const { bottom } = useSafeAreaInsets()
  const handleResetPassword = () => {}
  const handleTheme = () => {
    router.navigate({ pathname: '/users/theme' })
  }
  const handleLanguage = () => {
    router.navigate({ pathname: '/users/language' })
  }
  const handleLoginOut = async () => {
    await AsyncStorage.removeItem('EAMSUserData')
    router.navigate({ pathname: '/login' })
  }
  return (
    <View style={styles.Setting}>
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
        <Appbar.Content title="应用设置" />
      </Appbar.Header>
      <View style={styles.SettingContents}>
        <View style={styles.settingItem}>
          <TouchableOpacity onPress={handleResetPassword}>
            <View style={styles.setting}>
              <View style={styles.left}>
                <AntDesign name="user" size={18} color="#0096fa" />
                <Text style={styles.texts}>{'编辑用户信息'}</Text>
              </View>
              <AntDesign name="right" size={14} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleResetPassword}>
            <View style={styles.setting}>
              <View style={styles.left}>
                <AntDesign name="lock" size={18} color="#0096fa" />
                <Text style={styles.texts}>{'修改密码'}</Text>
              </View>
              <AntDesign name="right" size={14} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTheme}>
            <View style={styles.setting}>
              <View style={styles.left}>
                <Ionicons name="color-palette-outline" size={18} color="#0096fa" />
                <Text style={styles.texts}>{'主题设置'}</Text>
              </View>
              <AntDesign name="right" size={14} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLanguage}>
            <View style={styles.setting}>
              <View style={styles.left}>
                <MaterialIcons name="language" size={18} color="#0096fa" />
                <Text style={styles.texts}>{'语言设置'}</Text>
              </View>
              <AntDesign name="right" size={14} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <Button mode="contained" onPress={handleLoginOut}>
          退出登录
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Setting: {
    flex: 1
  },
  SettingContents: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 20,
    rowGap: 30
  },
  settingItem: {
    borderRadius: 4,
    backgroundColor: '#ffffff',
    display: 'flex',
    borderBottomWidth: 0,
    flexDirection: 'column'
  },
  setting: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderRadius: 4
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
  }
})
