import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IArticle } from '../types';
interface IPropType {
  article: IArticle;
}
const BlogCardWithImage = ({ article }: IPropType) => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center h-64 relative p-6">
      <Link href={`/article/${article.attributes.slug}`}>
        <span className="text-2xl w-2/3 text-white  font-bold after:content-[''] after:bg-primary after:block after:w-80 after:h-1 after:rounded-md after:mt-2 cursor-pointer">
          {article.attributes.title}
        </span>
      </Link>
      <Image src="https://cdn.jsdelivr.net/gh/jashezan/public-resources@main/Images/Devicons/git-icon.svg" width={140} height={140} alt='' className='mr-6' />
    </div>
  );
};

export default BlogCardWithImage;