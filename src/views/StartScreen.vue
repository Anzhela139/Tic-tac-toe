<script setup>
import { get, set } from '../utils'
import { useStore } from './../stores/main'
import { handleMenu } from './../composables/handleMenu'
import Base from '@/components/Base.vue';
import { reactive, computed } from 'vue'
import { mdiImageOutline } from '@mdi/js';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountCircleOutline } from '@mdi/js';
import { mdiWindowClose } from '@mdi/js';

import { useRoute, useRouter } from 'vue-router'
import { mdiWeatherNight } from '@mdi/js';
const store = useStore()
const isCurrentlyPlaying = computed(() => store.isCurrentlyPlaying)
const isSavedGame = computed(() => store.isSavedGame)
// const isCurrentlyPlaying = useSelector(state => state.isCurrentlyPlaying)
// const isSavedGame = useSelector(state => state.isSavedGame)
// const [showStartScreen, setStartScreen] = useState(false)
// const [showLogin, setShowLogin] = useState(false)
// const [showRules, setShowRules] = useState(false)
// const [showKeys, setShowKeys] = useState(false)
const router = useRouter()

const handleRules = (event) => {
  event.preventDefault()
  setShowRules(!showRules)
}

const handleKeys = (event) => {
  event.preventDefault()
  setShowKeys(!showKeys)
}

const handleSave = () => {
  const { font, size, username1, username2 } = props
  let moves = []
  let allTiles = document.querySelectorAll('.tile')
  for (let i = 0; i < allTiles.length; i++) {
    moves.push(allTiles[i].innerHTML)
  }
  let game = [font, size, username1, username2, moves]
  set('game_230455', game)
}

const handleResume = () => {
  const { handleToggle, handleSize, handleName } = props
  let game = get('game_230455')
  console.log(game[4][0][0])
  handleToggle(game[0])
  handleSize(game[1])
  handleName(game[2])
  handleName(game[3])
  let allTiles = document.querySelectorAll('.tile')
  for (let i = 0; i < allTiles.length; i++) {
    allTiles[i].innerHTML = game[4][0][i]
    if (allTiles[i].innerHTML === '') allTiles[i].classList.add('not-played')
  }
}

const handleLogin = (event) => {
  event.preventDefault()
  setShowLogin(!showLogin)
}

const handleClose = (menuScreen) => {
  // event.preventDefault()
  console.log(menuScreen)
  dispatch(changeMenu(menuScreen));
}
const handleNewGame = () => {
  // setBoard(setEmptyBoard());
  // setWinner(null);
  // setIsCPUNext(false);
}
</script>

<template>
  <div>
    <Base :modalName="'Start Screen'">
    <div class="wrapper start-screen">
      <router-link to="/gameplay" class="btn btn-secondary" tag="button">
        Gameplay
      </router-link>
      <router-link to="/settings" class="btn btn-secondary" tag="button">
        Settings
      </router-link>
      <router-link to="/scores" class="btn btn-secondary" tag="button">
        See scores
      </router-link>

      <div class="start-screen__gameplay">
        <button class="btn btn-secondary" type='button' @click="handleMenu(router, '/')" v-if="isCurrentlyPlaying">
          Save current game
        </button>
        <button class="btn btn-primary" type='button' @click="handleMenu(router, '/')">
          Start new game
        </button>
        <button class="btn btn-secondary" type='button' @click="handleMenu(router, '/')" v-if="isSavedGame">
          Resume saved game
        </button>
      </div>
    </div>
    </Base>
  </div>
</template>

<style scoped lang="scss">
.start-screen__gameplay {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 100%;

  .btn {
    flex: 1;
  }
}
</style>
