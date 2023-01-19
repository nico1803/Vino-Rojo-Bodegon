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
          <ul class="nav-dropdown">
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">s1</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">s2</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">s3</a>
            </li>
          </ul>
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



// <header className="header">
// <div className="container">
//     <div className="nav__wrapper">
//         <div className="logo">
//             <h2>Digency</h2>
//         </div>

//         /* ========= navigation =========*/
//         <div className="navigation">
//             <ul className="menu">
//                 {
//                     nav_links.map((item, index)=>(
//                         <li className="menu__item"><a href={item.path} className="menu__link">{item.display}</a></li>
//                     ))
//                 }
//             </ul>
//         </div>
    
//         /* ========= ligth mode =========*/
//         <div className="light__mode">
//                 <span><i class="ri-sun-line"></i> Ligth Mode 
//                 </span>
//         </div>
//     </div>
// </div>
// </header>