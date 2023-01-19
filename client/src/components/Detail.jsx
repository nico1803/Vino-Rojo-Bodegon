import React from 'react'
import ProductoImage from '../assets/PIDEA.jpg'
import '../styles/detail.css'


export default function Detail() {
    return (<>

    <div className="ProductPrinInfo">
    <img src={ProductoImage} alt="Product Image" />
    <h1>NOMBRE DEL PRODUCTO</h1>
    <h2>$100</h2>
    <button>AADIR</button>
    <button>⭐</button>
    </div>

    </>)
  }
  

