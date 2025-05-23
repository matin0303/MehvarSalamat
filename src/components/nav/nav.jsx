import React from 'react'
import logo from '../../images/logo.png'
import style from './nav.css'
import Guide from '../bot-guide/guide'
import { Link } from 'react-router-dom'

function Navbar(){
    function showNavMenu_btn(){
        const nav_menu=document.querySelector('.menu-btn')
        const hamber_nav=document.querySelector('.hamber-nav-menu')
        nav_menu.classList.toggle("menu-is-open")
        hamber_nav.classList.toggle("nav-menu")

    }
    function closeGuide (){
        const guide=document.querySelector('.botguide');
        guide.style.display = "none"
    }
    function openGuide (){
        const guide=document.querySelector('.botguide');
        const body = document.querySelector('body')
        guide.style.display = "block"
        if(body.offsetWidth < 800 ){
            const nav_menu=document.querySelector('.menu-btn')
            const hamber_nav=document.querySelector('.hamber-nav-menu')
            nav_menu.classList.remove("menu-is-open")
            hamber_nav.classList.remove("nav-menu")
        }
    }
    return(
        <div className='nav'>
            <div className="logo">
                <h2>محورسلامت</h2>
                <img src={logo} alt="" />
                
            </div>
            <ul className='nav-bar'>
                <li> <Link to='/MehvarSalamat'>خانه</Link></li>
                <li>  <Link to='/consultants'> مشاور &thinsp;ها  </Link></li>
                <li><Link to='/newsandarticles'> اخبار &thinsp;و &thinsp;مقالات</Link></li>
                <li onClick={openGuide}><a>راهنمای ربات</a></li>
                <li className='bmi'> <Link to='/bmi'>BMI</Link></li>
            </ul>
            <button className='menu-btn' onClick={showNavMenu_btn}>
                <span className="material-symbols-outlined btn">menu</span>
                <span className="material-symbols-outlined btn">close</span>
            </button>

            <div className="hamber-nav-menu">
                <ul>
                    <Link to='/MehvarSalamat'><li><span className="material-symbols-outlined">home</span>خانه </li></Link>
                    <Link to='/consultants'><li><span className="material-symbols-outlined">woman</span> مشاور ها </li></Link>
                    <Link to='/newsandarticles'> <li><span className="material-symbols-outlined">news</span> اخبار و مقالات</li></Link>
                    <Link to='#'><li onClick={openGuide}><span className="material-symbols-outlined">smart_toy</span> راهنمای ربات</li></Link>
                    <Link to='/bmi'> <li><span className="material-symbols-outlined">ecg</span> BMI</li></Link>
                </ul>
                <div className="bg">

                </div>
            </div>
            <div className="botguide">
                <span class="material-symbols-outlined close-guide" onClick={closeGuide}>close</span>
                <Guide/>
            </div>
        </div>
    )
}

export default Navbar