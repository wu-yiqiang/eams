import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Logo from '@/assets/images/logo.png'
import { Stack } from 'expo-router'
export default function About() {
  return (
    <View style={styles.About}>
      <Stack.Screen
        options={{
          title: '关于我们'
        }}
      />
      <View style={styles.logoinfo}>
        <Image style={styles.logo} source={Logo} />
        <View style={styles.appname}>
          <Text style={styles.name}>EAMS APP</Text>
        </View>
      </View>
      <View style={styles.infoitem}>
        <View style={styles.item}>
          <Text style={styles.title}>版本信息</Text>
          <View style={styles.right}>
            <Text style={styles.info}>v1.0.0</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>官方邮箱</Text>
          <View style={styles.right}>
            <Text style={styles.info}>sutter.jhon@outlook.com</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>服务热线</Text>
          <View style={styles.right}>
            <Text style={styles.info}>400-999-9988</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>官方网站</Text>
          <View style={styles.right}>
            <Text style={styles.info}>https://sutter9527.top</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  About: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 20,
    overflow: 'scroll',
    rowGap: 50,
  },
  logoinfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 10
  },
  logo: {
    width: 80,
    height: 80,
    aspectRatio: '1/1'
  },
  appname: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  name: {
    fontSize: 20
  },
  infoitem: {
    borderRadius: 4,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column'
  },
  item: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  title: {
    fontSize: 14
  },
  info: {
    fontSize: 12,
    color: '#5e5e5f'
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    columnGap: 6
  }
})