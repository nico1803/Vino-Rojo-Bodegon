import React,{useEffect} from 'react';
//import axios from 'axios';
import { useMercadopago } from 'react-sdk-mercadopago';

 
//name, image, description, price, review, type, _id
export default function CardCarrito({food}) {

    const mercadopago = useMercadopago.v2('TEST-2868c785-73d9-4f35-8a0a-45daa2a8efa5', {
        locale: 'es-AR'
       }); 

     useEffect(() => {
    if (mercadopago) {
        mercadopago.checkout({
            preference: {//YOUR_PREFERENCE_ID
                id: '1300590179-869c4eae-64e0-4553-94d1-85381770e355'
            },
            render: {
                container: '.cho-container',
                label: 'Pagar',
            }
        })
    }
    console.log(mercadopago) 
}, [mercadopago]);
 
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
            <div>
               <div class="cho-container" />
             </div>
        </div>
    )
};