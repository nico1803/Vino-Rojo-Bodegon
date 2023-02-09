import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { editFood } from '../../redux/actions';
import axios from 'axios';
import { useDispatch } from 'react-redux';


export default function CardEdit({}) {

    const dispatch = useDispatch();
    let { id } = useParams();
    let [food, setfood] = useState([]);
    const [foodImage, setfoodImage] = useState('');
    const [foodName, setfoodName] = useState('');
    const [foodDescription, setfoodDescription] = useState('');
    const [foodPrice, setfoodPrice] = useState('');

    useEffect(()=>{
        dispatch(editFood())
    }, [dispatch]);

    

  return (
    <div>
        <div className="w-100% m-5 mt-[6em] flex justify-center">
            <div className="w-[80%] sm:w-[90%] bg-white flex flex-col sm:flex sm:flex-row md:flex md:flex-row rounded-lg drop-shadow-2xl">
                <div className="">
                    <img className="rounded-lg sm:w-[450px] sm:h-[100%] lg:w-[500px] lg:h-[350px]" src={food.image} alt="product_image" />
                    <input type="url" value={foodImage} name='image' placeholder='Image' onChange={(e) => setfoodImage(e.target.value)} />
                </div>
                <div className=" m-5 flex flex-col w-[80%]">
                    <div className="text-2xl grid justify-items-center font-bold text-center">
                        <label className="">{food.name}</label>
                        <input placeholder='Nombre' value={foodName} onChange={(e) => setfoodName(e.target.value)}/>
                    </div>
                    <div className=" h-[60%] m-5 p-5 flex justify-center ">
                        <label className="tracking-wide text-center">
                            {food.description}
                        </label>
                        <input placeholder='Descripcion' value={foodDescription} onChange={(e) => setfoodDescription(e.target.value)}/>
                    </div>
                    <div className="flex justify-end p-5">
                        <div className="flex gap-5">
                            <label>
                                {food.price}
                            </label>
                            <input placeholder='Precio' value={foodPrice} onChange={(e) => setfoodPrice(e.target.value)}/>
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
