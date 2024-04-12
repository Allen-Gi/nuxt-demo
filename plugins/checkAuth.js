import { useAuthStore } from "~/stores/authStore";

export default defineNuxtPlugin(async () => {
  const auth = useAuthStore();

  if (!auth.isAuth.value) {
    await auth.getAuth();
  }
});
