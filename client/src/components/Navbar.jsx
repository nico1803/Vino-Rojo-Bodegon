import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/LogoBarril.png";
import UserPhoto from "../assets/user.png";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <section class="navigation">
      <div class="nav-container">
        <div class="brand">
          <Link to="/">
            <img className="imga" src={logoImg} alt="Logo image" />
          </Link>
        </div>
        <nav>
          <div class="nav-mobile">
            <a id="nav-toggle" href="#!">
              <span></span>
            </a>
          </div>
          <ul class="nav-list">
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Nosotros</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                Servicios
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Soporte</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Carrito</a>
            </li>
            <li className="dropdown">
              <button className="dropbtn">
                <img className="imga1" src={UserPhoto} />
              </button>
              <ul className="dropdown-content">
                <li>
                  <Link to="/login">
                    <a>Profile</a>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <a>Login</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
