import React, { useEffect, useMemo, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { type ITransaction } from '../types/response'
import { getTransactionsApi } from '../API'

const TransactionTable = () => {
  const [data, setData] = useState<ITransaction[]>([])

  const fetchData = async () => {
    const result = await getTransactionsApi()
    setData(result.data.transactions)
  }

  useEffect(() => {
    fetchData()
  }, [data])

  return (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Timestamp</TableCell>
                  <TableCell>Items</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.timestamp.toString()}>
                    <TableCell>{JSON.stringify(row.timestamp) }</TableCell>
                    <TableCell>{JSON.stringify(row.items)}</TableCell>
                    <TableCell>{row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
  )
}

export default TransactionTable
