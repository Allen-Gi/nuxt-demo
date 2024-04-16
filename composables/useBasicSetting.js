import { server } from "typescript"

// This is a basic setting composable
export const fetchBasicSetting = async () => {

  const settingInfo = ref({
    start_calendar: 'M', // 기본화면 - M월, W주, D일
    start_week: 'M', // 한주의시작 - S일요일, M월요일
    use_secondary_calendar: 'T', // 보조캘린더 사용여부 - T, F
    display_limit: '5', // 하루표시일정 - 0,5,10
  
    use_front: 'T', // 쇼핑몰 화면 사용여부 - T, F
    front_use_permission: 'T', // 쇼핑몰 접근 권한 사용여부 - T, F
    front_permission: [], // 쇼핑몰 접근 권한 - a,b,c
    front_start_calendar: 'M', // 쇼핑몰 기본화면 - M월 W주 D일
    front_start_week: 'S', // 쇼핑몰 한주의시작 - S일요일 M월요일
    use_daily_reporter: 'T', // 데일리 리포트 사용여부 - T,F
    daily_reporter_send_hour: '8', // 데일리 리포트 발송 시간 - 8,10,13
    daily_reporter_send_group: '1,2,3', // 데일리 리포트 포함 캘린더 - 1,2,3
    update_user_id: '',
    insert_datetime: '',
    update_datetime: '',
  })


  const getSettingInfo = async () => {
    const { data, error } = await useApiFetch('/api/basic-setting', {
      method: 'GET',
      query: {},
    })

    if (import.meta.client && error.value) {
      alert('Failed to fetch Basic Setting Data')
      return false
    }

    settingInfo.value = {...settingInfo.value, ...data.value?.data}
  }

  return {
    settingInfo,
    getSettingInfo
  }
}

export const createDefaultSetting = async (data) => {
  const { error, status, clear, execute, pending, refresh } = await useApiFetch(
    '/api/basic-setting',
    {
      method: 'POST',
      data,
    },
  )

  if (error.value) throw createError('Failed to fetch data')

  return {
    status,
    clear,
    execute,
    pending,
    refresh,
  }
}

export const updateDefaultSetting = async (settingInfo) => {
  const form = {
    start_calendar: settingInfo.start_calendar,
    start_week: settingInfo.start_week,
    use_secondary_calendar: settingInfo.use_secondary_calendar,
    display_limit: settingInfo.display_limit,
  
    use_front: settingInfo.use_front,
    front_permission: settingInfo.front_permission,
    front_start_calendar: settingInfo.front_start_calendar,
    front_start_week: settingInfo.front_start_week,
    use_daily_reporter: settingInfo.use_daily_reporter,
    daily_reporter_send_hour: settingInfo.daily_reporter_send_hour,
    daily_reporter_send_group: settingInfo.daily_reporter_send_group,
  }
  
  const { error, status, clear, execute, pending, refresh } = await useApiFetch(
    '/api/basic-setting',
    {
      method: 'PUT',
      body: form,
    },
  )

  if (error.value) throw createError('Failed to fetch data')

  return {
    status,
    clear,
    execute,
    pending,
    refresh,
  }
}

export const useBasicSetting = () => {
  return {
    fetchBasicSetting,
    createDefaultSetting,
    updateDefaultSetting,
  }
}
