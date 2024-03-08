import { Form, Space, Button, Input, InputNumber } from 'antd';

import React, { use, useEffect, useRef, useState } from 'react'

import TextArea from 'antd/es/input/TextArea';

import { pubKey } from '@/components/constant/uploadcarePubKey';
import { Widget } from '@uploadcare/react-widget/min';


const AddProductForm = () => {
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [originPrice, setOriginPrice] = useState(0)
  const [discountPrice, setDiscountPrice] = useState(0)
  const [discountRate, setDiscountRate] = useState(0)
  const [form] = Form.useForm();

  const resetStates = () => {
    setProductName('')
    setDescription('')
    setOriginPrice(0)
    setDiscountPrice(0)
    setDiscountRate(0)
  }
  useEffect(() => {
    if (discountPrice <= originPrice) {
      // discountPrice = originPrice *(1-rate)
      setDiscountRate(Math.floor((1 - discountPrice / originPrice) * 100))
    }
  }, [originPrice, discountPrice])
  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
      <Form.Item id="productName" label="Product Name" rules={[{ required: true }]}>
        <Input

          onBlur={(e) => { setProductName(e.target.value) }}

        />
      </Form.Item>
      <Form.Item id="productDescription" label="Description" rules={[{ required: true }]}>
        <TextArea rows={4} placeholder='input description' onBlur={(e) => { setDescription(e.target.value) }} />
      </Form.Item>
      <Form.Item id="productOriginPrice" label="Price" rules={[{ required: true, message: 'Please input the origin price' }]}>
        <InputNumber
          prefix='$'
          controls={false}
          className='w-1/3'
          onBlur={(e) => {
            console.log(e.target.value)
            setOriginPrice(parseFloat(e.target.value))

          }}
          style={{ width: '40%' }}
          value={originPrice}
        />
      </Form.Item>


      <div className='flex flex-row justify-between '>
        <Form.Item id="discountPrice" label="Discount Price" >
          <InputNumber

            prefix="$"
            controls={false}
            className="w-1/3"
            onBlur={(e) => {
              console.log(e.target.value);
              setDiscountPrice(parseFloat(e.target.value))
            }}
            style={{ width: '100%' }}
            value={discountPrice}
          />
        </Form.Item>
        <Form.Item id="discountRate" label="Discount Rate" >
          <InputNumber
            prefix="%"
            controls={false}
            value={discountRate ? discountRate : 0}
            className="w-1/3"
            onChange={(e) => {
              console.log(e?.toString)
            }}
            readOnly
            style={{ width: '100%' }}

          />

        </Form.Item>

      </div>
      <Form.Item label='Upload product images'>
        <Widget
          publicKey={pubKey}
          multiple={true}
          previewStep
          clearable
          
        />
      </Form.Item>


      <div className='flex flex-row justify-between'>
        <Button htmlType='submit' style={{ backgroundColor: '#407FFF', color: 'white' }}>
          Add
        </Button>
        <Button htmlType='reset' onClick={() => { location.reload() }} >
          Clear
        </Button>
      </div>


    </Form>
  );
}

export default AddProductForm 