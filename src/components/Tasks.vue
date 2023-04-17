<script setup>
import Task from './Task.vue'
import {useStore} from 'vuex'

const store = useStore()
</script>

<template>
        <ul>
            <Task v-for="[key, value] in store.state.todos"
            :key="key"
            :content="value.content"
            :id="key"
            :is-active="value.is_active"/>
        </ul>
</template>

<style scoped>
    ul {
        width: 100%;
        height: 100%;

        display: flex;
        flex-flow: column;
        gap: 5px;;
    }
</style>

