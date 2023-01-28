import React from 'react'
import gif from '../assets/chefGIF.gif'
import '../styles/loading.css'


function Loading() {
  return (<div className='flex bg-slate-900 p-3 m-5 rounded-lg w-2/3 max-w-2/3'>

    <img src={gif} alt='Gif not Found' className='w-1/3 padding mx-32'/>

    <div className="bg-slate-900  p-2 flex justify-end content-center flex-col  -ml-12 rounded-lg text-center ">
     
            <svg width="100%"  viewBox="0 0 276 276" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <g id="spinner">
                    <circle id="bottom" cx="138" cy="138" r="114" stroke="#DBDBDB" stroke-width="18" />
                    <circle id="upper" cx="138" cy="138" r="123" stroke="#72BBFF" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="373 100" style={{animationDuration:1+"s"}}/>
                </g>
            </svg>
            <p className='text-white'>Loading ...</p>
    </div>

  </div>)
}

export default Loading