$(document).ready(function() {

	var x1 = "http://api.baiyug.cn/vip/index.php?url=";
	var x2 = "http://vip.jlsprh.com/index.php?url=";
	var x3 = "http://www.82190555.com/index/qqvod.php?url=";
	var x4 = "http://api.662820.com/xnflv/index.php?url=";
	var x5 = "http://jiexi.92fz.cn/player/vip.php?url=";
	var xlx;
	var dz;
$('#fx').popover('open')
	function GetQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;
	}
	

	var urlx = GetQueryString("url");
	

	
	if(urlx != null) {

		setTimeout(function() {
			$('#bf').popover('open');
		}, "1")
		$('#dz').attr('value', urlx);

		$("title").html(vid[0] + "-" + document.title);

		if(GetQueryString("xl") != null) {
			xlx = eval(GetQueryString("xl"));
			xx = GetQueryString("xl");
			$('#' + GetQueryString("xl")).attr('class', 'am-modal-actions-danger');
			$('#frame1').attr('src', xlx + urlx);

		} else {
			xlx = x1;
			xx = 'x1';
			$('#x1').attr('class', 'am-modal-actions-danger');
			$('#frame1').attr('src', xlx + urlx);

		}

	} else {
		if(GetQueryString("xl") != null) {
			xlx = eval(GetQueryString("xl"));
			xx = GetQueryString("xl");
			$('#' + GetQueryString("xl")).attr('class', 'am-modal-actions-danger');
		} else {
			xlx = x1;
			xx = 'x1';
			$('#x1').attr('class', 'am-modal-actions-danger');
		}
	}
	if(urlx != null) {
		if(vid[vid.length - 1] == "baidu") {
			if(vid.length > 2) {
				for(var i = 1; i < vid.length - 1; i++) {
					
					$("#so").append("<li class=\"am-g am-list-item-desced\"><a href=\"?url="+vid[i]+"&xl=" + xx + "\" class=\"am-list-item-hd \">"+title[i]+"</a><div class=\"am-list-item-text\">"+abs[i]+"</div></li>");
					
					
				}
			}
		}
		
		if(vid[vid.length - 1] == "youku") {
			if(vid.length > 2) {
				for(var i = 1; i < vid.length - 1; i++) {
					if(document.URL.split("id_")[1].split(".html")[0] == vid[i]) {
						var li = "<li class=\"am-active\">";
						var lia = "";
					} else {
						var li = "<li>";
						var lia = " class=\"am-active\"";
					}
					$("#juji").append(li + "<a href=\"" + document.URL.split("?")[0] + "?url=http://v.youku.com/v_show/id_" + vid[i] + ".html&xl=" + xx + "\"" + lia + ">" + i + "</a></li>");
				}
			}
		}
		if(vid[vid.length - 1] == "iqiyi") {
			if(vid.length > 2) {
				for(var i = 1; i < vid.length - 1; i++) {
					if(document.URL.split("v_")[1].split(".html")[0] == vid[i]) {
						var li = "<li class=\"am-active\">";
						var lia = "";
					} else {
						var li = "<li>";
						var lia = " class=\"am-active\"";
					}
					$("#juji").append(li + "<a href=\"" + document.URL.split("?")[0] + "?url=http://www.iqiyi.com/v_" + vid[i] + ".html&xl=" + xx + "\"" + lia + ">" + i + "</a></li>");
				}
			}
		}

		if(vid[vid.length - 1] == "qq") {
			if(vid.length > 2) {
				
				for(var i = 1; i < vid.length - 1; i++) {
					if(document.URL.split("cover/")[1].split("/")[1]) {
						if(document.URL.split("cover/")[1].split("/")[1].split(".html")[0] == vid[i]) {
							var li = "<li class=\"am-active\">";
							var lia = "";
						} else {
							var li = "<li>";
							var lia = " class=\"am-active\"";
						}
					} else {
						if(i == 1) {
							var li = "<li class=\"am-active\">";
							var lia = "";

						} else {

							var li = "<li>";
							var lia = " class=\"am-active\"";

						}
					}

					$("#juji").append(li + "<a href=\"" + document.URL.split("?")[0] + "?url=https://v.qq.com/x/cover/" + list[0] + "/" + vid[i] + ".html&xl=" + xx + "\"" + lia + ">" + i + "</a></li>");
				}
			}
		}

		if(vid[vid.length - 1] == "le") {
			if(vid.length > 2) {
				
				for(var i = 1; i < vid.length - 1; i++) {
					if(document.URL.split("vplay/")[1].split(".html")[0] == vid[i]) {
						var li = "<li class=\"am-active\">";
						var lia = "";
					} else {
						var li = "<li>";
						var lia = " class=\"am-active\"";
					}
					$("#juji").append(li + "<a href=\"" + document.URL.split("?")[0] + "?url=http://www.le.com/ptv/vplay/" + vid[i] + ".html&xl=" + xx + "\"" + lia + ">" + list[i] + "</a></li>");
				}
			}
		}

	}
	$("#bf").click(function() {
		
		var dz = getVideoId(document.getElementById('dz').value)[2];
		
		
		if(dzjc(dz)) {
			
			$(location).attr('href', "?url=" + dz + "&xl=" + xx);
		}else{
			document.getElementById('dz').value = "";
			$('#bf').popover('toggle');
			$('#tishi').modal('open');
		}
		
	})

	$('#bf').popover({
		content: '<span class="am-icon-spinner am-icon-spin"></span> 正在加载，请稍后...'
	})

	$(function() {
		$('#dz').bind('keypress', function(event) {

			if(event.keyCode == "13") {
				
				var dz = getVideoId(document.getElementById('dz').value)[2];
				if(dz != '' && dzjc(dz)) {
				
					$(location).attr('href', "?url=" + dz + "&xl=" + xx);
				} else {
					document.getElementById('dz').value = "";
					$('#bf').popover('close');
					$('#tishi').modal('open');
				}
			}
		});
	});
	$("#xl1").click(function() {
		xlx = x1;
		xx = 'x1';
		var dz = getVideoId(document.getElementById('dz').value)[2];
		if(dz != '' && dzjc(dz)) {
			$(location).attr('href', "?url=" + dz + "&xl=x1");
		} else {
			document.getElementById('dz').value = "";
			$('#bf').popover('close');
			$('#tishi').modal('open');
		}
	})
	$("#xl2").click(function() {
		xlx = x2;
		xx = 'x2';
		var dz = getVideoId(document.getElementById('dz').value)[2];
		if(dz != '' && dzjc(dz)) {
			$(location).attr('href', "?url=" + dz + "&xl=x2");
		} else {
			document.getElementById('dz').value = "";
			$('#bf').popover('close');
			$('#tishi').modal('open');
		}
	})
	$("#xl3").click(function() {
		xlx = x3;
		xx = 'x3';
		var dz = getVideoId(document.getElementById('dz').value)[2];
		if(dz != '' && dzjc(dz)) {
			$(location).attr('href', "?url=" + dz + "&xl=x3");
		} else {
			document.getElementById('dz').value = "";
			$('#bf').popover('close');
			$('#tishi').modal('open');
		}
	})
	$("#xl4").click(function() {
		xlx = x4;
		xx = 'x4';
		var dz = getVideoId(document.getElementById('dz').value)[2];
		if(dz != '' && dzjc(dz)) {
			$(location).attr('href', "?url=" + dz + "&xl=x4");
		} else {
			document.getElementById('dz').value = "";
			$('#bf').popover('close');
			$('#tishi').modal('open');
		}
	})
	$("#xl5").click(function() {
		xlx = x5;
		xx = 'x5';
		var dz = getVideoId(document.getElementById('dz').value)[2];
		console.log(dz);
		if(dz != '' && dzjc(dz)) {
			$(location).attr('href', "?url=" + dz + "&xl=x5");
		} else {
			document.getElementById('dz').value = "";
			$('#bf').popover('close');
			$('#tishi').modal('open');
		}
	})

	if(document.getElementById("frame1").attachEvent) {
		document.getElementById("frame1").attachEvent("onload", function() {
			
			$('#bf').popover('close');
		})
	} else {
		document.getElementById("frame1").onload = function() {
			
			$('#bf').popover('close');
		};
	}

	$("#my-popover").click(function() {
		$('#bf').popover('close');
	})

	$(function() {
		$("#my-actions li").click(function() {
			$("#my-actions li").eq($(this).index()).addClass("am-modal-actions-danger").siblings().removeClass("am-modal-actions-danger");
			$('#my-actions').modal('close');
		})
	})

	$("#sbkk").click(function() {
		var sjsp = Math.floor((Math.random() * spk.length));
		//$('#frame1').attr('src', xlx + spk[sjsp]);
		//console.log(spk[sjsp]);
		$('#dz').attr('value', spk[sjsp]);
		$(location).attr('href', "?url=" + spk[sjsp] + "&xl=" + xx);
		$('#bf').popover('open');
	})

	function getVideoId(url) {

		if(url.indexOf("?") > 0) {

			if(url.split("youku")[1] != undefined) { //优酷
				return ["youku", url.split("?")[0].split("#")[0].split("&")[0].split("id_")[1].split(".html")[0], "http://v.youku.com/v_show/id_" + url.split("?")[0].split("#")[0].split("&")[0].split("id_")[1]];
			} else if(url.split("iqiyi")[1] != undefined) { //爱奇艺
				return ["iqiyi", url.split("?")[0].split("#")[0].split("&")[0].split("v_")[1].split(".html")[0], "http://www.iqiyi.com/v_" + url.split("?")[0].split("#")[0].split("&")[0].split("v_")[1]];
			} else if(url.split("qq.com")[1] != undefined) { //腾讯
				if(url.split("cover/v/")[1] != undefined) {
					return ["qq", url.split("?")[0].split("#")[0].split("&")[0].split("cover/v/")[1].split(".html")[0], "https://v.qq.com/x/cover/" + url.split("?")[0].split("#")[0].split("&")[0].split("cover/v/")[1]];
				} else {
					return ["qq", url.split("?")[0].split("#")[0].split("&")[0].split("cover/")[1].split(".html")[0], "https://v.qq.com/x/cover/" + url.split("?")[0].split("#")[0].split("&")[0].split("cover/")[1]];
				}
			} else if(url.split("le.com")[1] != undefined) { //乐视
				if(url.split("vplay/")[1] != undefined) {
					return ["le", url.split("?")[0].split("#")[0].split("&")[0].split("vplay/")[1].split(".html")[0], "http://www.le.com/ptv/vplay/" + url.split("?")[0].split("#")[0].split("&")[0].split("vplay/")[1]];
				} else if(url.split("vplay_")[1] != undefined) {
					return ["le", url.split("?")[0].split("#")[0].split("&")[0].split("vplay_")[1].split(".html")[0], "http://www.le.com/ptv/vplay/" + url.split("?")[0].split("#")[0].split("&")[0].split("vplay_")[1]];
				} else {
					return [];
				}
			} else if(url.split("tudou")[1] != undefined) { //土豆
				return ["tudou", url.split("?")[0].split("#")[0].split("&")[0].split("/v/")[1].split(".html")[0], "http://video.tudou.com/v/" + url.split("?")[0].split("#")[0].split("&")[0].split("/v/")[1]];
			} else if(url.split("mgtv")[1] != undefined) { //芒果tv
				if(url.split("/#/b/")[1] != undefined) {
					return ["mgtv", url.split("/#/")[1].split("?")[0].split("#")[0].split("&")[0].split("b/")[1].split(".html")[0], "http://www.mgtv.com/b/" + url.split("/#/")[1].split("?")[0].split("#")[0].split("&")[0].split("b/")[1]];
				} else {
					return ["mgtv", url.split("?")[0].split("#")[0].split("&")[0].split("b/")[1].split(".html")[0], "http://www.mgtv.com/b/" + url.split("?")[0].split("#")[0].split("&")[0].split("b/")[1]];
				}
			} else if(url.split("sohu.com")[1] != undefined) { //搜狐视频
				return ["suhu", url.split("?")[0].split("#")[0].split("&")[0].split("sohu.com/")[1].split(".")[0], "http://tv.sohu.com/" + url.split("?")[0].split("#")[0].split("&")[0].split("sohu.com/")[1]];
			} else {
				return [url,url,url];
			}

		}else{
			return [url,url,url];
		}
	}
	
	function dzjc(dz){

		
		
		if(dz == ""){
			return false;
		}else if(dz != ""){
			if(dz.indexOf("/")>0) {
				return true;
			} else if(dz.indexOf("html")>0) {
				return true;
			} else if(dz.indexOf(".com")>0) {
				return true;
			} else if(dz.indexOf(".cn")>0) {
				return true;
			} else if(dz.indexOf("http://")>0) {
				return true;
			} else {
				return false;
			}
		}

	}

})
