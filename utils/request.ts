import { Request } from '@/types/request'
// import AsyncStorage from '@react-native-async-storage/async-storage'
export const request = async (req: Request) => {
  // const baseURL = 'http://192.168.110.180:8000'
  const baseURL = 'https://sutter9527.top/msapp'
  let { url, method = 'GET', params = null, data = null, headers = {} } = req
  let uri = baseURL + url
 //  const token = await AsyncStorage.getItem('msAppToken')
  const options = {
    method,
    ...{ body: data ? JSON.stringify(data) : null },
    headers: {
      'Content-Type': 'application/json',
      Authorization: '',
      ...headers
    }
  }
  if (params)
    uri += Object.entries(params)
      .reduce((t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`, Object.keys(params).length ? '?' : '')
      .replace(/&$/, '')
  console.log('uri', uri)
  return fetch(uri, options)
    .then((response) => {
      if (!response.ok) {
        console.log('请求接口失败')
        return Promise.reject()
      }
      return response.json()
    })
    .catch((error) => {
      console.log('服务端发生错误或者网络错误')
    })
}
