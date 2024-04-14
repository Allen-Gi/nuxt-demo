<script setup lang="ts">
  definePageMeta({
    middleware: 'auth',
  })
  defineI18nRoute(false)

  const checkbox = ref(false)

  const radio = ref('radio1')
  const switchToggle = ref(true)

  const inputField = ref('')
  const searchField = ref('')

  const selectField = ref('')
  const selectOptions = ref([
    { value: 'option1', label: '옵션1' },
    { value: 'option2', label: '옵션2' },
    { value: 'option3', label: '옵션3' },
  ])

  const multiSelectField = ref([])
  const multiSelectOptions = ref([
    { value: 'option1', label: '캘린더1' },
    { value: 'option2', label: '캘린더2' },
    { value: 'option3', label: '캘린더3' },
  ])

  const layerPopup = ref(false)

  onUpdated(() => {
    console.log(checkbox.value)
    console.log(radio.value)
  })
</script>

<template>
  <div
    style="
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    "
  >
    <checkbox-components
      v-model="checkbox"
      label="체크박스1"
      name="checkbox1"
    />

    <radio-components
      v-model="radio"
      :options="[
        { label: '옵션1', value: 'radio1' },
        { label: '옵션2', value: 'radio2' },
        { label: '옵션3', value: 'radio3' },
      ]"
      name="radio1"
    />

    <switch-components
      v-model="switchToggle"
      label="중요 일정만 보기"
      name="switch1"
    />

    <input-components
      v-model="inputField"
      name="input1"
      placeholder="입력해주세요"
    />

    <search-components v-model="searchField" name="search" />

    <select-components
      v-model="selectField"
      :options="selectOptions"
      name="select1"
    />

    <select-design-components
      v-model="multiSelectField"
      :options="multiSelectOptions"
      name="select2"
      placeholder="부운영자 검색"
    />
    <button-components label="저장" type="default" />

    <button @click="layerPopup = true">도움말 열기</button>
    <div style="position: relative">
      <layer-popup-components v-model="layerPopup">
        <ul class="list_hyp">
          <li>
            쇼핑몰에 표시될 일정에 ‘알림받기' 버튼의 노출 여부를 설정할 수
            있어요.<br />쇼핑몰에 표시될 일정에 ‘알림받기' 버튼의 노출 여부를
            설정할 수 있어요.
          </li>
        </ul>
      </layer-popup-components>
    </div>
  </div>
</template>

<style scoped></style>
