<script setup>
import { reactive, computed } from 'vue'
import { useStore } from './../stores/main'
import Square from './Square.vue';

const store = useStore()
const size = computed(() => store.size);
const setEmptyBoard = () => {

    const sizeNum = size.value;
    console.log(sizeNum)
  const boardArray = [...Array(sizeNum * sizeNum)].fill('')
  console.log(boardArray)
  return boardArray
}
// defineProps({
//     msg: {
//         type: String,
//         required: true
//     }
// })
// const array = setEmptyBoard('')
// console.log(array)
</script>

<template>
    <div class="board">
        <div class="board-row" >
            <Square :style="{ height: `${100 / size.value} %`}" :key="index" v-for="(row, index) in setEmptyBoard(size)"/>
        </div>
    </div>
</template>

<style scoped></style>
