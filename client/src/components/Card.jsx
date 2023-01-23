import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

//name, image, description, price, review, type, _id
export default function Card({food}) {
    return (
        <Link to={`/detail/${food._id}`}>
                
           
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg lg:container lg:mx-auto">
            <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={food.image} alt="imgNotFound" />
            <div className="p-6 flex flex-col justify-start">
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