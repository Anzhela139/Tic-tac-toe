<script setup>
import Rules from '../views/Rules.vue'
import Login from '../views/Login.vue'
import Keys from '../views/Keys.vue'
import Base from '../views/Base.vue'
import StartScreen from '../views/StartScreen.vue'
import Gameplay from '../views/Gameplay.vue'
import Settings from '../views/Settings.vue'
import Solution from '../views/Solution.vue'
import Audio from '../views/Audio.vue'

import { changeMenu } from './../store/menuSlice.js'
import { get, set } from '../utils'
import { mdiImageOutline } from '@mdi/js';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountCircleOutline } from '@mdi/js';
import { mdiWindowClose } from '@mdi/js';

import { mdiWeatherNight } from '@mdi/js';
    const menu = useSelector(state => state.menu)
    const dispatch = useDispatch()
    console.log(menu)
    const [showLogin, setShowLogin] = useState(false)
    const [showRules, setShowRules] = useState(false)
    const [showKeys, setShowKeys] = useState(false)

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

    const handleBack = (event) => {
        event.preventDefault()
        console.log(menu.value)
        if (menu.value === 'Login') {
            dispatch(changeMenu('Settings'));
        } else if (menu.value === 'Rules' || menu.value === 'Keys' || menu.value === 'Solution') {
            dispatch(changeMenu('Gameplay'));
        } else {
            dispatch(changeMenu('StartScreen'));
        }
    }

    const handleClose = (event) => {
        event.preventDefault()

        dispatch(changeMenu(''));
    }
</script>

<template>
    <div handleClose={handleClose} handleBack={handleBack} >
                <StartScreen v-if="menu.value === 'StartScreen'" />
                <Gameplay v-if="menu.value === 'Gameplay'"/>
                <Settings v-if="menu.value === 'Settings'" />
                <Login v-if="menu.value === 'Login'" names={props.handleName} handleLogin={handleLogin} />
                <Rules v-if="menu.value === 'Rules'" />
                <Keys v-if="menu.value === 'Keys'" />
                <Solution v-if="menu.value === 'Solution'" />
                <Audio v-if="menu.value === 'Audio'" />
    </div>
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
