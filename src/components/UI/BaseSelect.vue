<script setup lang="ts" generic="T extends { name: string; value: string }">
export type Props<T> = {
  modelValue: string
  options: Array<T>
}
const { modelValue, options } = defineProps<Props<T>>()
</script>

<template>
  <select
    :value="modelValue"
    @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <option disabled value="">Выберите значение</option>
    <option v-for="option in options" :key="option.name" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<style scoped></style>
