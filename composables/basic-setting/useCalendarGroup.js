export const useCalendarGroup = () => {

  // 내 일정
  const myCalendarGroup = ref([
    {
      id: 1,
      category: 'MY',
      type: 'MY',
      relation_code: '',
      group_name: '할 일',
      front_group_name: '노출 안 함',
      group_color: '',
      display_front: 'T',
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
      category: 'MY',
      type: 'MY',
      relation_code: '',
      group_name: '상품 출고',
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
      category: 'MY',
      type: 'MY',
      relation_code: '',
      group_name: '이벤트',
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

  // 구독 일정
  const subscribedCalendarGroup = ref([
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

  const fetchCalendarGroup = async () => {
    const { error, data } = await useApiFetch('/api/calendar-group')

    if (error.value) throw createError('Failed to fetch data')

    myCalendarGroup.value = data.value?.data
  }

  const fetchSubscribedCalendarGroup = async () => {
    const { error, data } = await useApiFetch('/api/subscription')

    if (error.value) throw createError('Failed to fetch data')

    subscribedCalendarGroup.value = data.value?.data
  }

  // 순서 변경
  const updateCalendarGroupSort = async (data) => {
    const { error, status, clear, execute, pending, refresh } = await useApiFetch(
      '/api/calendar-group/sort',
      {
        method: 'PUT',
        data,
      },
    )

    if (error.value) throw createError('Failed to fetch data')
  }

  const updateSubscribedCalendarGroupSort = async (data) => {
    const { error, status, clear, execute, pending, refresh } = await useApiFetch(
      '/api/subscription/sort',
      {
        method: 'PUT',
        data,
        server: true,
      },
    )

    if (error.value) throw createError('Failed to fetch data')
  }

  // 구독
  const subscribe = async (data) => {
    const { error, status, clear, execute, pending, refresh } = await useApiFetch(
      '/api/subscription',
      {
        method: 'POST',
        data,
      },
    )

    if (error.value) throw createError('Failed to fetch data')
  }

  // 구독 취소
  const cancelSubscription = async (data) => {
    const { error, status, clear, execute, pending, refresh } = await useApiFetch(
      '/api/subscription',
      {
        method: 'DELETE',
        data,
      },
    )

    if (error.value) throw createError('Failed to fetch data')
  }


  return {
    myCalendarGroup,
    subscribedCalendarGroup,
    fetchCalendarGroup,
    fetchSubscribedCalendarGroup,
    updateCalendarGroupSort,
    updateSubscribedCalendarGroupSort
  }
}