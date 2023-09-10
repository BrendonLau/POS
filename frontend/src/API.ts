import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { type IAddTransactionRes, type IGetTransactionsRes, type IPricesRes } from './types/response'
import { type IAddTransactionReq } from './types/request'

export const baseUrl: string = 'http://localhost:4000'

export const getPricesApi = async (): Promise<AxiosResponse<IPricesRes>> => {
  try {
    const res: AxiosResponse<IPricesRes> = await axios.get(baseUrl + '/prices')
    return res
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('Unknown Error')
    }
  }
}

export const getTransactionsApi = async (): Promise<AxiosResponse<IGetTransactionsRes>> => {
  try {
    const res: AxiosResponse<IGetTransactionsRes> = await axios.get(baseUrl + '/transactions')
    return res
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('Unknown Error')
    }
  }
}

export const addTransactionApi = async (formData: IAddTransactionReq): Promise<AxiosResponse<IAddTransactionRes>> => {
  try {
    const res: AxiosResponse<IAddTransactionRes> = await axios.post(baseUrl + '/transactions', formData)
    return res
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('Unknown Error')
    }
  }
}
