import React from 'react';

//name, image, description, price, review, type, _id
export default function CardCarrito({food}) {
    return (
                
        <div className="flex bg-white rounded-lg" >
            <div className="flex container ">
                <img className=" object-cover sm:w-[90px] sm:h-[90px] md:w-[170px] md:h-[170px] rounded-t-lg md:rounded-none md:rounded-l-lg" src={food.image} alt="imgNotFound" />
                <div className="p-6 flex flex-col justify-start leading-normal">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{food.name}</h5>

                    <p className="text-gray-900 text-s">Precio: ${food.price*food.quantity}</p>

                    <p className="text-gray-400 text-s">Cantidad: {food.quantity}</p>
                </div>
            </div> 
        </div>
    )
};