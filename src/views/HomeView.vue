<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import Board from './../components/Board.vue'
import { isEndgame } from '../utils'
import { useStore } from './../stores/main'
import Square from '../components/Square.vue';
import { useRoute, useRouter } from 'vue-router'
const store = useStore()
const size = computed(() => store.size);
const board = computed(() => store.board);
const login = computed(() => store.login)
const isCurrentlyPlaying = computed(() => store.isCurrentlyPlaying)
const isCPUNext = ref(false)

// defineProps({
//     msg: {
//         type: String,
//         required: true
//     }
// })
// const array = setEmptyBoard('')
// console.log(array)
const getStyleBoard = () => {
  return {
    'grid-template-columns': `repeat(${size.value}, minmax(0, 1fr))`,
    'grid-template-rows': `repeat(${size.value}, minmax(0, 1fr))`
  }
}

const getStyleCell = (index) => {
  let styles = {}
  const border = '1px solid rgba(255, 255, 255, .6)'
  const borderBottom = {
    'border-bottom': border
  }
  const borderRight = {
    'border-right': border
  }
  if (index === 0) {
    styles = {
      'border-top-left-radius': "15px"
    }
  }
  if (((index + 1) / size.value) === 1) {
    styles = {
      'border-top-right-radius': '15px'
    }
  }
  if (index === (size.value * size.value) - size.value) {
    styles = {
      'border-bottom-left-radius': '15px'
    }
  }
  if (index + 1 === size.value * size.value) {
    styles = {
      'border-bottom-right-radius': '15px'
    }
  }
  if (index < (size.value * size.value) - size.value) {
    styles = Object.assign(styles, borderBottom)
  }
  if ((index + 1) % size.value !== 0) {
    styles = Object.assign(styles, borderRight)
  }

  return styles;
}
import { get } from '../utils'
const winner = ref('')
const players = {
  CPU: {
    SYM: "O",
    NAME: "CPU",
  },
  HUMAN: {
    SYM: "X",
    NAME: "You",
  },
};
const router = useRouter()

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

// const [squares, setSquares] = useState(setEmptyBoard(null))
// const [xIsNext, setXIsNext] = useState(true)

// const [winner, setWinner] = useState(null);

// const [ties, setTies] = useState(get('ties_24056') || 0)
const stepNumber = ref(1)
const ties = ref(get('ties_24056') || 0)
// const [username1, setUsername1] = useState(get('player1_23096') || 'Player1')
// const [username2, setUsername2] = useState(get('player2_23096') || 'Player2')
// const [isNew, setIsNew] = useState(false)
// const [player1, setPlayer1] = useState(0)
// const [player2, setPlayer2] = useState(0)
// const [isLight, setIsLight] = useState(true)
// // const [size, setSize] = useState(3)
// const [solution, setSolution] = useState(false)

const player1Steps = ref(0)

let currentTimer = null

// console.log('props.size', props.size)
const handleNewGame = () => {
  setStepNumber(1)
  setSquares(setEmptyBoard(null))
  setXIsNext(true)
}

const handleSolution = () => {
  handleNewGame()
  const squaresC = squares.slice()
  for (let i = 0; i < props.size; i++) {
    squaresC[i] = 'X'
  }
  setSquares(squaresC)
}

const handleWinner = (event) => {
  const { id, value } = event;
  console.log(event)
  playFn(id)
  if (value === 'X') {
    player1Steps.value = player1Steps + 1
    isCPUNext.value = true;
    getCPUTurn()
  } else if (value === 'O') {
    setPlayer2(player2 + 1)
    isCPUNext.value = false;
  } else {
    ties.value = ties.value + 1
  }
}

const getStatus = (arr, play) => {
  if (isEndgame(arr, play, props.size)) {
    props.handleWinner(xIsNext ? 'X' : 'O')
  } else if (stepNumber >= props.size * props.size) {
    props.handleWinner('Ties')
  }
}

function playFn(values) {
  const { value, id } = values;
  // if (isCPUNext.value) return;
  if (winner.value) return;
  console.log('playFn', board.value)
  let cellIndex = board.value.findIndex((el) => el.id === id)
  if (board.value[cellIndex].value) return;
  board.value[cellIndex].value = players?.HUMAN?.SYM;
  console.log('cel', board.value[cellIndex].value)
  store.setBoard(board);
  checkWinner();
  if (currentTimer) {
    clearTimeout(currentTimer);
    cPUPlay();
  }
  currentTimer = setTimeout(() => {
    cPUPlay();
    currentTimer = null;
  }, 1000)
}

watch(isCPUNext, (newValue, oldValue) => {
  console.log('watch', winner.value, newValue)
  if (winner.value) return;
  if (newValue) {
    cPUPlay();
  }
})

function cPUPlay() {
  if (winner.value) return;

  const cPUMove = getCPUTurn();
  let cellIndex = board.value.findIndex((el) => el.id === cPUMove)
  board.value[cellIndex].value = players?.CPU?.SYM;
  console.log('players?.CPU?.SYM', board.value[cellIndex].value)
  store.setBoard(board);
  checkWinner();
  isCPUNext.value = false;
}

function getCPUTurn() {
  const emptyIndexes = [];
  const boardArray = [...board.value]
  boardArray.forEach((cell, arrayIndex) => {
    if (cell.value === "") {
      emptyIndexes.push({ id: cell.id });
    }
  });
  const randomIndex = Math.floor(Math.random() * emptyIndexes.length);
  console.log(emptyIndexes, randomIndex)
  return emptyIndexes[randomIndex].id;
}

function checkWinner() {
  const boardArray = [...board.value]
  console.log('boardArray', boardArray)
  // check same row
  for (let index = 0; index < size.value; index++) {
    const row = boardArray.slice(index * size.value, index * size.value + size.value);
    if (row.every((cell) => cell.value === players?.CPU?.SYM)) {
      setWinner(players?.CPU?.NAME);
      return;
    } else if (row.every((cell) => cell.value === players?.HUMAN?.SYM)) {
      setWinner(players?.HUMAN?.NAME);
      return;
    }
  }

  // check same column
  for (let i = 0; i < size.value; i++) {
    const indexes = Array(size.value).fill(0).map((el, index) => i + (index * size.value));
    const column = indexes.map((el) => boardArray[el]);

    if (column.every((cell) => cell?.value === players?.CPU?.SYM)) {
      setWinner(players?.CPU?.NAME);
      return;
    } else if (column.every((cell) => cell?.value === players?.HUMAN?.SYM)) {
      setWinner(players?.HUMAN?.NAME);

      return;
    }
  }

  // check same diagonal
  const diagonal1 = [boardArray[0], boardArray[4], boardArray[8]];
  const diagonal2 = [boardArray[2], boardArray[4], boardArray[6]];
  console.log('diagonal1', diagonal1)
  console.log('diagonal2', diagonal2)
  if (diagonal1.every((cell) => cell?.value === players?.CPU?.SYM)) {
    setWinner(players?.CPU?.NAME);
    return;
  } else if (diagonal1.every((cell) => cell?.value === players?.HUMAN?.SYM)) {
    setWinner(players?.HUMAN?.NAME);
    return;
  } else if (diagonal2.every((cell) => cell?.value === players?.CPU?.SYM)) {
    setWinner(players?.CPU?.NAME);
    return;
  } else if (diagonal2.every((cell) => cell?.value === players?.HUMAN?.SYM)) {
    setWinner(players?.HUMAN?.NAME);
    return;
  } else if (boardArray.every((cell) => cell.value !== "")) {
    setWinner("draw");
    return;
  } else {
    setWinner(null);
    return;
  }
}

function setWinner(value) {
  winner.value = value;
  if (!value) return;
  router.push({ path: 'end-game' })
  if (value === "draw") {
    return "It's a draw!";
  } else if (value) {
    if (login.value === value) {
      store.setVictory();
    } else {
      store.setDefeat();
    }

    store.setScores({
      time: '10:08',
      playerName: 'player1', 
      moves: 3,
      result: 'victory',
      id: 'sakjhd'
    })

    return `${value} won!`;
  }
}

function displayTurn() {
  if (isCPUNext) {
    return "CPU's turn";
  } else {
    return "Your turn";
  }
}

function playAgainFn() {
  setBoard([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  winner.value = null;
  isCPUNext.value = false;
}

onMounted(() => {
  store.setIsCurrentlyPlaying(true);
})
</script>

<template>
  <div class="game">
    <div class="game-board">
      <div v-if="!winner && displayTurn()"></div>
      <div class="board" :style="getStyleBoard()">
        <Square :key="'id' + index" :id="'id' + index" v-for="(cell, index) in board" :style="getStyleCell(index)"
          @click="playFn" :initValue="cell.value" />
      </div>
      <button @click="playAgainFn" v-if="winner">
        Play Again
      </button>

    </div>
  </div>
</template>

<style scoped></style>