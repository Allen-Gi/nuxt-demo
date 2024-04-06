<script setup lang="ts">
useHead({
  title: 'Nuxt About',
  description: 'Nuxt Routing set up successfully!',
})

definePageMeta({
  middleware: 'auth'
})

const shopInfo = useState('shopInfo')

defineI18nRoute(false)
</script>

<template>
  <div ma class="flex w-[500px]">
    <h1>{{ $t('welcome')}}About</h1>
    <p>This is the about page</p>
    <p>{{ shopInfo }}</p>

    <span text="blue 5xl hover:red" cursor="default">Hello Nuxt 3</span>
    <br>
    <div i-carbon-car text-4xl inline-block />
  </div>
</template>

<style scoped>

</style>