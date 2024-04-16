import { $fetch } from 'ofetch'

export default defineEventHandler(async (event) => {
  const path = getRouterParam(event, 'path')
  const query = getQuery(event)

  const token = getHeader(event, 'token')
  const config = useRuntimeConfig(event)

  const res = await $fetch(path, {
    baseURL: config.public.baseURL,

    headers: {
      token: token ?? '',
    },
    query,
    ...interceptors,
  })

  return {
    ...res,
  }
})
