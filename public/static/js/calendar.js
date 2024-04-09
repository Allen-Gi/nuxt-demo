
function renderCalendar(){
	// 미니 캘린더
	let miniCalendarEl = document.getElementById('miniCalendar');
	let miniCalendar = new FullCalendar.Calendar(miniCalendarEl, {
		locale: "ko",
		dayCellContent: (info) => {
			let number = document.createElement("a");
			number.classList.add("fc-daygrid-day-number");
			number.innerHTML = info.dayNumberText.replace("일","").replace("日","");
			if (info.view.type === "dayGridMonth") {
				return {
					html: number.outerHTML
				};
			}
			return {
				domNodes: []
			}
		},
		initialView: 'dayGridMonth',
		height: 260,
		navLinks: true,
		navLinkDayClick: function(date, jsEvent) {
			moment.locale('ko');
			var newDate = String(moment(date).format('YYYY-MM-DD'));
			calendar.gotoDate(newDate);
		},
		dayMaxEvents: true,
		eventDisplay: 'none',

		headerToolbar: {
			left: 'title',
			right: 'prev,next',
		},

		//event data
		events: [
			// calendarGroup1
			{	
				group: 'calendarGroup1', 
				className: 'calendarGroup1', 
				title: "할 일 11111",
				start: '2024-04-12',
				end: '2024-04-14',
				color: '#285FF6',

				description: `안녕하세요, 11번가입니다.`,
				url: 'http://naver.com',
			},
			{	
				group: 'calendarGroup1', 
				className: 'calendarGroup1', 
				title: "할 일 2222",
				start: '2024-04-01',
				color: '#285FF6',

				description: `안녕하세요, 11번가입니다.<br><br>2023년 매 최고의 판매 찬스~! 월간 십일절이 5일간 더 새롭게 진행됩니다.<br><br>5일로 늘어난 ‘월간십일절 프로모션’ 은 11번가와 판매자가 최대 매출 달성을 위 매월 고정으로 진행하는 분담 프로모션입니다. <br><br>해당 행사는 판매자 분들이 직 신청하는 프로모션의 연간 최고 거래액을 달성할 수 있도 매월 정기적으로 신청해 주세요.`,
				url: 'http://naver.com',
			},
			// calendarGroup2
			{	
				group: 'calendarGroup2', 
				className: 'calendarGroup2', 
				title: "상품 출고 11111",
				start: '2024-04-11',
				end: '2024-04-16',
				color: '#33AD6E',
			},
			{	
				group: 'calendarGroup2', 
				className: 'calendarGroup2', 
				title: "상품 출고 2222",
				start: '2024-04-02T16:00:00',
				color: '#33AD6E',
			},
			// calendarGroup3
			{	
				group: 'calendarGroup3', 
				className: 'calendarGroup3', 
				title: "상품 오픈",
				start: '2024-04-20',
				end: '2024-04-16',
				color: '#F9A580',
			},
			// calendarGroup4
			{	
				group: 'calendarGroup4', 
				className: 'calendarGroup4', 
				title: "이벤트",
				start: '2024-04-20',
				end: '2024-04-16',
				color: '#EBBF60',
			},
			// calendarGroup5
			{	
				group: 'calendarGroup5', 
				className: 'calendarGroup5', 
				title: "[구독] 프로모션 프로모션",
				start: '2024-04-25',
				end: '2024-04-30',
				color: '#69D2E2',
			},
			// calendarGroup6
			{	
				group: 'calendarGroup6', 
				className: 'calendarGroup6', 
				title: "[구독] 이벤트 모니터링 모니터링",
				start: '2024-04-25',
				end: '2024-04-30',
				color: '#003557',
			},
			// calendarGroup7
			{	
				group: 'calendarGroup7', 
				className: 'calendarGroup7', 
				title: "[구독] 마켓 프로모션 프로모션",
				start: '2024-04-25',
				end: '2024-04-30',
				color: '#9065E6',
			},
		],
	});
	miniCalendar.render();

	// 일반 캘린더
	let calendarEl = document.getElementById('calendar');
	let calendar = new FullCalendar.Calendar(calendarEl, {
		locale: "ko",
		buttonText: {
			today: '오늘',
			month: '월',
			week: '주',
			day: '일',
			list: 'list'
		},
		titleFormat: {
			year: 'numeric',
			month: 'long',
			
		},
		dayHeaderContent: (args) => {
			moment.locale('ko');
			let headerDay = document.createElement("span");
			let headerWeek = document.createElement("span");

			headerDay.classList.add("date");
			headerDay.innerHTML = moment(args.date).format('Do');
			headerWeek.innerHTML = moment(args.date).format(' (dd)');

			if (args.view.type === "timeGridDay" || args.view.type === "timeGridWeek") {
				return {
					html: headerDay.outerHTML + headerWeek.outerHTML
				};
			}
			else if (args.view.type === "dayGridMonth") {
				return moment(args.date).format('dddd')
			}
		},
		dayCellContent: (info) => {
			let number = document.createElement("a");
			number.classList.add("fc-daygrid-day-number");
			number.innerHTML = info.dayNumberText.replace("일","").replace("日","");
			if (info.view.type === "dayGridMonth") {
				return {
					html: number.outerHTML
				};
			}
			return {
				domNodes: []
			}
		},
		
		// style
		initialView: 'dayGridMonth',
		height: 820,
		slotMinTime: '00:00',
		slotMaxTime: '21:00',
		navLinks: true, // 요일, 날짜 클릭 시 일/주 단위 화면으로 넘어감
		expandRows: true,
		editable: false, // 드래그 수정 여부
		selectable: false, // 
		nowIndicator: true, // 
		dayMaxEvents: true, // "more" 표시 전 최대 이벤트 갯수. true - 셀 높이에 따라 결정
		eventDisplay: 'block',

		headerToolbar: {
			left: 'title,prev,next,today',
			center: '',
			right: 'timeGridDay,timeGridWeek,dayGridMonth',
		},

		//event layer
		eventClick: (info) => {
			info.jsEvent.preventDefault();

			const eventInfo = info.event;
			const eventTitle = eventInfo.title;
			const eventStart = conversion(eventInfo.start);
			const eventEnd = conversion(eventInfo.end);
			const eventDesc = eventInfo.extendedProps.description;
			const eventUrl = eventInfo.url;

			const layer = $('#calendarLayer');
			const layerTitle = layer.find('h1');
			const layerCont = layer.find('.cont');
			const layerBtn = layer.find('.btn_wrap a')

			layer.show();
			layerTitle.html(eventTitle);
			layerCont.find('div').remove();
			layerBtn.attr('href', '6_viewCalendar.html') // 일정 상세 url

			if(eventEnd == null){
				layerCont.append(`<div class="date">${eventStart}</div>`);
			} else {
				layerCont.append(`<div class="date">${eventStart} ~ ${eventEnd}</div>`);
			}
			if(!eventUrl == "" || !eventUrl == undefined){
				layerCont.append(`<div class="url"><a href="${eventUrl}" target="_blank">${eventUrl}</a></div>`);
			}
			if(!eventDesc == "" || !eventDesc == undefined){
				layerCont.append(`<div class="description">${eventDesc}</div>`);
			}

			function conversion(date){
				if(!date == "" || !date == undefined){
					moment.locale('ko');
					return moment(date).format('YYYY-MM-DD hh:mm')
					//return date.toISOString().substring(0,16).replace(/\T/g, ' ');
			
				} else {
					return null;
				}
			}
		},

		//event filter
		eventClassNames: function(info) {
			var result = true;
			var groups = [];
			
			$("input[name='event_filter']:checked").each(function () {
				if ($(this).data('type') == 'group') {
					groups.push($(this).val());
				}
			});
			
			// 체크 된 일정 클래스 추가
			if (groups.length) {
				result = result && groups.indexOf(info.event.extendedProps.group) >= 0 || info.event.extendedProps.group == 'holiday';
			}
			
			// 체크되지 않은 일정 클래스 추가
			if (!result) {
				result = "filter-hidden";
			}
			return result;
		},

		//event data
		events: [
			// calendarGroup1
			{	
				group: 'calendarGroup1', 
				className: 'calendarGroup1', 
				title: "할 일 11111",
				start: '2024-04-12',
				end: '2024-04-14',
				color: '#285FF6',

				description: `안녕하세요, 11번가입니다.`,
				url: 'http://naver.com',
			},
			{	
				group: 'calendarGroup1', 
				className: 'calendarGroup1', 
				title: "할 일 2222",
				start: '2024-04-01',
				color: '#285FF6',

				description: `안녕하세요, 11번가입니다.<br><br>2023년 매 최고의 판매 찬스~! 월간 십일절이 5일간 더 새롭게 진행됩니다.<br><br>5일로 늘어난 ‘월간십일절 프로모션’ 은 11번가와 판매자가 최대 매출 달성을 위 매월 고정으로 진행하는 분담 프로모션입니다. <br><br>해당 행사는 판매자 분들이 직 신청하는 프로모션의 연간 최고 거래액을 달성할 수 있도 매월 정기적으로 신청해 주세요.`,
				url: 'http://naver.com',
			},
			// calendarGroup2
			{	
				group: 'calendarGroup2', 
				className: 'calendarGroup2', 
				title: "상품 출고 11111",
				start: '2024-04-11',
				end: '2024-04-16',
				color: '#33AD6E',
			},
			{	
				group: 'calendarGroup2', 
				className: 'calendarGroup2', 
				title: "상품 출고 2222",
				start: '2024-04-02T16:00:00',
				color: '#33AD6E',
			},
			// calendarGroup3
			{	
				group: 'calendarGroup3', 
				className: 'calendarGroup3', 
				title: "상품 오픈",
				start: '2024-04-20',
				end: '2024-04-16',
				color: '#F9A580',
			},
			// calendarGroup4
			{	
				group: 'calendarGroup4', 
				className: 'calendarGroup4', 
				title: "이벤트",
				start: '2024-04-20',
				end: '2024-04-16',
				color: '#EBBF60',
			},
			// calendarGroup5
			{	
				group: 'calendarGroup5', 
				className: 'calendarGroup5', 
				title: "[구독] 프로모션 프로모션",
				start: '2024-04-25',
				end: '2024-04-30',
				color: '#69D2E2',
			},
			// calendarGroup6
			{	
				group: 'calendarGroup6', 
				className: 'calendarGroup6', 
				title: "[구독] 이벤트 모니터링 모니터링",
				start: '2024-04-25',
				end: '2024-04-30',
				color: '#003557',
			},
			// calendarGroup7
			{	
				group: 'calendarGroup7', 
				className: 'calendarGroup7', 
				title: "[구독] 마켓 프로모션 프로모션",
				start: '2024-04-25',
				end: '2024-04-30',
				color: '#9065E6',
			},
		],
	});
	calendar.render();

	$("input[name='event_filter']").change(function() {
		calendar.render();
	});
}

// 검색결과 캘린더
function renderSearchCalendar(){
	let calendarEl = document.getElementById('calendar');
	let calendar = new FullCalendar.Calendar(calendarEl, {
		// lang
		locale: "ko",
		
		// style
		initialView: 'listMonth',
		height: 820,
		slotMinTime: '00:00',
		slotMaxTime: '21:00',
		navLinks: false, // 요일, 날짜 클릭 시 일/주 단위 화면으로 넘어감
		expandRows: true,
		editable: false, // 드래그 수정 여부
		selectable: false, // 
		nowIndicator: true, // 
		dayMaxEvents: true, // "more" 표시 전 최대 이벤트 갯수. true - 셀 높이에 따라 결정
		eventDisplay: 'block',

		//event layer
		eventClick: (info) => {
			info.jsEvent.preventDefault();

			const eventInfo = info.event;
			const eventTitle = eventInfo.title;
			const eventStart = conversion(eventInfo.start);
			const eventEnd = conversion(eventInfo.end);
			const eventDesc = eventInfo.extendedProps.description;
			const eventUrl = eventInfo.url;

			const layer = $('#calendarLayer');
			const layerTitle = layer.find('h1');
			const layerCont = layer.find('.cont');
			const layerBtn = layer.find('.btn_wrap a')

			layer.show();
			layerTitle.html(eventTitle);
			layerCont.find('div').remove();
			layerBtn.attr('href', '6_viewCalendar.html') // 일정 상세 url

			if(eventEnd == null){
				layerCont.append(`<div class="date">${eventStart}</div>`);
			} else {
				layerCont.append(`<div class="date">${eventStart} ~ ${eventEnd}</div>`);
			}
			if(!eventUrl == "" || !eventUrl == undefined){
				layerCont.append(`<div class="url"><a href="${eventUrl}" target="_blank">${eventUrl}</a></div>`);
			}
			if(!eventDesc == "" || !eventDesc == undefined){
				layerCont.append(`<div class="description">${eventDesc}</div>`);
			}

			function conversion(date){
				if(!date == "" || !date == undefined){
					moment.locale('ko');
					return moment(date).format('YYYY-MM-DD hh:mm')
					//return date.toISOString().substring(0,16).replace(/\T/g, ' ');
			
				} else {
					return null;
				}
			}
		},

		//event filter
		eventClassNames: function(info) {
			var result = true;
			var groups = [];
			
			$("input[name='event_filter']:checked").each(function () {
				if ($(this).data('type') == 'group') {
					groups.push($(this).val());
				}
			});
			
			// 체크 된 일정 클래스 추가
			if (groups.length) {
				result = result && groups.indexOf(info.event.extendedProps.group) >= 0 || info.event.extendedProps.group == 'holiday';
			}
			
			// 체크되지 않은 일정 클래스 추가
			if (!result) {
				result = "filter-hidden";
			}
			return result;
		},
		
		//event data
		events: [
			// calendarGroup1
			{	
				group: 'calendarGroup1', 
				className: 'calendarGroup1', 
				title: "할 일 11111",
				start: '2024-04-12',
				end: '2024-04-14',
				color: '#285FF6',

				description: `안녕하세요, 11번가입니다.`,
				url: 'http://naver.com',
			},
			{	
				group: 'calendarGroup1', 
				className: 'calendarGroup1', 
				title: "할 일 2222",
				start: '2024-04-01',
				color: '#285FF6',
				
				description: `안녕하세요, 11번가입니다.<br><br>2023년 매 최고의 판매 찬스~! 월간 십일절이 5일간 더 새롭게 진행됩니다.<br><br>5일로 늘어난 ‘월간십일절 프로모션’ 은 11번가와 판매자가 최대 매출 달성을 위 매월 고정으로 진행하는 분담 프로모션입니다. <br><br>해당 행사는 판매자 분들이 직 신청하는 프로모션의 연간 최고 거래액을 달성할 수 있도 매월 정기적으로 신청해 주세요.`,
				url: 'http://naver.com',
			},
			// calendarGroup2
			{	
				group: 'calendarGroup2', 
				className: 'calendarGroup2', 
				title: "상품 출고 11111",
				start: '2024-04-11',
				end: '2024-04-16',
				color: '#33AD6E',
			},
			{	
				group: 'calendarGroup2', 
				className: 'calendarGroup2', 
				title: "상품 출고 2222",
				start: '2024-04-02T16:00:00',
				color: '#33AD6E',
			},
			// calendarGroup3
			{	
				group: 'calendarGroup3', 
				className: 'calendarGroup3', 
				title: "상품 오픈",
				start: '2024-04-20',
				end: '2024-04-16',
				color: '#F9A580',
			},
			// calendarGroup4
			{	
				group: 'calendarGroup4', 
				className: 'calendarGroup4', 
				title: "이벤트",
				start: '2024-04-20',
				end: '2024-04-16',
				color: '#EBBF60',
			},
			// calendarGroup5
			{	
				group: 'calendarGroup5', 
				className: 'calendarGroup5', 
				title: "[구독] 프로모션 프로모션",
				start: '2024-04-25',
				end: '2024-04-30',
				color: '#69D2E2',
			},
			// calendarGroup6
			{	
				group: 'calendarGroup6', 
				className: 'calendarGroup6', 
				title: "[구독] 이벤트 모니터링 모니터링",
				start: '2024-04-25',
				end: '2024-04-30',
				color: '#003557',
			},
			// calendarGroup7
			{	
				group: 'calendarGroup7', 
				className: 'calendarGroup7', 
				title: "[구독] 마켓 프로모션 프로모션",
				start: '2024-04-25',
				end: '2024-04-30',
				color: '#9065E6',
			},
		],

	});
	calendar.render();

	$("input[name='event_filter']").change(function() {
		calendar.render();
	});
}

/* calendar script */
document.addEventListener('DOMContentLoaded', function() {

	if($('.calendar_view').hasClass('search_result')){
		renderSearchCalendar();
	} else {
		renderCalendar();
	}
});