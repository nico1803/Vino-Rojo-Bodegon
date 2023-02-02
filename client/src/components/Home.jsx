import React from 'react';
import Filters from './Filters';
import Recipescard from './RecipesCard';


export default function Home() {

  return (
  <>
    <div className='flex w-full'>

      <div className='m-10 rounded-lg w-1/4 flex-auto'>
        <Filters/>
      </div>

      <div className='w-2/3 max-w-2/3 flex-auto'>
        <Recipescard/>
      </div>

    </div>
  </>)
};


