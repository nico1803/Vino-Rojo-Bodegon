import React from 'react'
import logoImg from '../assets/LogoBarril.png'
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <nav>
        <img src={logoImg} alt="" />
        <p>Hola</p>
    </nav>
  )
}

