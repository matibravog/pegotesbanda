import React from 'react';

import '../assets/styles/components/Observar.scss'

const Observar = () => {
    return (
        <section className='observar'>
            <h1 className='observar-title'>Disfruta de nuestro ultimo show transmitido por streaming</h1>
            <iframe className='observar-video' src="https://www.youtube.com/embed/y8_Uiws-lgE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
    );
}

export default Observar;