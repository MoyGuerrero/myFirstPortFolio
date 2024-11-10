<template>
  <div>
    <textarea
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      :name="name"
      @input="
        $emit(
          'update:modelValue',
          ($event.target as HTMLTextAreaElement).value ?? '',
        )
      "
      @blur="$emit('blur')"
      rows="6"
      :class="[
        'w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500 border-2',
        {
          'dark:border-red-700': error,
        },
      ]"
    ></textarea>
    <span v-if="error" class="text-red-400">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: string
    name: string
    error?: string
    type?: 'text' | 'email'
    placeholder?: ''
  }>(),
  {
    type: 'text',
  },
)
defineEmits(['update:modelValue', 'blur'])
</script>
