import DashboardMenu from '@/components/dashboard/DashboardMenu'
import React from 'react'

const layout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
        <div>
            <DashboardMenu/>
            <div className='flex justify-center p-4'>{children}</div>
        </div>
    )
}

export default layout