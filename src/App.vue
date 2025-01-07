<script setup>
import { onMounted, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from './stores/main.js'

// import { changeMode } from './store/modeSlice'
import Navbar from './components/Navbar.vue'
// import Game from './components/Game1.vue'
// import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
import SvgBG from './components/SvgBG.vue'
import { get } from './utils'

const store = useStore()
const mode = computed(() => store.mode)
const getSym = (sym) => {

}


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function App() {
  const mode = useSelector(state => state.mode)
  const symbol = useSelector(state => state.symbol)
  const menu = useSelector(state => state.menu)
  const size = useSelector(state => state.size)

  const setEmptyBoard = () => {
    const boardArray = [...Array(size.value)].map(() => Array(size.value).fill(""))
    console.log(boardArray)
    return boardArray
  }

  // const [board, setBoard] = useState(Array(9).fill(""));
  const [board, setBoard] = useState(setEmptyBoard());
  const [isCPUNext, setIsCPUNext] = useState(false);
  const [winner, setWinner] = useState(null);

  const [ties, setTies] = useState(get('ties_24056') || 0)
  const [username1, setUsername1] = useState(get('player1_23096') || 'Player1')
  const [username2, setUsername2] = useState(get('player2_23096') || 'Player2')
  const [isNew, setIsNew] = useState(false)
  const [player1, setPlayer1] = useState(0)
  const [player2, setPlayer2] = useState(0)
  const [showMenu, setShowMenu] = useState(true)
  const [isLight, setIsLight] = useState(true)
  // const [size, setSize] = useState(3)
  const [font, setFont] = useState('cross')
  const [solution, setSolution] = useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleToggle = () => {
    setFont(font === 'cross' ? 'img' : 'cross')
  }

  const handleSolution = () => {
    setSolution(!solution)
  }

  const handleSize = (event) => {
    // setSize((event.target ? Number(event.target.value) : event))
  }

  const handleTheme = () => {
    setIsLight(!isLight)
  }

  const handleNewGame = () => {
    setBoard(setEmptyBoard());
    setWinner(null);
    setIsCPUNext(false);
  }

  onMounted(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      // dispatch(changeMode());
    });

    document.addEventListener('keydown', (event) => {
      if (event.code === 'KeyM') {
        event.stopImmediatePropagation()
        handleMenu()
      } else if (event.code === 'Digit3') {
        handleSize(3)
      } else if (event.code === 'Digit4') {
        handleSize(4)
      } else if (event.code === 'Digit5') {
        handleSize(5)
      } else if (event.code === 'Digit6') {
        handleSize(6)
      } else if (event.code === 'KeyC') {
        event.stopImmediatePropagation()
        handleToggle()
      } else if (event.code === 'KeyT') {
        event.stopImmediatePropagation()
        handleTheme()
      }
    })
    document.addEventListener('keydown', (event) => {
      console.log(event)
    })
  })
}
</script>

<template>
  <div class="container" :class="mode === 'dark' ? 'dark-theme' : 'light-theme'">
    <div class="svg_background">
      <SvgBG />
    </div>
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
