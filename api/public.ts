import { request } from '@/utils/request'

export const PostLogin = (data: any) => {
  return request({
    url: '/user/login',
    method: 'POST',
    params: null,
    data: data,
    headers: null
  })
}

export const GetAssetsPage = (params: any) => {
  return request({
    url: '/user/assets/page',
    method: 'GET',
    params: params,
    data: null,
    headers: null
  })
}
