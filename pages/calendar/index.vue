<script setup>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import interactionPlugin from "@fullcalendar/interaction";
import koLocale from "@fullcalendar/core/locales/ko";
import { useCalendar } from "@/composables/useCalendar";
const { filterMyGroup, filteredEvents, filterImportantEvents, filterShoppingMallEvents, searchMySchedule } = useCalendar();
const eventsInfo = ref({});
const eventsInfoIsOpen = ref(false);
const handleEventClick = (info) => {
  info.jsEvent.preventDefault();
  eventsInfo.value = {
    title: info.event?.title,
    start: info.event?.start,
    startStr: info.event?.startStr,
    end: info.event?.end,
    endStr: info.event?.endStr,
    group: info.event.extendedProps?.group,
    description: info.event.extendedProps?.description || "",
    url: info.event?.url,
  }

  eventsInfoIsOpen.value = true;
};
const calendarRef = ref(null);
const calendarOptions = ref({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  locale: koLocale,
  dayHeaderContent: (args) => {
    moment.locale("ko");
    let headerDay = document.createElement("span");
    let headerWeek = document.createElement("span");

    headerDay.classList.add("date");
    headerDay.innerHTML = moment(args.date).format("Do");
    headerWeek.innerHTML = moment(args.date).format(" (dd)");

    if (args.view.type === "timeGridDay" || args.view.type === "timeGridWeek") {
      return {
        html: headerDay.outerHTML + headerWeek.outerHTML,
      };
    } else if (args.view.type === "dayGridMonth") {
      return moment(args.date).format("dddd");
    }
  },
  dayCellContent: (info) => {
    let number = document.createElement("a");
    number.classList.add("fc-daygrid-day-number");
    number.innerHTML = info.dayNumberText.replace("일", "").replace("日", "");
    if (info.view.type === "dayGridMonth") {
      return {
        html: number.outerHTML,
      };
    }
    return {
      domNodes: [],
    };
  },
  buttonText: {
    today: "오늘",
    month: "월",
    week: "주",
    day: "일",
    list: "list",
  },
  titleFormat: {
    year: "numeric",
    month: "long",
  },
  initialView: "dayGridMonth",
  height: 820,
  slotMinTime: "00:00",
  slotMaxTime: "21:00",
  navLinks: true, // 요일, 날짜 클릭 시 일/주 단위 화면으로 넘어감
  expandRows: true,
  editable: false, // 드래그 수정 여부
  selectable: false, //
  nowIndicator: true, //
  dayMaxEvents: true, // "more" 표시 전 최대 이벤트 갯수. true - 셀 높이에 따라 결정
  eventDisplay: "block",

  headerToolbar: {
    left: "title,prev,next,today",
    center: "",
    right: "timeGridDay,timeGridWeek,dayGridMonth",
  },
  eventClick: handleEventClick,

  //event filter
  eventClassNames: function (info) {
    var result = true;
    var groups = [];

    document.querySelectorAll(".event_filter").forEach((el) => {
      if (el.checked) {
        groups.push(el.value);
      }
    });

    // 체크 된 일정 클래스 추가
    if (groups.length) {
      result =
        (result && groups.indexOf(info.event.extendedProps.group) >= 0) ||
        info.event.extendedProps.group == "holiday";
    }

    // 체크되지 않은 일정 클래스 추가
    if (!result) {
      result = "filter-hidden";
    }
    return result;
  },
  initialEvents: filteredEvents.value,
});


const miniCalendarRef = ref(null);
const miniCalendarOptions = ref({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  locale: koLocale,
  dayCellContent: (info) => {
    let number = document.createElement("a");
    number.classList.add("fc-daygrid-day-number");
    number.innerHTML = info.dayNumberText.replace("일", "").replace("日", "");
    if (info.view.type === "dayGridMonth") {
      return {
        html: number.outerHTML,
      };
    }
    return {
      domNodes: [],
    };
  },
  initialView: "dayGridMonth",
  height: 260,
  navLinks: true,
  navLinkDayClick: async function (date, jsEvent) {
    moment.locale("ko");
    var newDate = String(moment(date).format("YYYY-MM-DD"));
    if (miniCalendarRef.value) {
      const { calendar } = miniCalendarRef.value;
      calendar.gotoDate(newDate);
    }
  },
  dayMaxEvents: true,
  eventDisplay: "none",

  headerToolbar: {
    left: "title",
    right: "prev,next",
  },

  //event data
  events: filteredEvents.value,
});


const handleEventFilter = async (group) => {
  filterMyGroup();
  calendarOptions.value.events = filteredEvents.value;
};

const handleImportantEventFilter = async (e) => {
  filterImportantEvents(e.target.checked);
  calendarOptions.value.events = filteredEvents.value;
};

const handleShoppingMallEventFilter = async (e) => {
  filterShoppingMallEvents(e.target.checked);
  calendarOptions.value.events = filteredEvents.value;
};

const handleSearchMySchedule = async (e) => {
  searchMySchedule(e.target.value);
  calendarOptions.value.events = filteredEvents.value;
};

const [myGroupIsOpen, myGroupIsOpenToggle] = useToggle(true);
const [subscribuIsOpen, subscribuIsOpenToggle] = useToggle(true);

</script>

<template>
  <div class="content_wrap">
    <div class="calendar_layout">
      <div class="calendar_left">
        <!-- mini calendar -->
        <FullCalendar ref="miniCalendarRef" id="miniCalendar" :options="miniCalendarOptions" />
        <!-- //mini calendar -->

        <div id="calendarFilter">
          <div class="calendar_option">
            <div class="option">
              <label class="switch_wrap">
                <strong>중요 일정만 보기</strong>
                <span class="switch">
                  <input type="checkbox" class="event_filter" name="event_filter" data-type="" id="" value="true"
                    @change="handleImportantEventFilter" />
                  <span class="slider"></span>
                </span>
              </label>
            </div>
            <div class="option">
              <label class="switch_wrap">
                <strong>쇼핑몰 사이트 노출 일정만 보기</strong>
                <span class="switch">
                  <input type="checkbox" class="event_filter" name="event_filter" data-type="" id="" value="true"
                    @change="handleShoppingMallEventFilter" />
                  <span class="slider"></span>
                </span>
              </label>
            </div>
          </div>

          <div class="calendar_option toggleWrap" :class="{ active: myGroupIsOpen }">
            <!-- 컨텐츠 오픈 시 클래스 active 추가 -->
            <div class="tit">
              <button type="button" class="btnOpen" @click="myGroupIsOpenToggle()">
                내 일정 <span class="blind">보기</span>
              </button>
            </div>
            <a href="5_regCalendar.html" class="btnAdd"><span class="blind">내 일정 추가</span></a>
            <div class="cont toggleCont">
              <ul>
                <li>
                  <label class="label_ckeck">
                    <input type="checkbox" class="event_filter" name="event_filter" data-type="group"
                      id="calendarGroup1" value="calendarGroup1" checked=""
                      @change="handleEventFilter('calendarGroup1')" />
                    <span class="check_mark" style="background: #285ff6; border-color: #285ff6"></span>
                    <span class="check_text">할일</span>
                  </label>
                </li>
                <li>
                  <label class="label_ckeck">
                    <input type="checkbox" class="event_filter" name="event_filter" data-type="group"
                      id="calendarGroup2" value="calendarGroup2" checked=""
                      @change="handleEventFilter('calendarGroup2')" />
                    <span class="check_mark" style="background: #33ad6e; border-color: #33ad6e"></span>
                    <span class="check_text">상품 출고</span>
                  </label>
                </li>
                <li>
                  <label class="label_ckeck">
                    <input type="checkbox" class="event_filter" name="event_filter" data-type="group"
                      id="calendarGroup3" value="calendarGroup3" checked=""
                      @change="handleEventFilter('calendarGroup3')" />
                    <span class="check_mark" style="background: #f9a580; border-color: #f9a580"></span>
                    <span class="check_text">상품 오픈</span>
                  </label>
                </li>
                <li>
                  <label class="label_ckeck">
                    <input type="checkbox" class="event_filter" name="event_filter" data-type="group"
                      id="calendarGroup4" value="calendarGroup4" checked=""
                      @change="handleEventFilter('calendarGroup4')" />
                    <span class="check_mark" style="background: #ebbf60; border-color: #ebbf60"></span>
                    <span class="check_text">이벤트 <span class="only">단독</span></span>
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div class="calendar_option toggleWrap" :class="{ active: subscribuIsOpen }">
            <div class="tit">
              <button type="button" class="btnOpen" @click="subscribuIsOpenToggle()">
                구독 일정 <span class="blind">보기</span>
              </button>
            </div>
            <div class="cont toggleCont">
              <ul>
                <li>
                  <label class="label_ckeck">
                    <input type="checkbox" class="event_filter" name="event_filter" data-type="group"
                      id="calendarGroup5" value="calendarGroup5" checked=""
                      @change="handleEventFilter('calendarGroup5')" />
                    <span class="check_mark" style="background: #69d2e2; border-color: #69d2e2"></span>
                    <span class="check_text">[구독] 쇼핑몰 프로모션</span>
                  </label>
                </li>
                <li>
                  <label class="label_ckeck">
                    <input type="checkbox" class="event_filter" name="event_filter" data-type="group"
                      id="calendarGroup6" value="calendarGroup6" checked=""
                      @change="handleEventFilter('calendarGroup6')" />
                    <span class="check_mark" style="background: #003557; border-color: #003557"></span>
                    <span class="check_text">[구독] 이벤트 모니터링</span>
                  </label>
                </li>
                <li>
                  <label class="label_ckeck">
                    <input type="checkbox" class="event_filter" name="event_filter" data-type="group"
                      id="calendarGroup7" value="calendarGroup7" checked=""
                      @change="handleEventFilter('calendarGroup7')" />
                    <span class="check_mark" style="background: #9065e6; border-color: #9065e6"></span>
                    <span class="check_text">[구독] 마켓 프로모션</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div class="calendar_option">
            <div class="tit">구독하기</div>
            <!-- 구독 전 -->
            <a href="#registerCalendar" class="btnModalOpen option">
              <label class="switch_wrap">
                <strong>프로모션</strong>
                <span class="switch">
                  <input type="checkbox" class="event_filter" name="event_filter" data-type="" id="" value="" />
                  <span class="slider"></span>
                </span>
              </label>
            </a>
            <!-- 구독 후 -->
            <a href="#registerCancel" class="btnModalOpen option">
              <label class="switch_wrap">
                <strong>프로모션</strong>
                <span class="switch">
                  <input type="checkbox" class="event_filter" name="event_filter" data-type="" id="" value=""
                    checked="" />
                  <span class="slider"></span>
                </span>
              </label>
            </a>
          </div>
        </div>

        <a href="javascript:void(0)" class="btnSetup">설정</a>
      </div>

      <!-- calendar_view -->
      <div class="calendar_view">
        <!-- 상단 버튼 영역 -->
        <div class="calendar_search">
          <a href="4_calendar.html" class="btn_back">돌아가기</a>
          <div id="calSearch" class="inputSearch">
            <input type="text" name="" value="" class="inputbox" placeholder="검색" @input="handleSearchMySchedule" />
          </div>
        </div>
        <div class="addSchedule">
          <a href="5_regCalendar.html" class="btn btn_submit">일정 등록하기</a>
        </div>
        <!-- //상단 버튼 영역 -->

        <!-- 달력 -->
        <FullCalendar ref="calendarRef" :options="calendarOptions" id="calendar" />
        <!-- //달력 -->

        <!-- 이벤트 상세보기 레이어 -->
        <calendar-layer-components v-model="eventsInfoIsOpen" :eventsInfo="eventsInfo" />
        <!-- //이벤트 상세보기 레이어 -->
      </div>
      <!-- //calendar_view -->
    </div>
  </div>

  <calendar-event-monitering-components />
</template>

<style scoped></style>
