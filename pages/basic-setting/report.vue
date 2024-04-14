<script setup lang="ts">
  const form = ref({
    reportUse: 'Y',
    sendTime: '오전 8시',
    groups: ['전체'],
  })

  const [includesGroupIsOpen, includesGroupIsOpenToggle] = useToggle()
  const includesGroupOptions = ['전체', '상품', '할일']
  const handleSetIncludesGroup = (group) => {
    if (form.value.groups.includes(group)) {
      form.value.groups = form.value.groups.filter((item) => item !== group)
    } else {
      form.value.groups.push(group)
    }
    includesGroupIsOpen.value = true
  }
  const dropzone = ref(null)
  const handleOutsideClick = (event: { target: any }) => {
    if (
      includesGroupIsOpen.value === true &&
      dropzone.value &&
      !dropzone.value.contains(event.target)
    ) {
      includesGroupIsOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleOutsideClick)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick)
  })
</script>

<template>
  <basic-setting-layout>
    <div class="setup_content">
      <p class="comment">
        데일리 리포트는 오늘 일정에 대한 요약 정보를 메시지로 간편하게 받아볼 수
        있는 기능을 말해요.<br />이곳에서 리포트 수신에 대한 설정을 변경할 수
        있어요.
      </p>

      <div class="section first">
        <dl class="cell">
          <dt>사용 여부</dt>
          <dd>
            <radio-components
              v-model="form.reportUse"
              :options="[
                { label: '사용함', value: 'Y' },
                { label: '사용안함', value: 'N' },
              ]"
            />

            <div id="usable" class="radio_cont">
              카카오알림톡 발송 후 실패 시 SMS 발송<br />
              <p class="txt_sub">
                SMS 발송 가능 건수가 자동으로 차감됩니다.<br />
                리포트는
                <a href="#" class="btn_link" target="_blank"
                  >[메시지 사용 설정]</a
                >에서 설정한 방법으로 발송됩니다.
              </p>

              <div class="caution">
                <strong>발송 가능한 SMS 잔여건 수가 부족해요.</strong>
                SMS 잔여건 수가 부족할 시 데일리 리포트가 발송되지 않습니다.<br />
                충전 후 사용해 주세요.
                <a href="#" class="btn_link">충전하러 가기</a>
              </div>
            </div>
          </dd>
        </dl>
        <dl class="cell slt">
          <dt style="display: flex; align-items: center">
            발송 시간
            <help-components name="layerSendTime">
              <li>하루에 표시될 일정의 최대 개수를 설정할 수 있어요.</li>
            </help-components>
          </dt>
          <dd>
            <span class="select_text">매일</span>
            <select-components
              v-model="form.sendTime"
              :options="[{ label: '오전 8시', value: '오전 8시' }]"
            />
          </dd>
        </dl>
        <dl class="cell">
          <dt style="display: flex; align-items: center">
            포함 그룹
            <help-components name="layerGroup">
              <li>하루에 표시될 일정의 최대 개수를 설정할 수 있어요.</li>
            </help-components>
          </dt>
          <dd>
            <div
              ref="dropzone"
              class="SumoSelect"
              tabindex="0"
              role="button"
              aria-expanded="false"
              selected-count="1"
              is-selected="true"
            >
              <select
                v-model="form.groups"
                multiple="multiple"
                placeholder="선택하세요"
                class="multiple SumoUnder"
                tabindex="-1"
              >
                <option v-for="(group, key) in includesGroupOptions" :key="key">
                  {{ group }}
                </option>
              </select>
              <p
                class="CaptionCont SelectBox multiple"
                :title="form.groups.join(', ')"
                @click="includesGroupIsOpenToggle()"
              >
                <span>{{ form.groups.join(', ') }}</span>
                <label>
                  <i />
                </label>
              </p>
              <div
                v-if="includesGroupIsOpen"
                class="optWrapper multiple"
                style="display: block"
              >
                <ul class="options">
                  <li
                    v-for="(group, key) in includesGroupOptions"
                    :key="key"
                    class="opt"
                    :class="{ selected: form.groups.includes(group) }"
                    @click="handleSetIncludesGroup(group)"
                  >
                    <span><i /></span><label>{{ group }}</label>
                  </li>
                </ul>
                <div class="MultiControls">
                  <p tabindex="0" class="btnOk">OK</p>
                  <p tabindex="0" class="btnCancel">Cancel</p>
                </div>
              </div>
            </div>
          </dd>
        </dl>
      </div>

      <div class="btn_wrap">
        <a href="#" class="btn btn_submit">저장</a>
      </div>
    </div>
    <template #preview>
      <aside class="aside">
        <h1>데일리 리포트 예시</h1>
        <div class="imgbox">
          <img src="/static/img/msg_kakao.png" alt="" />
        </div>
      </aside>
    </template>
  </basic-setting-layout>
</template>

<style scoped></style>
