'use client'
import { Spin } from 'antd';
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Home = () => {
    const router = useRouter();
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
    return (
        <main className='w-full flex justify-center h-[100vh] items-center '>
            <Spin />

        </main>
    )
}

export default Home