import { createSlice } from '@reduxjs/toolkit'
import { get } from '../utils'

const player = get('player1') || "Player1"
export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    value: player
  },
  reducers: {
    changelogin: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changelogin } = loginSlice.actions

export default loginSlice.reducer