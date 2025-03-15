import { Request } from '@/types/request'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { EventEmitter } from 'events'
import { Link, Stack, router, Tabs } from 'expo-router'
import { Snackbar } from 'react-native-paper'
export const request = async (req: Request) => {
  // const baseURL = 'http://192.168.110.219:8000'
  const baseURL = 'https://sutter9527.top/eams'
  let { url, method = 'GET', params = null, data = null, headers = {} } = req
  let uri = baseURL + url
  const token = await AsyncStorage.getItem('msAppToken')
  const options = {
    method,
    ...{ body: data ? JSON.stringify(data) : null },
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ?? '',
      ...headers
    }
  }
  if (params)
    uri += Object.entries(params)
      .reduce((t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`, Object.keys(params).length ? '?' : '')
      .replace(/&$/, '')
  return fetch(uri, options)
    .then(async (response) => {
      if (!response.ok) {
        const status = response?.status
        if (status == 401) router.navigate({ pathname: '/login' })
        return Promise.reject()
      }
      return await response.json()
    })
    .catch((error) => {
      console.log('服务端发生错误或者网络错误', error)
    })
}
