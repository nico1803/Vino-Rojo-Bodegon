import React from 'react'
import ProductoImage from '../assets/PIDEA.jpg'
import '../styles/detail.css'


export default function Detail() {
    return (<>

    <div className="ProductPrinInfo">
    <img src={ProductoImage} alt="Product Image" />
    <h1 className=''>NOMBRE DEL PRODUCTO</h1>
    <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseo visual antes de insertar el texto final.</p>
    <h2>$100</h2>
    <button>AÑADIR</button>
    <button>⭐</button>
    </div>

    </>)
  }
  

