import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

//name, image, description, price, review, type, _id
export default function Card({food}) {

    return (
        
    <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-[400px] h-[300px]' src={food.image}/></figure>
        <div className="flex justify-end">
            <h2 className="card-title">{food.name}</h2>
            <p>{food.description}</p>
            <p>{food.price}</p>
            <div className="card-actions justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Comprar</button>
            </div>
        </div>
    </div>
    )
}