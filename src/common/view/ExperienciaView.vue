<template>
  <section class="w-full h-full">
    <div class="flex md:justify-start justify-center items-center">
      <h2 class="font-bold text-3xl pl-10">Experiencia Laboral</h2>
    </div>
    <div style="overflow-y: auto; height: 600px" class="mb-2">
      <div
        v-for="(job, index) in jobs"
        class="flex flex-col justify-between h-auto mt-10 p-3 border border-gray-500 rounded shadow-2xl gap-10"
        :class="[(index + 1) % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse']"
      >
        <div class="container">
          <h3 class="text-center text-lg font-semibold">{{ job.empresa }}</h3>
          <div class="text-center flex mx-auto justify-center gap-3">
            <p class="font-light">
              Fecha de ingreso:
              <span class="text-base">{{ job.fechaIngreso }}</span>
            </p>
            <p class="font-light">
              Fecha de egreso:
              <span class="text-base">{{ job.fechaFinal }}</span>
            </p>
          </div>

          <div class="flex flex-col items-center justify-center">
            <p class="text-lg font-light">{{ job.ciudad }}</p>
            <p class="text-lg font-light">{{ job.tipo }}</p>
            <p class="text-lg font-light text-center mt-2">
              {{ job.descripcion }}
            </p>
          </div>
          <h4 class="text-center font-semibold text-lg">Herramientas</h4>
          <div class="flex justify-center mt-2 gap-2 flex-wrap">
            <!-- <span
              class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
              v-for="skill in job.tareas"
              >{{ skill.task }}</span
            > -->
            <BadgeView :tareas="job.tareas" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BadgeView from '@/components/BadgeView.vue'
import { useExperiencia } from '@/composables/useExperiencia'

const { jobs } = useExperiencia()
</script>
