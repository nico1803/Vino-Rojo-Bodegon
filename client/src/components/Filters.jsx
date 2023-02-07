import React from "react";
import { useDispatch } from "react-redux";
import { foodTypes } from "../redux/actions";


export default function Filters() {
    const dispatch = useDispatch();
    let selected = 0;

    function handleClick(event, number) {
        dispatch(foodTypes(event));
        selected = number;
        console.log(selected)
    };


    const buttonCss = "hover:bg-[#c51b1e] bg-[#720f10] p-3 rounded-full w-[5rem] h-[5rem] m-5 "
    const SelectedButtonCss = "hover:bg-rose-900 bg-[#720f10] p-3 rounded-full w-[5rem] h-[5rem] m-5 border border-1 border-white"

    

    return (
    <div className="">

        <div className="text-center mt-5">
                <p className="font-bold text-white">Menu</p>
        </div>
        <div className="justify-center bg-slate-900 rounded-lg grid sm:grid-cols-1 md:grid-cols-2 sm:gap-4 md:gap-8 place-items-center h-auto m-5 p-5 animate__animated animate__backInLeft" >

            {
                selected===1 ?
                    <div className={SelectedButtonCss} onClick={() => handleClick("Entrada",1)}>

                    <span className="text-gray-200 flex justify-center">
                        <i className="ri-knife-line text-[40px]"></i>
                    </span>

                    <span className="text-gray-200 flex justify-center m-2">
                        ENTRADAS
                    </span>

                    </div>
                :    
                    <div className={buttonCss} onClick={() => handleClick("Entrada",1)}>

                        <span className="text-gray-200 flex justify-center">
                            <i className="ri-knife-line text-[40px]"></i>
                        </span>

                        <span className="text-gray-200 flex justify-center m-2">
                            ENTRADAS
                        </span>

                    </div>

            }
            

            <div className={selected===2 ? SelectedButtonCss : buttonCss} onClick={() => handleClick("Plato Principal",2)}>

                <span className="text-gray-200 flex justify-center">
                    <i className="ri-restaurant-2-line text-[40px]"></i>
                </span>

                <span className="text-gray-200 flex justify-center m-2">
                    PRINCIPAL
                </span>

            </div>

            <div className={selected===3 ? SelectedButtonCss : buttonCss} onClick={() => handleClick("Guarnicion",3)}>

                <span className="text-gray-200 flex justify-center">
                    <i className="ri-seedling-line text-[40px]"></i>
                </span>

                <span className="text-gray-200 flex justify-center m-2">
                    GUARNICION
                </span>

            </div>

            <div className={buttonCss} onClick={() => handleClick("Postre")}>

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
        <div className="justify-center bg-slate-900 rounded-lg grid sm:grid-cols-1 md:grid-cols-3 sm:gap-2 md:gap-4 place-items-center h-auto m-5 p-5 animate__animated  animate__backInLeft">
            
            

            <div className={buttonCss} onClick={()=> handleClick("Aguas")}>

                <span className="text-gray-200 flex justify-center">
                    <i className="ri-goblet-line text-[40px]"></i>
                </span>

                <span className="text-gray-200 flex justify-center m-2" >
                    Aguas
                </span>
            </div>

            <div className={buttonCss} onClick={() => handleClick("Gaseosas")}>

                <span className="text-gray-200 flex justify-center">
                    <i className="ri-goblet-line text-[40px]"></i>
                </span>

                <span className="text-gray-200 flex justify-center text-center m-2 leading-[18px]">
                    Gaseosas
                </span>
            </div>

            <div className={buttonCss} onClick={() => handleClick("Cervezas")}>

                <span className="text-gray-200 flex justify-center">
                    <i className="ri-goblet-line text-[40px]"></i>
                </span>

                <span className="text-gray-200 flex justify-center text-center m-2 leading-[18px]">
                    Cervezas
                </span>
            </div>

            <div className={buttonCss} onClick={() => handleClick("Vinos")}>

                <span className="text-gray-200 flex justify-center">
                    <i className="ri-goblet-line text-[40px]"></i>
                </span>

                <span className="text-gray-200 flex justify-center text-center m-2 leading-[18px]">
                    Vinos
                </span>
            </div>

            <div className={buttonCss} onClick={() => handleClick("Tragos")}>

                <span className="text-gray-200 flex justify-center">
                    <i className="ri-goblet-line text-[40px]"></i>
                </span>

                <span className="text-gray-200 flex justify-center text-center m-2 leading-[18px]">
                    Tragos
                </span>
            </div>
            
        </div>

        <div className="text-center mt-5">
            <p className="font-bold text-white">Otros</p>
        </div>
        <div className="justify-center bg-slate-900 rounded-lg grid sm:grid-cols-1 md:grid-cols-2 sm:gap-4 md:gap-8 place-items-center h-auto m-5 p-5 animate__animated  animate__backInLeft">

            

            <div className={buttonCss} onClick={null}>

                <span className="text-gray-200 flex justify-center">
                    <i className="ri-goblet-line text-[40px]"></i>
                </span>

                <span className="text-gray-200 flex justify-center m-2">
                    Mayor Precio
                </span>
            </div> 

            <div className={buttonCss} onClick={null}>

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