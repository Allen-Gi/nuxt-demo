<script setup lang="ts">

const checkbox = defineModel({
  type: Array,
  required: true
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
    default: () => []
  }
})
</script>

<template>
  <client-only>
  <template v-for="option in options">
    <label class="label_ckeck"><input
      type="checkbox"
      :name="name"
      v-model="checkbox"
      :value="option.value"
    >
      <span class="check_mark"></span>
      <span class="check_text">{{ option.label }}</span>
    </label>
  </template>
  </client-only>
</template>

<style scoped>

</style>