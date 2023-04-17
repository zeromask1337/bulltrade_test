<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/edit" >Edit Tasks</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  width: 200px;
  height: 200px;

  display: flex;
  flex-flow: column;
  justify-content: center;
}

header > img {
  margin: 0 auto;
}

nav {
  display: flex;
  justify-content: space-between;
}

</style>
