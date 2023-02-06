import React from "react";
import { useDispatch } from "react-redux";
import { drinksTypes, foodTypes, getDrinks, getFoods } from "../redux/actions";


export default function Filters() {
    const dispatch = useDispatch();

    function handleClick(event) {
        dispatch(foodTypes(event));
    };
     function handleDrinksType(e){
        dispatch(drinksTypes(e))
     };
    const handleDrinks = (e) => {
        dispatch(getDrinks(e))
    }

    return (
    <div className="">

        <div className="text-center mt-5">
                <p className="font-bold text-white">Menu</p>
        </div>
        <div className="justify-center bg-slate-900 rounded-lg grid grid-cols-2 gap-8 place-items-center h-auto m-5 p-5 animate__animated animate__backInLeft">

            

            <div className="hover:bg-rose-900 bg-[#720f10] p-3 rounded-full w-[5rem] h-[5rem] m-5" onClick={() => handleClick("Entrada")}>

                <span className="text-gray-200 flex justify-center">
                    <i className="ri-knife-line text-[40px]"></i>
                </span>

                <span className="text-gray-200 flex justify-center m-2">
                    ENTRADAS
                </span>

            </div>

            <div className="hover:bg-rose-900 bg-[#720f10] p-3 rounded-full w-[5rem] h-[5rem] m-5" onClick={() => handleClick("Plato Principal")}>

                <span className="text-gray-200 flex justify-center">
                    <i className="ri-restaurant-2-line text-[40px]"></i>
                </span>

                <span className="text-gray-200 flex justify-center m-2">
                    PRINCIPAL
                </span>

            </div>

            <div className="hover:bg-rose-900 bg-[#720f10] p-3 rounded-full w-[5rem] h-[5rem] m-5" onClick={() => handleClick("Guarnicion")}>

                <span className="text-gray-200 flex justify-center">
                    <i className="ri-seedling-line text-[40px]"></i>
                </span>

                <span className="text-gray-200 flex justify-center m-2">
                    GUARNICION
                </span>

            </div>

            <div className="hover:bg-rose-900 bg-[#720f10] p-3 rounded-full w-[5rem] h-[5rem] m-5" onClick={() => handleClick("Postre")}>

                <span className="text-gray-200 flex justify-center">
                    <i className="ri-trophy-line text-[40px]"></i>
                </span>

                <span className="text-gray-200 flex justify-center m-2">
                    POSTRES
                </span>

            </div>

        </div>

        <div className="text-center mt-5">
            <p className="font-bold text-white">Bebidas</p>
        </div>
        <div className="justify-center bg-slate-900 rounded-lg grid grid-cols-2 gap-8 place-items-center h-auto m-5 p-5 animate__animated  animate__backInLeft">
            
            

            <div className="hover:bg-rose-900 bg-[#720f10] p-3 rounded-full w-[5rem] h-[5rem] m-5" onClick={()=> handleDrinksType("Vinos")}>

                <span className="text-gray-200 flex justify-center">
                    <i className="ri-goblet-line text-[40px]"></i>
                </span>

                <span className="text-gray-200 flex justify-center m-2" >
                    Bodega
                </span>
            </div> 

            <div className="hover:bg-rose-900 bg-[#720f10] p-3 rounded-full w-[5rem] h-[5rem] m-5" onClick={() => handleDrinks()}>

                <span className="text-gray-200 flex justify-center">
                    <i className="ri-filter-off-line text-[40px]"></i>
                </span>

                <span className="text-gray-200 flex justify-center text-center m-2 leading-[18px]">
                    Otros
                </span>
            </div>
            
        </div>

        <div className="text-center mt-5">
            <p className="font-bold text-white">Otros</p>
        </div>
        <div className="justify-center bg-slate-900 rounded-lg grid grid-cols-2 gap-8 place-items-center h-auto m-5 p-5 animate__animated  animate__backInLeft">

            

            <div className="hover:bg-rose-900 bg-[#720f10] p-3 rounded-full w-[5rem] h-[5rem] m-5" onClick={null}>

                <span className="text-gray-200 flex justify-center">
                    <i className="ri-goblet-line text-[40px]"></i>
                </span>

                <span className="text-gray-200 flex justify-center m-2">
                    Mayor Precio
                </span>
            </div> 

            <div className="hover:bg-rose-900 bg-[#720f10] p-3 rounded-full w-[5rem] h-[5rem] m-5" onClick={null}>

                <span className="text-gray-200 flex justify-center">
                    <i className="ri-filter-off-line text-[40px]"></i>
                </span>

                <span className="text-gray-200 flex justify-center text-center m-2 leading-[18px]">
                    Menor Precio
                </span>
            </div>
            
        </div>

    </div>)
}

/**
            
 

 */