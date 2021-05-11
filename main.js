var W = Math.min($('body')[0].offsetWidth, $('body')[0].offsetHeight)
var T = ($('body')[0].offsetHeight - W) / 2
var L = ($('body')[0].offsetWidth - W) / 2

$("#container").css({
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
    $("#container").append(G)
}

$(".grid").click(function () {
    $("#container").html("")
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
})

$("body").click(function () {
    location.reload()
})
$("#container").click(function (event) {
    event.stopPropagation(); 
})
