//도움말
function openLayer(IdName) {
  const el = document.getElementById(IdName);
  if (el.style.display === "block") {
    el.style.display = "none";
  } else {
    el.style.display = "block";
  }
  return false;
}
function closeLayer(IdName) {
  const el = document.getElementById(IdName);
  el.style.display = "none";
  return false;
}

$(function () {
  //단독 캘린더 토글
  $("#btnToggle").on("click", function () {
    var $target = $(".single_calendar");
    $target.toggleClass("active");
  });

  //검색input
  $(".auto_input .inputbox").focus(function () {
    $(this).next(".auto_item").show();
  });

  //Date and time
  $(".datePicker").dateAndTime();
});

//modal layer
function layer_popup(el) {
  if ($el.hasClass("modal_popup")) {
    $el.animate({ top: 0 }, 500);

    $el.fadeIn("fast");
    $dim.fadeIn("fast");

    var $elWidth = $el.find(".modal_inner").outerWidth();
    var $elHeight = $el.find(".modal_inner").outerHeight();

    // 화면의 중앙에 레이어를 띄운다.
    $el.find(".modal_inner").css({
      marginTop: -$elHeight / 2,
    });

    $el.find(".btnModalClose").click(function () {
      $el.fadeOut("fast");
      $dim.fadeOut("fast");
      return false;
    });
  }
}
