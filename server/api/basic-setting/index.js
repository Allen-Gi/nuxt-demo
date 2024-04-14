import { $fetch } from 'ofetch'
import { configureSWRHeaders } from '~/server/utils/swr.js'
import { interceptors } from '~/server/utils/interceptors.js'

async function fetchBasicSetting(event) {
  const token = getHeader(event, 'token')
  const config = useRuntimeConfig(event)

  const res = await $fetch('/basic-setting', {
    baseURL: config.public.baseURL,
    headers: {
      token: token ?? '',
    },
    ...interceptors,
  })
  return res
}

export default defineEventHandler(async (event) => {
  configureSWRHeaders(event)

  const list = await fetchBasicSetting(event)

  return {
    ...list,
  }
})
