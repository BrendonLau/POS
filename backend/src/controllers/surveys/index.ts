import { type Response, type Request } from 'express'
import PriceModel from '../../models/price'
import { type IPrice } from '../../types/models/price'
import { IAddTransactionReq } from '../../types/requests/transaction'
import { IRow, ITransaction } from '../../types/models/transaction'
import TransactionModel from '../../models/transaction'

const getPrices = async (req: Request, res: Response): Promise<void> => { 
  try {
    const result: IPrice[] = (await PriceModel.find({})) 

    res.status(200)
    .json({
      message: "Prices retrieved",
      prices: result
    })
  } catch (error) {
    throw error
  }
}

const addTransaction = async (req: Request, res: Response): Promise<void> => {
  try {
    const body: IAddTransactionReq = req.body
    const newItems = body.items as unknown as IRow[]

    const newTransaction= new TransactionModel({
      timestamp: new Date(),
      items: newItems,
      total: body.total
    })

    await (newTransaction).save()

    res
      .status(201)
      .json({ message: 'transaction added' })
  } catch (error) {
    throw error
  }
}

const getTransactions = async (req: Request, res: Response): Promise<void> => { 
  try {
    const result: ITransaction[] = (await TransactionModel.find({})) 

    res.status(200)
    .json({
      message: "Transactions retrieved",
      transactions: result
    })
  } catch (error) {
    throw error
  }
}

export { getPrices, addTransaction, getTransactions }