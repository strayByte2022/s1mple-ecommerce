'use client'
import { Card, Checkbox, Form, FormProps, Typography } from 'antd'
import React, { useEffect } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation';
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => {
  const router = useRouter()
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const checkLogin = () => {
    router.push('/dashboard')
  }
  
  return (
    <div className='flex justify-center text-center'>
      <Card className='mt-8 items-center'>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={checkLogin} style={{background:'#407fff'}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      </Card>
    </div>
  )
}

export default Login
