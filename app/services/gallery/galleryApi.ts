import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL, GETGALLARYCAT, GETGALLERYBYID } from "../../api/end-points";
import { GalleryByIdResponse, GalleryCatResponse } from "@/app/types/Gallery";

export const galleryApi = createApi({
  reducerPath: "galleryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    cache: "no-cache",
  }),

  endpoints: (builder) => ({
    getGalleryCat: builder.mutation<GalleryCatResponse, void>({
      query: () => {
        return {
          url: GETGALLARYCAT,
          method: "GET",
        };
      },
    }),
    getGalleryCatWar: builder.mutation<GalleryCatResponse, void>({
      query: () => {
        return {
          url: GETGALLARYCAT + "/2",
          method: "GET",
        };
      },
    }),
    getGalleryById: builder.mutation<GalleryByIdResponse, { id: string }>({
      query: (data) => {
        const { id } = data;
        return {
          url: GETGALLERYBYID + "/" + id,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetGalleryCatMutation,
  useGetGalleryByIdMutation,
  useGetGalleryCatWarMutation,
} = galleryApi;
