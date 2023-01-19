import React from 'react';
import { Link } from 'react-router-dom';


export default function Card({name, image, description, price, review, type, _id}) {
    return (
        <div className='grid grid-cols-1 bg-white rounded-md'>
            <img className='rounded-md rounded-b-none' src={image} alt={name}/>
            <div className='p-4'>
                <h2 className=''>{name}</h2>
            </div>
        </div>
    )
}