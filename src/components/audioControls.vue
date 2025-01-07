<script setup>
import { reactive, computed, onMounted } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon';
import { useStore } from '../stores/main'
import { mdiMusic } from '@mdi/js';
import { mdiVolumeHigh } from '@mdi/js';
import { mdiRepeat } from '@mdi/js';
import { mdiShuffleVariant } from '@mdi/js';
import { mdiPlaylistMusic } from '@mdi/js';
import { mdiPlay } from '@mdi/js';
import { mdiPause } from '@mdi/js';
import { mdiSkipNext } from '@mdi/js';
import { mdiSkipPrevious } from '@mdi/js';
import { useRoute, useRouter } from 'vue-router'
import { handleMenu } from '../composables/handleMenu'
import { randomizeArray } from '../utils'
import { ref } from 'vue';

const store = useStore()
const audio = computed(() => store.audio)
const audios = computed(() => store.audios)
const audioDOM = ref(null);
const router = useRouter()
const isActive = ref(false)
const isOnRepeat = ref(false)
const currI = ref(0)
console.log(audios.value[0])
const ranAudios = ref(randomizeArray(audios.value))
const handleAudio = () => store.setAudio()
const srcAudio = ref('')
const duration = ref(0)
const isPlaying = ref(true)


const playNext = (forward = true) => {
  try {
    if (!isOnRepeat) {
      const index = audios.findIndex(el => el.id === audio)
      const newIndex = forward ? index + 1 : index - 1;
      dispatch(changeAudio(audios[newIndex]?.id));
    }
  } catch (error) {
    console.log(error)
  }
  //eslint-disable-next-line
}

const stopMusic = (event) => {
  console.log(audioDOM.value)
  audioDOM.value.pause()
  // audioDOM.current.currentTime = 0
  setIsPlaying(false)
}

const resumeMusic = (event) => {
  console.log(audioDOM.value)
  audioDOM.current.play()
  // audioDOM.current.currentTime = 0
  setIsPlaying(true)
}

const volumeUp = (event) => {
  if (audioDOM.volume < 1) audioDOM.volume += 0.1
}

const volumeDown = (event) => {
  if (audioDOM.volume > 0) audioDOM.volume -= 0.1
}

const handleUserDuration = (len, cur) => {

}

const playPrevSong = () => {
  playNext(false);
}

const playNextSong = () => {
  playNext(true);
}

const handleRandomize = () => {
  dispatch(changeAudios(randomizeArray(audios)));
}

const handleOnRepeat = () => {
  setIsOnRepeat(!isOnRepeat);
}



const handleDuration = (len, cur) => {
  const currentDuration = len / 100
  setTimeout(() => {
    console.log(currentDuration)
    setDuration(currentDuration)
  }, 1000)
}

onMounted(() => {
  const src = audios.value.default?.find(el => el.id === audio.value)
  try {
    srcAudio.value = src
    audioDOM.value.pause()
    audioDOM.value.load()
    audioDOM.value.addEventListener(
      'canplaythrough',
      function (params) {
        this.play()
        handleDuration(this.duration)
        setIsPlaying(true)
      },
      false,
    )
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div class="audios">
    <audio ref='audioDOM' :src="srcAudio?.src" @onEnded="playNext" />
    <svg-icon type="mdi" :path="mdiMusic" @click="handleAudio" v-if="!audio" />
    <div class="audio-controls-wrapper" v-if="audio">
      <div class="grid-row">
        <h4>
          {{ srcAudio?.title }}
        </h4>
      </div>
      <div>
        <input type="range" id="duration" name="duration" min="0" :value="duration" :max="srcAudio?.duration"
          @onChange="handleUserDuration" />
      </div>
      <div>
        <input type="range" id="volume" name="volume" min="0" max="100" />
      </div>
      <div class="icons-wrapper grid-row">
        <SvgIcon :path="mdiSkipPrevious" type="mdi" @click="playPrevSong" />
        <SvgIcon :path="mdiPause" type="mdi" @click="stopMusic" v-if="isPlaying" />
        <SvgIcon :path="mdiPlay" type="mdi" @click="resumeMusic" v-else />
        <SvgIcon :path="mdiSkipNext" type="mdi" @click="playNextSong" />
        <SvgIcon :path="mdiPlaylistMusic" type="mdi" @click="handleAudio" />
        <SvgIcon :path="mdiRepeat" type="mdi" @click="handleOnRepeat" />
        <SvgIcon :path="mdiShuffleVariant" type="mdi" @click="handleRandomize" />
        <SvgIcon :path="mdiVolumeHigh" type="mdi" @click="volumeUp" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.audios {
  display: flex;
  justify-content: center;
}

.audio-controls-wrapper {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.icons-wrapper {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
}
</style>
