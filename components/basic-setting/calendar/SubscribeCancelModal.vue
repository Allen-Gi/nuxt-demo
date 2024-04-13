<script setup>
const isOpen = defineModel();
const onCancel = () => {
  console.log("cancel");
  isOpen.value = false;
};

const marginTop = ref("");
watch(isOpen, async (value) => {
  if (value) {
    if (process.client) {
      await nextTick();
      const modalInner = document.querySelector(".modal_inner");
      if (modalInner) {
        marginTop.value = `margin-top: -${modalInner.clientHeight / 2}px`;
      }
    }
  }
});

const onSubmit = () => {
  console.log("submit");
  isOpen.value = false;
};
</script>

<template>
  <section
    v-if="isOpen"
    id="registerCancel"
    class="modal_popup"
    style="display: block"
  >
    <div class="modal_inner" :style="marginTop">
      <h1>프로모션 캘린더 구독 취소</h1>
      <div class="modal_content">
        <p>더이상 아래 내용을 볼 수 없게 돼요. 그래도 구독을 취소하시겠어요?</p>
        <div class="benefit">
          <ul>
            <li>
              <h2>쇼핑몰 프로모션</h2>
              쇼핑몰 관리자를 통해 등록했던 고객 혜택, 쿠폰 및 이벤트의 일정
              정보를 담고 있어요.<br />쇼핑몰에서 진행하는 다양한 프로모션
              일정을 날짜별로 볼 수 있어요.
            </li>
            <li>
              <h2>이벤트 모니터링</h2>
              모니터링 신청이 완료된 쇼핑몰 이벤트의 일정 정보를 담고 있어요.<br />중요한
              이벤트 일정을 놓치지 않고 간편하게 확인할 수 있어요.
            </li>
            <li>
              <h2>마켓 프로모션</h2>
              마켓별로 진행하는 행사, 이벤트, 광고 일정에 대한 정보를 담고
              있어요.<br />요즘 마켓별로 어떤 프로모션을 진행하는지 한눈에 볼 수
              있어요.
            </li>
          </ul>
        </div>
      </div>

      <div class="btn_wrap">
        <ButtonComponents label="유지하기" type="outline" @click="onCancel" />
        <ButtonComponents label="구독 취소하기" @click="onSubmit" />
      </div>
    </div>
  </section>
  <div v-if="isOpen" class="dimed" style="display: block"></div>
</template>

<style lang="scss" scoped></style>
