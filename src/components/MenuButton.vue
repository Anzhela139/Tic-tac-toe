<script setup>
import { useRoute, useRouter } from 'vue-router'
import { handleMenu } from './../composables/handleMenu'
const router = useRouter()
defineProps({
  text: {
    type: String,
    required: true
  },
  page: {
    type: String,
    required: true
  },
})
</script>

<template>
  <button class="btn btn-secondary" type='button' @click="handleMenu(router, page)">
    {{ text }}
  </button>
</template>

<style scoped></style>
