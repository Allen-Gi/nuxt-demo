<script setup>
const radio = defineModel({
  type: String,
  required: true,
})

const { name, options } = defineProps({
  name: {
    type: String,
    default: 'radio1',
  },
  options: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <template v-for="(option, key) in options" :key="key">
    <label class="label_ckeck"><input v-model="radio" type="radio" :name="name" :value="option.value" />
      <span class="radio_mark" />
      <span class="check_text">{{ option.label }}</span>
    </label>
  </template>
</template>

<style scoped></style>
