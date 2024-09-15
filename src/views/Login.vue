<script setup>
// import React, { useState } from 'react'
import { useStore } from './../stores/main'
import { reactive, computed, onMounted } from 'vue'

import { get, set } from '../utils'
import Base from '@/components/Base.vue';
import ToggleButton from '@/components/ToggleButton.vue';
import CustomInput from '@/components/CustomInput.vue';
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { changelogin } from '../store/loginSlice'
// import { changeIsMultiPlayer } from '../store/IsMultiPlayerSlice'
// import { changelogin } from '../../store/loginSlice'
// const IsMultiPlayer = useSelector(state => state.IsMultiPlayer)
// const dispatch = useDispatch()
// const [player1, setPlayer1] = useState(get('player1_23096') || 'Player1')
// const [player2, setPlayer2] = useState(get('player2_28096') || 'Player2')

const store = useStore()
const IsMultiPlayer = computed(() => store.IsMultiPlayer)
const handlePlayer1 = (event) => {
  store.setLogin(event)
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
  console.log(event)
  store.setIsMultiPlayer(event)
}

const handleClick = (event) => {
  event.preventDefault()
  // props.names(player1, player2)
  // props.handleLogin()
}
</script>

<template>
  <Base :modalName="'Login'">
  <form class="wrapper">
    <div class="form-group">
      <CustomInput :label="'Name 1'" :placeholder="'player1'" @change="handlePlayer1" :id="'player1'" />
      <CustomInput v-if="IsMultiPlayer" :label="'Name 2'" :placeholder="'player2'" :id="'player2'"
        @change="handlePlayer2" />
      <div class="grid-row">
        <label class='settings-card'>
          <div class='settings-label'>Multi-person game mode</div>
          <ToggleButton :id="'IsMultiPlayer'" @change='hanleMultiPlayer' />
        </label>
      </div>
      <div class="grid-row">
        <button @click="handleClick" class="btn btn-primary" type='button'>
          Start new game
        </button>
      </div>
    </div>
  </form>
  </Base>
</template>

<style scoped></style>
