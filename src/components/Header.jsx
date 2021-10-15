import React from 'react';
import { NavLink } from 'react-router-dom'
import Logo from '../assets/static/logo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome } from '@fortawesome/free-solid-svg-icons'

import '../assets/styles/components/Header.scss'

const Header = () => {

    var screenWidth = window.innerWidth
    
    window.addEventListener('resize', () => {
        return screenWidth =  window.innerWidth
    })

    const menuLines = () => {
        const lineA  = document.querySelector(".a")
        const lineB  = document.querySelector(".b")
        const lineC  = document.querySelector(".c")
        
        lineA.classList.toggle("rotatea")
        lineB.classList.toggle("inactiveb")
        lineC.classList.toggle("rotatec")
    }

    const moverMobile  = () => {
        const menuMobile = document.querySelector('.menu-mobile')
        menuMobile.classList.toggle('menu-active')
        menuLines()
    }

    const mostrarLogin = () => {
        const menuSecret = document.querySelector('.menu-secret-container')
        menuSecret.classList.toggle('menu-secret-active')
    }

    const mover = () => {
        
        if(screenWidth > 1080){
            menuLines()
            mostrarLogin()
        }
        else if(screenWidth < 1080){
            moverMobile()
        }
    }


    const remove = () => {
        if(screenWidth > 1080){
            // mostrarLogin()
        }
        else if(screenWidth < 1080){
            moverMobile()
        }
    }

    const removeIfOpen = () => {
        const menu = document.querySelector('.menu-mobile')
        if(menu.classList.contains('menu-active')){
            moverMobile()
        }
    }

    function loginMove(){
        if(screenWidth > 1080){
            mostrarLogin()
            menuLines()
        }
        else if(screenWidth < 1080){
            moverMobile()
        }
    }
    
    return (
            <header className="header">

                    <NavLink to='/' className='header-logo'>
                        <img src={Logo} onClick={removeIfOpen}/>
                    </NavLink>

                    <div className="header-button" onClick={mover}>
                        <span className="line a"></span>
                        <span className="line b"></span>
                        <span className="line c"></span>
                    </div>

                    <div className="menu-mobile">
                        <div className='menu-button-container'>
                            <NavLink to='/conocenos' onClick={remove} activeClassName='menu-button-active'  className="menu-button " >Conocenos</NavLink>
                            <NavLink to='/shows' onClick={remove} activeClassName='menu-button-active'  className="menu-button " >Shows</NavLink>
                            <NavLink to='/discos' onClick={remove} activeClassName='menu-button-active'  className="menu-button " >Discos</NavLink>
                            <NavLink to='/videos' onClick={remove} activeClassName='menu-button-active'  className="menu-button " >Videos</NavLink>
                            <NavLink to='/contacto' onClick={remove} activeClassName='menu-button-active'  className="menu-button " >Contacto</NavLink>
                        </div>
                        <div className='menu-secret-container'>
                            {/* <NavLink to='/login' activeClassName='menu-button-active' onClick={loginMove} className="menu-button login" >Iniciar sesion</NavLink> */}
                            {/* <NavLink to='/register'  activeClassName='menu-button-active' onClick={loginMove} className="menu-button register" >Registrarte</NavLink> */}
                        </div>
                    </div>

            </header>
    );
}

export default Header;