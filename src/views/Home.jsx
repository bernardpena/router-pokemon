import React from 'react'
import Image from 'react-bootstrap/Image';

import imagenFondo from "../assets/img/imagen1.jpg"
import "../assets/styles/home.css"

function Home() {
    return (
        <div className="fondoHome">
            <h1 className="saludo">Bienvenido Maestro Pokemon</h1>
            <div className='fondo'>
                <Image src={imagenFondo} fluid />;
            </div>
        </div>
    )
}

export default Home