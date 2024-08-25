import { createSlice } from '@reduxjs/toolkit'

export const defeatSlice = createSlice({
  name: 'defeat',
  initialState: {
    value: 0
  },
  reducers: {
    changeDefeat: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeDefeat } = defeatSlice.actions

export default defeatSlice.reducer