import React from 'react';
import {Link} from 'react-router-dom'

import Video from '../assets/static/home-video.mp4'

import '../assets/styles/components/Home.scss'

const Home = () => {

    
    let textTickets = 'Comprar tickets para el proximo show'
    let observar = 'observar'
    
    let escuchar = 'escuchar'
    let mutear = 'mutear'

    const activar = () => {
            const homeVideo = document.querySelector('.home-video')
            homeVideo.muted = !homeVideo.muted 

            const audioButton = document.querySelector('.escuchar')
            if(audioButton.textContent === escuchar){
                audioButton.textContent = mutear
            }
            else if(audioButton.textContent === mutear){
                audioButton.textContent = escuchar
            }
    }

    return (
        <section className='home'>
            
            <video className='home-video' autoPlay muted loop>
                <source className='home-video' src={Video} type="video/mp4"/>
            </video>
            
            <div className="home-container" >
                <h1 class="home-title">{}</h1>
                <div className='home-button-container'>

                    <Link to='/tickets' class="ticket-button left" >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        {textTickets}
                    </Link>

                    <div className='home-button-container-content'>
                        <a class="home-button escuchar" onClick={activar}>{escuchar}</a>
                        <Link to='/observar' class="home-button">{observar}</Link>
                    </div>

                </div>
            </div>
            
        </section>
    );
}

export default Home;