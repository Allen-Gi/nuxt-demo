import { useApiFetch } from '~/composables/useApiFetch'
export const useAuthStore = defineStore('AuthStore', () => {
  const auth = useCookie('token')
  const isAuth = ref(false)
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6ImtleUlkIn0.eyJpc3MiOiJDYWZlMjQgQ2FsZW5kYXJSZXBvc2l0b3J5IGRldiIsImF1ZCI6Im1hbGwiLCJzdWIiOiJ0b2tlbiIsImp0aSI6InRlc3RpZDIwMjMiLCJpYXQiOjE3MTE3NjYyOTIsIm5iZiI6MTcxMTc2NjIzMiwiZXhwIjoxNzQ3NzYyNjkyLCJpbmZvIjp7Im1hbGxfaWQiOiJ0ZXN0aWQyMDIzIiwic2hvcF9ubyI6MSwidXNlcl9pZCI6InRlc3RpZDIwMjMifX0.I6q12k-WEpcZChufRxnxwGmpWefQhQSjd92M91BaRJBNh0iXWuO-IFrZoeyCCrpnSNkQ9JMhwGw1JG8U4NQbFQ"
  async function getAuth() {
    // const { data, error, status } = await useApiFetch('/api/auth', {
    //   method: 'GET',
    // })

    // if (import.meta.client && error.value) {
    //   console.log(error.value)
    //   alert('Failed to fetch data')
    //   return false
    // }
    // token set to cookie
    //setCookie('token', token, 1)
    auth.value = token
    isAuth.value = true
    //isAuth.value = status === 200 && data?.isAuth
  }

  return {
    isAuth,
    getAuth,
  }
})
