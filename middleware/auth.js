import {useShopInfoStore} from "~/stores/shopInfo.js";

export default defineNuxtRouteMiddleware(async (to) => {
   const { getShopInfo } = useShopInfoStore()
    await getShopInfo()
})