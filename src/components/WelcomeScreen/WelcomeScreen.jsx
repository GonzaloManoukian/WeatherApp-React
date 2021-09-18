import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({ children }) => {

    const myRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0)

    useEffect(() => {
        
        if (!vanta) {
            setVanta(Clouds({
                THREE,
                el: myRefDiv.current
            }))
        }

        return () => {
            // Dentro de esta funcion se va a realizar la tarea de destruir los recursos tomados por "vanta"
            if (vanta) {
                vanta.destroy()
                console.log("Desmonto Componente Vanta");
            }
        }
    }, [vanta])

    return (
        <div ref={myRefDiv} className="full">
            { children }
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,
}

export default WelcomeScreen
