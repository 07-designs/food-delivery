import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Carticon = () => {
  return (
    <Link href="/cart" className='flex items-center gap-4'>
        <div className='relative w-5 h-5 '>
             <Image src="/cart.png" alt="" fill/>
             
        </div>
        <span>Cart (3)</span>
    </Link>
  )
}

export default Carticon