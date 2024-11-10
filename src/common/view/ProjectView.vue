<template>
  <div class="grid md:grid-cols-2 gap-4">
    <div class="w-full h-full border-2 rounded p-4 shadow-xl" v-for="project in projects" :key="project.id">
      <h4 class="text-center font-semibold text-lg">{{ project.name }}</h4>
      <article class="flex flex-col justify-center items-center">
        <img :src="project.image" class="aspect-video w-full object-cover" alt="" srcset="" />
      </article>
      <div class="flex justify-center gap-3 mt-2 mb-3">
        <a class="px-5 border-2 rounded-lg cursor-pointer dark:hover:bg-slate-800 dark:text-white dark:bg-slate-900 py-1"
          :href="project.urlCode" target="_blank">Github</a>
        <a :href="project.urlDeploy"
          class="px-5 border-2 rounded-lg cursor-pointer dark:hover:bg-slate-800 dark:text-white dark:bg-slate-900 py-1">
          Visitar pagina
        </a>
      </div>
      <div class="flex justify-center gap-3 flex-wrap mt-2">
        <BadgeView :tareas="project.skill" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BadgeView from '@/components/BadgeView.vue'
import { useProject } from '@/composables/useProjects'

const { projects } = useProject()
</script>
