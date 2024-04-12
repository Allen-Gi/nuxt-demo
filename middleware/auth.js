import { useShopInfoStore } from "~/stores/shopInfoStore.js";

export default defineNuxtRouteMiddleware(async (to) => {
  const { getShopInfo } = useShopInfoStore();
  await getShopInfo();
  console.log("client middleware");
});
