<script setup>
  import { useToggle } from '@vueuse/core'
  import draggable from 'vuedraggable'

  const [subscribeCancelIsOpen, subscribeCancelIsOpenToggle] = useToggle()

  const subscriptionList = ref([
    {
      id: 1,
      category: 'SUB',
      type: 'SUB',
      relation_code: '',
      group_name: '프로모션 일정',
      front_group_name: '노출 함',
      group_color: '',
      display_front: 'F',
      use_front_notification: '',
      notification_before_minute: '',
      notification_before_hour: '',
      notification_type: '',
      use_single_calendar: '',
      single_calendar_front_permission: '',
      single_calendar_front_start_calendar: '',
      single_calendar_front_start_week: '',
      sort: 0,
    },
    {
      id: 2,
      category: 'SUB',
      type: 'SUB',
      relation_code: '',
      group_name: '이벤트 모니터링',
      front_group_name: '노출 함',
      group_color: '',
      display_front: 'F',
      use_front_notification: '',
      notification_before_minute: '',
      notification_before_hour: '',
      notification_type: '',
      use_single_calendar: '',
      single_calendar_front_permission: '',
      single_calendar_front_start_calendar: '',
      single_calendar_front_start_week: '',
      sort: 1,
    },
    {
      id: 3,
      category: 'SUB',
      type: 'SUB',
      relation_code: '',
      group_name: '마켓 프로모션',
      front_group_name: '노출 함',
      group_color: '',
      display_front: 'F',
      use_front_notification: '',
      notification_before_minute: '',
      notification_before_hour: '',
      notification_type: '',
      use_single_calendar: '',
      single_calendar_front_permission: '',
      single_calendar_front_start_calendar: '',
      single_calendar_front_start_week: '',
      sort: 2,
    },
  ])

  const dragOptions = {
    animation: 200,
    group: 'description',
    disabled: false,
    ghostClass: 'ghost',
  }

  watch(subscriptionList, (val) => {
    console.log(val)
  })
</script>

<template>
  <div class="stit">
    <h2>구독 일정</h2>
  </div>

  <!-- 구독 일정 리스트 -->
  <div class="sortable_wrap subscription">
    <ul class="sort_head">
      <li><strong>카테고리</strong></li>
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

    <div class="sort_content ui-sortable">
      <div class="rowspan ui-sortable-handle">
        프로모션 일정<br />
        <a
          href="javascript:void(0)"
          class="btn_link btnModalOpen"
          @click="subscribeCancelIsOpenToggle()"
          >구독 취소
        </a>
      </div>
      <client-only>
        <draggable
          v-model="subscriptionList"
          v-bind="dragOptions"
          tag="div"
          item-key="sort"
        >
          <template #item="{ element }">
            <basic-setting-calendar-group-subscribe-item :item="element" />
          </template>
        </draggable>
      </client-only>
    </div>
  </div>
  <!-- //구독 일정 리스트 -->
  <basic-setting-calendar-group-subscribe-cancel-modal
    v-model="subscribeCancelIsOpen"
  />
</template>

<style lang="scss" scoped></style>
