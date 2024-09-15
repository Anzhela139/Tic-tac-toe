<script setup>
import { useRoute, useRouter } from 'vue-router'
import { handleMenu } from './../composables/handleMenu'
import Base from '@/components/Base.vue';
const router = useRouter()
</script>

<template>
    <div>
        <Base :modalName="'Gameplay'">
            <div class="wrapper">
                <button class="btn btn-secondary" type='button' @click="handleMenu(router, 'solution')">
                    Show solution
                </button>
                <button class="btn btn-secondary" type='button' @click="handleMenu(router, 'rules')">
                    Show rules
                </button>
                <button class="btn btn-secondary" type='button' @click="handleMenu(router, 'keys')">
                    Show hotkeys
                </button>
            </div>
        </Base>
    </div>
</template>

<style scoped></style>
