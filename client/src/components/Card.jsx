import React from 'react';
import { Link } from 'react-router-dom';

//name, image, description, price, review, type, _id
export default function Card({food}) {
    return (
        <Link to={`/detail/${food._id}`}>
                
        <div className="flex h-full">
            <div className="flex rounded-lg bg-white shadow-lg container lg:mx-auto ">
            <img className=" object-cover sm:w-32 md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={food.image} alt="imgNotFound" />
            <div className="p-6 flex flex-col justify-start leading-normal">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{food.name}</h5>
                <p className="text-gray-700 text-base mb-4 break-normal">{food.description}</p>
                <p className="text-gray-900 text-s">${food.price}</p>
                <p className="text-gray-600 text-s">{food.type}</p>
            </div>
            </div>
        </div>
        </Link>
    )
};