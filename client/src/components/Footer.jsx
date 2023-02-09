import React from 'react';
import {AiOutlineInstagram} from "react-icons/ai";
import { BiLaptop } from "react-icons/bi";


export default function Footer () {
    return (
        <footer className="text-white absolute inset-x-0 md:bottom-0">

            <div className="flex flex-col md:flex-row md:items-center md:justify-around sm:px-12 px-4 bg-slate-900 py-7 ">

                <div className='lg:w-[30%]'>
                    <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-[100%] flex">
                        <span className="text-[#a31619]">Vino Rojo </span> Bodegon
                    </h1>
                </div>

                <div className=' flex flex-col  md:flex-row md:w-[70%] justify-between'>

                    <a className='flex items-center p-2' href="https://www.instagram.com/vino.rojo.bodegon/" target={'_blank'} rel="noreferrer">
                        <AiOutlineInstagram className='inline-flex items-center w-[1.6em] h-[1.6em] rounded-full p-1 bg-gray-700 text-xl hover:text-gray-100 hover:bg-red-500 duration-300'/>
                        <span className='p-1'>Instagram</span>
                    </a>

                    <a href="/team" className='p-2'>
                        <BiLaptop className='inline-flex items-center w-[1.6em] h-[1.6em] rounded-full p-1 bg-gray-700 text-xl hover:text-gray-100 hover:bg-red-500 duration-300'/>
                       <span>Developer Team </span> 
                    </a>

                    <div className='p-2'>
                        <span>© 2023. All rights reserved.</span>
                    </div>
                </div>

            </div>

        </footer>
    )
};