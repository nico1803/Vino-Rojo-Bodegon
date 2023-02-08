import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


export default function CardEdit({}) {
    let { id } = useParams();
    let [food, setfood] = useState([]);


  return (
    <div>
        <div className="w-100% m-5 mt-[6em] flex justify-center">
            <div className="w-[80%] sm:w-[90%] bg-white flex flex-col sm:flex sm:flex-row md:flex md:flex-row rounded-lg drop-shadow-2xl">
                <div className="">
                    <img className="rounded-lg sm:w-[450px] sm:h-[100%] lg:w-[500px] lg:h-[350px]" src={food.image} alt="product_image" />
                </div>
                <div className=" m-5 flex flex-col w-[80%]">
                    <div className="text-2xl grid justify-items-center underline underline-offset-4 font-bold text-center">
                        <h1 className=" animate__animated animate__pulse animate__infinite	infinite  animate__delay-3s">{food.name}NOMBRE</h1>
                    </div>
                    <div className=" h-[60%] m-5 p-5 flex justify-center ">
                        <span className="tracking-wide text-center">
                            {food.description}DESCRIPCION
                        </span>
                    </div>
                    <div className="flex justify-end p-5">
                        <div className="flex gap-5">
                            <div className="text-white bg-[#720f10] hover:bg-[#c51b1e] p-[5px] rounded-lg">
                                ${food.price} PRECIO
                            </div>
                            <div>
                                <button className="text-white bg-[#720f10] hover:bg-[#c51b1e] p-[5px] rounded-lg">MODIFICAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};
