'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/utils'
// import type { Database } from '@/lib/database.types'
import { InfoCircleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Tooltip, Card, Button, message } from 'antd';

export default function Login() {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false);

  const router = useRouter()
  

  useEffect(() => {
    checkAuth();
  }, []);
  const checkAuth = () => {
    const storage_user: any = localStorage.getItem('user_info');

    if (storage_user) router.push('/dashboard/');
    else {
      router.push('/auth');
    }
  };

  const handleSignIn = async () => {
    let userInfo = [];
    const { data, error } = await supabase.from('users').select('*');
  
    if (error) {
      message.error(error.message);
      return;
    }
    const check = data.filter((item) => item?.phone == phone);
    if (check.length > 0) {
      const checkPassword = data.filter((item) => item.password == password) //if the password exists in the database
      if (checkPassword.length > 0) {
        window.localStorage.setItem('user_info', JSON.stringify(check[0].phone));

        router.push('/dashboard/store');
      }
      else {
        message.error('Please check your phone or password');
        router.push('/auth');
      }

    } else {
      message.error('Please check your phone or password');
      return;
    }
  };

  
  return (
    <div className='flex items-center justify-center'>
   
    
      <Card className='flex-col mt-8 items-center'>
        <Input
          placeholder="Enter your username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="for test: 0867997139 - 123">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
          onChange={(e) => setPhone(e.target.value)}
          className='mb-4'
        />
        {/* <Input
          placeholder="Enter your password"
          //<LockOutlined />
          prefix={<LockOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
          onChange={(e) => setPassword(e.target.value)}
          className='mb-4'
        /> */}
        <Input.Password
          placeholder="input password"
          prefix={<LockOutlined className="site-form-item-icon" />}
          visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
          onChange = {(e) => setPassword(e.target.value)}
          className = 'mb-4'
        />
        <Button onClick={handleSignIn}>
          Sign In
        </Button>
      </Card>

    </div>
  )
}