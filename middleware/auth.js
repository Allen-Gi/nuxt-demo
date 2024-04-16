import { useShopInfoStore } from '~/stores/shopInfoStore.js'

export default defineNuxtRouteMiddleware(async (to) => {
  const { getShopInfo } = useShopInfoStore()
  await getShopInfo()

  // auth middleware
  const token = to.req.headers.token
  if (!token) {
    navigateTo('/login')
  }
})
