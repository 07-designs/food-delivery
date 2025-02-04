import React from 'react'
import Image from 'next/image'
import { featuredProducts } from '@/data'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      {/* Wrapper */}
      <div className='w-max flex'>
        {/* Single Item */}
        {featuredProducts.map((item)=>(

        
        <div key={item.id}
        className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-200 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
          {/* Image */}
          { item.img && 
          <div className='relative flex-1 w-full'>
            <Image
             src={item.img}
             alt=""
             fill
             className='object-contain'/>
          </div>}
          {/* Text container */}
          <div className='flex-1 flex flex-col  items-center justify-center gap-4 text-center'>
            <h1 className='text-xl font-bold uppercase text-center mt-1 xl:text-2xl 2xl:text-3xl'>${item.title}</h1>
            <p className='text-p-4'>{item.desc}</p>
            <span className='text-xl font-bold'>${item.price}</span>
            <button className='bg-red-500 text-white rounded p-1 '>Add to cart</button> 
          </div>
        </div>
      ))  
      }
      </div>
    </div>
  )
}

export default Featured