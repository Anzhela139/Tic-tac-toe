<script setup>
import Base from '@/components/Base.vue';
</script>

<template>
  <div>
    <Base :modalName="'Hot keys'">
      <div class="wrapper">
        <ul>
          <li>Key 'm' - open and closes menu.</li>
          <li>Key '3' - change the size of the board to 3.</li>
          <li>Key '4' - change the size of the board to 4.</li>
          <li>Key '5' - change the size of the board to 5.</li>
          <li>Key '6' - change the size of the board to 6.</li>
          <li>Key 'c' - change font of the game to crosses or icons.</li>
          <li>Key 't' - change theme of app.</li>
        </ul>
      </div>
    </Base>
  </div>
</template>

<style scoped></style>
