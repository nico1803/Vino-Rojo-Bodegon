import React from 'react';


//name, image, description, price, review, type, _id
export default function CardAdmin({food}) {
    console.log(food)
    if (food.available){
        <div className="flex h-full" >
        <div className="flex rounded-lg text-gray-600 shadow-lg container lg:mx-auto border-stone-900 border-2">
            <img className="object-cover sm:w-[90px] sm:h-[90px] md:w-[170px] md:h-[170px] rounded-t-lg md:rounded-none md:rounded-l-lg border-r-2  border-stone-900" src={food.image} alt="imgNotFound" />
            <div className="p-6 flex flex-col justify-start leading-normal">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{food.name}</h5>

                <p className="text-gray-900 text-s">Precio: ${food.price}</p>
            </div>
        </div> 
    </div>
    }
    if (food.available === false)return (
                
        <div className="flex h-full" >
            <div className="flex rounded-lg bg-white shadow-lg container lg:mx-auto border-stone-900 border-2">
                <img className="object-cover sm:w-[90px] sm:h-[90px] md:w-[170px] md:h-[170px] rounded-t-lg md:rounded-none md:rounded-l-lg border-r-2  border-stone-900" src={food.image} alt="imgNotFound" />
                <div className="p-6 flex flex-col justify-start leading-normal">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{food.name}</h5>
                    <p className="text-gray-900 text-s">Precio: ${food.price}</p>

                    
                </div>
            </div> 
        </div>
    )
};
