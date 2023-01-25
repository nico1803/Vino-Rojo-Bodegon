import React from 'react';
import '../styles/home.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import Filters from './Filters';
import Recipescard from './RecipesCard';
import ProductoImage from "../assets/LogoBarril.png";
import { Link } from 'react-router-dom';


export default function Home() {
  let [food, setfood] = useState([]);

  useEffect(()=>{
 
  const food2 = axios.get('http://localhost:3001/foods')
    .then(function(value){
      setfood(value.data)
  })}, []);

  return (
  <>
   <div>
      <Filters/>
    </div>

    <div>
      <Recipescard/>
    </div>

    <div className="flex justify-center w-[30rem] h-[30rem] m-10 rounded-lg" >
      <Link to="/detail">
        <img src={ProductoImage} className='w-[30rem] h-[30rem] rounded-lg'/>
      </Link>
    </div>
  </>)
};


