import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const getCount = computed(() => count.value)

  // 2. Actions (functions)
  const increment = () => (count.value += 1)
  const decrement = () => (count.value -= 1)

  return {
    count,
    getCount,
    increment,
    decrement,
  }
})
