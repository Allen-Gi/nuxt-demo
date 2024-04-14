import { $fetch } from 'ofetch'
import { configureSWRHeaders } from '~/server/utils/swr.js'

export let users

async function fetchUsers() {
  users = await $fetch('https://jsonplaceholder.typicode.com/users')
  return users
}

export default defineEventHandler(async (event) => {
  configureSWRHeaders(event)
  await fetchUsers()
  if (!users) {
    throw new Error('Failed to fetch users data')
  }
  return {
    ...users,
  }
})
