<script setup>
import { useClipboard } from '@vueuse/core'
import { useBasicSetting } from '~/composables/basic-setting/useBasicSetting'

const source = ref(
  '&lt;iframe src="http://naver.me/xOIRAoIfaaaaaaaaaaaaaaaaaaaaaaaaaa" width="800"  height="600"  frameborder="0"&gt;&lt;/iframe&gt;',
)
const { text, copy, copied, isSupported } = useClipboard({ source })


const { fetchBasicSetting } = useBasicSetting()
const { settingInfo, getSettingInfo } = await fetchBasicSetting()
await getSettingInfo()

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
</script>

<template>
  <basic-setting-layout>
    <div class="setup_content">
      <!-- 관리자 화면 -->
      <div class="section first">
        <p class="comment">
          쇼핑몰 관리자에서 사용하는 캘린더와 쇼핑몰에서 노출 캘린더 화면을
          자유롭게 설정할 수 있어요.
        </p>
        <h2>관리자 화면</h2>
        <dl class="cell">
          <dt>기본 화면</dt>
          <dd>
            <radio-components v-model="settingInfo.start_calendar" name="start_calendar" :options="[
              { label: '월', value: 'M' },
              { label: '주', value: 'W' },
              { label: '일', value: 'D' },
            ]" />
          </dd>
        </dl>
        <dl class="cell">
          <dt>한주의 시작</dt>
          <dd>
            <radio-components v-model="settingInfo.start_week" name="start_week" :options="[
              { label: '일요일', value: 'S' },
              { label: '월요일', value: 'M' },
            ]" />
          </dd>
        </dl>
        <dl class="cell">
          <dt>보조 캘린더</dt>
          <dd>
            <radio-components v-model="settingInfo.use_secondary_calendar" name="use_secondary_calendar" :options="[
              { label: '사용함', value: 'T' },
              { label: '사용안함', value: 'F' },
            ]" />
          </dd>
        </dl>
        <dl class="cell slt">
          <dt>
            <div class="split left">
              하루 표시 일정
              <help-components>
                <li>하루에 표시될 일정의 최대 개수를 설정할 수 있어요.</li>
                <li>내용들어가는 곳 내용들어가는 곳 내용들어가는 곳</li>
              </help-components>
            </div>
          </dt>
          <dd>
            <span class="select_text">최대</span>
            <select-components v-model="settingInfo.display_limit" name="display_limit" :options="[
              { label: '5개', value: '5' },
              { label: '10개', value: '10' },
              { label: '제한없음', value: '' },
            ]" />
          </dd>
        </dl>
      </div>
      <!-- //관리자 화면 -->

      <!-- 쇼핑몰 화면 -->
      <div class="section">
        <h2>쇼핑몰 화면</h2>
        <p class="comment type2">
          쇼핑몰 사이트에 캘린더를 노출시키려면 사용여부를 ‘사용함'으로 설정 후
          html소스를 복사하여 원하는 페이지 디자인에 추가하세요.
        </p>
        <dl class="cell">
          <dt>사용여부</dt>
          <dd>
            <radio-components v-model="settingInfo.use_front" name="use_front" :options="[
              { label: '사용함', value: 'T' },
              { label: '사용안함', value: 'F' },
            ]" />
          </dd>
        </dl>
        <dl class="cell">
          <dt>접근 권한</dt>
          <dd>
            <radio-components v-model="settingInfo.front_use_permission" name="front_use_permission" :options="[
              { label: '전체 허용', value: 'T' },
              { label: '회원만 허용', value: 'F' },
            ]" />

            <div v-if="settingInfo.front_use_permission === 'F'" id="frontGrade" class="radio_cont">
              <checkbox-components v-model="settingInfo.front_permission" name="front_permission" :options="[
              { label: '전체', value: 'a' },
              { label: '새싹', value: 'b' },
              { label: '일반', value: 'c' },
              { label: 'VIP', value: 'd' },
            ]" />
            </div>
          </dd>
        </dl>
        <dl class="cell">
          <dt>기본 화면</dt>
          <dd>
            <radio-components v-model="settingInfo.front_start_calendar" name="front_start_calendar" :options="[
              { label: '월', value: 'M' },
              { label: '주', value: 'W' },
              { label: '일', value: 'D' },
            ]" />
          </dd>
        </dl>
        <dl class="cell">
          <dt>한주의 시작</dt>
          <dd>
            <radio-components v-model="settingInfo.front_start_week" name="front_start_week" :options="[
              { label: '일요일', value: 'S' },
              { label: '월요일', value: 'M' },
            ]" />
          </dd>
        </dl>
        <dl class="cell">
          <dt>
            <div class="split left">
              디자인 소스
              <help-components>
                <li>내용들어가는 곳 내용들어가는 곳 내용들어가는 곳</li>
                <li>내용들어가는 곳 내용들어가는 곳 내용들어가는 곳</li>
              </help-components>
            </div>
          </dt>
          <dd>
            <div class="source_copy">
              <div class="sourcebox">
                <textarea id="sourceCopy"
                  readonly>&lt;iframe src="http://naver.me/xOIRAoIfaaaaaaaaaaaaaaaaaaaaaaaaaa" width="800"  height="600"  frameborder="0"&gt;&lt;/iframe&gt;</textarea>
                <alert-components v-model="alertIsOpen" :title="alertTitle" />
              </div>
              <button type="button" class="btn_copy" @click="handleCopy">
                복사하기
              </button>
            </div>
          </dd>
        </dl>
      </div>
      <!-- //쇼핑몰 화면 -->

      <div class="btn_wrap">
        <button-components label="저장" @click="() => {
              console.log(settingInfo)
            }
              " />
      </div>
    </div>
  </basic-setting-layout>
</template>

<style scoped></style>
~/composables/basic-setting/useBasicSetting