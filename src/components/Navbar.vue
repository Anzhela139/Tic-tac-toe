<script setup>
import { reactive, computed } from 'vue'
import Timer from './Timer.vue'
import AudioControls from './AudioControls.vue';
import { useStore } from './../stores/main'

const store = useStore()
const audio = computed(() => store.audio)
const login = computed(() => store.login)
const isCurrentlyPlaying = computed(() => store.isCurrentlyPlaying)
const move = computed(() => store.move)
const victory = computed(() => store.victory)
const defeat = computed(() => store.defeat)

const handleMenu = (event) => {
  event.preventDefault()

  store.setMenu();
}
</script>

<template>
  <div class="navbar">
    <div class="title">
      <h1 class='app-title'>Tic tac toe</h1>
      <button class="btn btn-secondary" @click={handleMenu}>
        Menu
      </button>
    </div>
    <div class="statistics" v-if="isCurrentlyPlaying">
      <h2>
        {{ login.value }}: {{ move.value}}
      </h2>
      <h2>Victories: {{ victory.value }}</h2>
      <h2>Defeats: {{ defeat.value }}</h2>
      <h2>
        <Timer />
      </h2>
    </div>
    <AudioControls />
  </div>
</template>

<style scoped></style>
