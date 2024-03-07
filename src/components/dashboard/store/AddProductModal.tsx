import { Modal } from 'antd'
import React from 'react'
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
      
    </Modal>
  )
}

export default AddProductModal