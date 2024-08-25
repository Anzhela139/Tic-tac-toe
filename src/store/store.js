import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './menuSlice'
import sizeSlice from './sizeSlice'
import modeSlice from './modeSlice'
import symbolSlice from './symbolSlice'
import victorySlice from './victorySlice'
import defeatSlice from './defeatSlice'
import IsMultiPlayerSlice from './IsMultiPlayerSlice'
import loginSlice from './loginSlice'
import isCurrentlyPlayingSlice from './isCurrentlyPlaying'
import isSavedGameSlice from './isSavedGame'
import audioSlice from './audio'
import audiosSlice from './audios'
import moveSlice from './moveSlice'
import boardSlice from './boardSlice'

export default configureStore({
  reducer: {
    menu: menuSlice,
    size: sizeSlice,
    mode: modeSlice,
    symbol: symbolSlice,
    victory: victorySlice,
    defeat: defeatSlice,
    IsMultiPlayer: IsMultiPlayerSlice,
    login: loginSlice,
    isCurrentlyPlaying: isCurrentlyPlayingSlice,
    isSavedGame: isSavedGameSlice,
    audio: audioSlice,
    audios: audiosSlice,
    move: moveSlice,
    board: boardSlice
  }
})