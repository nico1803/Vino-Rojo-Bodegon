import React from 'react';
import Card from './Card';
import '../styles/home.css';
import Detail from "./Detail";
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';
import ProductoImage from '../assets/LogoBarril.png';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFoods } from '../redux/actions';
import botonesIMG from '../assets/image.png'
import Filters from './Filters';
import Recipescard from './RecipesCard';


export default function Home() {
  let [food, setfood] = useState([]);
  // const dispatch = useDispatch()
  // const allFoods = useSelector((state) => state.allFoods)

  useEffect(()=>{
 
  const food2 = axios.get('http://localhost:3001/foods')
    .then(function(value){
      setfood(value.data)
  })


  }, []);

  return (<>
  <div>
    <Filters/>
  </div>
  <div>
      <Recipescard/>
  </div>
  <Link to="/detail">
    <img src={ProductoImage} className='md:w-1/2 lg:w-1/4 m-auto mb-10'/>
  </Link>
  </>)
};


