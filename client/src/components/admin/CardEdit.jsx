import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { editFood } from '../../redux/actions';
import axios from 'axios';
import { useDispatch } from 'react-redux';


export default function CardEdit() {
    let { id } = useParams();
    let [food, setfood] = useState([]);
    useEffect(() => {
        // eslint-disable-next-line
        const food = axios.get(`${(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://vino-rojo-bodegon-production.up.railway.app/')}foods/${id}`)
          .then(function (value) {
            setfood(value.data)
          })
          // eslint-disable-next-line
        }, []);
        console.log(food)

  return (
    <div>
        <div className="w-100% m-5 mt-[6em] flex justify-center">
            <div className="w-[80%] sm:w-[90%] bg-white flex flex-col sm:flex sm:flex-row md:flex md:flex-row rounded-lg drop-shadow-2xl">
                <div className="">
                    <input type='url' placeholder='Cambiar imagen' />
                    <img className="rounded-lg sm:w-[450px] sm:h-[100%] lg:w-[500px] lg:h-[350px]"  alt="product_image" src={`${food.image}`}/>
                </div>
                <div className=" m-5 flex flex-col w-[80%]">
                    <div className="text-2xl grid justify-items-center font-bold text-center">
                        <label className=""></label>
                        <input placeholder={food.name} />
                    </div>
                    <div className=" h-[60%] m-5 p-5 flex justify-center ">
                        <label className="tracking-wide text-center">
                        </label>
                        <input placeholder={food.description} />
                    </div>
                    <div className="flex justify-end p-5">
                        <div className="flex gap-5">
                            <label>
                                
                            </label>
                            <input placeholder={`$${food.price}`}/>
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