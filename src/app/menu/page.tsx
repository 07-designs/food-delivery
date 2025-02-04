import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const MenuPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
        {menu.map(category =>(
          <Link href={`/menu/${category.slug}`}
                key={category.id}
                style={{backgroundImage:`url(${category.img})`}}
                className='w-full h-1/3 bg-cover  p-8 md:h-1/2'
                >
            <div className={`text-${category.color} w-1/2`}>
              <h1 className='font-bold uppercase text-2xl'>{category.title}</h1>
              <p className='text-sm my-3'>{category.desc}</p>
              <button className={`hidden xl:block 2xl:block bg-yellow-500 rounded py-2 px-4`}>Explore</button>
            </div>
           
          </Link>
        ))}
    </div>
  )
}

export default MenuPage