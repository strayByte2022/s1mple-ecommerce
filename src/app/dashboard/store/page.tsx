'use client'
import AddProductModal from '@/components/dashboard/store/AddProductModal'
import ProductTable from '@/components/dashboard/store/ProductTable'
import { supabase } from '@/utils'
import { Button, Card } from 'antd'
import React, { useEffect } from 'react'

const StoreManagement = () => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [products, setProducts] = React.useState([])
  useEffect(() => {

    const fetchProducts = async () => {

      let { data: PRODUCT, error } = await supabase
        .from('PRODUCT')
        .select('*')
      console.log(PRODUCT)
    }
    fetchProducts()
  }, [])
  return (
    <div>
      <Card title={<Button onClick={() => { setModalOpen(true) }}>Add product</Button>}>
        <AddProductModal open={modalOpen} onClose={() => { setModalOpen(false) }} />
        <ProductTable />
      </Card>
    </div>
  )
}

export default StoreManagement