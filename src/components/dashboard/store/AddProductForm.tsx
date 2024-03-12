import { Form, Space, Button, Input, InputNumber, Typography } from 'antd';

import React, { use, useEffect, useRef, useState } from 'react'

import TextArea from 'antd/es/input/TextArea';
import UploadcareUploader from './upload/UploadcareUploader';


const AddProductForm = () => {
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [originPrice, setOriginPrice] = useState(0)
  const [discountPrice, setDiscountPrice] = useState(0)
  const [discountRate, setDiscountRate] = useState<any>(0)

  const [form] = Form.useForm();
  const handleFileChanges = (fileURL: any) => {
    console.log('received file name: ', fileURL)
  }



  const handleAddNewProduct = async (value: any) => {

  }
  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" >
      <Form.Item name="productName" label="Product Name" rules={[{ required: true }]}>
        <Input

          onBlur={(e) => { setProductName(e.target.value); }}

        />
      </Form.Item>
      <Form.Item name="productDescription" label="Description" rules={[{ required: true }]}>
        <TextArea rows={4} placeholder='input description' onBlur={(e) => { setDescription(e.target.value) }} />
      </Form.Item>

      <div className='grid grid-cols-2 gap-2'>
        <Form.Item name="productOriginPrice" label="Price" rules={[{ required: true, message: 'Please input the origin price' }]}>
          <InputNumber
            prefix='$'
            controls={false}
            className='w-full'
            onChange={(e: any) => {
              console.log(e);
              setOriginPrice(parseFloat(e));


            }}

            value={originPrice}
          />
        </Form.Item>

        <Form.Item name="discountPrice" label="Discount Price" >
          <InputNumber

            prefix="$"
            controls={false}
            className="w-full"
            onChange={(e: any) => {
              console.log(e);
              setDiscountPrice(parseFloat(e));


            }}

            value={discountPrice}
          />
        </Form.Item>
        <Form.Item name="discountRate" label="Discount Rate" >
          <Typography>{discountRate}%</Typography>
        </Form.Item>
        <Form.Item>
          <Button onClick={() => {
            const res = Math.floor((1 - discountPrice / originPrice) * 100);
            setDiscountRate(res)
            console.log(res)
          }}>Apply discount</Button>
        </Form.Item>
      </div>

      <Form.Item name='uploaderCare' label='Upload product images'>
        <UploadcareUploader onFileChange={handleFileChanges} />
      </Form.Item>

      <Form.Item name={'button'}>

        <div className='flex gap-2'>

          <Button htmlType='submit' style={{ backgroundColor: '#407FFF', color: 'white' }}>
            Add
          </Button>
          <Button htmlType='button' onClick={() => { form.resetFields(); setDiscountRate(null); }} >
            Clear
          </Button>

        </div>


      </Form.Item>



    </Form>
  );
}

export default AddProductForm 