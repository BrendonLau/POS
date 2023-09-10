import { type Document } from 'mongoose'

export interface IPrice extends Document {
  name: string
  amount: string
}