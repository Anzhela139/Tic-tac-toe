import { createSlice } from '@reduxjs/toolkit'

export const audioSlice = createSlice({
  name: 'audio',
  initialState: {
    value: ''
  },
  reducers: {
    changeAudio: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeAudio } = audioSlice.actions

export default audioSlice.reducer