<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import draggable from 'vuedraggable'
import { useCalendarGroup } from '~/composables/basic-setting/useCalendarGroup'

const [addGroupIsOpenLayer, addGroupIsOpenToggle] = useToggle()

const { myCalendarGroup, fetchCalendarGroup, updateCalendarGroupSort } = useCalendarGroup()

const dragOptions = {
  animation: 200,
  group: 'description',
  disabled: false,
  ghostClass: 'ghost',
}

watch(myCalendarGroup, (val) => {
  console.log(val)
  updateCalendarGroupSort(val)
})
</script>

<template>
  <div class="stit">
    <h2>내 일정</h2>
    <div class="btn_control">
      <button-components label="선택 삭제" size="tiny" type="sub" />
      <button-components label="그룹 추가" size="tiny" @click="addGroupIsOpenToggle" />
    </div>
  </div>

  <!-- 내 일정 리스트 -->
  <div class="sortable_wrap myschedule">
    <ul class="sort_head">
      <li>
        <label class="label_ckeck"><input type="checkbox" name="" value="" />
          <span class="check_mark" />
        </label>
      </li>
      <li><strong>그룹명</strong></li>
      <li><strong>쇼핑몰 사이트 노출</strong></li>
      <li><strong>일정 알림 기본값</strong></li>
      <li>
        <div class="split center">
          <strong>단독 캘린더 사용여부</strong>
          <help-components>
      <li>하루에 표시될 일정의 최대 개수를 설정할 수 있어요.</li>
      <li>내용들어가는 곳 내용들어가는 곳 내용들어가는 곳</li>
      </help-components>
  </div>
  </li>
  <li><strong>관리</strong></li>
  <li><strong>순서</strong></li>
  </ul>
  <client-only>
    <draggable v-model="myCalendarGroup" v-bind="dragOptions" tag="div" item-key="sort"
      class="sort_content ui-sortable">
      <template #item="{ element }">
        <basic-setting-calendar-group-my-schedule-item :item="element" />
      </template>
    </draggable>
  </client-only>
  </div>
  <!-- //내 일정 리스트 -->
  <basic-setting-calendar-group-my-schedule-add-modal v-model="addGroupIsOpenLayer" />
</template>

<style scoped></style>
