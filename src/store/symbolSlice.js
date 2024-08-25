import { createSlice } from '@reduxjs/toolkit'
import { get } from '../utils'

const symbol = get('symbol') || "cross"
export const symbolSlice = createSlice({
  name: 'symbol',
  initialState: {
    value: symbol
  },
  reducers: {
    changeSymbol: (state) => {
      state.value = state.value === 'img' ? 'cross' : 'img'
    }
  }
})

export const { changeSymbol } = symbolSlice.actions

export default symbolSlice.reducer