import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/LogoBarril.png";
import { verifyAdmin } from "../redux/actions";


export default function Navbar() {

  const history = useNavigate()
  const [navbar, setNavbar] = useState(false);
  const dispatch = useDispatch();

  const permisos = useSelector((state) => state.token);

  useEffect(()=>{
    let token = localStorage.getItem('token'); 
    if (token) {
    dispatch(verifyAdmin())
    console.log('adentro')
    }
    console.log('afuera')
    console.log(permisos)
    
}, [dispatch]);


  const token = localStorage.getItem("token");
  console.log(token);

  ///HANLDER LOGIN OUT
const handlerLoginout =(e)=>{
  e.preventDefault();
  localStorage.removeItem("userId")
  localStorage.removeItem("email")
  localStorage.removeItem("name")
  localStorage.removeItem("token")
  localStorage.removeItem("image")
  history("/")
}


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
                  <li><Link to="/" href={e => {e.preventDefault()}} className="md:hidden lg:block hover:text-gray-200">Home</Link></li>
                  <li><Link to={"/aboutus"} href={e => {e.preventDefault()}} className="hover:text-gray-200">Sobre Nosotros</Link></li>
                  <li><Link to={"/contact"} href={e => {e.preventDefault()}} className="hover:text-gray-200">Contacto</Link></li>
                  {permisos === true ? <li><Link to={"/admin"} href={e => {e.preventDefault()}} onClick={verifyAdmin()} className="hover:text-gray-200">Admin</Link></li> : ''}
                  <Link className="flex items-center hover:text-gray-200 md:pl-10 " to={"/cart"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="md:hidden  pl-2"> Carrito</span>
                  </Link>
                  
                  
                    {token ? <Link className="flex items-center hover:text-gray-200" to={"/profile"}>
                    {}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="md:hidden  pl-2"> Login</span>
                  </Link>   : null}
                    {token ? <button onClick={handlerLoginout}>Cerrar Sesion</button>  : <Link className="flex items-center hover:text-gray-200 md:pl-10 " to={"/login"}><button >Iniciar Sesion</button></Link> }
                </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

