<script setup>
import { defineEmits, watch, ref } from 'vue'
const emit = defineEmits(['change'])
const value = ref('')

defineProps({
  label: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: false,
    default: ''
  }
})
const handleChange = () => {
  emit('change', value.value)
}
</script>

<template>
  <div class="custom-input__wrapper">
    <label :for="id">{{ label }}</label>
    <input type="text" :id="id" @change="handleChange" v-model="value" :placeholder="placeholder" />
  </div>
</template>

<style scoped>
input {
  height: 35px;
  border-radius: 5px;
  border: 2px solid #f9f9f9;
  background-color: transparent;
  color: #f9f9f9;
  padding-left: 8px;
}
input:focus {
  outline: none;
  border: 2px solid #61dafb;
}
</style>
