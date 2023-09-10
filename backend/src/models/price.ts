import { Schema, model } from "mongoose"
import { IPrice } from "../types/models/price"

const priceSchema: Schema = new Schema(
    {
      name: {
        type: String,
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
    }
  )
  
export default model<IPrice>('Price', priceSchema)