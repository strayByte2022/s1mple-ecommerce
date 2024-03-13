import { Form, Space, Button, Input, InputNumber, Typography, message } from 'antd';

import React, { use, useEffect, useRef, useState } from 'react'

import TextArea from 'antd/es/input/TextArea';
import UploadcareUploader from './upload/UploadcareUploader';
import { supabase } from '@/utils';


const AddProductForm = () => {
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [originPrice, setOriginPrice] = useState(0)
  const [discountPrice, setDiscountPrice] = useState(0)
  const [discountRate, setDiscountRate] = useState<any>(0)
  const [fileURL, setFileURL] = useState<any>([])
  const [form] = Form.useForm();
  const { v4: uuidv4 } = require('uuid');
  const productID = uuidv4();
  const handleFileChanges = (urls: any) => {

    setFileURL(urls) //urls here is an array of urls

  }

  useEffect(() => {
    console.log('fileURL', fileURL)
  }, [fileURL])
  //set 
  const handleAddNewProduct = async (value: any) => {
    // 

    const { data, error } = await supabase
      .from('PRODUCT')
      .insert([
        {
          PRODUCT_ID: productID,
          PRODUCT_NAME: productName,
          PRODUCT_DESCRIPTION: description,
          ORIGINAL_PRICE: originPrice,
          DISCOUNT_PRICE: discountPrice,
          DISCOUNT_RATE: discountRate,
          THUMBNAIL: fileURL // this is an array of urls
        }
      ])
      .select()
      console.log('data', data)
      if(error){
        message.error(error.message)
      }
      else
      {
        location.reload()
      }
    //PUSH IMAGE URL TO IMAGE TABLE
    
  }
  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={handleAddNewProduct} >
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
          <Button htmlType='button' onClick={() => { form.resetFields(); setDiscountRate(null); setFileURL(null) }} >
            Clear
          </Button>

        </div>


      </Form.Item>



    </Form>
  );
}

export default AddProductForm 