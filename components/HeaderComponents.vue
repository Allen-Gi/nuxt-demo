<script setup>
const { title } = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="head">
    <h1>{{ title }}</h1>
    <slot />
  </div>
</template>

<style scoped>

</style>