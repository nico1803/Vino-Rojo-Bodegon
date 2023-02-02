import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logoImg from "../assets/LogoBarril.png";
import UserPhoto from "../assets/user.png";
import { getUser } from "../redux/actions";


export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (

    <nav className="w-full bg-gray-900 shadow text-white">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8"> 
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a className="flex items-center" href="/">
              <img className="w-[60px]" src={logoImg} alt="" /><h2 className=" pl-5 text-2xl font-bold">VINO ROJO.</h2>
            </a>
            <div className="md:hidden">
              <button className="p-2 text-white-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                          />
                            </svg>
                            ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4 6h16M4 12h16M4 18h16"
                                  />
                            </svg>
                                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
                }`}
                >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-7 md:space-y-0">
                  <li><Link to="/"><a href="javascript:void(0)" className="hover:text-gray-200">Home</a></Link></li>
                  <li><Link to={"/aboutus"}><a href="javascript:void(0)" className="hover:text-gray-200">Sobre Nosotros</a></Link></li>
                  <li><Link to={"/contact"}><a href="javascript:void(0)" className="hover:text-gray-200">Contacto</a></Link></li>
                  <li><Link to={"/admin"}><a href="javascript:void(0)" className="hover:text-gray-200">Admin</a></Link></li>
                  <Link className="flex items-center hover:text-gray-200 md:pl-10 " to={"/cart"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="md:hidden  pl-2"> Carrito</span>
                  </Link>
                  <Link className="flex items-center hover:text-gray-200" to={"/login"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="md:hidden  pl-2"> Login</span>
                  </Link>
                </ul>
          </div>
        </div>
      </div>
    </nav>


    // <section className="h-[70px] bg-[#614C3C] shadow-[0_8px_16px_-8px_rgba(0,0,0,0.4)] flex items-center">
    //   <div className="flex flex-row">

    //     <div className="flex items-center">
    //       <Link to="/">
    //           <img className="w-[50px] rounded-full mx-[10px]" src={logoImg} alt="Logo image" />
    //       </Link>
    //     </div>

    //     <div className="flex justify-end w-[1750px]">

    //       <div className="bg-[#614C3C] hover:bg-[#271e18]">
    //         <Link to={"/aboutus"}>
    //           <div className=" w-[150px] h-[70px] text-center text-[#fff] block py-[18px]">
    //             <h3 className="">Nosotros</h3>
    //           </div>
    //         </Link>
    //       </div>

    //       <div className="bg-[#614C3C] hover:bg-[#271e18]">
    //         <Link to={null}>
    //           <div className="w-[150px] h-[70px] text-center text-[#fff] block py-[18px]">
    //             <h3>Servicios</h3>
    //           </div>
    //         </Link>
    //       </div>

    //       <div className="bg-[#614C3C] hover:bg-[#271e18]">
    //         <Link to={"/contact"}>
    //           <div className="w-[150px] h-[70px] text-center text-[#fff] block py-[18px]">
    //             <h3>Contacto</h3>
    //           </div>
    //         </Link>
    //       </div>

    //       <div className="bg-[#614C3C] hover:bg-[#271e18]">
    //         <Link to={"/cart"}>
    //           <h3 className="w-[150px] h-[70px] text-center text-[#fff] block py-[18px]">Carrito</h3>
    //         </Link>
    //       </div>

    //         <div className="relative inline-block h-[70px] w-[70px] group">

    //           <button className="p-[16px] cursor-pointer">
    //             <img className="w-[50px] flex items-center rounded-[12px]" src={UserPhoto} />
    //           </button>

    //           <ul className="hidden absolute w-max z-50 group-hover:block">

    //             <div className="bg-[#614C3C] hover:bg-[#271e18] w-[100px]">
    //               <Link to="/login">
    //                 <h3 className="w-[100px] h-[70px] text-center text-[#fff] block py-[20px]">Profile</h3>
    //               </Link>
    //             </div>

    //             <div className="bg-[#614C3C] hover:bg-[#271e18] w-[100px]">
    //               <Link to="/login">
    //                 <h3 className="w-[100px] h-[70px] text-center text-[#fff] block py-[20px]">Login</h3>
    //               </Link>
    //             </div>

    //           </ul>

    //         </div>

    //     </div>

    //   </div>
    // </section>

  );
}

