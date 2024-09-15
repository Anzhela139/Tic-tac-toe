<script setup>
import Base from '@/components/Base.vue';
import MenuButton from '@/components/MenuButton.vue';
</script>

<template>
  <div>
    <Base :modalName="'Gameplay'">
      <div class="wrapper">
        <MenuButton :text="'Show solution'" :page="'solution'" />
        <MenuButton :text="'Show rules'" :page="'rules'" />
        <MenuButton :text="'Show hotkeys'" :page="'keys'" />
      </div>
    </Base>
  </div>
</template>

<style scoped></style>
