import React from "react";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";


export default function Filters() {
    const dispatch = useDispatch();

    function handleClick(event) {
        event.preventDefault();
        dispatch();
    }

    return (
    
    <div className="flex justify-center float-left bg-slate-900 p-5 pr-5 pl-5 m-10 rounded-lg w-1/4 grid grid-cols-3 gap-8 w-auto h-auto">

        <div className="hover:bg-rose-900 bg-red-800 p-3 rounded-full w-[5rem] h-[5rem] m-5" onClick={null}>

            <span className="text-gray-200 flex justify-center">
                <i className="ri-goblet-line text-[40px]"></i>
                
            </span>
            <span className="text-gray-200 flex justify-center m-2">
                BEBIDAS
            </span>
        </div>

        <div className="hover:bg-rose-900 bg-red-800 p-3 rounded-full w-[5rem] h-[5rem] m-5">

            <span className="text-gray-200 flex justify-center">
                <i className="ri-seedling-line text-[40px]"></i>
                
            </span>
            <span className="text-gray-200 flex justify-center m-2">
                GUARNICION
            </span>
        </div>

        <div className="hover:bg-rose-900 bg-red-800 p-3 rounded-full w-[5rem] h-[5rem] m-5">

            <span className="text-gray-200 flex justify-center">
                <i className="ri-knife-line text-[40px]"></i>
                
            </span>
            <span className="text-gray-200 flex justify-center m-2">
                ENTRADAS
            </span>
        </div>

        <div className="hover:bg-rose-900 bg-red-800 p-3 rounded-full w-[5rem] h-[5rem] m-5">

            <span className="text-gray-200 flex justify-center">
                <i className="ri-restaurant-2-line text-[40px]"></i>
                
            </span>
            <span className="text-gray-200 flex justify-center m-2">
                PRINCIPAL
            </span>
        </div>

        <div className="hover:bg-rose-900 bg-red-800 p-3 rounded-full w-[5rem] h-[5rem] m-5">

            <span className="text-gray-200 flex justify-center">
                <i className="ri-trophy-line text-[40px]"></i>
                
            </span>
            <span className="text-gray-200 flex justify-center m-2">
                POSTRES
            </span>
        </div>

    </div>)
}