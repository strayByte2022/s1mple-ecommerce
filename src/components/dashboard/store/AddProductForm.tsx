import { Form, Space, Button, Input, InputNumber } from 'antd';

import React from 'react'
import SubmitButton from './SubmitModalButton';

const AddProductForm = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
      <Form.Item name="productName" label="Product Name" rules={[{ required: true }]}>
        <Input  />
      </Form.Item>
      <Form.Item name="productDescription" label="Description" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="productOriginPrice" label="Price" rules={[{ required: true },{ type: 'number'}]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name="discountPrice" label="Discount Price" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Space>
          <SubmitButton form={form}>Submit</SubmitButton>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

export default AddProductForm