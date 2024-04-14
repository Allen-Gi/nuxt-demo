import { $fetch } from 'ofetch'
import { configureSWRHeaders } from '~/server/utils/swr.js'

export let user

async function fetchUser(id, event) {
  const token = getHeader(event, 'token')
  const config = useRuntimeConfig(event)

  user = await $fetch('https://jsonplaceholder.typicode.com/users/' + id, {
    baseURL: config.public.baseURL,
    headers: {
      token: token ?? '',
    },
  })
  return user
}

export default defineEventHandler(async (event) => {
  configureSWRHeaders(event)

  await fetchUser(getRouterParam(event, 'id'), event)

  return {
    ...user,
  }
})
