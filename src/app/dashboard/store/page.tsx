'use client'
import AddProductModal from '@/components/dashboard/store/AddProductModal'
import ProductTable from '@/components/dashboard/store/ProductTable'
import { Button, Card } from 'antd'
import React from 'react'

const StoreManagement = () => {
  const [modalOpen, setModalOpen] = React.useState(false)
  return (
    <div>
      <Card title={<Button onClick={()=>{setModalOpen(true)}}>Add product</Button>}>
        <AddProductModal open={modalOpen} onClose={()=>{setModalOpen(false)}}/>
        <ProductTable/>
      </Card>
    </div>
  )
}

export default StoreManagement