<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
      <footer class="App-footer">
        <a
          class="App-link"
          href="https://github.com/Anzhela139"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anzhela Dev
        </a>
        2024
      </footer>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
