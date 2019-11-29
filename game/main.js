
var win = document.getElementById('win')
var btn = document.getElementById('btn')
var err = document.getElementById('err')
var yes = document.getElementById('yes')
var bg = document.getElementById('bg')
win.play()
btn.play()
err.play()
$(document).ready(function () {
    $(document).bind("contextmenu", function (e) {
        return false;
    });
});

function arr() {
    this.num9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.num16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    this.num25 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    this.num36 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
    return this
}

$(".n").click(function () {
    // playAudio("btn")
    btn.play()
    $("#game_box").show()
    $("#control").show()
    $("#option").hide()
    clearInterval(window.timer)
    window.t = 0
    $("#time span").text(t + "秒")
    window.nowN = this.innerText
    gameControl(this.innerText)
})

$("#restart").click(function () {
    // playBG()
    bg.play()
    btn.play()

    // playAudio("btn")
    clearInterval(window.timer)
    window.t = 0
    $("#time span").text(t + "秒")
    gameControl(window.nowN)
})

$("#back").click(function () {
    // playBG("stop")
    bg.pause()
    // playAudio("btn")
    btn.play()

    $("#game_box")[0].innerHTML = ""
    clearInterval(window.timer)
    window.t = 0
    $("#time span").text(t + "秒")
    $("#game_box").hide()
    $("#control").hide()
    $("#option").show()
})

function gameControl(num) {
    $("#time").show()
bg.play()
    // playBG()
    window.t = 0
    $("#game_box")[0].innerHTML = ``
    window.nowNum = 0
    window.n = new arr()["num" + num]
    window.s = n.length + 1
    for (let i = 1; i < s; i++) {
        $("#game_box")[0].innerHTML += `<div class="w` + num + `" onclick="c(this)">` + n.splice(sum(0, n.length - i), 1)[0] + `</div>`
    }
    window.timer = setInterval(() => {
        t += 0.01
        $("#time span").text(t.toFixed(1) + "秒")
    }, 10);
}

function c(me) {
    if (me.innerHTML == window.nowNum + 1) {
        me.onclick = function () {
            me.style.background = "rgb(255, 68, 0)"
            setTimeout(() => {
                me.style.background = "rgb(114, 234, 255)"
            }, 200);
        }
        me.style.background = "rgb(114, 234, 255)"
        window.nowNum++
        if (me.innerHTML == window.s - 1) {
            // playAudio("win")
            win.play()
            console.log("游戏结束，成绩为：" + window.t.toFixed(2) + "秒")
            $("#game_box")[0].innerHTML += `<div id="win">用时：` + window.t.toFixed(2) + `秒</div>`
            clearInterval(window.timer)
            let gameNList = $("#game_box div")
            for (let i = 0; i < gameNList.length; i++) {
                gameNList[i].onclick = ""
            }
            return
        }
        // playAudio("yes")
        yes.play()
    } else {
        // playAudio("err")
        err.play()
        me.style.background = "rgb(255, 68, 0)"
        setTimeout(() => {
            if (me.style.background != "rgb(114, 234, 255)") {
                me.style.background = "#eee"
            }
        }, 200);
    }
}

function playAudio(e) {
    document.getElementById('audio').src = "./" + e + ".mp3";
    document.getElementById('audio').play();
}

function playBG(e) {
    document.getElementById('bg').volume = 0.8
    e == "stop" && document.getElementById('bg').pause();
    e != "stop" && document.getElementById('bg').play();
}

function sum(m, n) {
    var num = Math.floor(Math.random() * (m - n) + n);
    return num
}
