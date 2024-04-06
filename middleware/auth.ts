import {useShopInfo} from "~/composables/shopInfo";

export default defineNuxtRouteMiddleware(async (to) => {
   const shopInfo = useShopInfo()

   const [ data, error] = [ {
       user: {
           id: 1,
           name: 'John Doe',
           email: '123@123.com'
       }
   }, null ]
    //const { data, error } = await useFetch('/api/me')
    if (error)
        throw createError('Failed to fetch data')

    shopInfo.value = data?.user ?? null

    if (!shopInfo.value)
        return navigateTo('/')
})