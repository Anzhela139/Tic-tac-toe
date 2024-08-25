import { createSlice } from '@reduxjs/toolkit'
import { get } from '../utils'

const size = get('size') || 3
const setEmptyBoard = (size, value) => {
  const boardArray = [...Array(size)].map(() => Array(size).fill(value))
  console.log(boardArray)
  return boardArray
}
export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    value: setEmptyBoard(size, '')
  },
  reducers: {
    setCleanBoard: (state) => {
      state.value = setEmptyBoard()
    },
    changeBoard: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeBoard, setCleanBoard } = boardSlice.actions

export default boardSlice.reducer