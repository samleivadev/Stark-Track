import {FaBars, FaTimes} from 'react-icons/fa'
import React, { useRef } from "react";

import style from '../header/style.module.scss'

function NavBar () {
    const navRef = useRef();
    
    const showNavbar = () => {
        navRef.current.classList.toggle('visible');
    }
    
    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}> 
                <a href="/">Home</a>
                <a href="/ctdi">CTDI Support</a>
                <a href="/operations">Ops Support</a>
                <a href="/amznit">IT Support</a>
                <a href="/dashboard">Dashboard</a>
                <button className={style.navBtn} onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className={style.navBtn} onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default NavBar;