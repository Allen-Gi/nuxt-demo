<script setup>
const { item } = defineProps({
  item: Object,
});
</script>

<template>

  <ul class="row ui-sortable-handle">
    <li>{{ item.group_name }}</li>
    <li>노출함</li>
    <li>메시지 : 10분 전</li>
    <li>사용 안함</li>
    <li><a href="#" class="btn btn_default sml">수정</a></li>
    <li><span class="ico_turn"></span></li>
  </ul>
</template>

<style lang="scss" scoped></style>