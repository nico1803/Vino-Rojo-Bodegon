import React ,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardCarrito from '../components/CardCarrito'
import {cartRemove, cartUp, cartDown} from '../redux/actions'



export default function ShoppingCart() {

  const dispatch = useDispatch();
  const carro = useSelector((state)=> state);

  return (
    <div>{carro.cart.map((el, id) => {return (<div className='flex bg-auto justify-center bg-orange-200	m-20'>
    
    <button className='text-6xl' onClick={()=>dispatch(cartUp(id))}>+</button>
    <CardCarrito food={el} key={id} />
    <button className='flex text-xl text-red-600' onClick={()=>dispatch(cartRemove(el._id))}>X ELIMINAR CARD X</button>
    <button className='text-6xl' onClick={()=>dispatch(cartDown(id))}>-</button><br/>
    
    </div>)})}
    <p href="">holas este es el carrito</p>
    </div>

  )
}

