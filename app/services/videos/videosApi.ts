import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BASEURL,
  GETVIDEOSBYSERIAL,
  GETVIDEOSCat,
  GETVIDEOSDETAIL,
} from "../../api/end-points";
import {
  VideoDetailResponse,
  Videos,
  VideosBySerialResponse,
  VideosCatResponse,
  VideosResponse,
} from "../../types/Videos";

export const videosApi = createApi({
  reducerPath: "videosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    cache: "no-cache",
  }),

  endpoints: (builder) => ({
    getVideosCat: builder.mutation<VideosCatResponse, void>({
      query: () => {
        return {
          url: GETVIDEOSCat,
          method: "GET",
        };
      },
    }),
    getVideosCatWar: builder.mutation<VideosCatResponse, void>({
      query: () => {
        return {
          url: GETVIDEOSCat + "/2",
          method: "GET",
        };
      },
    }),
    getVideosBySerial: builder.mutation<VideosBySerialResponse, { id: string }>(
      {
        query: (data) => {
          const { id } = data;
          return {
            url: GETVIDEOSBYSERIAL + "/" + id,
            method: "GET",
          };
        },
      }
    ),
    getVideoDetail: builder.mutation<VideoDetailResponse, { id: string }>({
      query: (data) => {
        const { id } = data;
        return {
          url: GETVIDEOSDETAIL + "/" + id,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetVideosCatMutation,
  useGetVideosBySerialMutation,
  useGetVideoDetailMutation,
  useGetVideosCatWarMutation,
} = videosApi;
