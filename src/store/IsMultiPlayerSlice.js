import { createSlice } from '@reduxjs/toolkit'

export const IsMultiPlayerSlice = createSlice({
  name: 'IsMultiPlayer',
  initialState: {
    value: false
  },
  reducers: {
    changeIsMultiPlayer: (state, action) => {
      state.value = !state.value
      console.log(state.value, action.payload)
    }
  }
})

export const { changeIsMultiPlayer } = IsMultiPlayerSlice.actions

export default IsMultiPlayerSlice.reducer