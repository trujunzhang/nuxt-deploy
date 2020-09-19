import axios, { AxiosRequestConfig, AxiosPromise } from 'axios' // Without '* as'

export class AxiosUtils {
  static async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    const pushPromise: AxiosPromise<T> = axios.post(url, data, config)

    // Wait for both requests to resolve
    const [res] = await Promise.all([pushPromise])

    return res
  }

  static async get<T = any>(url: string, config?: AxiosRequestConfig) {
    const getPromise: AxiosPromise<T> = axios.get(url, config)

    // Wait for both requests to resolve
    const [res] = await Promise.all([getPromise])

    return res
  }
}
