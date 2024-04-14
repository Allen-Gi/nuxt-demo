<script setup>
import { useToggle } from "@vueuse/core";

const [layerIsOpen, layerIsOpenToggle] = useToggle()
const { name } = defineProps({
  name: {
    type: String,
    default: 'layerSource'
  }
})
</script>

<template>
  <div class="help_wrap">
    <button type="button" class="btn_help" @click="layerIsOpenToggle"><span class="blind">도움말</span></button>
    <section :id="name" class="layer_popup" :class="{ right: name === 'layerMsgSMS' }" v-if="layerIsOpen"
      style="display: block;">
      <button @click="layerIsOpen = false" class="close"><span class="blind">닫기</span></button>
      <h1>도움말</h1>
      <ul class="list_hyp">
        <slot />
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>