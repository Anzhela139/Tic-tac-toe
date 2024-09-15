<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import Multiselect from 'vue-multiselect'

import { reactive, computed, ref } from 'vue'
import { useStore } from './../stores/main'
import { useRoute, useRouter } from 'vue-router'
import { handleMenu } from './../composables/handleMenu'
import Base from '@/components/Base.vue';
import { mdiAccountCircleOutline } from '@mdi/js';
import { mdiWeatherNight } from '@mdi/js';
import { mdiWeatherSunny } from '@mdi/js';
import { mdiMusic } from '@mdi/js';
import ToggleButton from '@/components/ToggleButton.vue';
const store = useStore()
const symbol = computed(() => store.symbol)
const mode = computed(() => store.mode)
const router = useRouter()

const handleSize = (event) => {
    event.preventDefault()
    const size = parseInt(event.target?.value)
    console.log(size)
    dispatch(changeSize(size));
}

const handleSymbol = (event) => {
    event.preventDefault()
    const isCross = event.target?.checked

    dispatch(changeSymbol(isCross ? 'cross' : 'img'));
    console.log(isCross, symbol.value)
}

const handleMode = (event) => {
    event.preventDefault()
    store.setMode();
}

const handleAudio = (event) => {
    event.preventDefault()

    store.setAudio()
}

const sizeValue = ref(3)
const options = [
    { name: '3', id: 'id_0' },
    { name: '4', id: 'id_1'  },
    { name: '5', id: 'id_2' },
    { name: '6',  id: 'id_3'  }
]
</script>

<template>
    <div>
        <Base :modalName="'Settings'">
        <div class="wrapper wrapper-settings">
            <div class='settings-card card-size'>
                <Multiselect @input='handleSize' v-model="sizeValue" :searchable="false" :options="options"
                    placeholder="Pick a value" label='Select board size'>
                </Multiselect>
            </div>
            <div class='settings-card card-symbol'>
                <label>
                    <div class='settings-label'>Toggle crosses or icons</div>
                    <ToggleButton :id="'symbol'" @change='handleSymbol' />
                </label>
            </div>
            <div class='settings-card card-mode'>
                <div class='settings-label'>Toggle mode</div>
                <SvgIcon :path='mdiWeatherNight' @click='handleMode' type="mdi" v-if="mode === 'light'" />
                <SvgIcon :path='mdiWeatherSunny' @click='handleMode' type="mdi" v-else />
            </div>
            <div @click='handleAudio' class='settings-card card-audio'>
                <label>
                    <div class='settings-label'>Toggle audio</div>
                    <SvgIcon :path='mdiMusic' type="mdi" />
                </label>
            </div>
            <div @click="handleMenu(router, 'login')" class='settings-card card-login'>
                <div class='settings-label'>Login</div>
                <SvgIcon :path='mdiAccountCircleOutline' type="mdi" />
            </div>
        </div>
        </Base>
    </div>
</template>

<style scoped></style>
