<script setup lang="ts">
const isOpen = defineModel({
  type: Boolean,
  required: true
})
const { title } = defineProps({
  title: {
    type: String,
    default: '알림'
  }
})
</script>

<template>
  <div class="layerAlert" v-if="isOpen" style="display: block">
    <span>{{ title }}</span>
  </div>
</template>
