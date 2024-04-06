<script setup lang="ts">

import {useCounterStore} from "~/stores/counter";
import {useTodos} from "~/composables/todos";

const { todos } = await useTodos()


const store = useCounterStore()
const { getCount } = storeToRefs(store)

const { locale, setLocale, locales, getLocaleCookie} = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

defineI18nRoute(false)
</script>

<template>
  <div>
    <div>
      <h1>Counter</h1>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.title }}
        </li>
      </ul>
    </div>
    <div>
      <h1>I18n</h1>
      <p>
        <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
          {{ locale.name }}
        </NuxtLink>
      </p>
    </div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>{{ todos }}</p>
    <div>
      <button @click="store.increment">Increment</button>
      <button @click="store.decrement">Decrement</button>
      <button @click="setLocale('ko')">setLocale KO</button>
      <button @click="setLocale('en')">setLocale EN</button>

    </div>
    <div>Count: {{ getCount }}</div>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">{{ $t('welcome')}}Learn more about Nuxt Routing</a>
  </div>
</template>
