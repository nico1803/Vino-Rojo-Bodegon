import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardAdmin from './CardAdmin';
import { getFoods } from "../../redux/actions";
import axios from 'axios';



export default function Dashboard() {
  let dispatch = useDispatch();
  const carro = useSelector((state)=> state);

  useEffect(()=>{
    dispatch(getFoods())
}, [dispatch]);

  return (<>
  <div className='b bg-gray-300'>
    <h3 className='text-2xl p-5 text-center font-black'>ADMIN DASHBOARD</h3>
    {
        carro.allFoods.map((el, id) => {return (
          <div className='rounded-lg relative m-2' key={id}>
            <CardAdmin food={el} key={id} />
          </div>)})
        }
  </div>
  
  
  </>);
}


