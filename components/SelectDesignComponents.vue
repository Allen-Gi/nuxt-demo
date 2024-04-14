<script setup lang="ts">
  const select = defineModel({
    key: 'select',
    type: Array,
    default: [],
  })

  const { name, options, placeholder } = defineProps({
    name: {
      type: String,
      default: 'checkbox1',
    },
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: '',
    },
  })

  const isOpen = ref(false)
</script>

<template>
  <client-only>
    <div
      class="SumoSelect"
      :class="{ open: isOpen }"
      tabindex="0"
      role="button"
      is-selected="true"
      @contextlost="isOpen != isOpen"
    >
      <select
        v-model="select"
        :name="name"
        multiple="multiple"
        :placeholder="placeholder"
        class="multiple_type2 SumoUnder"
        tabindex="-1"
      >
        <option
          v-for="(option, key) in options"
          :key="key"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <p
        class="CaptionCont SelectBox multiple_type2"
        :title="
          options
            .filter((item) => !!item.checked)
            .map((item) => item.label)
            .join(', ')
        "
        @click="isOpen = !isOpen"
        @auxclick="isOpen = !isOpen"
      >
        <span>
          {{
            options
              .filter((item) => !!item.checked)
              .map((item) => item.label)
              .join(', ')
          }}</span
        ><label><i /></label>
      </p>
      <div class="optWrapper okCancelInMulti multiple">
        <ul class="options">
          <li
            v-for="(option, key) in options"
            :key="key"
            class="opt"
            :class="{ selected: option.checked }"
            @click="option.checked = !option.checked"
          >
            <span><i /></span><label>{{ option.label }}</label>
          </li>
        </ul>
        <div class="MultiControls">
          <p tabindex="0" class="btnOk">추가</p>
          <p tabindex="0" class="btnCancel">취소</p>
        </div>
      </div>
    </div>
  </client-only>
</template>

<style scoped></style>
