import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import topMenu from '@/data/topMenu';
import { Itopmenu } from '@/types';

const Navbar = () => {
  return (
    <nav className="flex item-center justify-between py-6">
        <Link href={'/'}>
          <div className='flex justify-center md:justify-start items-center cursor-pointer font-bold'>
            <Image src='https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/48/Alien-3d-icon.png' alt='icon' width={40} height={40} />
            <span className='text-bold text-primary text-xl ml-2 hover:text-primary-dark'>Shez Blogs</span>
          </div>
        </Link>
      <ul className="flex items-center">
        {
          topMenu.map((menu: Itopmenu, index: number) => {
            return (
              <li className="mr-6 font-medium text-gray-600 capitalize" key={index}>
                <Link href={menu.url}> {menu.name} </Link>
              </li>
            )
          })
        }
      </ul>
      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <a href="" className="hover:text-gray-400">
            Log in
          </a>
        </li>
        <li className="font-medium text-gray-600">
          <a
            href=""
            className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all">
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;