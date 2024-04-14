import { useApiFetch } from '~/composables/useApiFetch.js'

export const getUsers = async () => {
  const { data, error } = await useApiFetch('/api/users')
  if (error.value) throw createError('Failed to fetch users data')

  return { users: data.value }
}

export const getUser = async (userId) => {
  const { data, error } = await useApiFetch(`/api/users/${userId}`)
  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch product id ${userId}.`,
    })
  }

  return { user: data.value }
}

export const getCalendar = async () => {
  const { data, error } = await useApiFetch('/api/calendar', {
    method: 'GET',
  })

  return { user: data.value }
}

export const useUsers = () => {
  return {
    getUsers,
    getUser,
    getCalendar,
  }
}
