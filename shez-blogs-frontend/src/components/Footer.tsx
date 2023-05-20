import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import socialMediaList from '@/data/socialMedia';

const Footer = () => {
  return (
    <footer className="text-gray-600 mt-12 fixed bottom-0 left-0 bg-white w-full">
      <div className="container mx-auto flex items-center flex-col sm:flex-row py-8">
        <Link href={'/'}>
          <div className='flex justify-center md:justify-start items-center cursor-pointer'>
            <Image src='https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/48/Alien-3d-icon.png' alt='icon' width={40} height={40} />
            <span className='text-bold text-primary text-xl ml-2 hover:text-primary-dark'>Shez Blogs</span>
          </div>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2022 Shez Blog —
          <a
            href="https://twitter.com/jashezan"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank">
            @jashezan
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {socialMediaList.map((profile, index) => {
            return (
              <a href={profile.profilelink} target='_blank' rel='noreferrer noopener' key={index} className='p-2'>
                <Image src={profile.logolink} alt={profile.name} width={30} height={30} />
              </a>
            )
          })}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
