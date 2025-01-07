<script setup>
import { ref, onBeforeMount } from 'vue';

const now = (new Date()).getTime()
const timeref = ref('');
function formatTime(val) {
  return String(Math.floor(val)).padStart(2, '0');
}

function convertNumToTime(number) {
  const seconds = Math.floor(number / 1000);
  let min = seconds / 60;
  let hour = min / 60;

  return `${hour < 0 ? Math.floor(hour) + ':' : ''}${formatTime(min)}:${formatTime(seconds % 60)}`;
}


function updateTime() {
  let delta = (new Date()).getTime() - now;
  timeref.value = convertNumToTime(delta);
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
  <div class="timer">{{ timeref }}</div>
</template>

<style scoped></style>
