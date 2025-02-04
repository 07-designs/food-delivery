import React from 'react'
import Link from 'next/link'
import Menu from './Menu'
import Carticon from './Carticon';
import Image from 'next/image';

const Navbar = () => {
    const user=false;
  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
     {/* Logo */}
     <div className='hidden md:flex gap-4 flex-1 '>
        <Link href="/">Homepage</Link>
        <Link href="/menu">menu</Link>
        <Link href="/">contact</Link>
     </div>
     <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href="/login"> Massimo</Link>
     </div>
     <div className='hidden md:flex gap-4 items-center flex-1 justify-end'>
        <div className='md:absolute top-3 r-2  lg:static flex gap-4 cursor-pointer bg-orange-300 px-2 rounded-md'>
            <Image src="/phone.png" alt="" width={20} height={20}/>
            <span>9137570219</span>
        </div>
        {
         !user ?(
            <Link href="/login">login</Link>
         ):(
            <Link href="/">orders</Link>
         )
        }
     
     
    
     <Carticon/>
     </div>
     {/* MOBILE MENU */}
     <div className='md:hidden'>
        <Menu/>
     </div>
    </div>
  )
}

export default Navbar