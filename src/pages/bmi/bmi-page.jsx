import React, { useEffect } from 'react'
import style from './bmi-page.css'
import BmiCard from '../../components/card/bmi-card'
import Navbar from '../../components/nav/nav';
import Footer from '../../components/footer/footer'

export default function Bmipage(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    useEffect(()=>{
        const footer = document . querySelector( '.footer-maincontainer');
        footer.style = 'border-radius: 0 ;'

    },[])
    return(
        <div className='bmimain-div'>
            <div className='bmipage'>
                <header>
                    <nav>
                        <Navbar/>
                    </nav>
                </header>
                <main>
                    <BmiCard/>
                </main>
            </div>
            <footer className='bmipageFooter'>
                <Footer/>
            </footer>
        </div>
    )   
}