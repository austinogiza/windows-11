import React from 'react'
import Footer from '../components/Footer'
import img from '../assets/Wallpaper.png'
const Home = () => {
    return (
        <div className='h-screen bg-cover bg-no-repeat bg-center' style={{backgroundImage:`url(${img})`}}>



        
            <Footer/>
        </div>
    )
}

export default Home
