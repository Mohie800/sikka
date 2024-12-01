import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BASEURL,
  GETARTICLEDETAIL,
  GETARTICLESBYSERIAL,
  GETARTICLESCAT,
} from "../../api/end-points";
import {
  ArticlesCatBySerialResponse,
  ArticlesCatResponse,
  ArticlesDetailResponse,
} from "@/app/types/Articles";

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    cache: "no-cache",
  }),

  endpoints: (builder) => ({
    getArticlesCat: builder.mutation<ArticlesCatResponse, void>({
      query: () => {
        return {
          url: GETARTICLESCAT,
          method: "GET",
        };
      },
    }),
    getArticlesCatWar: builder.mutation<ArticlesCatResponse, void>({
      query: () => {
        return {
          url: GETARTICLESCAT + "/2",
          method: "GET",
        };
      },
    }),
    getArticlesBySerial: builder.mutation<
      ArticlesCatBySerialResponse,
      { id: string }
    >({
      query: (data) => {
        const { id } = data;
        return {
          url: GETARTICLESBYSERIAL + "/" + id,
          method: "GET",
        };
      },
    }),
    getArticlesAll: builder.mutation<
      ArticlesCatBySerialResponse,
      { id: string }
    >({
      query: (data) => {
        const { id } = data;
        return {
          url: GETARTICLESBYSERIAL ,
          method: "GET",
        };
      },
    }),

    getArticleDetail: builder.mutation<ArticlesDetailResponse, { id: string }>({
      query: (data) => {
        const { id } = data;
        return {
          url: GETARTICLEDETAIL + "/" + id,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetArticlesCatMutation,
  useGetArticlesBySerialMutation,
  useGetArticleDetailMutation,
  useGetArticlesCatWarMutation,
  useGetArticlesAllMutation,
  
} = articlesApi;
