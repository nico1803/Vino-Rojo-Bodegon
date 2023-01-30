import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/LogoBarril.png";
import UserPhoto from "../assets/user.png";
import "../styles/navbar.css";



export default function Navbar() {

  return (
    <section className="h-[70px] bg-[#614C3C] shadow-[0_8px_16px_-8px_rgba(0,0,0,0.4)] flex items-center">
      <div className="flex flex-row">

        <div className="flex items-center">
          <Link to="/">
              <img className="w-[50px] rounded-full mx-[10px]" src={logoImg} alt="Logo image" />
          </Link>
        </div>

        <div className="flex justify-end w-[1750px]">

          <div className="bg-[#614C3C] hover:bg-[#271e18]">
            <Link to={null}>
              <div className=" w-[150px] h-[70px] text-center text-[#fff] block py-[18px]">
                <h3 className="">Nosotros</h3>
              </div>
            </Link>
          </div>

          <div className="bg-[#614C3C] hover:bg-[#271e18]">
            <Link to={null}>
              <div className="w-[150px] h-[70px] text-center text-[#fff] block py-[18px]">
                <h3>Servicios</h3>
              </div>
            </Link>
          </div>

          <div className="bg-[#614C3C] hover:bg-[#271e18]">
            <Link to={"/contact"}>
              <div className="w-[150px] h-[70px] text-center text-[#fff] block py-[18px]">
                <h3>Contacto</h3>
              </div>
            </Link>
          </div>

          <div className="bg-[#614C3C] hover:bg-[#271e18]">
            <Link to={"/cart"}>
              <h3 className="w-[150px] h-[70px] text-center text-[#fff] block py-[18px]">Carrito</h3>
            </Link>
          </div>

            <div className="relative inline-block h-[70px] w-[70px] group">

              <button className="p-[16px] cursor-pointer">
                <img className="w-[50px] flex items-center rounded-[12px]" src={UserPhoto} />
              </button>

              <ul className="hidden absolute w-max z-50 group-hover:block">

                <div className="bg-[#614C3C] hover:bg-[#271e18] w-[100px]">
                  <Link to="/login">
                    <h3 className="w-[100px] h-[70px] text-center text-[#fff] block py-[20px]">Profile</h3>
                  </Link>
                </div>

                <div className="bg-[#614C3C] hover:bg-[#271e18] w-[100px]">
                  <Link to="/login">
                    <h3 className="w-[100px] h-[70px] text-center text-[#fff] block py-[20px]">Login</h3>
                  </Link>
                </div>

              </ul>

            </div>

        </div>

      </div>
    </section>
  );
}

