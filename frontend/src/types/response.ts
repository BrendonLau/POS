export interface IPrice {
  name: string
  amount: string
}

export interface IPricesRes {
  message: string
  status: string
  prices: IPrice[]
}

export interface IAddTransactionRes {
  message: string
  status: string
}

export interface ITransaction {
  timestamp: Date
  items: IRow[]
  total: number
}

export interface IRow {
  quantity: number
  name: string
  total: number
}

export interface IGetTransactionsRes {
  message: string
  status: string
  transactions: ITransaction[]
}
