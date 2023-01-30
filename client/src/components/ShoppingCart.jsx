import React ,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card'
import {cartRemove} from '../redux/actions'



export default function ShoppingCart() {

  const dispatch = useDispatch();
  const carro = useSelector((state)=> state);

  return (
    <div>{carro.cart.map((el, i) => {return (<><Card food={el} key={i} /><button className='flex' onClick={()=>dispatch(cartRemove(el._id))}>X ELIMIAR CARD X</button></>)})}
    <p href="">holas este es el carrito</p>
    </div>

  )
}

