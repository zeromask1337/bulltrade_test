<script setup>
import { useStore } from 'vuex'
import Tasks from '../components/Tasks.vue'
import { ref } from 'vue';

const input = ref("")
const store = useStore()

function handleSubmit() {
  store.commit('addTodo', input.value)
  input.value = ""
}
</script>

<template>
  <main>
    <form @submit.prevent="handleSubmit">
      <textarea
        type="text"
        name="todo_input"
        id="todo-input"
        v-model.trim="input"
        required/>
      <input type="submit" value="Add todo">
    </form>
    <Tasks/>
  </main>
</template>

<style scoped>
  main {
    width: 80%;

    display: flex;
    flex-flow: column;
    gap: 30px;
  }

  form {
    min-width: 500px;

    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 10px;
  }

  form textarea {
    width: 100%;
  }

  form input[type=submit] {
    width: 70%;
    height: 30px;
  }

  textarea {
    height: 100px;
  }
</style>
