import React from "react";


export default function Filters() {

    return (
    
    <div className="flex justify-center float-left bg-slate-900 p-2 pr-5 pl-5 m-10 rounded-lg w-1/4">

        <div class="hover:bg-rose-900 p-3 rounded-lg">
            <span class="text-gray-200">
                    <i class="ri-goblet-line "></i>
                BEBIDAS
            </span>
        </div>

        <div class="hover:bg-rose-900 p-3 rounded-lg">
            <span class="text-gray-200">
                <i class="ri-seedling-line"></i>
                GUARNICION
            </span>
        </div >

        <div class="hover:bg-rose-900 p-3 rounded-lg">
            <span class="text-gray-200">
                <i class="ri-knife-line"></i>
                ENTRADAS
            </span>
        </div>

        <div class="hover:bg-rose-900 p-3 rounded-lg">
            <span class="text-gray-200">
                <i class="ri-goblet-line"></i>
                PRINCIPAL
            </span>
        </div>

    </div>)
}