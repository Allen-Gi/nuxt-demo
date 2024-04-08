<script setup lang="ts">
const select = defineModel({
  key: 'select',
  type: String,
  default: ''
})

const {
  name,
    options
} = defineProps({
  name: {
    type: String,
    default: 'checkbox1'
  },
  options: {
    type: Array,
    default: []
  }
})
</script>

<template>
  <select :name="name" v-model="select" class="selectbox">
    <option v-for="option in options" :value="option.value">{{ option.label }}</option>
  </select>
</template>

<style scoped>

</style>