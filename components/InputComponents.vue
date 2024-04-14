<script setup lang="ts">
  const input = defineModel({
    type: String,
    default: '',
  })

  const { name, placeholder } = defineProps({
    name: {
      type: String,
      default: 'input1',
    },
    placeholder: {
      type: String,
      default: '',
    },
  })
</script>

<template>
  <input
    v-model="input"
    type="text"
    :name="name"
    :placeholder="placeholder"
    class="inputbox"
  />
</template>

<style scoped></style>
