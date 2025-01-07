<script setup>
import { reactive, computed } from 'vue'
import Base from '@/components/Base.vue';
import { useStore } from './../stores/main'
const store = useStore()
const scores = computed(() => store.scores)
</script>

<template>
  <div>
    <Base :modalName="'Scores'">
      <div class="wrapper">
        <div class="scores-wrapper">
          <div class="scores-head">
            <div class="scores-cell">Player name</div>
            <div class="scores-cell">Moves</div>
            <div class="scores-cell">Time</div>
            <div class="scores-cell">Result</div>
          </div>
          <div class="scores-body">
            <div class="scores-row" v-for="score in scores" :key="score.id">
              <div class="scores-cell">Player name</div>
              <div class="scores-cell">Moves</div>
              <div class="scores-cell">Time</div>
              <div class="scores-cell">Result</div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  </div>
</template>

<style scoped></style>
