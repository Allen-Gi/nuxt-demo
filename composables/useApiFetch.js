import { interceptors } from '~/utils/interceptors'

export function useApiFetch(url, options) {
  let headers = {}

  // const token = useCookie(token);
  const token = ref('token')
  if (token.value) {
    headers.token = token
  }

  if (import.meta.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(),
    }
  }

  return useFetch(url, {
    watch: false,
    server: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
    ...interceptors,
  })
}
