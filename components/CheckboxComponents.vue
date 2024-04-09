<script setup lang="ts">

const checkbox = defineModel({
  type: Boolean,
  default: false
})

const {
  label,
  name
} = defineProps({
  label: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: 'checkbox1'
  }
})
</script>

<template>
  <label class="label_ckeck"><input type="checkbox" :name="name" v-model="checkbox">
    <span class="check_mark"></span>
    <span class="check_text">{{ label }}</span>
  </label>
</template>

<style scoped>

</style>