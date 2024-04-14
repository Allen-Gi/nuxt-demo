
export const useCalendar = () => {

    // 내 일정
    const myGroup = ref([
        { group: "calendarGroup1", title: "할 일", color: "#285FF6", checked: true, important: true, isShoppingMall: true},
        { group: "calendarGroup2", title: "상품 출고", color: "#33AD6E", checked: true,important: false,isShoppingMall: true },
        { group: "calendarGroup3", title: "상품 오픈", color: "#F9A580", checked: true,important: true,isShoppingMall: false },
        { group: "calendarGroup4", title: "이벤트", color: "#EBBF60" , checked: true,important: true,isShoppingMall: false},
    ])

    // 구독 일정
    const subscriptionGroup = ref([
        { group: "calendarGroup5", title: "[구독] 프로모션", color: "#69D2E2", checked: true,important: true,isShoppingMall: false },
        { group: "calendarGroup6", title: "[구독] 이벤트 모니터링", color: "#003557", checked: true,important: true,isShoppingMall: false },
        { group: "calendarGroup7", title: "[구독] 마켓 프로모션", color: "#9065E6", checked: true,important: true,isShoppingMall: false },
    ])

    const allSchedule = ref([...myGroup.value, ...subscriptionGroup.value])

    // 중요일정만 보기 체크박스
    const importantEvents = ref(false)

    // 쇼핑몰 사이트 노출 일정만 보기
    const shoppingMallEvents = ref(false)

    // promotionEvents
    const usePromotionEvents = ref(false)

    // event data
    const data = ref([
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
      ]);

    // 필터링된 이벤트
    const filteredEvents = ref(data.value)

    /**
     * 중요일정만 보기
     * @param {} group 
     */
    const filterImportantEvents = (important = false) => {
        filteredEvents.value = important ? data.value.filter(event => allSchedule.value.find(group => group.group === event.group).important) : data.value
    }

    /**
     * 쇼핑몰 사이트 노출 일정만 보기
     * @param {} group 
     */
    const filterShoppingMallEvents = (isShow = false) => {
        filteredEvents.value = isShow ? data.value.filter(event => allSchedule.value.find(group => group.group === event.group).isShoppingMall) : data.value
    }

    /**
     * 내 일정만 보기
     * @param {} group 
     */
    const filterMyGroup = () => {
        filteredEvents.value = allSchedule.value.filter(group => group.checked).map(group => data.value.filter(event => event.group === group.group)).flat()
    }

    /**
     * 검색
     */
    const searchMySchedule = (searchText) => {
        filteredEvents.value = data.value.filter(event => event.title.includes(searchText))
    }

    return {
        filterMyGroup,
        filteredEvents,
        filterImportantEvents,
        filterShoppingMallEvents,
        searchMySchedule,
    }
}