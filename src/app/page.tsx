
'use client'
import { Spin } from 'antd';
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Home = () => {
    const router = useRouter();
    const checkAuth = () => {
        const authState = true; //this should be change later
        if (authState) {
            router.push("/dashboard")
        }
        else {
            router.push("/auth")
        }
    }
    React.useEffect(() => {
        checkAuth()
    })
    return (
        <div className='w-full flex justify-center h-[100vh] items-center '>
            <Spin/>
        </div>
    )
}

export default Home