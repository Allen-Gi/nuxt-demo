<script setup>
const layerPopup = defineModel();

const closeLayer = (layerId) => {
  layerPopup.value = false;
};
</script>

<template>
  <section class="layer_popup" v-show="layerPopup">
    <button @click="closeLayer" class="close">
      <span class="blind">닫기</span>
    </button>
    <h1>도움말</h1>
    <slot>
      <ul class="list_hyp">
        <li>
          쇼핑몰에 표시될 일정에 ‘알림받기' 버튼의 노출 여부를 설정할 수
          있어요.<br />쇼핑몰에 표시될 일정에 ‘알림받기' 버튼의 노출 여부를
          설정할 수 있어요.
        </li>
        <li>
          ‘알림받기' 버튼은 구매자들이 일정에 대한 알림을 받아볼 수 있는
          기능이에요.
        </li>
        <li>
          단, ‘알림받기' 버튼을 통해 발송되는 알림톡은 SMS 발송 건수에서
          차감되는 방식이에요.
        </li>
      </ul>
    </slot>
  </section>
</template>
