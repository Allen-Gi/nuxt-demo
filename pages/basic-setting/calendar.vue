<script setup>

</script>

<template>
  <basic-setting-layout>
    <div class="setup_content">
      <p class="comment">
        직접 추가한 일정 그룹과 구독하고 있는 일정 그룹에 대한 설정을 변경할 수
        있어요.<br />그룹이 여러개라면 순서를 조정할 수 있어요. 캘린더에 동일한
        순서대로 나와요.
      </p>

      <!-- 내일정 -->
      <basic-setting-calendar-my-schedule />


      <!-- 구독 일정 -->
      <basic-setting-calendar-subscribe />
    </div>
  </basic-setting-layout>

</template>

<style scoped>
.ghost {
  opacity: 0.4;
  background-color: #ffffff !important;
}
</style>
