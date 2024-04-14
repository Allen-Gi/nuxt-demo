<script setup>
  import { useToggle, useClipboard } from '@vueuse/core'

  const source = ref(
    '&lt;iframe src="http://naver.me/xOIRAoIfaaaaaaaaaaaaaaaaaaaaaaaaaa" width="800"  height="600"  frameborder="0"&gt;&lt;/iframe&gt;',
  )
  const { copy, isSupported } = useClipboard({ source })

  const isOpen = defineModel()
  await nextTick()
  const marginTop = ref('')
  const state = ref({
    color_select: '#1A54F5',
    category_select: ['전체'],
    showSite: 'T',
  })

  /**
   * 색상 선택
   */
  const [colorPikerIsOpen, colorPikerIsOpenToggle] = useToggle()
  const colorOptions = [
    '#1A54F5',
    '#AD1357',
    '#F4511E',
    '#E4C442',
    '#0A8043',
    '#4050B5',
    '#8E24AA',
    '#D81B60',
    '#EF6C00',
    '#C0CA33',
    '#009688',
    '#7886CB',
    '#795648',
    '#D50101',
    '#F09300',
    '#7CB342',
    '#049BE5',
    '#B39DDB',
    '#616161',
    '#E67C73',
    '#F6BF25',
    '#33B679',
    '#9E69AF',
    '#A79B8E',
  ]
  const handleSetColor = (color) => {
    state.value.color_select = color
  }

  /**
   * 적용분류 선택
   */
  const [categorySelectIsOpen, categorySelectIsOpenToggle] = useToggle()
  const categoryOptions = [
    '전체',
    '고객혜택',
    '쿠폰',
    '시리얼 쿠폰',
    '할인코드',
  ]
  const handleSetCategory = (category) => {
    if (state.value.category_select.includes(category)) {
      state.value.category_select = state.value.category_select.filter(
        (item) => item !== category,
      )
    } else {
      state.value.category_select.push(category)
    }
    categorySelectIsOpen.value = true
  }
  const dropzone = ref(null)
  const handleOutsideClick = (event) => {
    if (
      categorySelectIsOpen.value === true &&
      dropzone.value &&
      !dropzone.value.contains(event.target)
    ) {
      categorySelectIsOpen.value = false
    }
  }

  /**
   * 이 그룹한 단독 캘린더로 쇼핑몰에 보여주고 싶으신가요?
   */
  watch(isOpen, async (value) => {
    if (value) {
      if (import.meta.client) {
        await nextTick()
        const modalInner = document.querySelector('.modal_inner')
        if (modalInner) {
          marginTop.value = `margin-top: -${modalInner.clientHeight / 2}px`
        }
      }
    }
  })

  const [showOtherIsOpen, showOtherIsOpenToggle] = useToggle()

  const handleClose = () => {
    isOpen.value = false
  }

  const handleSave = () => {
    console.log('저장')
  }

  const alertIsOpen = ref(false)
  const alertTitle = ref('복사되었습니다.')
  const handleCopy = () => {
    if (!isSupported.value) {
      alertTitle.value = '복사가 지원되지 않는 브라우저입니다.'
    }

    copy()
    alertIsOpen.value = true

    setTimeout(() => {
      alertIsOpen.value = false
    }, 2000)
  }

  onMounted(() => {
    document.addEventListener('click', handleOutsideClick)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick)
  })
</script>

<template>
  <section
    v-if="isOpen"
    id="addGroup"
    class="modal_popup"
    style="display: block"
  >
    <div class="modal_inner" :style="marginTop">
      <h1>그룹 추가</h1>
      <div class="modal_content">
        <!-- 공통 설정 -->
        <div class="section">
          <dl class="cell slt">
            <dt><em>캘린더명 및 색상</em></dt>
            <dd>
              <div class="split">
                <div class="inputbox_wrap">
                  <input-components
                    type="text"
                    placeholder="그룹명"
                    style="width: 100%"
                  />
                  <span class="byte">50/50</span>
                </div>
                <div class="color_select">
                  <div
                    class="SumoSelect"
                    tabindex="0"
                    role="button"
                    aria-expanded="false"
                    selected-count="1"
                    is-selected="true"
                    @click="colorPikerIsOpenToggle()"
                  >
                    <select
                      v-model="state.color_select"
                      class="multiple SumoUnder"
                      tabindex="-1"
                    >
                      <option
                        v-for="(color, key) in colorOptions"
                        :key="key"
                        :value="color"
                      >
                        {{ color }}
                      </option>
                    </select>
                    <p class="CaptionCont SelectBox multiple" title=" #1A54F5">
                      <span :style="{ backgroundColor: state.color_select }">
                        {{ state.color_select }} </span
                      ><label><i /></label>
                    </p>
                    <div
                      v-if="colorPikerIsOpen"
                      class="optWrapper"
                      style="display: block"
                    >
                      <ul class="options">
                        <li
                          v-for="(color, key) in colorOptions"
                          :key="key"
                          class="opt"
                          :class="{ selected: color === state.color_select }"
                          @click="handleSetColor(color)"
                        >
                          <label :style="{ backgroundColor: color }">{{
                            color
                          }}</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="split">
                <label class="label_ckeck"
                  ><input type="checkbox" name="" value="" checked="" />
                  <span class="check_mark" />
                  <span class="check_text"
                    >쇼핑몰 사이트 노출 그룹명 별도 입력</span
                  >
                </label>
                <div class="inputbox_wrap">
                  <input
                    type="text"
                    name=""
                    value=""
                    class="inputbox"
                    placeholder="그룹명"
                    style="width: 100%"
                  />
                  <span class="byte">50/50</span>
                </div>
              </div>
            </dd>
          </dl>
          <dl class="cell">
            <dt>
              <div class="split left">
                <em>쇼핑몰 사이트 노출여부</em>
                <help-components>
                  <li>하루에 표시될 일정의 최대 개수를 설정할 수 있어요.</li>
                  <li>내용들어가는 곳 내용들어가는 곳 내용들어가는 곳</li>
                </help-components>
              </div>
            </dt>
            <dd>
              <radio-components
                v-model="state.showSite"
                :options="[
                  { label: '노출함', value: 'T' },
                  { label: '노출하지 않음', value: 'F' },
                ]"
              />
              <div v-if="state.showSite === 'T'" class="radio_cont">
                <div class="split left">
                  <label class="label_ckeck"
                    ><input type="checkbox" name="" value="" checked="" />
                    <span class="check_mark" />
                    <span class="check_text"
                      >고객용 ‘알림받기' 버튼 활성화</span
                    >
                  </label>
                  <help-components>
                    <li>하루에 표시될 일정의 최대 개수를 설정할 수 있어요.</li>
                    <li>내용들어가는 곳 내용들어가는 곳 내용들어가는 곳</li>
                  </help-components>
                </div>
              </div>
            </dd>
          </dl>
          <dl class="cell slt">
            <dt>
              <div class="split left">
                일정 알림 기본값
                <help-components name="layerAlarm">
                  <li>
                    쇼핑몰에 표시될 일정에 ‘알림받기' 버튼의 노출 여부를 설정할
                    수 있어요.
                  </li>
                  <li>
                    ‘알림받기' 버튼은 구매자들이 일정에 대한 알림을 받아볼 수
                    있는 기능이에요.
                  </li>
                  <li>
                    단, ‘알림받기' 버튼을 통해 발송되는 알림톡은 SMS 발송
                    건수에서 차감되는 방식이에요.<br /><a
                      href="#"
                      target="_blank"
                      class="btn_link"
                      >[SMS 잔여 건수 확인하기]</a
                    >
                  </li>
                </help-components>
              </div>
            </dt>
            <dd>
              <ul class="select_list">
                <li>
                  <span class="select_text">시간 일정</span>
                  <select-components
                    :options="[{ label: '알림 없음', value: '' }]"
                    class="selectbox"
                  />
                </li>
                <li>
                  <span class="select_text">하루종일 일정</span>
                  <select-components
                    :options="[{ label: '알림 없음', value: '' }]"
                    class="selectbox"
                  />
                </li>
                <li>
                  <div class="split left">
                    <label class="label_ckeck"
                      ><input type="checkbox" name="" value="" />
                      <span class="check_mark" />
                      <span class="check_text">쇼핑몰 관리자 알림</span>
                    </label>
                    <help-components name="layerAdminAlarm">
                      <li>쇼핑몰 관리자 우측 상단의 종모양 알림을 말해요.</li>
                      <li>
                        설정된 시간에 맞게 관리자 알림으로 알림이 오게돼요.
                        <p>
                          <img src="/static/img/admin_alarm.png" alt="" />
                        </p>
                      </li>
                    </help-components>
                  </div>
                </li>
                <li>
                  <div class="split left">
                    <label class="label_ckeck">
                      <input type="checkbox" name="" value="" />
                      <span class="check_mark" />
                      <span class="check_text"
                        >메시지
                        <span class="txt_sub"
                          >(카카오알림톡 발송 후 실패 시 SMS 발송)</span
                        ></span
                      >
                    </label>
                    <help-components name="layerMsgSMS">
                      <li>
                        일정 알림 발송 시 SMS 발송 가능 건수가 자동으로
                        차감됩니다.
                      </li>
                      <li>
                        알림은
                        <a href="#" target="_blank" class="btn_link"
                          >[메시지 사용 설정]</a
                        >에서 설정한 방법으로 발송됩니다.
                      </li>
                    </help-components>
                  </div>
                </li>
              </ul>
            </dd>
          </dl>

          <dl class="cell slt">
            <dt><em>적용 분류 선택</em></dt>
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
                  v-model="state.category_select"
                  multiple="multiple"
                  placeholder="선택하세요"
                  class="multiple SumoUnder"
                  tabindex="-1"
                >
                  <option v-for="(category, key) in categoryOptions" :key="key">
                    {{ category }}
                  </option>
                </select>
                <p
                  class="CaptionCont SelectBox multiple"
                  :title="state.category_select.join(', ')"
                  @click="categorySelectIsOpenToggle()"
                >
                  <span>{{ state.category_select.join(', ') }}</span>
                  <label>
                    <i />
                  </label>
                </p>
                <div
                  v-if="categorySelectIsOpen"
                  class="optWrapper multiple"
                  style="display: block"
                >
                  <ul class="options">
                    <li
                      v-for="(category, key) in categoryOptions"
                      :key="key"
                      class="opt"
                      :class="{
                        selected: state.category_select.includes(category),
                      }"
                      @click="handleSetCategory(category)"
                    >
                      <span><i /></span><label>{{ category }}</label>
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
        <!-- //공통 설정 -->

        <!-- 단독 캘린더 설정 -->
        <div class="single_calendar">
          <div class="toggle_box">
            <a
              id="btnToggle"
              href="javascript:void(0)"
              class="btn_toggle"
              @click="showOtherIsOpenToggle()"
              >이 그룹만 단독 캘린더로 쇼핑몰에 보여주고 싶으신가요?<span
            /></a>
            <help-components name="layerSingleCalendar3">
              <li>하루에 표시될 일정의 최대 개수를 설정할 수 있어요.</li>
              <li>내용들어가는 곳 내용들어가는 곳 내용들어가는 곳</li>
            </help-components>
          </div>

          <div v-if="showOtherIsOpen" class="section" style="display: block">
            <p class="comment">
              해당 그룹 일정만 표시된 단독 캘린더 화면을 사용하고싶다면 ‘단독
              캘린더 사용여부'를 ‘사용함'으로 설정 후,<br />html소스를 복사하여
              원하는 페이지 디자인에 추가해 주세요. ‘쇼핑몰 사이트 노출 여부'와
              관계없이 해당 그룹 모든 일정이 보여요.
            </p>

            <dl class="cell">
              <dt>단독 캘린더 사용여부</dt>
              <dd>
                <radio-components
                  v-model="state.singleCalUse"
                  :options="[
                    { label: '사용함', value: 'T' },
                    { label: '사용 안 함', value: 'F' },
                  ]"
                />
              </dd>
            </dl>
            <dl class="cell">
              <dt>접근 권한</dt>
              <dd>
                <radio-components
                  v-model="state.frontGrade"
                  :options="[
                    { label: '전체 허용', value: 'T' },
                    { label: '회원만 허용', value: 'F' },
                  ]"
                />
                <div id="frontGrade" class="radio_cont">
                  <checkbox-components
                    v-model="state.roles"
                    :options="[
                      { label: '전체', value: '' },
                      { label: '새싹', value: '1' },
                      { label: '일반', value: '2' },
                      { label: 'VIP', value: '3' },
                    ]"
                  />
                </div>
              </dd>
            </dl>
            <dl class="cell">
              <dt>기본 화면</dt>
              <dd>
                <radio-components
                  v-model="state.frontBase"
                  :options="[
                    { label: '월', value: 'M' },
                    { label: '주', value: 'W' },
                    { label: '일', value: 'D' },
                  ]"
                />
              </dd>
            </dl>
            <dl class="cell">
              <dt>한주의 시작</dt>
              <dd>
                <radio-components
                  v-model="state.frontWeek"
                  :options="[
                    { label: '일요일', value: 'S' },
                    { label: '월요일', value: 'M' },
                  ]"
                />
              </dd>
            </dl>
            <dl class="cell">
              <dt>
                디자인 소스
                <button
                  type="button"
                  class="btn_help"
                  onclick="openLayer('layerSource')"
                >
                  <span class="blind">도움말</span>
                </button>
                <section id="layerSource" class="layer_popup">
                  <button onclick="closeLayer('layerSource')" class="close">
                    <span class="blind">닫기</span>
                  </button>
                  <h1>도움말</h1>
                  <ul class="list_hyp">
                    <li>내용들어가는 곳 내용들어가는 곳 내용들어가는 곳</li>
                  </ul>
                </section>
              </dt>
              <dd>
                <div class="source_copy">
                  <div class="sourcebox">
                    <textarea id="sourceCopy">
&lt;iframe src="http://naver.me/xOIRAoIfa" width="800"  height="600"  frameborder="0"&gt;&lt;/iframe&gt;</textarea
                    >
                    <alert-components
                      v-model="alertIsOpen"
                      :title="alertTitle"
                    />
                  </div>
                  <button type="button" class="btn_copy" @click="handleCopy">
                    복사하기
                  </button>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <!-- //단독 캘린더 설정 -->
      </div>
      <div class="btn_wrap">
        <button-components label="저장" @click="handleSave" />
        <button-components label="취소" type="default" @click="handleClose" />
      </div>
    </div>
  </section>
  <div v-if="isOpen" class="dimed" style="display: block" />
</template>

<style scoped></style>
