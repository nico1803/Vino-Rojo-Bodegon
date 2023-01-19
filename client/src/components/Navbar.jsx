import React from 'react'
import logoImg from '../assets/LogoBarril.png'
import '../styles/navbar.css'

export default function Navbar() {
  return (
    // <nav>
    //     <img src={logoImg} alt="" />
    //     <p>Hola</p>
    // </nav>
    <nav className='p-5 bg-white shadow'>
      <div>
        <span className='text-2xl'>
          <img className='flex justifiy-start w-10 cursor-pointer' src={logoImg} alt="" />
        </span>
      </div>
    </nav>





  )
}

