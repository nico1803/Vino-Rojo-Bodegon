import React from 'react';
import {AiOutlineInstagram} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer () {
    return (
        <footer className="bg-[#705432] text-white absolute inset-x-0 bottom-0 ">
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#614C3C] py-7">
                <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
                    <span className="text-red-400">Vino Rojo</span> Bodegon
                </h1>
                <div>
                    <input
                        type="text"
                        placeholder=""
                        className="text-gray-800
                        sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
                    />
                    <button className="bg-red-400 hover:bg-red-500 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
                        Suscribirte
                    </button>
                </div>
            </div>
            <div>
                <ul className="flex flex-row justify-center gap-6 sm:px-8 px-5 pt-6 pb-1">
                    <li>
                        <a className='text-white-400 hover:text-red-400 duration-300 text-md cursor-pointer leading-6' href="">
                            <h1 className='mb-1 font-semibold'>SOBRE NOSOTROS</h1>
                        </a>
                    </li>
                    <li>
                        <a className='text-white-400 hover:text-red-400 duration-300 text-md cursor-pointer leading-6' href="">
                            <h1 className='mb-1 font-semibold'>SERVICIOS</h1>
                        </a>
                    </li>
                    <li>
                        <Link to={"/contact"}>
                            <h1 className='text-white-400 hover:text-red-400 duration-300 text-md cursor-pointer leading-6 mb-1 font-semibold'>CONTACTO</h1>
                        </Link>
                    </li>
                   
                </ul>
            </div>
            
            <div className="flex flex-row justify-center gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
                <span>© 2023. All rights reserved.</span>
                <a className='flex justify-end items-center' href="https://www.instagram.com/vino.rojo.bodegon/">
                    <AiOutlineInstagram className='inline-flex items-center w-[1.6em] h-[1.6em] rounded-full p-1 bg-gray-700 text-xl hover:text-gray-100 hover:bg-red-500 duration-300'/>
                    <span className='p-1 text-md'>Instagram</span>
                </a>
            </div>
        </footer>
    )
};