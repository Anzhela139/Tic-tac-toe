<script setup>
import { defineEmits, ref, computed, onMounted } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon';
import { useStore } from './../stores/main'
import { mdiBeeFlower } from '@mdi/js';
import { mdiSnail } from '@mdi/js';
const store = useStore()
const symbol = computed(() => store.symbol)
const emit = defineEmits(['click'])
const active = ref(false)
const actualValue = ref('')
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  initValue: {
    type: String,
    required: true
  },
})
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
  active.value = true;
  actualValue.value = 'X'

  emit('click', { 
    value: actualValue.value, 
    id: props.id
  })
}

const styleReturn = () => {
  setActive(false)
}

const handleWinner = () => {

}

</script>

<template>
  <div class="cell" @click="handleClick">
    <template v-if="initValue || actualValue">
      <span v-if="symbol === 'cross'">{{ initValue }}</span>
      <SvgIcon :path="mdiBeeFlower" type="mdi" v-else />
    </template>
  </div>
</template>

<style scoped>

</style>
