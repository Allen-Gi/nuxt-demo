<script setup>
  const checkbox = defineModel({
    type: Array,
    required: true,
  })

  const { name, options } = defineProps({
    name: {
      type: String,
      default: 'checkbox1',
    },
    options: {
      type: Array,
      default: () => [],
    },
  })
</script>

<template>
  <client-only>
    <template v-for="(option, key) in options" :key="key">
      <label class="label_ckeck"
        ><input
          v-model="checkbox"
          type="checkbox"
          :name="name"
          :value="option.value"
        />
        <span class="check_mark" />
        <span class="check_text">{{ option.label }}</span>
      </label>
    </template>
  </client-only>
</template>

<style scoped></style>
