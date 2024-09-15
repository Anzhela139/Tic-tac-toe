<script setup>
 import { defineEmits,watch,ref } from 'vue'
 const emit = defineEmits(['change'])
 const value = ref(false)

defineProps({
    id: {
        type: String,
        required: true
    }
})
const handleChange = () => {
  emit('change', )
}
</script>

<template>
  <input type="checkbox" :id="id" @change="handleChange" v-model="value" /><label :for="id">Toggle</label>
</template>

<style scoped>
input[type=checkbox] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 100px;
  height: 50px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 90px;
  transition: 0.3s;
}

input:checked+label {
  background: #bada55;
}

input:checked+label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

label:active:after {
  width: 130px;
}
</style>
