import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CardEdit from './CardEdit';


//name, image, description, price, review, type, _id
export default function CardAdmin({food}) {

    return (
                
        <div className="flex h-full" >
            <div className={`${food.available?'bg-white':'bg-gray-400'} flex rounded-lg shadow-lg container lg:mx-auto border-stone-900 border-2`}>
                <img className="object-cover sm:w-[90px] sm:h-[90px] md:w-[170px] md:h-[170px] rounded-t-lg md:rounded-none md:rounded-l-lg border-r-2  border-stone-900" src={food.image} alt="imgNotFound" />
                <div className="p-6 flex flex-col justify-start leading-normal">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{food.name}</h5>
                </div>
            </div> 
            {food.available && <div className='flex items-center justify-center absolute bottom-[15px] left-[600px] w-44 z-50 bg-[#971b1b] hover:bg-[#d61313] p-[5px] rounded-lg'>
              <button onClick={() => axios.get(`/foods/disableFood/${food._id}`)} className='flex text-s text-center text-[#fff]' >DESACTIVAR PLATO</button>
            </div>}
            {!food.available && <div className='flex items-center justify-center absolute bottom-[15px] left-[600px] w-44 z-50 bg-[#36971b] hover:bg-[#41f40f] p-[5px] rounded-lg'>
              <button onClick={() => axios.get(`/foods/ableFood/${food._id}`)} className='flex text-s text-center text-[#fff]' >ACTIVAR PLATO</button>
            </div>}
            <div className='flex items-center justify-center absolute bottom-[15px] left-[820px] w-44 z-50 bg-[#5499C7] hover:bg-[#5DADE2] p-[5px] rounded-lg'>
                <Link to={'/cardedit'}>
                    <button className='flex text-s text-center text-[#fff]'>MODIFICAR</button>
                </Link>
            </div>
        </div>
    )
};
