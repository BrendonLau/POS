import { type Document } from 'mongoose'

export interface ITransaction extends Document {
  timestamp: Date
  items: IRow[]
  total: number
}

export interface IRow {
    quantity: number
    name: string
    total: number
}