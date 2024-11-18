import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL, GETPOSTERS } from "../../api/end-points";
import { PostersResponse } from "@/app/types/Posters";

export const postersApi = createApi({
  reducerPath: "postersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    cache: "no-cache",
  }),

  endpoints: (builder) => ({
    getPosters: builder.mutation<PostersResponse, void>({
      query: () => {
        return {
          url: GETPOSTERS,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetPostersMutation } = postersApi;
