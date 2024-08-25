import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeMenu } from './../store/menuSlice.js'
import Timer from './Timer'
import AudioControls from './audioControls.vue';

const Navbar = (props) => {
  const audio = useSelector(state => state.audio)
  const login = useSelector(state => state.login)
  const isCurrentlyPlaying = useSelector(state => state.isCurrentlyPlaying)
  const move = useSelector(state => state.move)
  const victory = useSelector(state => state.victory)
  const defeat = useSelector(state => state.defeat)
  const dispatch = useDispatch()

  const handleMenu = (event) => {
    event.preventDefault()

    dispatch(changeMenu('StartScreen'));
  }

  return (
    <div class="navbar">
      <div class="title">
        <h1 class='app-title'>Tic tac toe</h1>
        <button class="btn btn-secondary" onClick={handleMenu}>
          Menu
        </button>
      </div>
      {isCurrentlyPlaying.value && <div class="statistics">
        <h2>
          {login.value}: {move.value}
        </h2>
        <h2>Victories: {victory.value}</h2>
        <h2>Defeats: {defeat.value}</h2>
        <h2>
          <Timer />
        </h2>
      </div>}
      <AudioControls />
    </div>
  )
}

export default Navbar
