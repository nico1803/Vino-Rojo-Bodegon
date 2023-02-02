import React from 'react';
import Filters from './Filters';
import Recipescard from './RecipesCard';
import ProductoImage from "../assets/LogoBarril.png";
import { Link } from 'react-router-dom';


export default function Home() {

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


