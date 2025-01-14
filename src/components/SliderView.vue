<template>
  <div class=" h-[380px] w-full m-auto py-16 px-4 relative group">
    <!-- <div :style="{ backgroundImage: `url(${images[index]})` }"
      class="w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500"></div> -->
    <img :src="images[index]" class="w-full h-full object-cover duration-500" alt="Imagen de carrusel">
    <div
      class="absolute hidden group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <LeftArrow @click="previewBack" />
    </div>
    <div
      class="absolute hidden group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <RightArrow @click="previewNext" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LeftArrow from './LeftArrow.vue';
import RightArrow from './RightArrow.vue';


const index = ref(0);
interface Props {
  images: string[]
}

const props = defineProps<Props>();


const previewBack = () => {
  const isFirstImage = index.value === 0
  index.value = isFirstImage ? props.images.length - 1 : index.value - 1;
}

const previewNext = () => {
  const isFirstImage = index.value === props.images.length - 1;
  index.value = isFirstImage ? 0 : index.value + 1;
}
</script>

<style scoped></style>
