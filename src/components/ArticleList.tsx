import { IArticle } from '@/types'
import React from 'react'
import BlogCard from './BlogCard'
import BlogCardWithImage from './BlogCardWithImage';


const ArticleList = ({ articles }: { articles: IArticle[]; }) => {
  return (
    <div className='grid lg:grid-cols-2 grid-gap gap-16 mt-16'>
      {
        articles.map((article: IArticle, index: number) => {
          if(index===1){
            return (<BlogCardWithImage key={index} article={article} />)
          }
          else{
            return (
              <BlogCard key={index} article={article} />)
          }
        })
      }
    </div>
  )
}

export default ArticleList