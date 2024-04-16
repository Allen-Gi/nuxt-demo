<script setup>
  const props = defineProps({
    error: {
      type: Object,
      default(/* rawProps */) {
        return {
          url: '-',
          statusCode: 404,
          statusMessage: 'Not Found',
          message: '(404 Not Found)',
          stack: '',
          data: '{"error":"FetchError:  (404 Not Found)"}',
        }
      },
    },
  })

  const message = computed(() => String(props.error?.message || ''))
  const is404 = computed(
    () => props.error?.statusCode === 404 || message.value?.includes('404'),
  )
  const isDev = import.meta.dev

  function handleError() {
    return clearError({ redirect: '/' })
  }
</script>

<template>
  <NuxtLoadingIndicator />

  <div
    style="
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      margin-top: 3rem;
      margin-bottom: 3rem;
      text-align: center;
    "
  >
    <div style="font-size: 1.875rem; line-height: 2.25rem">
      {{ is404 ? '페이지를 찾을수 없습니다' : 'Error' }}
    </div>
    <table v-if="isDev" class="error-container">
      <tr v-for="(e, key) of error" :key="key">
        <td>{{ key }}</td>
        <td>
          <div v-html="e"></div>
        </td>
      </tr>
    </table>
    <button
      style="
        background-color: gray;
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 6px;
        padding-bottom: 6px;
        font-size: 0.875rem !important;
        line-height: 1.25rem !important;
        font-weight: 500 !important;
        line-height: 1.25rem;
        letter-spacing: 0.0178571429em !important;
        text-transform: none !important;
        border-radius: 0.5rem !important;
      "
      @click="handleError"
    >
      &lt; 돌아가기
    </button>
  </div>
</template>

<style scoped>
  .error-container {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin-top: 1rem;
  }

  .error-container td {
    padding: 0.5rem;
    border-bottom: 1px solid #e0e0e0;
  }

  .error-container td:first-child {
    text-align: right;
    font-weight: 500;
    color: #333;
  }

  .error-container td:last-child {
    text-align: left;
    font-weight: 400;
    color: #666;
  }

  .error-container tr:last-child td {
    border-bottom: none;
  }
</style>
