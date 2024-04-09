<script setup lang="ts">

</script>

<template>
  <basic-setting-layout>
    <div class="setup_content">
      <p class="comment">데일리 리포트는 오늘 일정에 대한 요약 정보를 메시지로 간편하게 받아볼 수 있는 기능을 말해요.<br>이곳에서 리포트 수신에 대한 설정을 변경할 수 있어요.</p>

      <div class="section first">
        <dl class="cell">
          <dt>사용 여부</dt>
          <dd>
            <label class="label_ckeck"><input type="radio" name="reportUse" value="" checked="">
              <span class="radio_mark"></span>
              <span class="check_text">사용함</span>
            </label>
            <label class="label_ckeck"><input type="radio" name="reportUse" value="">
              <span class="radio_mark"></span>
              <span class="check_text">사용안함</span>
            </label>
            <div id="usable" class="radio_cont">
              카카오알림톡 발송 후 실패 시 SMS 발송<br>
              <p class="txt_sub">SMS 발송 가능 건수가 자동으로 차감됩니다.<br>
                리포트는 <a href="#" class="btn_link" target="_blank">[메시지 사용 설정]</a>에서 설정한 방법으로 발송됩니다.</p>

              <div class="caution">
                <strong>발송 가능한 SMS 잔여건 수가 부족해요.</strong>
                SMS 잔여건 수가 부족할 시 데일리 리포트가 발송되지 않습니다.<br>
                충전 후 사용해 주세요. <a href="#" class="btn_link">충전하러 가기</a>
              </div>
            </div>
          </dd>
        </dl>
        <dl class="cell slt">
          <dt>발송 시간
            <button type="button" class="btn_help" onclick="openLayer('layerSendTime')"><span class="blind">도움말</span></button>
            <section id="layerSendTime" class="layer_popup">
              <button onclick="closeLayer('layerSendTime')" class="close"><span class="blind">닫기</span></button>
              <h1>도움말</h1>
              <ul class="list_hyp">
                <li>하루에 표시될 일정의 최대 개수를 설정할 수 있어요.</li>
              </ul>
            </section>
          </dt>
          <dd>
            <span class="select_text">매일</span>
            <select class="selectbox">
              <option>오전 8시</option>
            </select>
          </dd>
        </dl>
        <dl class="cell">
          <dt>포함 그룹
            <button type="button" class="btn_help" onclick="openLayer('layerGroup')"><span class="blind">도움말</span></button>
            <section id="layerGroup" class="layer_popup">
              <button onclick="closeLayer('layerGroup')" class="close"><span class="blind">닫기</span></button>
              <h1>도움말</h1>
              <ul class="list_hyp">
                <li>하루에 표시될 일정의 최대 개수를 설정할 수 있어요.</li>
              </ul>
            </section>
          </dt>
          <dd>
            <div class="SumoSelect" tabindex="0" role="button" aria-expanded="false" selected-count="1" is-selected="true"><select multiple="multiple" placeholder="선택하세요" class="multiple SumoUnder" tabindex="-1">
              <option selected="" value="전체">전체</option>
              <option value="할일">할일</option>
              <option value="상품 출고">상품 출고</option>
            </select><p class="CaptionCont SelectBox multiple" title=" 전체"><span> 전체</span><label><i></i></label></p><div class="optWrapper multiple"><ul class="options"><li class="opt selected"><span><i></i></span><label>전체</label></li><li class="opt"><span><i></i></span><label>할일</label></li><li class="opt"><span><i></i></span><label>상품 출고</label></li></ul><div class="MultiControls"><p tabindex="0" class="btnOk">OK</p><p tabindex="0" class="btnCancel">Cancel</p></div></div></div>
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
          <img src="/static/img/msg_kakao.png" alt="">
        </div>
      </aside>
    </template>
  </basic-setting-layout>
</template>

<style scoped>

</style>