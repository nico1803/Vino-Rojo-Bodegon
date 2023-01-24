import React from "react";


export default function Filters() {

    return (
    
    <div className="flex justify-end float-left bg-slate-900 p-3 m-5 rounded-lg w-1/4">

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