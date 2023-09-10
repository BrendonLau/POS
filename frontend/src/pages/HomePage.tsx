import { Tab, Tabs } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PriceTable from '../components/PriceTable'
import FormPOS from '../components/FormPOS'
import TransactionTable from '../components/transactionTable'

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(1)
  const handleTabChange = (event: React.SyntheticEvent | undefined, newValue: number) => { setActiveTab(newValue) }

  return (
  <div className={'flex justify-center h-screen bg-[#F5F5F5]'}>
    <div className={'bg-white w-3/5'}>
      <Tabs value={activeTab} onChange={handleTabChange} centered>
        <Tab label="Items" />
        <Tab label="Form" />
        <Tab label="Transactions" />
      </Tabs>
      {activeTab === 0 && <PriceTable/>}
      {activeTab === 1 && <FormPOS handleTabChange={handleTabChange} />}
      {activeTab === 2 && <TransactionTable/>}
    </div>
  </div>
  )
}

export default HomePage
