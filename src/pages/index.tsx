import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { AxiosPromise } from "axios";

import { fetchCategories, fetchArticles } from "@/http";
import { ICategory, IArticle, ICollectionResponse, IPropTypes } from "@/types";
import Tabs from "@/components/Tabs";
import ArticleList from "@/components/ArticleList";

const Home: NextPage<IPropTypes> = ({ categories, articles }) => {
  return (
    <>
      <Head>
        <title>Shez Blog&apos;s Home Page</title>
      </Head>
      <Tabs categories={categories.items} />
        {/* Articles  */}
      <ArticleList articles={articles.items}/>
    

    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: articles }: AxiosPromise<ICollectionResponse<IArticle[]>> = await fetchArticles()
  const { data: categories }: AxiosPromise<ICollectionResponse<ICategory[]>> = await fetchCategories()
  return {
    props: {
      categories: {
        items: categories.data
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination
      }
    }
  }
}

export default Home;
