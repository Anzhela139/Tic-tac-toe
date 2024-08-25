import { createSlice } from '@reduxjs/toolkit'

export const isCurrentlyPlayingSlice = createSlice({
  name: 'isCurrentlyPlaying',
  initialState: {
    value: false
  },
  reducers: {
    changeTsCurrentlyPlaying: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeTsCurrentlyPlaying } = isCurrentlyPlayingSlice.actions

export default isCurrentlyPlayingSlice.reducer