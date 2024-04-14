<script setup lang="ts">
  const { item } = defineProps({
    item: {
      type: Object,
      default: () => ({}),
    },
  })
</script>

<template>
  <ul class="row ui-sortable-handle">
    <li>
      <label class="label_ckeck"
        ><input type="checkbox" name="" value="" />
        <span class="check_mark" />
      </label>
    </li>
    <li>{{ item.group_name }}</li>
    <li>{{ item.display_front }}</li>
    <li>알림 없음</li>
    <li>사용 안함</li>
    <li>
      <a href="#" class="btn btn_default sml">수정</a>
    </li>
    <li><span class="ico_turn" /></li>
  </ul>
</template>

<style scoped></style>
