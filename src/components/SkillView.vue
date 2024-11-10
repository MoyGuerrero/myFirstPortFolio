<template>
  <section class="mt-5 w-full">
    <h2 class="text-center text-2xl font-bold">Mis Habilidades</h2>
    <div class="flex overflow-hidden space-x-16 h-36">
      <div class="flex animate-loop-scroll space-x-16">
        <div
          class="w-80 h-auto rounded flex flex-col items-center justify-center"
          v-for="skill in skills"
          :key="skill.id"
        >
          <img :src="skill.route" class="max-w-none" :alt="skill.skill" />
          {{ skill.skill }}
        </div>
      </div>
      <div class="flex animate-loop-scroll space-x-16" aria-hidden="true">
        <div
          class="w-80 rounded flex flex-col items-center justify-center"
          v-for="skill in skills"
          :key="skill.id"
        >
          <img :src="skill.route" :alt="skill.skill" />
          {{ skill.skill }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Skills } from '@/interfaces/skill.interface'

interface Props {
  skills: Skills[]
}

defineProps<Props>()
</script>
