
        var url = getParams("url") || "http://800zy12.com/"
        if (getParams("wd")) {
            $.post("http://800zy12.com/index.php?m=vod-search", {
                wd: getParams("wd")
            },
                function (data, status) {
                    create(data)
                });
        } else {
            $.get(url, function (data, status) {
                let u = getParams("url") || ""
                if (u.indexOf("show") > -1) {
                    if (uni) {
                        document.addEventListener('UniAppJSBridgeReady', function () {
                            uni.navigateTo({
                                url: 'player?src=' + create(data, true)
                            });
                        });
                    }
                    console.log(create(data, true))
                    return

                } else {
                    // console.log(data)
                    create(data)

                }
            });
        }

        function create(data, v) {
            data = data.replace(/href="/g, 'href="?url=http://800zy12.com');
            data = data.replace(/<img/g, '<i');
            if (v) {
                return $(data).find(".playlist")[0].innerText
            }
            let dh = $(data).find(".nav").find("ul")[0].innerHTML
            //app.dh = dh
            let nr = $($(data).find(".videoContent")[0])
            nr.find(".time1,.time,.address,img").remove()
            nr = nr[0].innerHTML
            //app.nr = nr
            let fy = $(data).find("ol")[0]
            $(".fy ul").append($(fy).find("em,span,a"))
            $(".fy .tz").append($(fy).find("input"))
            $(fy).find("*").remove()
            if ($(data).find(".index_list_foot")[0]) {
                $(".fy .tz").prepend($(data).find(".index_list_foot")[0].innerText);
            }

            if ($(fy)[0]) {
                $(".fy .tz").prepend($(fy)[0].innerText);

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

