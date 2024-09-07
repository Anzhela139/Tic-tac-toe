<script setup>
import React, { useState } from 'react'
import { get, set } from '../utils'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changelogin } from '../store/loginSlice'
import { changeIsMultiPlayer } from '../store/IsMultiPlayerSlice'
// import { changelogin } from '../../store/loginSlice'
const IsMultiPlayer = useSelector(state => state.IsMultiPlayer)
const dispatch = useDispatch()
// const [player1, setPlayer1] = useState(get('player1_23096') || 'Player1')
// const [player2, setPlayer2] = useState(get('player2_28096') || 'Player2')

const handlePlayer1 = (event) => {
  let player = event.target.id
  // if (player === 'player1') {
  //   setPlayer1(event.target.value)
  //   set('player1_23096', event.target.value)
  // } else {
  //   setPlayer2(event.target.value)
  //   set('player2_28096', event.target.value)
  // }

  dispatch(changelogin(event.target.value));
}

const handlePlayer2 = (event) => {
  let player = event.target.id
  // if (player === 'player1') {
  //   setPlayer1(event.target.value)
  //   set('player1_23096', event.target.value)
  // } else {
  //   setPlayer2(event.target.value)
  //   set('player2_28096', event.target.value)
  // }

  // dispatch(changeIsMultiPlayer(''));
}


const hanleMultiPlayer = (event) => {
  // event.preventDefault()
  console.log(event.target?.checked)
  dispatch(changeIsMultiPlayer(event.target?.checked));
}

const handleClick = (event) => {
  event.preventDefault()
  // props.names(player1, player2)
  // props.handleLogin()
}
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <form class="wrapper">
    <div class="form-group">
      <md-outlined-text-field label="Name 1" placeholder="player1" @change="handlePlayer1">
      </md-outlined-text-field>
      <md-outlined-text-field v-if="IsMultiPlayer.value" label="Name 2" placeholder="player1" @change="handlePlayer2">
      </md-outlined-text-field>
      <div>
        <label class='settings-card'>
          <div class='settings-label'>Multi-person game mode</div>
          <md-switch @input="hanleMultiPlayer" value={IsMultiPlayer.value} icons></md-switch>
        </label>
      </div>
      <button @click="handleClick" class="btn btn-primary" type='button'>
        Start new game
      </button>
    </div>
  </form>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
