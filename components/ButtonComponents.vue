<script setup lang="ts">
const { label, size, type } = defineProps({
  label: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "primary",
  },
});
</script>

<template>
  <a
    href="javascript:void(0)"
    class="btn"
    :class="{
      sml: size === 'small',
      btn_submit: type === 'primary',
      btn_line: type === 'outline',
      btn_default: type === 'default',
    }"
    >{{ label }}</a
  >
</template>

<style scoped></style>
