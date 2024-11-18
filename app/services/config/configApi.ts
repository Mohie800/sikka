import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BASEURL,
  GETCONFIG
} from "../../api/end-points";
import { ConfigResponse } from "@/app/types/Config";


export const configApi = createApi({
  reducerPath: "configApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    cache: "no-cache",
  }),

  endpoints: (builder) => ({
    getConfig: builder.mutation<ConfigResponse, void>({
      query: () => {
        return {
          url: GETCONFIG,
          method: "GET",
        };
      },
    }),
   
  }),
});

export const {
  useGetConfigMutation
} = configApi;
