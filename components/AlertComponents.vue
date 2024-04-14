<script setup lang="ts">
  const isOpen = defineModel({
    type: Boolean,
    required: true,
  })
  const { title } = defineProps({
    title: {
      type: String,
      default: '알림',
    },
  })
</script>

<template>
  <div v-if="isOpen" class="layerAlert" style="display: block">
    <span>{{ title }}</span>
  </div>
</template>
