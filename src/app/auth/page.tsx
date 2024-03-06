'use client'
import { Card, Typography } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const checkLogin = ()=>{
    router.push('/dashboard')
  }
  return (
    <div className='flex justify-center text-center'>

      <Card className='mt-8'>
        <div className='grid'>
          <Typography style={{ margin: '10px 0' }}>Admin? Please log in to view content</Typography>
          <Input size="large" placeholder="Username" prefix={<UserOutlined />} style={{ margin: '10px 0' }} />
          <Input.Password
            size='large'
            placeholder="Password"
            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
            prefix={<LockOutlined />}
            style={{ margin: '10px 0' }}
          />
          <Button style={{ margin: '10px 0' }} onClick={checkLogin}>
            Log in
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Login
