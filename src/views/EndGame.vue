<script setup>
import { reactive, computed } from 'vue'
import Base from '@/components/Base.vue';
import MenuButton from '@/components/MenuButton.vue';
import { useStore } from './../stores/main'

const store = useStore()
const login = computed(() => store.login)

</script>

<template>
  <div>
    <Base :modalName="'End game'">
      <div class="wrapper">
        <div class="content">
          <h2>Winner is {{ login }}</h2>
        </div>
        <button class="btn btn-secondary" type="button">
          Play Again
        </button>
        <router-link to="/scores" class="btn btn-secondary" tag="button">
          See scores
        </router-link>
      </div>
    </Base>
  </div>
</template>

<style scoped></style>
