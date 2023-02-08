import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardCarrito from './CardCarrito'
import {cartRemove, cartUp, cartDown} from '../../redux/actions'
import Plus from "../../assets/plus.png"
import Minus from "../../assets/minus.png"
import { Link } from 'react-router-dom';
//import axios from 'axios';
import { useMercadopago } from 'react-sdk-mercadopago';

export default function ShoppingCart() {
   //mp                                        //'YOUR_PUBLIC_KEY'
   const mercadopago = useMercadopago.v2('TEST-2868c785-73d9-4f35-8a0a-45daa2a8efa5', {
    locale: 'es-AR'
});

useEffect(() => {
    if (mercadopago) {
        mercadopago.checkout({
            preference: {
              //YOUR_PREFERENCE_ID
                id: '1300590179-869c4eae-64e0-4553-94d1-85381770e355'
            },
            render: {
                container: '.cho-container',
                label: 'Pagar',
            }
        })
    }
}, [mercadopago]);

  const dispatch = useDispatch();
  const carro = useSelector((state)=> state);


  let price = carro.cart.map(e=>e.price*e.quantity).reduce((a,current)=>a+current,0)

  if (!carro?.cart.length) return (
    <div className='bg-[#282c34] rounded-lg m-3 p-3'>

      <div className='flex justify-center'>
        <p className='text-white'>Tu Carrito esta vacio</p>
      </div>

      <div className='flex p-[5px] bg-[#282c34] justify-between'>
          <a href="/">
            <button className='text-white bg-[#614C3C] hover:bg-[#271e18] p-[5px] rounded-lg'>Ver Menu</button>
          </a>
        
          <div className='flex'>
            <button className='text-white bg-[#614C3C] hover:bg-[#271e18] p-[5px] rounded-lg font-bold'>Finalizar compra</button>
          </div>

        </div>
    </div>
  )
 
  return (
    <div>
      <div className='bg-[#282c34] rounded-lg m-3 p-3'>

        <div>
          <span>
            <i className='IoCartOutline'></i>
          </span>
        </div>

        {
        carro.cart.map((el, id) => {return (
          <div className='rounded-lg relative m-[10px] bg-[#971b1b]' key={id}>

            <CardCarrito food={el} key={id} />

            <div className='absolute bottom-[15px] left-[600px] z-50 bg-[#971b1b] hover:bg-[#d61313] p-[5px] rounded-lg'>
              <button className='flex text-s text-center text-[#fff]' onClick={()=>dispatch(cartRemove(el.id))}>Remover Plato</button>
            </div>

            <div className='absolute bottom-[10px] left-[400px] z-50'>
              <img className='w-[40px] h-[40px] cursor-pointer' src={Plus} alt="Plus.png" onClick={()=>dispatch(cartUp(id))}/>
            </div>

            <div className='absolute bottom-[10px] left-[500px] z-50'>
              <img className='w-[40px] h-[40px] cursor-pointer' src={Minus} alt="Minus.Png" onClick={()=>dispatch(cartDown(id))}/>
            </div>

          </div>)})
        }

        <div className='flex p-[5px] bg-[#282c34] justify-between'>
          <Link to={"/"}>
            <button className='text-white bg-[#614C3C] hover:bg-[#271e18] p-[5px] rounded-lg'>Seguir Comprando</button>
          </Link>
        
          <div className='flex'>
            
            <div className='w-[150px]'>
              <p className='text-black bg-white rounded-full p-[5px] m-[5px]'>Total: ${price}</p>
            </div>

            <button className='text-white bg-[#614C3C] hover:bg-[#271e18] p-[5px] rounded-lg font-bold'>Finalizar compra</button>
             
             <div>
               <div class="cho-container" />
             </div>
          </div>

        </div>
      </div>

    </div>
  )
}

