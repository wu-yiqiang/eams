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

export const GetMaintainPage = (params: any) => {
  return request({
    url: '/maintain/page',
    method: 'POST',
    data: params,
  })
}
