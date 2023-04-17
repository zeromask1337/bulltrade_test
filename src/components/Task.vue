<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()
const currentRouteName = computed(() => router.currentRoute.value.name)
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true
    }
})
</script>

<template>
    <li @click="router.push({path: '/edit', query: { id: props.id}})" class="active-todo">
        <p v-if="isActive">
            {{ props.content.length > 50 ? props.content.slice(0, 50) + "..." : props.content }}</p>
        <p v-else><s>{{ props.content }}</s></p>

        <template v-if="currentRouteName === 'home'">
            <button
                class="todo-edit-btn"
                v-if="isActive"
                @click.stop="store.commit('markDone', props.id)">\/</button>
            <button
                class="todo-delete-btn"
                @click.stop="store.commit('deleteTodo', props.id)">X</button>
        </template>
        </li>
</template>

<style scoped>
    li.active-todo {
        padding: 8px;
        min-height: 50px;
        width: 500px;
        border: 1px solid #000;
        border-radius: 5px;

        display: grid;
        gap: 10px;
        grid-template-columns: 350px 1fr 1fr;
        justify-content: space-between;
        align-items: center;

        cursor: pointer;
        /* overflow: hidden; */
        overflow-wrap: break-word;
        word-break: break-all;
    }

    li.active-todo:hover {
        color: darkorange;
    }

    .todo-delete-btn, .todo-edit-btn {
        width: 40px;
        height: 40px;
    }
</style>