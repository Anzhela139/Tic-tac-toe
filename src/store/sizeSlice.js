import { createSlice } from '@reduxjs/toolkit'

import { get } from '../utils'

const size = get('size') || 3
export const sizeSlice = createSlice({
  name: 'size',
  initialState: {
    value: size
  },
  reducers: {
    changeSize: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeSize } = sizeSlice.actions

export default sizeSlice.reducer