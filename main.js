var Vue = window.Vue;
var vant = window.vant;

Vue.use(vant.Lazyload);
Vue.use(vant.Row).use(vant.Col);
Vue.use(vant.DropdownMenu).use(vant.DropdownItem);
Vue.use(vant.Search);
Vue.use(vant.Icon);
var app = new Vue({
    el: '#main',
    data: {
        Vurl: "",
        value: 0,
        url: "",
        xl: [],
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
    },
    methods: {
        open() {
            if (this.$refs.video.style.display == 'none') {
                this.$refs.video.style.display = 'block'
            } else {
                this.$refs.video.style.display = 'none'
            }
        },

        change(v) {
            window.location.href = "?xl=" + v + "&url=" + this.Vurl
        },

        onPlay() {
            this.url = this.x[this.value] + this.Vurl
            window.location.href = "?xl=" + this.value + "&url=" + this.Vurl
        },

        init() {
            for (let i = 0; i < this.x.length; i++) {
                this.xl.push({ text: '线路' + i, value: i })
            }
            
            if (window.location.href.split("?xl=")[1]) {
                this.value = parseInt(window.location.href.split("?xl=")[1].split("&")[0])
                if (window.location.href.split("?xl=")[1].split("&url=")[1]) {
                    this.Vurl = window.location.href.split("&url=")[1]
                    this.url = this.x[this.value] + this.Vurl
                }
            }

        },

    },

    mounted() {
        this.init()

    },
})


