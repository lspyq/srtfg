//var urls = document.URL.split("?url=");
var x1 = "http://api.662820.com/xnflv/index.php?url=";
var x2 = "http://vip.jlsprh.com/index.php?url=";
var x3 = "http://www.82190555.com/index/qqvod.php?url=";
var x4 = "http://api.baiyug.cn/vip/index.php?url=";
var x5 = "http://jiexi.92fz.cn/player/vip.php?url=";
var xlx = x1;

window.onload=function(){
	if(document.URL.split("?url=")[1] != undefined && document.URL.split("?url=")[1] != "") {
		document.getElementById("dz").value = document.URL.split("?url=")[1];
		document.getElementById("frame1").src = xlx + document.URL.split("?url=")[1];
		mui.toast('正在缓冲，请稍后...', {
			duration: long,
			type: 'div'
		});
	}
}

if(document.URL == "http://" + window.location.host + "/?url=" + document.getElementById("dz").value || document.URL == "http://" + window.location.host + "/index.html?url=" + document.getElementById("dz").value) {
		document.getElementById("frame1").src = xlx + document.getElementById("dz").value;
	}else{
		window.location.href = "http://" + window.location.host + "?url=" + document.getElementById("dz").value;
	}

if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {} else {
	document.getElementById("sp").style.height = "80%";
}




document.getElementById("twjc").addEventListener("tap", function() {
	document.getElementById("sp").style.display = "none";
	document.getElementById("frame1").src = "";
	document.getElementById("wy").style.display = "block";
	document.getElementById("frame2").src = "jc.html";
});

document.getElementById("xzxl").addEventListener("tap", function() {
	mui('#sheet1').popover('toggle');
});

document.getElementById("bf").addEventListener("tap", function() {
	document.getElementById("wy").style.display = "none";
	document.getElementById("sp").style.display = "block";
	mui.toast('正在加载...', {
		duration: 'long',
		type: 'div'
	});
	
	if(document.URL == "http://" + window.location.host + "?url=" + document.getElementById("dz").value || document.URL == "http://" + window.location.host + "/vipsp/index.html?url=" + document.getElementById("dz").value) {
		document.getElementById("frame1").src = xlx + document.getElementById("dz").value;
	}else{
		window.location.href = "http://" + window.location.host + "?url=" + document.getElementById("dz").value;
	}
	
	
	
});

document.getElementById("ly").addEventListener("tap", function() {
	document.getElementById("sp").style.display = "none";
	document.getElementById("frame1").src = "";
	document.getElementById("wy").style.display = "block";
	document.getElementById("frame2").src = "ly.html";
});

function xlclick(xla, xlb, xlc) {
	document.getElementById("xl1").style.fontWeight = "normal";
	document.getElementById("xl2").style.fontWeight = "normal";
	document.getElementById("xl3").style.fontWeight = "normal";
	document.getElementById("xl4").style.fontWeight = "normal";
	document.getElementById("xl5").style.fontWeight = "normal";
	document.getElementById(xla).style.fontWeight = "bold";
	document.getElementById("wy").style.display = "none";
	document.getElementById("sp").style.display = "block";
	
	xlx = xlb;
	if(document.URL == "http://" + window.location.host + "?url=" + document.getElementById("dz").value || document.URL == "http://" + window.location.host + "/vipsp/index.html?url=" + document.getElementById("dz").value) {
		document.getElementById("frame1").src = xlx + document.getElementById("dz").value;
	}else{
		window.location.href = "http://" + window.location.host + "?url=" + document.getElementById("dz").value;
	}
	mui.toast('切换至线路' + xlc, {
		duration: 'long',
		type: 'div'
	});
	mui('#sheet1').popover('toggle');
}
document.getElementById("xl1").onclick = function() {
	xlclick("xl1", x1, "1")
}
document.getElementById("xl2").onclick = function() {
	xlclick("xl2", x2, "2")
}
document.getElementById("xl3").onclick = function() {
	xlclick("xl3", x3, "3")
}
document.getElementById("xl4").onclick = function() {
	xlclick("xl4", x4, "4")
}
document.getElementById("xl5").onclick = function() {
	xlclick("xl5", x5, "5")
}

function error() {

}

