import { createSlice } from '@reduxjs/toolkit'

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

export const audiosSlice = createSlice({
  name: 'audios',
  initialState: {
    value: audios
  },
  reducers: {
    changeAudios: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeAudios } = audiosSlice.actions

export default audiosSlice.reducer
