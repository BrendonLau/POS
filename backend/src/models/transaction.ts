import { Schema, model } from "mongoose"
import { ITransaction } from "../types/models/transaction"

const rowSchema: Schema = new Schema (
  {
    quantity: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  }
)

const transactionSchema: Schema = new Schema(
    {
      timestamp: {
        type: Date,
        required: true
      },
      items: [rowSchema],
      total: {
        type: Number,
        required: true
      }
    }
  )
  
  export default model<ITransaction>('Transaction', transactionSchema)
