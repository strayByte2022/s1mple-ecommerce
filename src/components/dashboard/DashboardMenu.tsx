'use client'
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
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
        else
        {
            router.push('/dashboard/order')
        }

        
    };
    React.useEffect(() => {
        
    });
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className='flex justify-start' />;
};

export default DashboardMenu;