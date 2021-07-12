import React from 'react'
import Notifications from './Notifications'
import Tabs from './Tabs'

const Footer = () => {
    return (
        <div className='w-full bg-windows h-16 fixed bottom-0 left-0 flex flex-row '>
            
<Tabs/>
            <Notifications />
        </div>
    )
}

export default Footer
