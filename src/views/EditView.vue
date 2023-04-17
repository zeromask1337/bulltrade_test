<script setup>
import Tasks from '../components/Tasks.vue'
import { ref, watch } from "vue"
import { useStore } from 'vuex';
import { useRoute }  from 'vue-router'

const route = useRoute()
const store = useStore()

const input = ref(store.state.todos.get(route.query.id)?.content)

watch(() => route.query, () => input.value = store.state.todos.get(route.query.id)?.content)
</script>

<template>
    <main>
        <aside>
            <Tasks/>
        </aside>
        <section>
            <form
              @submit.prevent="store.commit('updateTodo', {id: $route.query.id, content: input})">
                <textarea v-model="input" name="todo-editor" id="todo-editor" cols="30" rows="10" required></textarea>
                <input type="submit" value="Save changes">
            </form>
        </section>
        {{ route.query.id }}
    </main>
</template>

<style scoped>
    main {
        width: 95%;

        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }

    textarea {
        width: 100%;
        height: 100%;
    }
</style>