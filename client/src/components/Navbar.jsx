import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/LogoBarril.png'
import '../styles/navbar.css'

export default function Navbar() {
  return (
<section class="navigation">
  <div class="nav-container">
    <div class="brand">
      <Link to="/"><img className='imga' src={logoImg}  alt="Logo image" /></Link>
    </div>
    <nav>
      <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
      <ul class="nav-list">
        <li>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">About</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Services</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Pricing</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Portfolio</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</section>

  )
}

