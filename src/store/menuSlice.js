import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    value: "StartScreen"
  },
  reducers: {
    changeMenu: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeMenu } = menuSlice.actions

export default menuSlice.reducer