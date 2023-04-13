export interface Itopmenu {
  name: string;
  url: string;
}

export interface IsocialMedia {
  name: string;
  logolink: string;
  profilelink: string;
}


export interface ICategoryAttributes {
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface ICategory {
  id: number;
  attributes: ICategoryAttributes;
}

export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}

export interface IResourceMeta {
  pagination: IPagination;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IPropTypes {
  categories: {
    items: ICategory[];
  };
  articles: {
    items: IArticle[];
  };
}

export interface IArticleAttributes {
  author?: IAuthor;
  title: string;
  slug: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface IArticle {
  id: number;
  attributes: IArticleAttributes;
}

export interface IAuthor {
  data: {
    attributes: {
      firstname: string;
      lastname: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

export interface IQueryOptions {
  filters: any;
  sort: any;
  populate: any;
  pagination: {
    page: number;
    pageSize: number;
  };
}

export type TDirection = 1 | -1;