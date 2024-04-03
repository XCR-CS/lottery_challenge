<script setup lang="ts">
    import Welcome from './components/Welcome.vue';
</script>

<template>
  <header>
    <img alt="LWUL logo" class="logo" src="./assets/LWUL_logo.svg" width="500" height="auto" />
  </header>

  <main>
    <router-view/>
  </main>
</template>
