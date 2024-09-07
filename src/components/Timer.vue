<script setup>
import { ref, onBeforeMount } from 'vue';

const now = new Date().toLocaleTimeString()
const time = ref(now);

function updateTime() {
  const newTime = new Date().toLocaleTimeString()
  time.value = newTime;
}

onBeforeMount(() => {
  const interval = setInterval(() => {
    updateTime()
  }, 1000)

  return () => {
    clearInterval(interval)
  }
})
</script>

<template>
  <div class="timer">{{ time }}</div>
</template>

<style scoped></style>
