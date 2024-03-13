'use client'
import React, { useState } from 'react';
import { AppstoreOutlined, LogoutOutlined, MailOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useRouter } from 'next/navigation';

const items: MenuProps['items'] = [
    {
        label: 'Store Management',
        key: 'store',
        icon: <MailOutlined />,
        
    },
    {
        label: 'Order Management',
        key: 'order',
        icon: <AppstoreOutlined />,

    },
    {
        label: 'Logout ',
        key: 'Logout',
        icon: <LogoutOutlined />
    },
    


];

const DashboardMenu= () => {
    const router = useRouter()
    const [current, setCurrent] = useState('store');
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e.key);
        setCurrent(e.key);
        if(e.key==='store')
        {
            router.push('/dashboard/store')
        }
        else if(e.key==='Logout')
        {
            localStorage.removeItem('user_info')
            router.push('/auth')
        }
        else
        {
            router.push('/dashboard/order')
        }

        
    };
   
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className='flex justify-start' />;
};

export default DashboardMenu;