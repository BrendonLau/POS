import express, { type Express, type Request, type Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import posRoutes from './routes'
import PriceModel from './models/price';

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(posRoutes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.0yce8ds.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

mongoose
  .connect(uri)
  .then(async () => {
    app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`) })
    await loadDefaultRecord()
  })
  .catch(error => {
    throw error
  })
  
  const loadDefaultRecord = async () => {
    const count = await PriceModel.countDocuments();

    if (count === 0) {
      await (new PriceModel({ name: 'Apple', amount: 2 })).save();
      await (new PriceModel({ name: 'Banana', amount: 1.5 })).save();
      await (new PriceModel({ name: 'Pear', amount: 2.3 })).save();
      await (new PriceModel({ name: 'Orange', amount: 1.8 })).save();

      
      console.log('Price table in database is empty');
      console.log('Prices of supply is loaded into database');
    }
  };