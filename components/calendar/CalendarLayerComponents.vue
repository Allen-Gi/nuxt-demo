<script setup>
const eventsInfoIsOpen = defineModel();
const eventsInfo = defineModel("eventsInfo", {
  type: Object,
  default: () => ({}),
});

const state = reactive({
  title: '',
  start: '',
  startStr: '',
  end: '',
  endStr: '',
  backgroundColor: '',
  allDay: false,
  description: '',
  url: '',
});

watch(eventsInfo, (event) => {
  state.title = event.title ?? '';
  state.start = conversion(event.start) ?? '';
  state.startStr = conversion(event.startStr) ?? '';
  state.end = conversion(event.end) ?? '';
  state.endStr = conversion(event.endStr) ?? '';
  state.backgroundColor = event.backgroundColor ?? '';
  state.allDay = event.allDay ?? false;
  state.description = event.description ?? '';
  state.url = event.url ?? '';
});

const dateStr = computed(() => {
  if (state.end) {
    return `${state.start} ~ ${state.end}`;
  }
  return state.start;
});

const closeLayer = () => {
  eventsInfoIsOpen.value = false;
}

function conversion(date) {
  moment.locale("ko");
  return date ? moment(date).format("YYYY-MM-DD hh:mm") : null;
}
</script>

<template>
  <section v-if="eventsInfoIsOpen" id="layerCalendarEvent" class="layer_popup" style="display: block;">
    <button @click="closeLayer()" class="close">
      <span class="blind">닫기</span>
    </button>
    <h1>{{ state.title }}</h1>
    <div class="cont">
      <div class="date">{{ dateStr }}</div>
      <div v-if="state.url" class="url"><a :href="state.url" target="_blank">{{ state.url }}</a></div>
      <div v-if="state.description" class="description">{{ state.description }}</div>
    </div>
    <div class="btn_wrap">
      <a href="#" class="btn btn_line sml">상세보기</a>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>