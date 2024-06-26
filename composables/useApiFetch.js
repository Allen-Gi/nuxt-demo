import { interceptors } from '~/utils/interceptors'

export function useApiFetch(url, options) {
  let headers = {}

  const token = useCookie('token')
  if (token.value) {
    headers.token = token.value
  }

  if (import.meta.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(),
    }
  }

  return useFetch(url, {
    watch: false,
    //server: true,
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
    ...interceptors,
  })
}
