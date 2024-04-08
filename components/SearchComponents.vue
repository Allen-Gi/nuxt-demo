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
  <div id="" class="inputSearch">
    <input type="text" :name="name" v-model="input" class="inputbox" :placeholder="placeholder">
  </div>
</template>

<style scoped>

</style>