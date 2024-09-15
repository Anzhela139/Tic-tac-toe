<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArrowLeft } from '@mdi/js';
import { mdiWindowClose } from '@mdi/js';
import { useRoute, useRouter } from 'vue-router'
import { handleMenu } from './../composables/handleMenu'
const modalStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
}
const router = useRouter()
defineProps({
    modalName: {
        type: String,
        required: true
    }
})
const handleBack = () => {

}
const handleClose = () => {

}
</script>

<template>
        <div class="wrapper-menu" :style='modalStyles'>
            <div class="screen">
                <div class='modal-header'>
                    <SvgIcon :path='mdiArrowLeft' class='back' type="mdi" @click="handleBack" />
                    <h4 class='modal-title'>{{ modalName }}</h4>
                    <SvgIcon :path='mdiWindowClose' class='close' type="mdi" @click="handleMenu(router, '/')" />
                </div>
                <slot></slot>
            </div>
            <div class="fade" @click='handleClose'></div>
        </div>
</template>

<style scoped>

</style>
