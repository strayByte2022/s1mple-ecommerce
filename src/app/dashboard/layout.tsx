'use client'

import DashboardMenu from '@/components/dashboard/DashboardMenu'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const DashboardLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const router = useRouter();
    useEffect(() => {
      checkAuth();
    });
    const checkAuth = () => {
      const storage_user: any = localStorage.getItem('user_info');
  
      if (!storage_user) router.push('/auth');
    
    };
    return (
        <div>
            <DashboardMenu/>
            <div className='flex justify-center p-4'>{children}</div>
        </div>
    )
}

export default DashboardLayout