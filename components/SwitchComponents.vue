<script setup lang="ts">
  const checkbox = defineModel({
    key: 'checkbox',
    type: Boolean,
    default: false,
  })

  const { label, name } = defineProps({
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: 'checkbox1',
    },
  })
</script>

<template>
  <label class="switch_wrap">
    <strong>{{ label }}</strong>
    <span class="switch">
      <input v-model="checkbox" type="checkbox" :name="name" />
      <span class="slider" />
    </span>
  </label>
</template>

<style scoped></style>
