import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
};

const VideoSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    getVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { getVideos } = VideoSlice.actions;

export default VideoSlice.reducer;
