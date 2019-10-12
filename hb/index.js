        var loading = setInterval(() => {
            if ($(".loading span")[0].innerText == "加载中...") {
                $(".loading span")[0].innerText = "加载中."
            } else {
                $(".loading span")[0].innerText += "."
            }
        }, 500);
        var url = getParams("url") || "http://800zy12.com/"
        if (getParams("wd")) {
            $.post("http://800zy12.com/index.php?m=vod-search", {
                wd: getParams("wd")
            },
                function (data, status) {
                    create(data)

                    $(".loading").hide()
                    clearInterval(loading)
                });

            $(".loading").hide()
            clearInterval(loading)
        } else {
            $.get(url, function (data, status) {
                let u = getParams("url") || ""
                if (u.indexOf("show") > -1) {
                    let info = create(data, true)
                    //uni.navigateTo({
                     //   url: 'player?src=' + info.src + '&name=' + info.name
                    //});
                    window.history.back(-1)
                    $(".loading").hide()
                    clearInterval(loading)
                    console.log(create(data, true).src)
                    return

                } else {
                    create(data)

                }
                $(".loading").hide()
                clearInterval(loading)
            });
        }

        function create(data, v) {
            data = data.replace(/href="/g, 'href="?url=http://800zy12.com');
            data = data.replace(/<img/g, '<i');
            if (v) {


                return {
                    name: $(data).find(".whitetitle")[0].innerText.replace(/影片名称：/g, ''),
                    src: $(data).find(".playlist")[0].innerText
                }
            }
            let dh = $(data).find(".nav").find("ul")[0]
            $(".dh ul").append(dh)
            let nr = $($(data).find(".videoContent")[0])
            nr.find(".time1,.time,.address,img").remove()
            $(".nr ul").append(nr[0])
            let fy = $(data).find("ol")[0]
            $(".fy ul").append($(fy).find("em,span,a"))
            $(".fy .tz").append($(fy).find("input"))
            $(fy).find("*").remove()

            if ($(fy)[0]) {
                $(".fy .tz").prepend($(fy)[0].innerText);

            } else if ($(data).find(".index_list_foot")[0]) {
                $(".fy .tz").prepend($(data).find(".index_list_foot")[0].innerText);
            }
        }





        function getParams(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] == variable) { return pair[1]; }
            }
            return (false);
        }
