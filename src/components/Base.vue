<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArrowLeft } from '@mdi/js';
import { mdiWindowClose } from '@mdi/js';
const modalStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
}
defineProps({
    modalName: {
        type: String,
        required: true
    }
})
</script>

<template>
        <div class="wrapper-menu" :style='modalStyles'>
            <div class="screen">
                <div class='modal-header'>
                    <SvgIcon :path='mdiArrowLeft' class='back' size='2' @click="handleBack" />
                    <h4 class='modal-title'>{{ modalName }}</h4>
                    <SvgIcon :path='mdiWindowClose' class='close' size='2' @click="handleClose" />
                </div>
                <slot></slot>
            </div>
            <div class="fade" @click='handleClose'></div>
        </div>
</template>

<style scoped>

</style>
