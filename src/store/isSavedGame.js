import { createSlice } from '@reduxjs/toolkit'

export const isSavedGameSlice = createSlice({
  name: 'isSavedGame',
  initialState: {
    value: false
  },
  reducers: {
    changeIsSavedGame: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeIsSavedGame } = isSavedGameSlice.actions

export default isSavedGameSlice.reducer