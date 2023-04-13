import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IArticle } from '@/types';

const BlogCardWithImage = ({ article }: { article: IArticle; }) => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center h-64 p-16 relative">
      <Link href={article.attributes.slug}>
        <span className="text-2xl w-2/3 text-white capitalize font-bold after:content-[''] after:bg-primary after:block after:w-16 after:h-1 after:rounded-md after:mt-2 cursor-pointer">
          {article.attributes.title}
        </span>
      </Link>
      <Image src="https://cdn.jsdelivr.net/gh/jashezan/public-resources@main/Images/Devicons/git-icon.svg" alt='' width={140} height={140} className='absolute right-8' />
    </div>
  );
};

export default BlogCardWithImage;

