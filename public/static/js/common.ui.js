//도움말
function openLayer(IdName){
	$("#"+IdName).toggle();
	return false;
}
function closeLayer(IdName){
	$("#"+IdName).hide();
	return false;
}

$(function(){

	//달력 컬러선택
	var colorReset = $('.color_select select').find("option:selected").data("sub");
	$(".color_select .SumoSelect>.CaptionCont span").css('background-color', colorReset);

	$(".color_select select").on("change", function () {
		var colorValue = $(this).find("option:selected").data("sub");
		$(".color_select .SumoSelect>.CaptionCont span").css('background-color', colorValue);
	});

	//모달 레이어 열기
	$('.btnModalOpen').click(function(){
		var $href = $(this).attr('href');
		layer_popup($href);
	});

	//단독 캘린더 토글
	$('#btnToggle').on("click", function() {
		var $target = $(".single_calendar");
		$target.toggleClass("active");
	});	

	//검색input
	$(".auto_input .inputbox").focus(function () {
		$(this).next('.auto_item').show();
	});

	toggleAction();

	//Date and time
	$('.datePicker').dateAndTime();
});

//modal layer
function layer_popup(el){
	var $el = $(el);
	var $dim = $('.dimed');

	if ($el.hasClass("modal_popup")){
		$el.fadeIn("fast");
		$dim.fadeIn("fast");
		
		var $elWidth = $el.find('.modal_inner').outerWidth();
		var	$elHeight = $el.find('.modal_inner').outerHeight();

		// 화면의 중앙에 레이어를 띄운다.
		$el.find('.modal_inner').css({
			marginTop: -$elHeight /2
		})

		$el.find('.btnModalClose').click(function(){
			$el.fadeOut("fast");
			$dim.fadeOut("fast");
			return false;
		});
	}
}

//toggle content
function toggleAction(){
    let toggleWrap = document.querySelectorAll('.toggleWrap');
    toggleWrap.forEach(cont => {
        cont.querySelector('.btnOpen').addEventListener("click", function () {
            const hasClass = cont.classList.contains("active");
            if (hasClass){
                cont.classList.remove("active");
                cont.querySelector('.toggleCont').style.display = "none";
            } else {
                cont.classList.add("active");
                cont.querySelector('.toggleCont').style.display = "block";
            }
        });
    });
}