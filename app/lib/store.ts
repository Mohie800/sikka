'use client'
// ** Toolkit imports
import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { videosApi } from "../services/videos/videosApi";
import { galleryApi } from "../services/gallery/galleryApi";
import { articlesApi } from "../services/articles/articlesApi";
import { podcastsApi } from "../services/podcasts/podcastsApi";
import { postersApi } from "../services/posters/postersApi";
import { configApi } from "../services/config/configApi";

// ** Define RootState type explicitly
type RootState2 = {
  [videosApi.reducerPath]: ReturnType<typeof videosApi.reducer>;
  [galleryApi.reducerPath]: ReturnType<typeof galleryApi.reducer>;
  [articlesApi.reducerPath]: ReturnType<typeof articlesApi.reducer>;
  [podcastsApi.reducerPath]: ReturnType<typeof podcastsApi.reducer>;
  [postersApi.reducerPath]: ReturnType<typeof postersApi.reducer>;
  [configApi.reducerPath]: ReturnType<typeof configApi.reducer>;
};

// ** Combine Reducers
const rootReducer: Reducer<RootState2> = combineReducers({
  [videosApi.reducerPath]: videosApi.reducer,
  [galleryApi.reducerPath]: galleryApi.reducer,
  [articlesApi.reducerPath]: articlesApi.reducer,
  [podcastsApi.reducerPath]: podcastsApi.reducer,
  [postersApi.reducerPath]: postersApi.reducer,
  [configApi.reducerPath]: configApi.reducer,
});

// ** Configure Store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      videosApi.middleware,
      galleryApi.middleware,
      articlesApi.middleware,
      podcastsApi.middleware,
      postersApi.middleware,
      configApi.middleware
    ),
  devTools: true,
});

// ** Types for dispatch and state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// ** Setup Listeners
setupListeners(store.dispatch);
