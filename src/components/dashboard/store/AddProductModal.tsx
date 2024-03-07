import { Modal } from 'antd'
import React from 'react'
import AddProductForm from './AddProductForm'
interface AddProductProps
{
  open: boolean,
  onClose:any
}
const AddProductModal = ({open, onClose}: AddProductProps) => {
  return (
    <Modal 
    title='Add product' 
    open={open} 
    onCancel={onClose} 
    footer={null}
    >
      <AddProductForm/>
    </Modal>
  )
}

export default AddProductModal