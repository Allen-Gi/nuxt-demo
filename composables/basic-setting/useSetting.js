// This is a basic setting composable
export const getDefaultSetting = async () => {
  const { data, error, status, clear, execute, pending, refresh } =
    await useApiFetch('/api/basic-setting', {
      method: 'GET',
    })

  if (import.meta.client && error?.value) {
    alert('Failed to fetch data')
    return false
  }

  return {
    data,
    status,
    clear,
    execute,
    pending,
    refresh,
    error,
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

export const updateDefaultSetting = async (data) => {
  const { error, status, clear, execute, pending, refresh } = await useApiFetch(
    '/api/basic-setting',
    {
      method: 'PUT',
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

export const useSetting = () => {
  return {
    getDefaultSetting,
    createDefaultSetting,
    updateDefaultSetting,
  }
}
