import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BASEURL,
  GETPODCASTCATEGORIES,
  GETPODCASTCATEGORYEPISODES,
  GETPODCASTEPISODEDETAILS,
  GETPODCASTEPISODES,
  GETPODCASTSHOWDETAILS,
  GETPODCASTSSHOWS,
} from "../../api/end-points";
import {
  PodcastCategoryEpisodesResponse,
  PodcastCatResponse,
  PodcastEpisodeDetailResponse,
  PodcastEpisodesResponse,
  PodcastShowDetailsResponse,
  PodcastShowResponse,
} from "@/app/types/Podcasts";

export const podcastsApi = createApi({
  reducerPath: "podcastsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    cache: "no-cache",
  }),

  endpoints: (builder) => ({
    getPodcastCat: builder.mutation<PodcastCatResponse, void>({
      query: () => {
        return {
          url: GETPODCASTCATEGORIES,
          method: "GET",
        };
      },
    }),
    getPodcastCatWar: builder.mutation<PodcastCatResponse, void>({
      query: () => {
        return {
          url: GETPODCASTCATEGORIES + "/2",
          method: "GET",
        };
      },
    }),
    getPodcastShows: builder.mutation<PodcastShowResponse, void>({
      query: () => {
        return {
          url: GETPODCASTSSHOWS,
          method: "GET",
        };
      },
    }),
    getPodcastShowsWar: builder.mutation<PodcastShowResponse, void>({
      query: () => {
        return {
          url: GETPODCASTSSHOWS + "/2",
          method: "GET",
        };
      },
    }),
    getPodcastEpisodes: builder.mutation<PodcastEpisodesResponse, void>({
      query: () => {
        return {
          url: GETPODCASTEPISODES + "/1",
          method: "GET",
        };
      },
    }),
    getPodcastEpisodesWar: builder.mutation<PodcastEpisodesResponse, void>({
      query: () => {
        return {
          url: GETPODCASTEPISODES + "/2",
          method: "GET",
        };
      },
    }),
    getPodcastCategoryEpisodes: builder.mutation<
      PodcastCategoryEpisodesResponse,
      { id: string }
    >({
      query: (body) => {
        const { id } = body;
        return {
          url: GETPODCASTCATEGORYEPISODES + "/" + id,
          method: "GET",
        };
      },
    }),
    getPodcastShowDetails: builder.mutation<
      PodcastShowDetailsResponse,
      { id: string }
    >({
      query: (body) => {
        const { id } = body;
        return {
          url: GETPODCASTSHOWDETAILS + "/" + id,
          method: "GET",
        };
      },
    }),
    getPodcastEpisodeDetails: builder.mutation<
      PodcastEpisodeDetailResponse,
      { id: string }
    >({
      query: (body) => {
        const { id } = body;
        return {
          url: GETPODCASTEPISODEDETAILS + "/" + id,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetPodcastCatMutation,
  useGetPodcastShowsMutation,
  useGetPodcastEpisodesMutation,
  useGetPodcastCategoryEpisodesMutation,
  useGetPodcastShowDetailsMutation,
  useGetPodcastEpisodeDetailsMutation,
  useGetPodcastCatWarMutation,
  useGetPodcastShowsWarMutation,
  useGetPodcastEpisodesWarMutation,
} = podcastsApi;
