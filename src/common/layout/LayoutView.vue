<script setup lang="ts">
import HeaderView from '@/components/HeaderView.vue'
</script>

<style scoped>
#cubo {
  height: 10px;
  border: 1px solid black;
}
</style>

<template>
  <HeaderView />

  <main class="container mx-auto p-4 border-2 mt-8 shadow-2xl">
    <RouterView />
  </main>
</template>
