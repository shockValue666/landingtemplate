import React from 'react'
import ai from '../../public/videos/ai.png';
import saas from '../../public/videos/saas.png';
import GlobeDemo from './GlobeDemo';


const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
          Seamless Solana 
          <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
            {" "}
            Transactions
          </span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
          Effortlessly integrate Solana transactions into your app with our powerful API. 
          Swap coins, manage payments, and offer exciting gambling games.
        </p> 
        <div className='flex justify-center my-10'>
          <a href="#" className='bg-gradient-to-r from-orange-500 to-red-800 py-3 px-4 mx-3 rounded-md'>
            Start for free 
          </a>
          <a href="#" className='py-3 px-4 mx-3 rounded-md border'>
            API Documentation 
          </a>
        </div>      
        <div className='flex mt-10 justify-center'>
          {/* <img src={ai.src} alt="ai" className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4' />
          <img src={saas.src} alt="ai" className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4' /> */}
          <GlobeDemo/>
        </div>
    </div>
  )
}

export default Hero