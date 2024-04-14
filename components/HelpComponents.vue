<script setup>
  import { useToggle } from '@vueuse/core'

  const [layerIsOpen, layerIsOpenToggle] = useToggle()
  const { name } = defineProps({
    name: {
      type: String,
      default: 'layerSource',
    },
  })
</script>

<template>
  <div class="help_wrap">
    <button type="button" class="btn_help" @click="layerIsOpenToggle">
      <span class="blind">도움말</span>
    </button>
    <section
      v-if="layerIsOpen"
      :id="name"
      class="layer_popup"
      :class="{ right: name === 'layerMsgSMS' }"
      style="display: block"
    >
      <button class="close" @click="layerIsOpen = false">
        <span class="blind">닫기</span>
      </button>
      <h1>도움말</h1>
      <ul class="list_hyp">
        <slot />
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
