<script setup lang="ts">
const radio = defineModel({
  key: 'radio',
  type: String,
  required: true
})

const {
  label,
  name,
  value
} = defineProps({
  label: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: 'checkbox1'
  },
  value: {
    type: String,
    required: true
  }
})
</script>

<template>
  <client-only>
  <label class="label_ckeck"><input
      type="radio"
      :name="name"
      v-model="radio"
      :value="value"
  >
    <span class="radio_mark"></span>
    <span class="check_text">{{ label }}</span>
  </label>
  </client-only>
</template>

<style scoped>

</style>