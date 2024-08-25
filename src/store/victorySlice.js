import { createSlice } from '@reduxjs/toolkit'

export const victorySlice = createSlice({
  name: 'victory',
  initialState: {
    value: 0
  },
  reducers: {
    changeVictory: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeVictory } = victorySlice.actions

export default victorySlice.reducer