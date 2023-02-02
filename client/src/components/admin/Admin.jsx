import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Recipescard from '../RecipesCard';
import CardAdmin from './CardAdmin';
import { getFoods } from "../../redux/actions";



export default function Dashboard() {
  let dispatch = useDispatch();
  const carro = useSelector((state)=> state);
  console.log(carro)

  useEffect(()=>{
    dispatch(getFoods())
}, [dispatch]);

  return (<>
  <div className=''>
    <h3 className='text-2xl font-black'>ADMIN DASHBOARD</h3>
  </div>
  {
        carro.allFoods.map((el, id) => {return (
          <div className='rounded-lg relative m-[10px] bg-[#971b1b]' key={id}>

            <CardAdmin food={el} key={id} />

            <div className='absolute bottom-[15px] left-[600px] z-50 bg-[#971b1b] hover:bg-[#d61313] p-[5px] rounded-lg'>
              <button className='flex text-s text-center text-[#fff]' >DESACTIVAR PLATO</button>
            </div>
            <div className='absolute bottom-[15px] left-[400px] z-50 bg-[#971b1b] hover:bg-[#d61313] p-[5px] rounded-lg'>
              <button className='flex text-s text-center text-[#fff]' >ATIVAR PLATO</button>
            </div>

          </div>)})
        }
  
  </>);
}

