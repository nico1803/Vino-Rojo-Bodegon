import React from 'react'
import logoImg from '../assets/LogoBarril.png'
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <img src={logoImg} alt="Logo image" />
            <h2>Vino Rojo Bodegon</h2>
          </div>
          {/* ========= navigation =========*/}
          <div className="navigation">
              <ul className="menu">
                        <li className="menu__item">
                          <a className="menu__link"></a>
                          </li>
              </ul>
          </div>

        </div>
      </div>
    </header>
  )
}



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