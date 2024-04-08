<script setup lang="ts">
import HeaderComponents from "~/components/HeaderComponents.vue";
import FooterComponents from "~/components/FooterComponents.vue";

const i18nHead = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

const localePath = useLocalePath()

</script>

<template>
  <div>
    <header-components />
    <div>
      <NuxtLink to="/">Home</NuxtLink>
      |
      <NuxtLink to="/about">About</NuxtLink>
      |
      <NuxtLink to="/sample">Sample</NuxtLink>
    </div>
    <div>
      <slot/>
    </div>
    <footer-components />
  </div>
</template>

<style scoped>

</style>