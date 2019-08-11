
var app = new Vue({
    el: '#main',
    data: {
        li: "",
        x: ["http://69p.top/?url=",
            "http://74t.top/?url=",
            "http://mimijiexi.top/?url=",
            "http://55jx.top/?url=",
            "http://api.baiyug.vip/index.php?url=",
            "http://playx.top/?url=",
            "http://nitian9.com/?url=",
            "http://19g.top/?url=",
            "http://607p.com/?url=",
            "http://52088.online/?url=",
            "http://bofang.online/?url=",
            "http://play1.online/?url=",
            "http://play1.online/?url=",
            "http://ckplay.online/?url=",
            "http://ckplay.online/?url=",
            "http://api.baiyug.vip/?url=",
            "http://880kan.com/?url=",
            "http://jx.09876as.cn/jx.php/?url=",
            "http://59uv.com/?url=",
            "http://bofang.online/?url=",
            "http://607p.com/?url=",
        ],
        url: ''
    },
    methods: {
        enter() {
            window.location.href = 'http://lspyq.cn/sp/index.html#' + this.$refs.url.value
        },
        init() {

            for (let i = 0; i < this.x.length; i++) {
                this.li += `<li onClick="app.click(` + i + `)">线路` + (i + 1) + `</li>`
            }
            this.url = this.x[0] + window.location.hash.substring(1)
            this.$refs.url.value = window.location.hash.substring(1)

        },
        click(x) {
            this.url = this.x[x] + window.location.hash.substring(1)
            this.$refs.list.style.display = 'none'
            this.$refs.srk.style.display = 'none'
        },
        btnclick() {
            if (this.$refs.list.style.display == 'block') {
                this.$refs.list.style.display = 'none'
                this.$refs.srk.style.display = 'none'
            } else {
                this.$refs.list.style.display = 'block'
                this.$refs.srk.style.display = 'block'
            }
        }
    },

    mounted() {
        this.init()

    },
})


