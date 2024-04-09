<script setup lang="ts">
const radio = defineModel({
  type: String,
  required: true
})

const {
  name,
  options
} = defineProps({
  name: {
    type: String,
    default: 'radio1'
  },
  options: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <client-only>
    <template v-for="option in options">
      <label class="label_ckeck"><input
        type="radio"
        :name="name"
        v-model="radio"
        :value="option.value"
      >
        <span class="radio_mark"></span>
        <span class="check_text">{{ option.label }}</span>
      </label>
    </template>
  </client-only>
</template>

<style scoped>

</style>