<script setup>
import { ref, computed, onMounted } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiBeeFlower } from '@mdi/js';
import { mdiSnail } from '@mdi/js';
const active = ref(false)
// defineProps({
//   counter: {
//     type: String,
//     required: true
//   }, 
//   size: {
//     type: String,
//     required: true
//   }, 
//   index: {
//     type: String,
//     required: true
//   }, 
//   indexI: {
//     type: String,
//     required: true
//   }, 
// })
// const activeStyles = {
//   boxShadow: '0px 0px 6px 3px rgba(97,218,251,.75)',
//   backgroundColor: 'rgba(97, 218, 251, .75)',
//   width: `${100 / size}%`,
//   transition: '.3s easy-in-out',
// }

const handleClick = (event) => {
  event.preventDefault()
  setActive(true)
  props.onClick()
}

const styleReturn = () => {
  setActive(false)
}

const handleWinner = () => {

}

</script>

<template>
  <div class="cell" @click="handleWinner"></div>
</template>

<style scoped>

</style>
