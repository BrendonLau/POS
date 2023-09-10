import React, { useState, SyntheticEvent } from 'react'
import { type IAddTransactionReq } from '../types/request'
import { Button, Container, Grid, Paper, TextField } from '@mui/material'
import { addTransactionApi } from '../API'

interface FormPOSProps {
  handleTabChange: (event: React.SyntheticEvent | undefined, newValue: number) => void
}

const FormPOS = ({ handleTabChange }: FormPOSProps) => {
  const [formData, setFormData] = useState<IAddTransactionReq>({
    items: [
      { quantity: 0, name: 'Apple', total: 0 },
      { quantity: 0, name: 'Banana', total: 0 },
      { quantity: 0, name: 'Pear', total: 0 },
      { quantity: 0, name: 'Orange', total: 0 }],
    total: 0
  })
  const [disable, setDisable] = useState<boolean>(false)
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, idx: number) => {
    let qty = 0

    if (event.target.value) {
      qty = parseInt(event.target.value, 10)
    }

    const newFormData = { ...formData }

    switch (idx) {
      case 0:
        newFormData.items[idx].total = qty * 2
        break
      case 1:
        newFormData.items[idx].total = qty * 1.5
        break
      case 2:
        newFormData.items[idx].total = qty * 2.3
        break
      case 3:
        newFormData.items[idx].total = qty * 1.8
        break
    }

    newFormData.items[idx].total = Math.round(newFormData.items[idx].total * 100) / 100
    newFormData.items[idx].quantity = qty
    newFormData.total = newFormData.items.reduce((accumulator, currentObject) => {
      return accumulator + currentObject.total
    }, 0)

    setFormData(newFormData)
  }
  const onSubmit = async () => {
    setDisable(true)
    await addTransactionApi(formData)
    handleTabChange(undefined, 2)
    setDisable(false)
  }

  return (
        <Container>
          <Paper style={{ padding: '1em' }} className="space-y-5">
            <div>
            Apple
            <TextField
              label="Quantity"
              id="outlined-size-small"
              defaultValue="0"
              size="small"
              style={{ marginLeft: '1em', marginRight: '1em' }}
              onChange={(e) => { handleAmountChange(e, 0) }}
             />
             Amount: {formData.items[0].total}
            </div>
            <div>
            Banana
            <TextField
              label="Quantity"
              id="outlined-size-small"
              defaultValue="0"
              size="small"
              style={{ marginLeft: '1em', marginRight: '1em' }}
              onChange={(e) => { handleAmountChange(e, 1) }}
             />
             Amount: {formData.items[1].total}
            </div>
            <div>
            Pear
            <TextField
              label="Quantity"
              id="outlined-size-small"
              defaultValue="0"
              size="small"
              style={{ marginLeft: '1em', marginRight: '1em' }}
              onChange={(e) => { handleAmountChange(e, 2) }}
             />
             Amount: {formData.items[2].total}
            </div>
            <div>
            Orange
            <TextField
              label="Quantity"
              id="outlined-size-small"
              defaultValue="0"
              size="small"
              style={{ marginLeft: '1em', marginRight: '1em' }}
              onChange={(e) => { handleAmountChange(e, 3) }}
             />
             Amount: {formData.items[3].total}
            </div>
            <div>
              total: {formData.total}
            </div>
            <Button disabled={disable} variant='contained' onClick={onSubmit}>Create Transaction</Button>
          </Paper>
        </Container>
  )
}

export default FormPOS
