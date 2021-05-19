var W = Math.min($('body')[0].offsetWidth, $('body')[0].offsetHeight)
var T = ($('body')[0].offsetHeight - W) / 2
var L = ($('body')[0].offsetWidth - W) / 2
window.Time = { f: 0, m: 0, hm: 0 }
$("#container").css({
    width: W + "px",
    height: W + "px",
    top: T + "px",
    left: L + "px"
})
$("#control").css({
    width: W + "px",
    height: W + "px",
    top: T + "px",
    left: L + "px"
})
N9 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
N16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
N25 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
N36 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
N = {
    9: N9,
    16: N16,
    25: N25,
    36: N36,
}

for (let i = 3; i < 7; i++) {
    let G = $(`<div class="grid"></div>`)
    let bg
    i == 3 || i == 6 ? (bg = "#ddd") : (bg = "#fff")
    $(G).css({
        width: W / 2 + "px",
        height: W / 2 + "px",
        "font-size": W / 2 / 2 + "px",
        background: bg
    })
    $(G).text(i * i)
    $("#control").append(G)
}

$("#control .grid").click(function (event) {
    // $("#container").html("")
    window.nN = 0
    $("#control").hide()
    let n = N[$(this).text()].slice()
    n.sort(function () { return 0.5 - Math.random() })
    let xx = 1
    for (let i = 0; i < $(this).text(); i++) {
        let G = $(`<div class="grid"></div>`)

        if (Math.sqrt($(this).text()) % 2 == 0 && i != 0 && i % Math.sqrt($(this).text()) == 0) {
            xx++
        }
        if ((i + xx) % 2) {
            bg = "#fff"
        } else {
            bg = "#ddd"
        }
        console.log(xx)
        $(G).css({
            width: W / Math.sqrt($(this).text()) + "px",
            height: W / Math.sqrt($(this).text()) + "px",
            "font-size": W / Math.sqrt($(this).text()) / 2 + "px",
            background: bg

        })
        $(G).text(n[i])
        $("#container").append(G)
    }

    $(".tips").css({
        width: W / Math.sqrt($(this).text()) + "px",
        height: W / Math.sqrt($(this).text()) + "px",
    })



    $("#container .grid").click(function (event) {

        let me = $(".tips").clone()

        $(me).css({
            top: $(this)[0].offsetTop + T,
            left: $(this)[0].offsetLeft + L,
            display: "block"
        })
        if ($(this).text() == window.nN + 1) {
            $(me).css({
                background: "#0ff"
            })
        } else {
            $(me).css({
                background: "#f40"
            })
        }

        $(me).addClass("" + $(this).text())
        if (!$("." + $(this).text())[0]) {
            console.log(!!$("." + $(this).text())[0])
            console.log(me)
            $("body").append(me[0])
        }
        $(me).fadeOut(100, function () {
            $(me).remove()
        });


        if ($(this).text() == window.nN + 1) {
            window.nN++
        }

        if (window.nN == n.length) {
            // $("#time").text(window.Time)

            clearTimeout(window.jishi)
            console.log("完成:", window.Time)
        }
        event.stopPropagation();
    })
    window.jishi = setInterval(() => {

        if (window.Time.hm < 100) {
            window.Time.hm++
        }
        if (window.Time.hm == 100) {
            window.Time.m++
            window.Time.hm = 0
        }
        if (window.Time.m == 60) {
            window.Time.f++
            window.Time.m = 0
        }
        let hm = window.Time.hm < 10 ? "0" + window.Time.hm : window.Time.hm
        let m = window.Time.m < 10 ? "0" + window.Time.m : window.Time.m
        let f = window.Time.f < 10 ? "0" + window.Time.f : window.Time.f
        let t = "" + f + ":" + m + ":" + hm

        $("#time").text(t)
    }, 10);
    event.stopPropagation();
})









$("body").click(function () {
    location.reload()
})
$("#container").click(function (event) {
    event.stopPropagation();
})
