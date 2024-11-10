<template>
  <header>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <RouterLink
          :to="{ path: '/' }"
          @click="changeLink('/')"
          class="text-white text-xl hover:dark:text-blue-600"
          >Moises Guerrero</RouterLink
        >
        <button
          @click="changeVisibleMenu"
          data-collapse-toggle="navbar-default"
          type="button"
          :class="[
            'inline-flex items-center p-2 md:hidden w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
          ]"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          :class="['w-full md:block md:w-auto', { hidden: isVisibleMenu }]"
          id="navbar-default"
        >
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li v-for="m in menu" :key="m.id">
              <router-link
                :to="m.path"
                onclick=""
                :class="[
                  'block py-2 px-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white cursor-pointer',
                  {
                    'md:dark:text-blue-500': isSelected(m.path),
                    'bg-blue-700': isSelected(m.path),
                  },
                ]"
                @click="changeLink(m.path)"
                aria-current="page"
                >{{ m.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>

<script setup lang="ts">
import { useMenu } from '@/composables/useMenu'
import { RouterLink } from 'vue-router'

const { menu, isSelected, changeLink, isVisibleMenu, changeVisibleMenu } =
  useMenu()
</script>
