import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardAdmin from './CardAdmin';
import Loading from '../Loading';
import { getFoods, getAbleFood } from "../../redux/actions";
import axios from 'axios';



export default function Dashboard() {
  let dispatch = useDispatch();
  // const carro = useSelector((state)=> state);
  const recetas = useSelector((state) => state.allFoods)

//   function handleClickDisable(id) {
//     dispatch(disableFood(id));
// };

// function handleClickAble(id) {
//   dispatch(ableFood(id));
// };

  useEffect(()=>{
    dispatch(getFoods())
}, [dispatch]);

if (!recetas || !recetas.length) return <Loading/>
  return (<>
  <div className='b bg-gray-300'>
    <h3 className='text-2xl p-5 text-center font-black'>ADMIN DASHBOARD</h3>
    {   
        recetas.map((el, id) => {return (
          <div className='rounded-lg relative m-2' key={id}>

            <CardAdmin food={el} key={id} />

            <div className='absolute bottom-[15px] left-[800px] z-50 bg-[#971b1b] hover:bg-[#d61313] p-[5px] rounded-lg'>
              <button onClick={() => axios.get(`/foods/disableFood/${el._id}`)} className='flex text-s text-center text-[#fff]' >DESACTIVAR PLATO</button>
            </div>
            <div className='absolute bottom-[15px] left-[600px] z-50 bg-[#971b1b] hover:bg-[#d61313] p-[5px] rounded-lg'>
              <button onClick={() => axios.get(`/foods/ableFood/${el._id}`)} className='flex text-s text-center text-[#fff]' >ACTIVAR PLATO</button>
            </div>

          </div>)})
        }
  </div>
  
  
  </>);
}


