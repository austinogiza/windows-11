import React from 'react'
import DayJS from 'react-dayjs';

const Notifications = () => {

    const day = new Date()
    const time = new Date()
    return (
        <div  className='flex flex-row items-center  w-80 h-full text-white '>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 mx-2 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 mx-2 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
</svg>


<h1 className='flex flex-col text-white text-base  mx-3 font-normal'>
<p className='mt-1 mb-1'><DayJS format="hh:mm A">{time}</DayJS></p>
    <p><DayJS format="DD/MM/YYYY">{day}</DayJS></p>
    
</h1>
<svg width="22" height="22" className="h-6 w-6 mx-2 cursor-pointer" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0127 2.99985H2.79321V16.1055H7.44362L10.403 20.3332L13.3623 16.1055H18.0127V2.99985Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        </div>
    )
}

export default Notifications
