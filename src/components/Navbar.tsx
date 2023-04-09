import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import topMenu from '@/data/topMenu'

const Navbar = () => {
  return (
    <nav className='container mx-auto flex justify-between items-center py-3 mb-12'>
      <Link href={'/'}>
        <div className='flex justify-start items-center cursor-pointer'>
          <Image src='https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/48/Alien-3d-icon.png' alt='icon' width={40} height={40} />
          <span className='text-bold text-primary text-xl ml-2 hover:text-primary-dark'>Shez Blogs</span>
        </div>
      </Link>
      <ul className='flex justify-around items-center'>
        {topMenu.map((menu, index) => {
          return (
            <li key={index} className='px-2'>
              <Link href={menu.url} className='capitalize text-bold'> {menu.name} </Link>
            </li>
          )
        })}
      </ul>
      <div>
        <button className='px-3 py-1 rounded-sm '>Login</button>
        <button className='px-3 py-1 rounded-sm bg-primary  hover:bg-primary-dark text-white transition-all'>Register</button>
      </div>
    </nav>
  )
}

export default Navbar