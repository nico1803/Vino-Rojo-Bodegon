import React ,{useState} from 'react';
import { useSelector } from 'react-redux';


export default function ShoppingCart() {

  const carro = useSelector((state)=> state);
  console.log(carro)

  return (
    <div>{}
    <p href="">holas este es el carrito</p>
    </div>

  )
}

