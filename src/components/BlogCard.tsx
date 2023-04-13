import { IArticle } from '@/types'
import { formatDate } from '@/utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IPropType {
  article: IArticle
}

const BlogCard = ({ article }: IPropType) => {
  const AVATAR_URL = 'https://robohash.org/hicveldicta.png?size=50x50&set=set1' || `${process.env.API_BASE_URL}/${article.attributes.author?.data.attributes.avatar}`
  return (
    <div>
      <Link href={article.attributes.slug}>
        <h2 className='text-xl text-gray-600 font-bold capitalize hover:underline hover:cursor-pointer hover:decoration-primary'>{article.attributes.title}</h2>
      </Link>
      <div className='flex items-center my-4'>
        <div className='rounded-lg flex items-center justify-center'>
          <Image src={AVATAR_URL} alt='' width={50} height={50} />
        </div>
        <div className='text-md text-gray-600 text-justify'>{article.attributes.author?.data.attributes.firstname || 'Rajnikant'}</div>
        <span className='text-sm'> 
          &nbsp;
          on
          &nbsp;
          {formatDate(article.attributes.publishedAt)}
        </span>
      </div>
      <div className='text-sm text-gray-600'>
        {article.attributes.body.substring(0,300)}...
      </div>
    </div>
  )
}

export default BlogCard