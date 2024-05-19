"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
 
type Props={
    price:number;
    id:number;
    options?: { title: string; additionalPrice: number }[];
}
const Price = ({price,id,options}:Props) => {
    const [total, settotal] = useState(price)
    const [quantity, setquantity] = useState(1)
    const [selected, setselected] = useState(0)
    useEffect(() => {
        settotal(
          quantity * (options ? price + options[selected].additionalPrice : price)
        );
      }, [quantity, selected, options, price]);
  return (
    <div className='flex flex-col gap-4'>
     <h2 className='text-2xl font-bold'>${total.toFixed()}</h2>
     <div className='flex gap-4'>
      {options?.map((option,index)=>(
        <button key={option.title}
        className=' p-2 ring-1 ring-red-500 rounded-md'
        style={{
            background:selected===index?"rgb(239 68 68)":"white",
            color:selected===index?"white":"red"

        }}
        onClick={(prev)=>setselected(prev=>prev==2?prev=0:prev+1)}>{option.title}</button>
      ))}
     </div>
     <div className='flex justify-between items-center'>

     
     <div className='flex justify-between w-full p-3 ring-1 ring-red-500'> 
        <span>Quantity</span>
        <div className='flex gap-2'>
        <button onClick={(prev)=>setquantity(prev=>prev==1?prev=1:prev-1)}>{'<'}</button>
        <span>{quantity}</span>
        <button onClick={(previ)=>setquantity(previ=>previ<9?previ+1:9)}>{'>'}</button>
        </div>
        
        </div>
        <button className='uppercase w-56 ring-1 ring-red-500 bg-red-500 text-white  p-3'>Add to Cart</button>
     </div>
    </div>
  )
}

export default Price