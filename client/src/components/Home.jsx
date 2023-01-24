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
  let [food, setfood] = useState([])
  // const dispatch = useDispatch()
  // const allFoods = useSelector((state) => state.allFoods)

  useEffect(()=>{
 
  const food2 = axios.get('http://localhost:3001/foods')
    .then(function(value){
      setfood(value.data)
  })


  }, []);


//{filteredDogs.length?filteredDogs.slice(page*8,page*8+8).map(dog=><Card dog={dog}/>):dogs.slice(page*8,page*8+8).map(dog=><Card dog={dog}/>)}
//

/* */
  return (<>
  <div>
    <Filters/>
  </div>
  <div>
      <Recipescard/>
  </div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.9652579510075!2d-59.72594984918735!3d-33.658062080620326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ba1898cde37a09%3A0x5af68ac2a2ffdd61!2sVino%20Rojo!5e0!3m2!1ses-419!2sar!4v1674078948700!5m2!1ses-419!2sar" width="500" height="400"/>
  <Link to="/detail">
    <img src={ProductoImage}/>
  </Link>
  </>)
};


