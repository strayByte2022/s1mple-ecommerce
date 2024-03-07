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
            <div className='p-3'>{children}</div>
        </div>
    )
}

export default layout