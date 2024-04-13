<script setup>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import interactionPlugin from "@fullcalendar/interaction";
import koLocale from "@fullcalendar/core/locales/ko";

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
  eventClick: (info) => {
    info.jsEvent.preventDefault();

    const eventInfo = info.event;
    const eventTitle = eventInfo.title;
    const eventStart = conversion(eventInfo.start);
    const eventEnd = conversion(eventInfo.end);
    const eventDesc = eventInfo.extendedProps.description;
    const eventUrl = eventInfo.url;

    const layer = $("#calendarLayer");
    const layerTitle = layer.find("h1");
    const layerCont = layer.find(".cont");
    const layerBtn = layer.find(".btn_wrap a");

    layer.show();
    layerTitle.html(eventTitle);
    layerCont.find("div").remove();
    layerBtn.attr("href", "6_viewCalendar.html"); // 일정 상세 url

    if (eventEnd == null) {
      layerCont.append(`<div class="date">${eventStart}</div>`);
    } else {
      layerCont.append(`<div class="date">${eventStart} ~ ${eventEnd}</div>`);
    }
    if (!eventUrl == "" || !eventUrl == undefined) {
      layerCont.append(
        `<div class="url"><a href="${eventUrl}" target="_blank">${eventUrl}</a></div>`
      );
    }
    if (!eventDesc == "" || !eventDesc == undefined) {
      layerCont.append(`<div class="description">${eventDesc}</div>`);
    }

    function conversion(date) {
      if (!date == "" || !date == undefined) {
        moment.locale("ko");
        return moment(date).format("YYYY-MM-DD hh:mm");
        //return date.toISOString().substring(0,16).replace(/\T/g, ' ');
      } else {
        return null;
      }
    }
  },

  //event filter
  eventClassNames: function (info) {
    var result = true;
    var groups = [];

    $("input[name='event_filter']:checked").each(function () {
      if ($(this).data("type") == "group") {
        groups.push($(this).val());
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

  //event data
  events: [
    // calendarGroup1
    {
      group: "calendarGroup1",
      className: "calendarGroup1",
      title: "할 일 11111",
      start: "2024-04-12",
      end: "2024-04-14",
      color: "#285FF6",

      description: `안녕하세요, 11번가입니다.`,
      url: "http://naver.com",
    },
    {
      group: "calendarGroup1",
      className: "calendarGroup1",
      title: "할 일 2222",
      start: "2024-04-01",
      color: "#285FF6",

      description: `안녕하세요, 11번가입니다.<br><br>2023년 매 최고의 판매 찬스~! 월간 십일절이 5일간 더 새롭게 진행됩니다.<br><br>5일로 늘어난 ‘월간십일절 프로모션’ 은 11번가와 판매자가 최대 매출 달성을 위 매월 고정으로 진행하는 분담 프로모션입니다. <br><br>해당 행사는 판매자 분들이 직 신청하는 프로모션의 연간 최고 거래액을 달성할 수 있도 매월 정기적으로 신청해 주세요.`,
      url: "http://naver.com",
    },
    // calendarGroup2
    {
      group: "calendarGroup2",
      className: "calendarGroup2",
      title: "상품 출고 11111",
      start: "2024-04-11",
      end: "2024-04-16",
      color: "#33AD6E",
    },
    {
      group: "calendarGroup2",
      className: "calendarGroup2",
      title: "상품 출고 2222",
      start: "2024-04-02T16:00:00",
      color: "#33AD6E",
    },
    // calendarGroup3
    {
      group: "calendarGroup3",
      className: "calendarGroup3",
      title: "상품 오픈",
      start: "2024-04-20",
      end: "2024-04-16",
      color: "#F9A580",
    },
    // calendarGroup4
    {
      group: "calendarGroup4",
      className: "calendarGroup4",
      title: "이벤트",
      start: "2024-04-20",
      end: "2024-04-16",
      color: "#EBBF60",
    },
    // calendarGroup5
    {
      group: "calendarGroup5",
      className: "calendarGroup5",
      title: "[구독] 프로모션 프로모션",
      start: "2024-04-25",
      end: "2024-04-30",
      color: "#69D2E2",
    },
    // calendarGroup6
    {
      group: "calendarGroup6",
      className: "calendarGroup6",
      title: "[구독] 이벤트 모니터링 모니터링",
      start: "2024-04-25",
      end: "2024-04-30",
      color: "#003557",
    },
    // calendarGroup7
    {
      group: "calendarGroup7",
      className: "calendarGroup7",
      title: "[구독] 마켓 프로모션 프로모션",
      start: "2024-04-25",
      end: "2024-04-30",
      color: "#9065E6",
    },
  ],
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
  events: [
    // calendarGroup1
    {
      group: "calendarGroup1",
      className: "calendarGroup1",
      title: "할 일 11111",
      start: "2024-04-12",
      end: "2024-04-14",
      color: "#285FF6",

      description: `안녕하세요, 11번가입니다.`,
      url: "http://naver.com",
    },
    {
      group: "calendarGroup1",
      className: "calendarGroup1",
      title: "할 일 2222",
      start: "2024-04-01",
      color: "#285FF6",

      description: `안녕하세요, 11번가입니다.<br><br>2023년 매 최고의 판매 찬스~! 월간 십일절이 5일간 더 새롭게 진행됩니다.<br><br>5일로 늘어난 ‘월간십일절 프로모션’ 은 11번가와 판매자가 최대 매출 달성을 위 매월 고정으로 진행하는 분담 프로모션입니다. <br><br>해당 행사는 판매자 분들이 직 신청하는 프로모션의 연간 최고 거래액을 달성할 수 있도 매월 정기적으로 신청해 주세요.`,
      url: "http://naver.com",
    },
    // calendarGroup2
    {
      group: "calendarGroup2",
      className: "calendarGroup2",
      title: "상품 출고 11111",
      start: "2024-04-11",
      end: "2024-04-16",
      color: "#33AD6E",
    },
    {
      group: "calendarGroup2",
      className: "calendarGroup2",
      title: "상품 출고 2222",
      start: "2024-04-02T16:00:00",
      color: "#33AD6E",
    },
    // calendarGroup3
    {
      group: "calendarGroup3",
      className: "calendarGroup3",
      title: "상품 오픈",
      start: "2024-04-20",
      end: "2024-04-16",
      color: "#F9A580",
    },
    // calendarGroup4
    {
      group: "calendarGroup4",
      className: "calendarGroup4",
      title: "이벤트",
      start: "2024-04-20",
      end: "2024-04-16",
      color: "#EBBF60",
    },
    // calendarGroup5
    {
      group: "calendarGroup5",
      className: "calendarGroup5",
      title: "[구독] 프로모션 프로모션",
      start: "2024-04-25",
      end: "2024-04-30",
      color: "#69D2E2",
    },
    // calendarGroup6
    {
      group: "calendarGroup6",
      className: "calendarGroup6",
      title: "[구독] 이벤트 모니터링 모니터링",
      start: "2024-04-25",
      end: "2024-04-30",
      color: "#003557",
    },
    // calendarGroup7
    {
      group: "calendarGroup7",
      className: "calendarGroup7",
      title: "[구독] 마켓 프로모션 프로모션",
      start: "2024-04-25",
      end: "2024-04-30",
      color: "#9065E6",
    },
  ],
});
</script>

<template>
  <div class="content_wrap">
    <div class="calendar_layout">
      <div class="calendar_left">
        <!-- mini calendar -->
        <FullCalendar
          ref="miniCalendarRef"
          id="miniCalendar"
          :options="miniCalendarOptions"
        />
        <!-- //mini calendar -->

        <div id="calendarFilter">
          <div class="calendar_option">
            <div class="option">
              <label class="switch_wrap">
                <strong>중요 일정만 보기</strong>
                <span class="switch">
                  <input
                    type="checkbox"
                    class="event_filter"
                    name="event_filter"
                    data-type=""
                    id=""
                    value=""
                  />
                  <span class="slider"></span>
                </span>
              </label>
            </div>
            <div class="option">
              <label class="switch_wrap">
                <strong>쇼핑몰 사이트 노출 일정만 보기</strong>
                <span class="switch">
                  <input
                    type="checkbox"
                    class="event_filter"
                    name="event_filter"
                    data-type=""
                    id=""
                    value=""
                  />
                  <span class="slider"></span>
                </span>
              </label>
            </div>
          </div>

          <div class="calendar_option toggleWrap active">
            <!-- 컨텐츠 오픈 시 클래스 active 추가 -->
            <div class="tit">
              <button type="button" class="btnOpen">
                내 일정 <span class="blind">보기</span>
              </button>
            </div>
            <a href="5_regCalendar.html" class="btnAdd"
              ><span class="blind">내 일정 추가</span></a
            >
            <div class="cont toggleCont">
              <ul>
                <li>
                  <label class="label_ckeck">
                    <input
                      type="checkbox"
                      class="event_filter"
                      name="event_filter"
                      data-type="group"
                      id="calendarGroup1"
                      value="calendarGroup1"
                      checked=""
                    />
                    <span
                      class="check_mark"
                      style="background: #285ff6; border-color: #285ff6"
                    ></span>
                    <span class="check_text">할일</span>
                  </label>
                </li>
                <li>
                  <label class="label_ckeck">
                    <input
                      type="checkbox"
                      class="event_filter"
                      name="event_filter"
                      data-type="group"
                      id="calendarGroup2"
                      value="calendarGroup2"
                      checked=""
                    />
                    <span
                      class="check_mark"
                      style="background: #33ad6e; border-color: #33ad6e"
                    ></span>
                    <span class="check_text">상품 출고</span>
                  </label>
                </li>
                <li>
                  <label class="label_ckeck">
                    <input
                      type="checkbox"
                      class="event_filter"
                      name="event_filter"
                      data-type="group"
                      id="calendarGroup3"
                      value="calendarGroup3"
                      checked=""
                    />
                    <span
                      class="check_mark"
                      style="background: #f9a580; border-color: #f9a580"
                    ></span>
                    <span class="check_text">상품 오픈</span>
                  </label>
                </li>
                <li>
                  <label class="label_ckeck">
                    <input
                      type="checkbox"
                      class="event_filter"
                      name="event_filter"
                      data-type="group"
                      id="calendarGroup4"
                      value="calendarGroup4"
                      checked=""
                    />
                    <span
                      class="check_mark"
                      style="background: #ebbf60; border-color: #ebbf60"
                    ></span>
                    <span class="check_text"
                      >이벤트 <span class="only">단독</span></span
                    >
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div class="calendar_option toggleWrap">
            <div class="tit">
              <button type="button" class="btnOpen">
                구독 일정 <span class="blind">보기</span>
              </button>
            </div>
            <div class="cont toggleCont">
              <ul>
                <li>
                  <label class="label_ckeck">
                    <input
                      type="checkbox"
                      class="event_filter"
                      name="event_filter"
                      data-type="group"
                      id="calendarGroup5"
                      value="calendarGroup5"
                      checked=""
                    />
                    <span
                      class="check_mark"
                      style="background: #69d2e2; border-color: #69d2e2"
                    ></span>
                    <span class="check_text">[구독] 쇼핑몰 프로모션</span>
                  </label>
                </li>
                <li>
                  <label class="label_ckeck">
                    <input
                      type="checkbox"
                      class="event_filter"
                      name="event_filter"
                      data-type="group"
                      id="calendarGroup6"
                      value="calendarGroup6"
                      checked=""
                    />
                    <span
                      class="check_mark"
                      style="background: #003557; border-color: #003557"
                    ></span>
                    <span class="check_text">[구독] 이벤트 모니터링</span>
                  </label>
                </li>
                <li>
                  <label class="label_ckeck">
                    <input
                      type="checkbox"
                      class="event_filter"
                      name="event_filter"
                      data-type="group"
                      id="calendarGroup7"
                      value="calendarGroup7"
                      checked=""
                    />
                    <span
                      class="check_mark"
                      style="background: #9065e6; border-color: #9065e6"
                    ></span>
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
                  <input
                    type="checkbox"
                    class="event_filter"
                    name="event_filter"
                    data-type=""
                    id=""
                    value=""
                  />
                  <span class="slider"></span>
                </span>
              </label>
            </a>
            <!-- 구독 후 -->
            <a href="#registerCancel" class="btnModalOpen option">
              <label class="switch_wrap">
                <strong>프로모션</strong>
                <span class="switch">
                  <input
                    type="checkbox"
                    class="event_filter"
                    name="event_filter"
                    data-type=""
                    id=""
                    value=""
                    checked=""
                  />
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
            <input
              type="text"
              name=""
              value=""
              class="inputbox"
              placeholder="검색"
            />
          </div>
        </div>
        <div class="addSchedule">
          <a href="5_regCalendar.html" class="btn btn_submit">일정 등록하기</a>
        </div>
        <!-- //상단 버튼 영역 -->

        <!-- 달력 -->
        <FullCalendar :options="calendarOptions" id="calendar" />
        <!-- //달력 -->

        <!-- 이벤트 상세보기 레이어 -->
        <section id="calendarLayer" class="layer_popup">
          <button @click="closeLayer('calendarLayer')" class="close">
            <span class="blind">닫기</span>
          </button>
          <h1></h1>
          <div class="cont">
            <!-- <div class="date"></div>
              <div class="url"><a href="#url" target="_blank"></a></div>
              <div class="description"></div> -->
          </div>
          <div class="btn_wrap">
            <a href="#url" class="btn btn_line sml">상세보기</a>
          </div>
        </section>
        <!-- //이벤트 상세보기 레이어 -->
      </div>
      <!-- //calendar_view -->
    </div>
  </div>

  <aside class="aside">
    <div class="ico">
      <h1 class="blind">이벤트 모니터링 신청</h1>
    </div>
    <a href="#">이벤트 모니터링 신청</a>
    <p>쇼핑몰 접속장애 예방을 위해 사전에 신청하세요</p>
  </aside>
</template>

<style scoped></style>
