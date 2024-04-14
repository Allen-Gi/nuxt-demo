<script setup lang="ts">
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const isActive = (path: string) => route.path === path
</script>

<template>
  <div class="content_wrap">
    <div class="title">
      <ul class="tabs">
        <li :class="{ on: isActive('/basic-setting') }">
          <nuxt-link to="/basic-setting"> 기본 설정 </nuxt-link>
        </li>
        <li :class="{ on: isActive('/basic-setting/calendar') }">
          <nuxt-link to="/basic-setting/calendar"> 일정 설정 </nuxt-link>
        </li>
        <li :class="{ on: isActive('/basic-setting/report') }">
          <nuxt-link to="/basic-setting/report"> 데일리 리포트 설정 </nuxt-link>
        </li>
      </ul>
      <a href="#" class="btn_calendar">캘린더</a>
    </div>

    <slot />
    <!-- //setup_content -->
  </div>
  <slot name="preview" />
</template>

<style scoped></style>
