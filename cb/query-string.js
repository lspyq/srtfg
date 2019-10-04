export default {
	searchUrl: function(name, page) {
		return "http://okzyw.com/index.php?m=vod-search-pg-" + (page ? page : 1) + "-wd-" + name + ".html"
	},
	infoUrl: function(id) {
		return "http://okzyw.com/?m=vod-detail-id-" + id + ".html"
	},
	id: function(data) {
		let idList = []
		let list = data.split("detail-id-");
		list.splice(0, 1)
		for (let item of list) {
			let id = item.split(".html")[0]
			let title = item.split(">")[1].split("<")[0]
			idList.push({
				id: id,
				title: title
			})
		}
		return idList
	},
	info: function(data) {
		return data.split("剧情介绍：")[1].split('vodplayinfo">')[1].split("<")[0]
	},
	name: function(data) {
		return data.split("<h2>")[1].split("</h2>")[0]
	},
	img: function(data) {
		return data.split("vodImg")[1].split('src="')[1].split('"')[0]
	},
	resources: function(data) {
		let list = data.split('"suf">')
		let res = {}
		list.splice(0, 1)
		list[list.length - 1] = list[list.length - 1].split('class="foot">')[0]
		// console.log(list)
		for (let item of list) {
			let key = item.split("<")[0] //播放类型
			key = key == "迅雷下载" ? "mp4" : key
			let newItem = item.split("<li>")
			newItem.splice(0, 1)
			res[key] = []
			for (let i of newItem) {
				res[key].push({
					name: i.split("/>")[1].split("<")[0].split("$")[0],
					url: i.split("/>")[1].split("<")[0].split("$")[1]
				}) //播放类型
			}


		}
		//删除云播地址
		for (let i in res) {
			let type = res[i][0].url.split("/")
			// console.log(type)
			if (type[type.length - 1].split(".").length <= 1) {
				delete res[i]
			}
		}
		// console.log(res)



		return res
	},
	all: function(data) {
		return {
			info: this.info(data),
			img: this.img(data),
			resources: this.resources(data)
		}
	}
}
