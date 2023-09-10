import React, { useEffect, useMemo, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { type IPrice, IPricesRes } from '../types/response'
import { getPricesApi } from '../API'

const PriceTable = () => {
  const [data, setData] = useState<IPrice[]>([])

  const fetchData = async () => {
    const result = await getPricesApi()
    setData(result.data.prices)
  }

  useEffect(() => {
    fetchData()
  }, [data])

  return (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  )
}

export default PriceTable
