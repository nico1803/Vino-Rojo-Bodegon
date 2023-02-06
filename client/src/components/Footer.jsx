import React from 'react';
import {AiOutlineInstagram} from "react-icons/ai";

export default function Footer () {
    return (
        <footer className="text-white absolute inset-x-0 bottom-0 ">
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-slate-900 py-7">
                <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
                    <span className="text-red-400">Vino Rojo</span> Bodegon
                </h1>
                <span>© 2023. All rights reserved.</span>
                <a className='flex justify-end items-center' href="https://www.instagram.com/vino.rojo.bodegon/">
                    <AiOutlineInstagram className='inline-flex items-center w-[1.6em] h-[1.6em] rounded-full p-1 bg-gray-700 text-xl hover:text-gray-100 hover:bg-red-500 duration-300'/>
                    <span className='p-1 text-md'>Instagram</span>
                </a>
            </div>
        </footer>
    )
};