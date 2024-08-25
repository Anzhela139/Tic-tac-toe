import { createSlice } from '@reduxjs/toolkit'

export const moveSlice = createSlice({
  name: 'move',
  initialState: {
    value: 0
  },
  reducers: {
    changeMove: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeMove } = moveSlice.actions

export default moveSlice.reducer