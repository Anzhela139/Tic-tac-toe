import { defineStore } from 'pinia'

import BlindMemories from '../assets/music/BlindMemories-Cheel.mp3'
import CircleDance from '../assets/music/CircleDance-SefChol.mp3'
import Cattle from '../assets/music/Cattle-DelicateSteve.mp3'
import DangerousToys from '../assets/music/DangerousToys-SefChol.mp3'
import Dolphin from '../assets/music/Dolphin-esque-Godmode.mp3'
import EternalGarden from '../assets/music/EternalGarden-DanHenig.mp3'
import FastandRun from '../assets/music/FastandRun-NicoStaf.mp3'
import FutureRennaisance from '../assets/music/FutureRennaisance-Godmode.mp3'
import Headphones from '../assets/music/Headphones-RKVC.mp3'
import KotoSan from '../assets/music/KotoSan-Ofshane.mp3'
import Kurt from '../assets/music/Kurt-Cheel.mp3'
import LateNightTrain from '../assets/music/LateNightTrain-VansInJapan.mp3'
import Lights from '../assets/music/Lights-PatrickPatrikios.mp3'
import LikeThat from '../assets/music/LikeThat-AnnoDominiBeats.mp3'
import Orient from '../assets/music/Orient-SefChol.mp3'
import OuttaTime from '../assets/music/OuttaTime-RKVC.mp3'
import SunsetDream from '../assets/music/SunsetDream-Cheel.mp3'
import ThatOneBarScene from '../assets/music/ThatOneBarScene-RKVC.mp3'
import WalkingIInTheSky from '../assets/music/WalkingIInTheSky-NicoStaf.mp3'

import { get, set } from '../utils'

const size = get('size') || 3
const setEmptyBoard = (size) => {
  const boardArray = [...Array(size * size)].fill('').map((_, index) => {
    return {
      id: `id${index}`,
      value: ''
    }
  })
  return boardArray
}

const audios = [
  {
    id: 'music_0',
    src: BlindMemories,
    title: 'Cheel - Blind Memories',
    duration: '0247'
  },
  {
    id: 'music_1',
    src: Cattle,
    title: 'Delicate Steve - Cattle',
    duration: '0157'
  },
  {
    id: 'music_2',
    src: CircleDance,
    title: 'Sefchol - Circle Dance',
    duration: '0241'
  },
  {
    id: 'music_3',
    src: DangerousToys,
    title: 'SefChol - Dangerous Toys',
    duration: '0349'
  },
  {
    id: 'music_4',
    src: Dolphin,
    title: 'Godmode - Dolphin-Esque',
    duration: '0136'
  },
  {
    id: 'music_5',
    src: EternalGarden,
    title: 'Dan Henig - Eternal Garden',
    duration: '0212'
  },
  {
    id: 'music_6',
    src: FastandRun,
    title: 'Nico Staf - Fast and Run',
    duration: '0307'
  },
  {
    id: 'music_7',
    src: FutureRennaisance,
    title: 'Godmode - Future Rennaisance',
    duration: '0230'
  },
  {
    id: 'music_8',
    src: Headphones,
    title: 'RKVC - Headphones',
    duration: '0151'
  },
  {
    id: 'music_9',
    src: KotoSan,
    title: 'Ofshane - Koto San',
    duration: '0237'
  },
  {
    id: 'music_10',
    src: Kurt,
    title: 'Cheel - Kurt',
    duration: '0318'
  },
  {
    id: 'music_11',
    src: LateNightTrain,
    title: 'Vans in Japan - Late Night Train',
    duration: '0258'
  },
  {
    id: 'music_12',
    src: Lights,
    title: 'Patrick Patrikios - Lights',
    duration: '0226'
  },
  {
    id: 'music_13',
    src: LikeThat,
    title: 'Anno Domini Beats - Like That',
    duration: '0304'
  },
  {
    id: 'music_14',
    src: Orient,
    title: 'SefChol - Orient',
    duration: '0312'
  },
  {
    id: 'music_15',
    src: OuttaTime,
    title: 'RKVC - OuttaTime',
    duration: '0250'
  },
  {
    id: 'music_16',
    src: SunsetDream,
    title: 'Cheel - SunsetDream',
    duration: '0241'
  },
  {
    id: 'music_17',
    src: ThatOneBarScene,
    title: 'RKVC - That One Bar Scene',
    duration: '0340'
  },
  {
    id: 'music_18',
    src: WalkingIInTheSky,
    title: 'Nico Staf - Walking IIn The Sky',
    duration: '0334'
  }
]

const player = get('player1') || "Player1"
const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const mode = get('mode') || isDark ? 'dark' : 'light'
const symbol = get('symbol') || "cross"

export const useStore = defineStore('storeApp', {
  state: () => {
    return {
      menu: "",
      size: size,
      mode: mode,
      symbol: symbol,
      victory: {
        type: Number,
        default: 0
      },
      defeat: 0,
      IsMultiPlayer: false,
      login: player,
      isCurrentlyPlaying: false,
      isSavedGame: false,
      audio: '',
      audios: audios,
      move: 0,
      board: setEmptyBoard(size, ''),
    }
  },
  getters: {
    getMenu: (state) => state.menu,
    getSize: (state) => state.size,
    getMode: (state) => state.mode,
    getSymbol: (state) => state.symbol,
    getVictory: (state) => state.victory,
    getDefeat: (state) => state.defeat,
    getIsMultiPlayer: (state) => state.IsMultiPlayer,
    getLogin: (state) => state.login,
    getIsCurrentlyPlaying: (state) => state.isCurrentlyPlaying,
    getIsSavedGame: (state) => state.isSavedGame,
    getAudio: (state) => state.audio,
    getAudios: (state) => state.audios,
    getMove: (state) => state.move,
    getBoard: (state) => state.board,
  },
  actions: {
    setMenu(value) {
      this.menu = value;
    },
    setSize(value) {
      this.size = value;
    },
    setMode() {
      this.mode = this.mode === 'light' ? 'dark' : 'light';
      if (this.mode === 'dark') {
        document.documentElement.style.setProperty("--theme-background-color", '#282c34');
        document.documentElement.style.setProperty("--theme-color", '#f9f9f9');
      } else {
        document.documentElement.style.setProperty("--theme-background-color", '#f9f9f9');
        document.documentElement.style.setProperty("--theme-color", '#161616');
      }

      set('mode', this.mode);
      console.log(this.mode)
    },
    setSymbol(value) {
      this.symbol = value === 'img' ? 'cross' : 'img';
    },
    setVictory(value) {
      this.victory = value;
    },
    setDefeat(value) {
      this.defeat = value;
    },
    setIsMultiPlayer() {
      this.IsMultiPlayer = !this.IsMultiPlayer;
    },
    setLogin(value) {
      this.login = value;
      set('player1_23096', value);
    },
    setIsCurrentlyPlaying() {
      this.isCurrentlyPlaying = !this.isCurrentlyPlaying;
    },
    setIsSavedGame() {
      this.isSavedGame = !this.isSavedGame;
    },
    setAudios(value) {
      this.audios = value;
    },
    setAudio(value) {
      this.audio = value || this.audios[0];
    },
    setMove(value) {
      this.move = value;
    },
    setBoard(value) {
      this.board = value;
    },
  },
})