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
const getStyleBoard = () => {
    return {
        'grid-template-columns': `repeat(${size.value}, minmax(0, 1fr))`,
        'grid-template-rows': `repeat(${size.value}, minmax(0, 1fr))`
    }
}

const getStyleCell = (index) => {
    let styles = {}
    const border = '1px solid rgba(255, 255, 255, .6)'
    const borderBottom = {
        'border-bottom': border
    }
    const borderRight = {
        'border-right': border
    }
    if (index === 0) {
        styles = {
            'border-top-left-radius': "15px"
        }
    } 
    if (((index + 1) / size.value) === 1) {
        styles = {
            'border-top-right-radius': '15px'
        }
    } 
    if (index === (size.value * size.value) - size.value) {
        styles = {
            'border-bottom-left-radius': '15px'
        }
    } 
    if (index + 1 === size.value * size.value) {
        styles = {
            'border-bottom-right-radius': '15px'
        }
    } 
    if (index < (size.value * size.value) - size.value) {
        styles = Object.assign(styles, borderBottom)
    }
    if ((index + 1) % size.value !== 0) {
        styles = Object.assign(styles, borderRight)
    }

    return styles;
}
</script>

<template>
    <div class="board" :style="getStyleBoard()">
        <Square :key="index" v-for="(row, index) in setEmptyBoard(size)" :style="getStyleCell(index)" />
    </div>
</template>

<style scoped></style>
