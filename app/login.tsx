import { View, Text, StyleSheet, Image, TextInput, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Logo from '@/assets/images/logo.png'
import { Link, router, Stack } from 'expo-router'
import { PostLogin } from '@/api/public'
import { useState } from 'react'
import { Button,Snackbar } from 'react-native-paper'

export default function Login() {
  const [formState, setFormState] = useState({ email: 'sutter.wu@outlook.com', password: '1234@Abcd' })
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleLogin = async () => {
    setLoading(true)
    const {data} = await PostLogin(formState).finally(() => {
      setLoading(false)
    })
    const token = data?.token ?? ''
    if (token) {
      await AsyncStorage.setItem('msAppToken', token)
      await AsyncStorage.setItem('EAMSUserData', data)
      setVisible(true)
      router.navigate({ pathname: '/' })
    }
  }
  const handleRegister = () => {
  }
  return (
    <View style={styles.Login}>
      <Stack.Screen
        options={{
          title: '登陆',
          headerShown: false
        }}
      />
      <Snackbar visible={visible} onDismiss={() => {}}>
        登录成功
      </Snackbar>
      <View style={styles.topBox}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.title}>EAMS APP</Text>
      </View>

      <View style={styles.mainBox}>
        <View style={styles.contents}>
          <TextInput style={styles.input} placeholder="邮箱" value={formState.email} onChangeText={(value) => setFormState({ email: value, password: formState.password })} />
          <TextInput style={styles.input} inlineImageLeft="search_icon" value={formState.password} placeholder="密码" secureTextEntry={true} onChangeText={(value) => setFormState({ email: formState.email, password: value })} />
        </View>
        <View style={styles.toolBox}>
          {/* <Button title="注册" onPress={handleRegister} />
          <Button title="登陆" onPress={handleLogin} /> */}
          <Button mode="contained" onPress={handleRegister}>
            注册
          </Button>
          <Button mode="contained" loading={loading} onPress={handleLogin}>
            登录
          </Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Login: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  topBox: {
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 20
  },
  logo: {
    width: 100
  },
  title: {
    fontSize: 20
  },
  mainBox: {
    flex: 1,
    width: '70%'
    // padding: 20
  },
  contents: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 16,
    marginBottom: 50
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    width: '100%',
    fontSize: 14,
    height: 40,
    padding: 10
  },
  toolBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})
