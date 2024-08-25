import { createSlice } from '@reduxjs/toolkit'
import { get } from '../utils'

const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const mode = get('mode') || isDark ? 'dark' : 'light'


export const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    value: mode
  },
  reducers: {
    changeMode: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light'
    }
  }
})

export const { changeMode } = modeSlice.actions

export default modeSlice.reducer