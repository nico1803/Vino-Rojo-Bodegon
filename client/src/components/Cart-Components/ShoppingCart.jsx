import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardCarrito from './CardCarrito'
import {cartRemove, cartUp, cartDown} from '../../redux/actions'
import Plus from "../../assets/plus.png"
import Minus from "../../assets/minus.png"
import { Link } from 'react-router-dom';



export default function ShoppingCart() {

  const dispatch = useDispatch();
  const carro = useSelector((state)=> state);

  return (
    <div>

      

      <div className='bg-[#0e12df] rounded-lg m-3 p-3'>

        <div>
          <span>
            <i className='IoCartOutline'></i>
        </span>
      </div>

        {carro.cart.map((el, id) => {return (
          <div className='rounded-lg bg-[#e91111]	relative m-[10px]'>

            <div className=''>
              <CardCarrito food={el} key={id} />
            </div>


            <div className='absolute bottom-[15px] left-[600px] z-50 bg-[#971b1b] p-[5px] rounded-lg'>
              <button className='flex text-xl text-white' onClick={()=>dispatch(cartRemove(el._id))}>Remover Plato</button>
            </div>

            <div className='absolute bottom-[10px] left-[400px] z-50'>
              <img className='w-[40px] h-[40px] cursor-pointer' src={Plus} alt="+" onClick={()=>dispatch(cartUp(id))}/>
            </div>

            <div className='absolute bottom-[10px] left-[500px] z-50'>
              <img className='w-[40px] h-[40px] cursor-pointer' src={Minus} alt="-" onClick={()=>dispatch(cartDown(id))}/>
            </div>

          </div>)})
        }

        <Link to={"/"}>
          <button className='text-white'>Seguir Comprando</button>
        </Link>

        <p>Total: {}</p>

        <button className='text-white'>Finalizar compra</button>

      </div>

    </div>
  )
}

