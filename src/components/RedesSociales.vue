<template>
  <div class="grid grid-cols-4 gap-2 mt-4">
    <div
      class="w-full flex flex-col items-center justify-center"
      v-for="social in redes"
      :key="social.id"
    >
      <a :href="social.url" target="_blank">
        <img
          :src="social.image"
          class="transition ease-in-out scale-50 hover:scale-75"
          :alt="social.alt"
        />
      </a>
      {{ social.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Social } from '@/interfaces/social.interface'

defineProps<{
  redes: Social[]
}>()
</script>

<style lang="scss" scoped></style>
