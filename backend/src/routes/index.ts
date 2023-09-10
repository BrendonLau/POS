import { Router } from 'express'
import { addTransaction, getPrices, getTransactions } from '../controllers/surveys'

const router: Router = Router()

router.get('/prices', getPrices)

router.post('/transactions', addTransaction)
router.get('/transactions', getTransactions)

export default router
