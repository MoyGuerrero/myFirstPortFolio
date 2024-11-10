<template>
  <span
    class="inline-flex cursor-pointer items-center rounded-md bg-indigo-50 hover:bg-indigo-200 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
    v-for="skill in tareas">{{ skill.task }}</span>
</template>

<script setup lang="ts">
import type { Herramientas } from '@/interfaces/experiencia.interface'

defineProps<{
  tareas: Herramientas[]
}>()
</script>
