
// 計算字數
function count1(value) {
	// 先歸0
	nowChr = 0;
	// for迴圈判斷value中的每一個字是否在0~255間
	for (var i = 0; i < value.length; i++) {
		value.charCodeAt(i) < 256 ? nowChr++ : nowChr += 2;
	}
	document.getElementById("info1").innerHTML = "目前已輸入【" + nowChr
			+ "】個字元，最多可輸入【" + maxChr/2 + "】個中文字(即【" + maxChr + "】個英數字)。";
	document.getElementById("info1").style.color = "#ee0000";
}

function count2(value) {
	// 先歸0
	nowChr = 0;
	// for迴圈判斷value中的每一個字是否在0~255間
	for (var i = 0; i < value.length; i++) {
		value.charCodeAt(i) < 256 ? nowChr++ : nowChr += 2;
	}
	document.getElementById("info2").innerHTML = "目前已輸入【" + nowChr
	        + "】個字元，最多可輸入【" + maxChr/2 + "】個中文字(即【" + maxChr + "】個英數字)。";
	document.getElementById("info2").style.color = "#ee0000";
}

function count3(value) {
	// 先歸0
	nowChr = 0;
	// for迴圈判斷value中的每一個字是否在0~255間
	for (var i = 0; i < value.length; i++) {
		value.charCodeAt(i) < 256 ? nowChr++ : nowChr += 2;
	}
	document.getElementById("info3").innerHTML = "目前已輸入【" + nowChr
	        + "】個字元，最多可輸入【" + maxChr/2 + "】個中文字(即【" + maxChr + "】個英數字)。";
	document.getElementById("info3").style.color = "#ee0000";
}

// 檢驗字數是否<=maxChr
function check() {
	if (nowChr > maxChr)
		alert("你多輸入了【" + (nowChr - maxChr) + "】個字元。");
}

// 初始化DIV部份用
function CountInit() {
	if (document.getElementById("info1")) {
		document.getElementById("info1").innerHTML = "目前已輸入【" + nowChr
		        + "】個字元，最多可輸入【" + maxChr/2 + "】個中文字(即【" + maxChr + "】個英數字)。";
		document.getElementById("info1").style.color = "#ee0000";
	}
	
	if (document.getElementById("info2")) {
		document.getElementById("info2").innerHTML = "目前已輸入【" + nowChr
		        + "】個字元，最多可輸入【" + maxChr/2 + "】個中文字(即【" + maxChr + "】個英數字)。";
		document.getElementById("info2").style.color = "#ee0000";
	}

	if (document.getElementById("info3")) {
		document.getElementById("info3").innerHTML = "目前已輸入【" + nowChr
		        + "】個字元，最多可輸入【" + maxChr/2 + "】個中文字(即【" + maxChr + "】個英數字)。";
		document.getElementById("info3").style.color = "#ee0000";
	}
}
