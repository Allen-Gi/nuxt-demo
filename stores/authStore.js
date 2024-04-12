import { useApiFetch } from "~/composables/useApiFetch";

export const useAuthStore = defineStore("AuthStore", () => {
  const isAuth = ref(false);

  async function getAuth() {
    const { data, error, status } = await useApiFetch("/api/auth", {
      method: "GET",
    });

    if (process.client && error.value) {
      console.log(error.value);
      alert("Failed to fetch data");
      return false;
    }
    isAuth.value = status === 200 && data?.isAuth;
  }

  return {
    isAuth,
    getAuth,
  };
});
