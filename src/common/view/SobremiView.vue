<template>
  <section class="flex md:flex-row flex-col">
    <div class="w-full flex flex-col items-center">
      <img
        class="w-[250px] h-[250px] mx-auto rounded-full dark:border-gray-500 shadow-2xl"
        src="../../assets/images/me.jpg"
        alt="desarrollo-web"
      />
      <a
        ref="buttonDownload"
        @click="downloadCv"
        class="border-2 mt-2 py-1 px-3 rounded text-white dark:bg-blue-600 dark:hover:bg-blue-800 flex items-center gap-1"
      >
        Descargar cv
        <svg
          class="w-[20px]"
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          ></path>
        </svg>
      </a>
    </div>
    <div class="w-full mt-4 md:mt-0">
      <h1 class="md:text-3xl text-xl text-center font-bold">Acerca de mi</h1>
      <p class="text-lg font-serif mt-2">
        Desarrollador Frontend con mas de 2 años de experiencia, especializado
        en crear y modicar interfaces de usuario intituivas, eficientes, base a
        requerimientos solicitados. Conocimientos en varios lenguajes y
        plataformas, incluyendo Html, Css, Bootstrap, JavaScript, JQuery, Fetch,
        Ajax, C#, .NET Core, VueJs3, Sequelize, Express, Quasar,Github. Me gusta
        participar en diferentes proyectos, esto para fortalecer y aumentar mis
        conocimientos
      </p>
      <RedesSociales :redes="socialRed" />
    </div>
  </section>
  <hr class="mt-5" />
  <SkillView :skills="skills" />
  <hr class="mt-5" />
</template>

<script setup lang="ts">
import RedesSociales from '@/components/RedesSociales.vue'
import SkillView from '@/components/SkillView.vue'
import { useSobreMi } from '@/composables/useSobreMi'

const { socialRed, skills, buttonDownload, downloadCv } = useSobreMi()
</script>

<style scoped></style>
