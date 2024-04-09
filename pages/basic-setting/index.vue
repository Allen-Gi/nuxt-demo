<script setup lang="ts">
const radio = ref('week')
</script>

<template>
  <basic-setting-layout>
    <div class="setup_content">
      <!-- 관리자 화면 -->
      <div class="section first">
        <p class="comment">쇼핑몰 관리자에서 사용하는 캘린더와 쇼핑몰에서 노출 캘린더 화면을 자유롭게 설정할 수 있어요.</p>
        <h2>관리자 화면</h2>
        <dl class="cell">
          <dt>기본 화면</dt>
          <dd>
            <radio-components
              :options="[
                {label: '월', value: 'month'},
                {label: '주', value: 'week'},
                {label: '일', value: 'day'}
              ]"
              v-model="radio"
              />
          </dd>
        </dl>
        <dl class="cell">
          <dt>한주의 시작</dt>
          <dd>
            <label class="label_ckeck"><input type="radio" name="adminWeek" value="" checked="">
              <span class="radio_mark"></span>
              <span class="check_text">일요일</span>
            </label>
            <label class="label_ckeck"><input type="radio" name="adminWeek" value="">
              <span class="radio_mark"></span>
              <span class="check_text">월요일</span>
            </label>
          </dd>
        </dl>
        <dl class="cell">
          <dt>보조 캘린더</dt>
          <dd>
            <label class="label_ckeck"><input type="radio" name="adminAssist" value="" checked="">
              <span class="radio_mark"></span>
              <span class="check_text">사용함</span>
            </label>
            <label class="label_ckeck"><input type="radio" name="adminAssist" value="">
              <span class="radio_mark"></span>
              <span class="check_text">사용안함</span>
            </label>
          </dd>
        </dl>
        <dl class="cell slt">
          <dt>
            <div class="split left">
              하루 표시 일정
              <div class="help_wrap">
                <button type="button" class="btn_help" onclick="openLayer('layerDay')"><span class="blind">도움말</span>
                </button>
                <section id="layerDay" class="layer_popup">
                  <button onclick="closeLayer('layerDay')" class="close"><span class="blind">닫기</span></button>
                  <h1>도움말</h1>
                  <ul class="list_hyp">
                    <li>하루에 표시될 일정의 최대 개수를 설정할 수 있어요.</li>
                  </ul>
                </section>
              </div>
            </div>
          </dt>
          <dd>
            <span class="select_text">최대</span>
            <select class="selectbox">
              <option>선택하세요</option>
              <option>5개</option>
              <option>10개</option>
              <option>제한없음</option>
            </select>
          </dd>
        </dl>
      </div>
      <!-- //관리자 화면 -->

      <!-- 쇼핑몰 화면 -->
      <div class="section">
        <h2>쇼핑몰 화면</h2>
        <p class="comment type2">쇼핑몰 사이트에 캘린더를 노출시키려면 사용여부를 ‘사용함'으로 설정 후 html소스를 복사하여 원하는 페이지 디자인에 추가하세요. </p>
        <dl class="cell">
          <dt>사용여부</dt>
          <dd>
            <label class="label_ckeck"><input type="radio" name="frontSet" value="" checked="">
              <span class="radio_mark"></span>
              <span class="check_text">사용함</span>
            </label>
            <label class="label_ckeck"><input type="radio" name="frontSet" value="">
              <span class="radio_mark"></span>
              <span class="check_text">사용안함</span>
            </label>
          </dd>
        </dl>
        <dl class="cell">
          <dt>접근 권한</dt>
          <dd>
            <label class="label_ckeck"><input type="radio" name="frontGrade" value="">
              <span class="radio_mark"></span>
              <span class="check_text">전체 허용</span>
            </label>
            <label class="label_ckeck"><input type="radio" name="frontGrade" value="" checked="">
              <span class="radio_mark"></span>
              <span class="check_text">회원만 허용</span>
            </label>
            <div id="frontGrade" class="radio_cont">
              <label class="label_ckeck"><input type="checkbox" name="" value="" checked="">
                <span class="check_mark"></span>
                <span class="check_text">전체</span>
              </label>
              <label class="label_ckeck"><input type="checkbox" name="" value="" checked="">
                <span class="check_mark"></span>
                <span class="check_text">새싹</span>
              </label>
              <label class="label_ckeck"><input type="checkbox" name="" value="" checked="">
                <span class="check_mark"></span>
                <span class="check_text">일반</span>
              </label>
              <label class="label_ckeck"><input type="checkbox" name="" value="" checked="">
                <span class="check_mark"></span>
                <span class="check_text">VIP</span>
              </label>
            </div>
          </dd>
        </dl>
        <dl class="cell">
          <dt>기본 화면</dt>
          <dd>
            <label class="label_ckeck"><input type="radio" name="frontBase" value="" checked="">
              <span class="radio_mark"></span>
              <span class="check_text">월</span>
            </label>
            <label class="label_ckeck"><input type="radio" name="frontBase" value="">
              <span class="radio_mark"></span>
              <span class="check_text">주</span>
            </label>
            <label class="label_ckeck"><input type="radio" name="frontBase" value="">
              <span class="radio_mark"></span>
              <span class="check_text">일</span>
            </label>
          </dd>
        </dl>
        <dl class="cell">
          <dt>한주의 시작</dt>
          <dd>
            <label class="label_ckeck"><input type="radio" name="frontWeek" value="" checked="">
              <span class="radio_mark"></span>
              <span class="check_text">일요일</span>
            </label>
            <label class="label_ckeck"><input type="radio" name="frontWeek" value="">
              <span class="radio_mark"></span>
              <span class="check_text">월요일</span>
            </label>
          </dd>
        </dl>
        <dl class="cell">
          <dt>
            <div class="split left">
              디자인 소스
              <div class="help_wrap">
                <button type="button" class="btn_help" onclick="openLayer('layerSource')"><span class="blind">도움말</span>
                </button>
                <section id="layerSource" class="layer_popup">
                  <button onclick="closeLayer('layerSource')" class="close"><span class="blind">닫기</span></button>
                  <h1>도움말</h1>
                  <ul class="list_hyp">
                    <li>내용들어가는 곳 내용들어가는 곳 내용들어가는 곳</li>
                  </ul>
                </section>
              </div>
            </div>
          </dt>
          <dd>
            <div class="source_copy">
              <div class="sourcebox">
                <textarea id="sourceCopy" readonly="">&lt;iframe src="http://naver.me/xOIRAoIfaaaaaaaaaaaaaaaaaaaaaaaaaa" width="800"  height="600"  frameborder="0"&gt;&lt;/iframe&gt;</textarea>
                <div class="layerAlert">
                  <span>복사되었습니다.</span>
                </div>
              </div>
              <button type="button" class="btn_copy" onclick="copy('sourceCopy');">복사하기</button>
            </div>
          </dd>
        </dl>
      </div>
      <!-- //쇼핑몰 화면 -->

      <div class="btn_wrap">
        <a href="#" class="btn btn_submit">저장</a>
      </div>
    </div>
  </basic-setting-layout>
</template>

<style scoped>

</style>