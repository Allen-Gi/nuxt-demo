<script setup lang="ts">
  const i18nHead = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true,
  })

  const localePath = useLocalePath()

  const route = useRoute()

  const isActive = (path: string) => route.path === path

  const classWrap = computed(() => {
    if (isActive('/subscribe')) {
      return 'subscribe_wrap'
    } else if (isActive('/calendar')) {
      return 'calendar_wrap'
    } else {
      return 'setup_wrap'
    }
  })
</script>

<template>
  <div id="admin_wrap">
    <div :class="classWrap">
      <header-components title="설정">
        <a href="javascript:void(0)" class="btn_guide" target="_blank"
          >가이드</a
        >
        <button type="button" class="btn_chatbot">AI 챗봇 문의하기</button>

        <nuxt-link to="/basic-setting"> 설정 </nuxt-link>
        <nuxt-link to="/calendar"> 캘린더 </nuxt-link>
        <nuxt-link to="/subscribe"> 구독 </nuxt-link>
        <nuxt-link to="/sample"> 컴포넌트 </nuxt-link>
      </header-components>

      <div id="setup_container">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
