<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    :name="name"
    @input="
      $emit(
        'update:modelValue',
        ($event.target as HTMLInputElement).value ?? '',
      )
    "
    @blur="$emit('blur')"
    :class="[
      'w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500 border-2',
      {
        'dark:border-red-700': error,
      },
    ]"
  />
  <span v-if="error" class="text-red-400">{{ error }}</span>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: string
    error?: string
    name: string
    type?: 'text' | 'email'
    placeholder?: ''
  }>(),
  {
    type: 'text',
  },
)
defineEmits(['update:modelValue', 'blur'])
</script>
