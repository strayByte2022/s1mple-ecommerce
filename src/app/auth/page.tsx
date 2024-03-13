'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/utils'
// import type { Database } from '@/lib/database.types'
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Tooltip, Card, Button, message } from 'antd';

export default function Login() {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
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
      const checkPassword = data.filter((item) => item.password == password)
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
    <>
      {/* <input name="phone" onChange={(e) => setEmail(e.target.value)} value={phone} />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button> */}

      <Card className='flex items-center justify-center'>
        <Input
          placeholder="Enter your username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          placeholder="Enter your password"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSignIn}>
          Sign In
        </Button>
      </Card>

    </>
  )
}