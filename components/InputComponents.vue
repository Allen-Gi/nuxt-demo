<script setup lang="ts">
const input = defineModel({
  key: 'input',
  type: String,
  default: ''
})

const {
  name,
    placeholder

} = defineProps({
  name: {
    type: String,
    default: 'input1'
  },
  placeholder: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <input type="text" :name="name" v-model="input" :placeholder="placeholder" class="inputbox">
</template>

<style scoped>

</style>