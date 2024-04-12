<script setup>
import { useToggle } from "@vueuse/core";
import draggable from "vuedraggable";

const [addGroupIsOpenLayer, addGroupIsOpenToggle] = useToggle();

const list = ref([
  {
    id: 1,
    category: "MY",
    type: "MY",
    relation_code: "",
    group_name: "할 일",
    front_group_name: "노출 안 함",
    group_color: "",
    display_front: "T",
    use_front_notification: "",
    notification_before_minute: "",
    notification_before_hour: "",
    notification_type: "",
    use_single_calendar: "",
    single_calendar_front_permission: "",
    single_calendar_front_start_calendar: "",
    single_calendar_front_start_week: "",
    sort: 0,
  },
  {
    id: 2,
    category: "MY",
    type: "MY",
    relation_code: "",
    group_name: "상품 출고",
    front_group_name: "노출 함",
    group_color: "",
    display_front: "F",
    use_front_notification: "",
    notification_before_minute: "",
    notification_before_hour: "",
    notification_type: "",
    use_single_calendar: "",
    single_calendar_front_permission: "",
    single_calendar_front_start_calendar: "",
    single_calendar_front_start_week: "",
    sort: 1,
  },
  {
    id: 3,
    category: "MY",
    type: "MY",
    relation_code: "",
    group_name: "이벤트",
    front_group_name: "노출 함",
    group_color: "",
    display_front: "F",
    use_front_notification: "",
    notification_before_minute: "",
    notification_before_hour: "",
    notification_type: "",
    use_single_calendar: "",
    single_calendar_front_permission: "",
    single_calendar_front_start_calendar: "",
    single_calendar_front_start_week: "",
    sort: 2,
  },
]);

const subscriptionList = ref([
  {
    id: 1,
    category: "SUB",
    type: "SUB",
    relation_code: "",
    group_name: "프로모션 일정",
    front_group_name: "노출 함",
    group_color: "",
    display_front: "F",
    use_front_notification: "",
    notification_before_minute: "",
    notification_before_hour: "",
    notification_type: "",
    use_single_calendar: "",
    single_calendar_front_permission: "",
    single_calendar_front_start_calendar: "",
    single_calendar_front_start_week: "",
    sort: 0,
  },
  {
    id: 2,
    category: "SUB",
    type: "SUB",
    relation_code: "",
    group_name: "이벤트 모니터링",
    front_group_name: "노출 함",
    group_color: "",
    display_front: "F",
    use_front_notification: "",
    notification_before_minute: "",
    notification_before_hour: "",
    notification_type: "",
    use_single_calendar: "",
    single_calendar_front_permission: "",
    single_calendar_front_start_calendar: "",
    single_calendar_front_start_week: "",
    sort: 1,
  },
  {
    id: 3,
    category: "SUB",
    type: "SUB",
    relation_code: "",
    group_name: "마켓 프로모션",
    front_group_name: "노출 함",
    group_color: "",
    display_front: "F",
    use_front_notification: "",
    notification_before_minute: "",
    notification_before_hour: "",
    notification_type: "",
    use_single_calendar: "",
    single_calendar_front_permission: "",
    single_calendar_front_start_calendar: "",
    single_calendar_front_start_week: "",
    sort: 2,
  },
]);

const dragOptions = {
  animation: 200,
  group: "description",
  disabled: false,
  ghostClass: "ghost",
};
</script>

<template>
  <basic-setting-layout>
    <div class="setup_content">
      <p class="comment">
        직접 추가한 일정 그룹과 구독하고 있는 일정 그룹에 대한 설정을 변경할 수
        있어요.<br />그룹이 여러개라면 순서를 조정할 수 있어요. 캘린더에 동일한
        순서대로 나와요.
      </p>
      <div class="stit">
        <h2>내 일정</h2>
        <div class="btn_control">
          <button-components label="선택 삭제" size="tiny" type="sub" />
          <button-components
            label="그룹 추가"
            size="tiny"
            @click="addGroupIsOpenToggle"
          />
        </div>
      </div>

      <!-- 내 일정 리스트 -->
      <div class="sortable_wrap myschedule">
        <ul class="sort_head">
          <li>
            <label class="label_ckeck"
              ><input type="checkbox" name="" value="" />
              <span class="check_mark"></span>
            </label>
          </li>
          <li><strong>그룹명</strong></li>
          <li><strong>쇼핑몰 사이트 노출</strong></li>
          <li><strong>일정 알림 기본값</strong></li>
          <li>
            <div class="split center">
              <strong>단독 캘린더 사용여부</strong>
              <div class="help_wrap">
                <button
                  type="button"
                  class="btn_help"
                  onclick="openLayer('layerSingleCalendar')"
                >
                  <span class="blind">도움말</span>
                </button>
                <section id="layerSingleCalendar" class="layer_popup right">
                  <button
                    onclick="closeLayer('layerSingleCalendar')"
                    class="close"
                  >
                    <span class="blind">닫기</span>
                  </button>
                  <h1>도움말</h1>
                  <ul class="list_hyp">
                    <li>내용들어가는 곳 내용들어가는 곳 내용들어가는 곳</li>
                  </ul>
                </section>
              </div>
            </div>
          </li>
          <li><strong>관리</strong></li>
          <li><strong>순서</strong></li>
        </ul>
        <client-only>
          <draggable
            v-model="list"
            v-bind="dragOptions"
            tag="div"
            item-key="sort"
            class="sort_content ui-sortable"
          >
            <template #item="{ element }">
              <ul class="row ui-sortable-handle">
                <li>
                  <label class="label_ckeck"
                    ><input type="checkbox" name="" value="" />
                    <span class="check_mark"></span>
                  </label>
                </li>
                <li>{{ element.group_name }}</li>
                <li>{{ element.display_front }}</li>
                <li>알림 없음</li>
                <li>사용 안함</li>
                <li><a href="#" class="btn btn_default sml">수정</a></li>
                <li><span class="ico_turn"></span></li>
              </ul>
            </template>
          </draggable>
        </client-only>
      </div>
      <!-- //내 일정 리스트 -->

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
              <div class="help_wrap">
                <button
                  type="button"
                  class="btn_help"
                  onclick="openLayer('layerSingleCalendar2')"
                >
                  <span class="blind">도움말</span>
                </button>
                <section id="layerSingleCalendar2" class="layer_popup right">
                  <button
                    onclick="closeLayer('layerSingleCalendar2')"
                    class="close"
                  >
                    <span class="blind">닫기</span>
                  </button>
                  <h1>도움말</h1>
                  <ul class="list_hyp">
                    <li>내용들어가는 곳 내용들어가는 곳 내용들어가는 곳</li>
                  </ul>
                </section>
              </div>
            </div>
          </li>
          <li><strong>관리</strong></li>
          <li><strong>순서</strong></li>
        </ul>

        <div class="sort_content ui-sortable">
          <div class="rowspan ui-sortable-handle">
            프로모션 일정<br /><a
              href="#registerCancel"
              class="btn_link btnModalOpen"
              >구독 취소</a
            >
          </div>
          <client-only>
            <draggable
              v-model="subscriptionList"
              v-bind="dragOptions"
              tag="div"
              item-key="sort"
            >
              <template #item="{ element }">
                <ul class="row ui-sortable-handle">
                  <li>{{ element.group_name }}</li>
                  <li>노출함</li>
                  <li>메시지 : 10분 전</li>
                  <li>사용 안함</li>
                  <li><a href="#" class="btn btn_default sml">수정</a></li>
                  <li><span class="ico_turn"></span></li>
                </ul>
              </template>
            </draggable>
          </client-only>
        </div>
      </div>
      <!-- //구독 일정 리스트 -->
    </div>
  </basic-setting-layout>
  <modal-components-group-add v-model="addGroupIsOpenLayer">
  </modal-components-group-add>
</template>

<style scoped>
.ghost {
  opacity: 0.4;
  background-color: #ffffff !important;
}
</style>
