export interface Request {
  url: string
  method: string
  params: object | null
  data: object | null
  headers: object | null
}
