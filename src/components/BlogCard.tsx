import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IArticle } from '../types';
import { formatDate } from '../utils';
interface IPropType {
    article: IArticle;
}

const BlogCard = ({ article }: IPropType) => {

    return (
        <div>
            <Link href={`/article/${article.attributes.slug}`}>
                <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
                    {article.attributes.title}
                </h1>
            </Link>
            <div className="flex items-center my-4">
                <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
                    <Image
                        src={'https://robohash.org/hicveldicta.png?size=50x50&set=set1'}
                        height={40}
                        width={40}
                        alt=''
                    />
                </div>
                <span className="text-sm font-bold text-gray-600">
                    {'Rajnikant'} on
                    &nbsp;
                    <span className="text-gray-400">
                        {formatDate(article.attributes.createdAt)}
                    </span>
                </span>
            </div>
            <div className="text-gray-500">
                {`${article?.attributes?.body}`.substring(0, 250)}...
            </div>
        </div>
    );
};

export default BlogCard;