<script setup>

onMounted(() => {
  $(".sort_content").sortable();
})
</script>

<template>
  <basic-setting-layout>
    <div class="setup_content">
      <p class="comment">직접 추가한 일정 그룹과 구독하고 있는 일정 그룹에 대한 설정을 변경할 수 있어요.<br>그룹이 여러개라면 순서를 조정할 수 있어요. 캘린더에 동일한 순서대로 나와요.
      </p>
      <div class="stit">
        <h2>내 일정</h2>
        <div class="btn_control">
          <button type="button" class="btn btn_sub tiny">선택 삭제</button>
          <a href="#addGroup" class="btn btn_submit tiny btnModalOpen">그룹 추가</a></div>
      </div>

      <!-- 내 일정 리스트 -->
      <div class="sortable_wrap myschedule">
        <ul class="sort_head">
          <li>
            <label class="label_ckeck"><input type="checkbox" name="" value="">
              <span class="check_mark"></span>
            </label>
          </li>
          <li><strong>그룹명</strong></li>
          <li><strong>쇼핑몰 사이트 노출</strong></li>
          <li><strong>일정 알림 기본값</strong></li>
          <li>
            <div class="split center">
              <strong>단독 캘린더 사용여부</strong>
              <div class="help_wrap">
                <button type="button" class="btn_help" onclick="openLayer('layerSingleCalendar')"><span class="blind">도움말</span>
                </button>
                <section id="layerSingleCalendar" class="layer_popup right">
                  <button onclick="closeLayer('layerSingleCalendar')" class="close"><span class="blind">닫기</span>
                  </button>
                  <h1>도움말</h1>
                  <ul class="list_hyp">
                    <li>내용들어가는 곳 내용들어가는 곳 내용들어가는 곳</li>
                  </ul>
                </section>
              </div>
            </div>
          </li>
          <li><strong>관리</strong></li>
          <li><strong>순서</strong></li>
        </ul>

        <div class="sort_content ui-sortable">
          <ul class="row ui-sortable-handle">
            <li>
              <label class="label_ckeck"><input type="checkbox" name="" value="">
                <span class="check_mark"></span>
              </label>
            </li>
            <li>할 일</li>
            <li>노출 안 함</li>
            <li>알림 없음</li>
            <li>사용 안함</li>
            <li><a href="#" class="btn btn_default sml">수정</a></li>
            <li><span class="ico_turn"></span></li>
          </ul>
          <ul class="row ui-sortable-handle">
            <li>
              <label class="label_ckeck"><input type="checkbox" name="" value="">
                <span class="check_mark"></span>
              </label>
            </li>
            <li>상품 출고</li>
            <li>노출함</li>
            <li>쇼핑몰 관리자 알림 : 10분 전</li>
            <li>사용함</li>
            <li><a href="#" class="btn btn_default sml">수정</a></li>
            <li><span class="ico_turn"></span></li>
          </ul>
          <ul class="row ui-sortable-handle">
            <li>
              <label class="label_ckeck"><input type="checkbox" name="" value="">
                <span class="check_mark"></span>
              </label>
            </li>
            <li>이벤트</li>
            <li>노출함</li>
            <li>메시지 : 10분 전 / 당일 오전 9시</li>
            <li>사용함</li>
            <li><a href="#" class="btn btn_default sml">수정</a></li>
            <li><span class="ico_turn"></span></li>
          </ul>
        </div>
      </div>
      <!-- //내 일정 리스트 -->

      <div class="stit">
        <h2>구독 일정</h2>
      </div>

      <!-- 구독 일정 리스트 -->
      <div class="sortable_wrap subscription">
        <ul class="sort_head">
          <li><strong>카테고리</strong></li>
          <li><strong>그룹명</strong></li>
          <li><strong>쇼핑몰 사이트 노출</strong></li>
          <li><strong>일정 알림 기본값</strong></li>
          <li>
            <div class="split center">
              <strong>단독 캘린더 사용여부</strong>
              <div class="help_wrap">
                <button type="button" class="btn_help" onclick="openLayer('layerSingleCalendar2')"><span class="blind">도움말</span>
                </button>
                <section id="layerSingleCalendar2" class="layer_popup right">
                  <button onclick="closeLayer('layerSingleCalendar2')" class="close"><span class="blind">닫기</span>
                  </button>
                  <h1>도움말</h1>
                  <ul class="list_hyp">
                    <li>내용들어가는 곳 내용들어가는 곳 내용들어가는 곳</li>
                  </ul>
                </section>
              </div>
            </div>
          </li>
          <li><strong>관리</strong></li>
          <li><strong>순서</strong></li>
        </ul>

        <div class="sort_content ui-sortable">
          <div class="rowspan ui-sortable-handle">
            프로모션 일정<br><a href="#registerCancel" class="btn_link btnModalOpen">구독 취소</a>
          </div>
          <ul class="row ui-sortable-handle">
            <li>쇼핑몰 프로모션</li>
            <li>노출함</li>
            <li>메시지 : 10분 전</li>
            <li>사용 안함</li>
            <li><a href="#" class="btn btn_default sml">수정</a></li>
            <li><span class="ico_turn"></span></li>
          </ul>
          <ul class="row ui-sortable-handle">
            <li>이벤트 모니터링</li>
            <li>노출함</li>
            <li>쇼핑몰 관리자 알림 : 당일 오전 9시</li>
            <li>사용 안함</li>
            <li><a href="#" class="btn btn_default sml">수정</a></li>
            <li><span class="ico_turn"></span></li>
          </ul>
          <ul class="row ui-sortable-handle">
            <li>마켓 프로모션</li>
            <li>노출함</li>
            <li>메시지 : 10분 전</li>
            <li>알림 없음</li>
            <li><a href="#" class="btn btn_default sml">수정</a></li>
            <li><span class="ico_turn"></span></li>
          </ul>
        </div>
      </div>
      <!-- //구독 일정 리스트 -->
    </div>
  </basic-setting-layout>
</template>

<style scoped>

</style>