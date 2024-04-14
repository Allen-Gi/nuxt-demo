<script setup lang="ts">
  const select = defineModel({
    type: String,
    default: '',
  })

  const { name, options } = defineProps({
    name: {
      type: String,
      default: 'checkbox1',
    },
    options: {
      type: Array,
      default: () => [],
    },
  })
</script>

<template>
  <select v-model="select" :name="name" class="selectbox">
    <option v-for="(option, key) in options" :key="key" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<style scoped></style>
