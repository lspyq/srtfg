function changeVideo(node) {
    if (window.V.movieInfo[1] == node.dataset.id) {
        return
    }
    document.title = window.V.movieInfo[0] + "_" + window.V.movieDetails[node.dataset.id - 1].split("$")[0]
    dp.switchVideo({ url: node.dataset.url })
    window.V.movieInfo[1] = node.dataset.id
    V.videoUrl = node.dataset.url
    console.log(node.dataset.url)
    $("li").removeClass("active");
    $(node).addClass("active");
    node.onclick = ""
    dp.play()
}

function setCss(css) {
    document.head.innerHTML += `<style>` + css + `</style>`
}
function addChild(here, tag, more) {
    var oHere = document.getElementsByTagName(here)[0];
    var oTag = document.createElement(tag);
    for (let key in more) {
        oTag[key] = more[key]
    }
    oHere.appendChild(oTag);
}

function onLoadOver(bool, callfun) {
    var num = 50
    var a = setInterval(() => {
        console.log(window[bool])
        if (window[bool]) {
            clearInterval(a)
            callfun()
        } else {
            if (!num) {
                callfun("加载失败")
                clearInterval(a)
            }
            num--
        }
        console.log(num)
    }, 1);

}
function getScript(url, callfun, tryNum) {
    jQuery.getScript(url)
        .done(function () {
            callfun()
        })
        .fail(function () {
            if (tryNum > 0) {
                getScript(url, callfun)
                tryNum--
            } else {
                callfun(url)
            }
        });
}

function toPlay() {
    // console.log(V);
    console.log([V, V, V, V])
    // var src = V.movieDetails[parseInt(V.movieInfo[1]) - 1].split("$")[1]
    var src = V.videoUrl
    var jishu = V.movieDetails[parseInt(V.movieInfo[1]) - 1].split("$")[0]
    document.title = V.movieInfo[0] + "_" + jishu
    console.log(src);
    var oli = ''
    for (let i = 0; i < V.movieDetails.length; i++) {
        oli += `<li` + (V.movieInfo[1] == i + 1 ? " class='active'" : ` onclick="changeVideo(this)"`) + ` data-url="` + V.movieDetails[i].split("$")[1] + `" data-id="` + (i + 1) + `">` + V.movieDetails[i].split("$")[0] + `</li>`
    }
    document.body.innerHTML = `<div id="dplayer"></div><div id="list"><ul>` + oli + `</ul></div>`
    dp = new DPlayer({
        container: document.getElementById('dplayer'),
        screenshot: true,
        video: {
            url: src,
        },
    });
    dp.play()
}



addChild('head', "meta", { "name": "viewport", "content": "width=device-width, initial-scale=1.0" })
addChild('head', "link", { "rel": "stylesheet", "href": "https://cdn.bootcss.com/dplayer/1.25.0/DPlayer.min.css" })
document.body.innerHTML = '初始化成功...'

document.body.innerHTML += '<br>正在加载jQuery...'
addChild('head', "script", { "type": "text/javascript", "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.0/jquery.min.js" })
onLoadOver('jQuery', function (err) {
    if (err) {
        document.body.innerHTML += '<br>jQuery加载失败，请重试...'
        return
    }
    $("body")[0].innerHTML += "<br>jQuery加载成功..."
    setCss(`
        body{padding:0;margin:0}
        ul,li {padding-inline-start: 0;margin: 5px 0;list-style: none;float: left;}
        li {width: 23vw;background: #e4f8ff;padding: 0.3vw 0;margin: 0vw 1vw 2vw 1vw;border-radius: 5px;box-shadow: 0px 0px 0px 1.5px #41c4f4;color: #048bd8;text-align: center}
        .active{background:#eee;color:#888;box-shadow:0px 0px 0px 1.5px #bbb;}
        `)

    $("body")[0].innerHTML += "<br>开始加载hls..."
    getScript("https://cdn.bootcdn.net/ajax/libs/hls.js/8.0.0-beta.3/hls.min.js", function (err) {
        if (err) {
            $("body")[0].innerHTML += '<br>加载:"' + err + '"出错,请重试。'
            return
        }
        $("body")[0].innerHTML += "<br>hls加载成功..."

        $("body")[0].innerHTML += "<br>开始加载播放器..."
        getScript("https://cdn.bootcss.com/dplayer/1.25.0/DPlayer.min.js", function (err) {
            if (err) {
                $("body")[0].innerHTML += '<br>加载:"' + err + '"出错,请重试。'
                return
            }
            $("body")[0].innerHTML += "<br>播放器加载成功..."
            if (window.V) {
                toPlay()
            }
        }, 5)

    }, 5)
    $("body")[0].innerHTML += "<br>正在解析视频数据..."
    $.post("https://jx.688ing.com/parse/op/play", { movieUrl: window.location.href.split('?url=')[1], apiId: 0 }, function (V) {
        $("body")[0].innerHTML += "<br>即将播放..."
        window.V = V
        if (window.DPlayer) {
            toPlay()
        }

    });
})
