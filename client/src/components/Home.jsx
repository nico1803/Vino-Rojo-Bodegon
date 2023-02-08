import React from 'react';
import Filters from './Filters';
import Recipescard from './RecipesCard';


export default function Home() {

  return (
  <>
    <div className='flex w-full'>

      <div className='sd:m-5 md:m-10 rounded-lg w-1/4 flex-auto'>
        <Filters/>
        <div className='hidden lg:flex '>
          <iframe title='myFrame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.9652579510075!2d-59.72594984918735!3d-33.658062080620326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ba1898cde37a09%3A0x5af68ac2a2ffdd61!2sVino%20Rojo!5e0!3m2!1ses-419!2sar!4v1674078948700!5m2!1ses-419!2sar" width="400" height="400" className='mx-auto m-[3em] p-5 rounded-lg' />
        </div>
      </div>

      <div className='w-2/3 max-w-2/3 flex-auto'>
        <Recipescard/>
      </div>

    </div>
  </>)
};


