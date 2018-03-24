<template>
	<div class="container">
		<div class="title">请选择要赠送的花瓣</div>
		<swiper class="swiper-box" next-margin="35px" previous-margin="35px" @change="swiperChange">
			<swiper-item v-for="item in sakuraList" :key="item.index">
				<div class="to-alert-box" >
					<div class="sakura-text">
						<div class="name">{{item.sakura_name}}</div>
						<div class="poetry">{{item.poetry}}</div>
					</div>
					<img class="mysakura" src="https://s5.wandougongzhu.cn/s/e0/myflower1_485615.png" v-bind:class="{'rotate1': item.sakura_key == 'sakura_b','rotate2': item.sakura_key == 'sakura_c','rotate3': item.sakura_key == 'sakura_d','rotate4': item.sakura_key == 'sakura_e'}">
					<div class="mysakura-tips">
						<p>多余的樱花瓣可以赠送给好友哦</p>
						<p>每天首次赠送可获得1次抽樱花瓣的机会</p>
					</div>
					<div class="ihave-sakura">拥有<span>{{item.sakura_num}}</span>瓣</div>
				</div>
			</swiper-item>
		</swiper>
		<button class="mysakura-btn" open-type="share"> 
			送给好友
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user_id: '',
			userInfo: {},
			sakuraList: [], //已有樱花数量
			shareImgBtn: '', //分享花瓣给好友图
			shareImg: 'https://s4.wandougongzhu.cn/s/e4/__1_17ae88.jpg', //分享图
			sakuraDetailRotate: 0, //旋转角度
			shareSakuraKey: '', //分享的樱花key
			shareSakuraName: '', //分享的樱花name
			sakura_id: '',
		};
	},
	onShow() {
		this.userInfo = WMP.globalData.userInfo;
		this.user_id = this.userInfo.user_id;
		this.getUserActInfo();
	},
	// created() {
	// 	this.userInfo = WMP.globalData.userInfo;
	// 	this.user_id = this.userInfo.user_id;
	// 	this.getUserActInfo();
	// },
	onShareAppMessage (res) {
		let self = this;

		if (res.from == 'button') {
			Net.get('Sakura.userGiftSakura', {
				data: {
					user_id: this.user_id,
					sakura_key: this.shareSakuraKey || this.sakuraList[0].sakura_key
				}
			}).then(res=>{
				if(res.errno=='0') {
					this.sakura_id = res.data.sakura_id;
					this.shareSakuraName = this.sakuraList[0].sakura_name;
					console.log('/pages/sakura/sakura?share_sakura=' + this.shareSakuraName +'&user_id=' + this.user_id + "&sakura_id=" + this.sakura_id);
				} else {
					wx.showModal({title:'提示', content: res.errmsg});
				}
			});
			return {
				title: '送你一朵'+this.shareSakuraName+'，快来和我平分100万现金！',
				path: '/pages/sakura/sakura?share_sakura=' + this.shareSakuraName +'&user_id=' + this.user_id + "&sakura_id=" + this.sakura_id,
				imageUrl: this.shareImgBtn,
				success: function (res) {
					//任务三 赠送好友一瓣
					wx.showToast({
						title: '分享成功',
						icon: 'success',
						duration: 2000
					});
					// wx.redirectTo({
					// 	url: '/pages/sakura/sakura'
					// })
					self.getUserActInfo();
				},
				fail: function () {
					wx.showToast({
						title: '取消分享',
						icon: 'error',
						duration: 2000
					});
				}
			}
		} else {	
			let shareImg = this.shareImg;
			return {
				title: '100万现金等你来分！距离分钱仅剩'+this.restDay+'天！',
				path: '/pages/sakura/sakura',
				imageUrl: shareImg,
				success: function (res) {
					wx.showToast({
						title: '分享成功',
						icon: 'success',
						duration: 2000
					});
					self.getUserActInfo();
				},
				fail: function () {
					wx.showToast({
						title: '取消分享',
						icon: 'error',
						duration: 2000
					});
				}
			}
		}
		
	},
	methods: {
		swiperChange(res){
			let current = res.target.current;
			this.shareSakuraKey = this.sakuraList[current].sakura_key || this.sakuraList[0].sakura_key;
			this.shareSakuraName = this.sakuraList[current].sakura_name || this.sakuraList[0].sakura_name;
			this.shareImgBtn = this.sakuraList[current].share_img || this.sakuraList[0].share_img;
		},
		getUserActInfo() {
			Net.get('Sakura.getUserActivityInfoByUserId', {
				user_id: this.user_id
			}).then(res=>{
				let sakuraitem = res.data.info;
				let list = [];
				if (sakuraitem.sakura_a > 0) {
					list.push({
						'sakura_num': sakuraitem.sakura_a,
						'sakura_name': '八重樱',
						'poetry': '花开时来，花落时也要来。',
						'sakura_key': 'sakura_a',
						'share_img': 'https://s2.wandougongzhu.cn/s/7d/__1_de53f5.jpg'
					});
				}
				if (sakuraitem.sakura_b > 0) {
					list.push({
						'sakura_num': sakuraitem.sakura_b,
						'sakura_name': '吉野樱',
						'poetry': '今日花如雪，山樱如美人。',
						'sakura_key': 'sakura_b',
						'share_img': 'https://s.wandougongzhu.cn/s/c8/__2_209e10.jpg'
					});
				}
				if (sakuraitem.sakura_c > 0) {
					list.push({
						'sakura_num': sakuraitem.sakura_c,
						'sakura_name': '大岛樱',
						'poetry': '梦中繁花犹再现，樱瓣飘飘然。',
						'sakura_key': 'sakura_c',
						'share_img': 'https://s5.wandougongzhu.cn/s/58/__3_b21b66.jpg'
					});
				}
				if (sakuraitem.sakura_d > 0) {
					list.push({
						'sakura_num': sakuraitem.sakura_d,
						'sakura_name': '淡墨樱',
						'poetry': '樱花开处处，想似当年故乡路。',
						'sakura_key': 'sakura_d',
						'share_img': 'https://s.wandougongzhu.cn/s/10/__4_6eaacb.jpg'
					});
				}
				if (sakuraitem.sakura_e > 0) {
					list.push({
						'sakura_num': sakuraitem.sakura_e,
						'sakura_name': '寒绯樱',
						'poetry': '不见方三日，世上滿櫻花。',
						'sakura_key': 'sakura_e',
						'share_img': 'https://s5.wandougongzhu.cn/s/41/__5_4165fc.jpg'
					});
				}
				this.sakuraList = list;
			});
		},
		closeAlert (param) {
			param = false;
			this.maskShow = false;
		}
	},

};
</script>

<style scoped>
@font-face {
    font-family: "SakuraFont";
    src: url("https://s5.wandougongzhu.cn/s/72/fonts_80bdfb.eot"); /* IE9 */
    src: url("https://s5.wandougongzhu.cn/s/72/fonts_80bdfb.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
	url("https://s5.wandougongzhu.cn/s/2e/fonts_ec2f0d.ttf") format("truetype"), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url("https://s5.wandougongzhu.cn/s/34/fonts_953a8a.woff") format("woff"); /* chrome, firefox */
    font-style: normal;
    font-weight: normal;
}
@font-face {
    font-family: "SakuraKai";
    src: url("https://s3.wandougongzhu.cn/s/8d/kai_1c1e29.eot"); /* IE9 */
    src: url("https://s3.wandougongzhu.cn/s/8d/kai_1c1e29.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
	url("https://s4.wandougongzhu.cn/s/a7/kai_5c7eb2.ttf") format("truetype"), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url("https://s3.wandougongzhu.cn/s/a2/kai_f0b6d1.woff") format("woff"); /* chrome, firefox */
    font-style: normal;
    font-weight: normal;
}
body {
	font-family: "SakuraKai";
}
.rotate1 {
	transform: rotate(72deg);
}
.rotate2 {
	transform: rotate(144deg);
}
.rotate3 {
	transform: rotate(-144deg);
}
.rotate4 {
	transform: rotate(-72deg);
}
.container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	font-family: "SakuraKai";
	text-align: center;
	background: url('https://s5.wandougongzhu.cn/s/99/cover17_7cbf7e.jpg') no-repeat;
	background-size: 100% 100%;
	background-color: #f3f2f1;
	padding: 0;
	margin: 0;
}
.title {
	font-size: 28px;
	font-family: "sakuraKai";
	color: rgb(237, 61, 98);
	-webkit-text-stroke: 1rpx #ffffff;
	text-align: center;
	font-weight: bold;
	margin-top: 50px;
}
.to-alert-box{
	position: absolute;
	left: 50%;
	top: 0;
	transform: translate(-50%,0);
	width: 280px;
	height: 345px;
	font-size: 14px;
	text-align: center;
	background: url('https://s3.wandougongzhu.cn/s/65/alertbg_701e5c.png') no-repeat;
	background-size: cover;
}
.swiper-box {
	position: absolute;
	top: 50%;
	transform: translate(0,-50%);
	width: 375px;
	height: 345px;
	/* padding: 0 95px; */
	overflow: hidden;
}
.sakura-text {
	display: flex;
}
.mysakura-text {
	margin-top: 28px;
}
.mysakura-text .name{
	font-family: "SakuraFont";
	font-size: 25px;
	line-height: 25px;
}
.sakura-text .poetry {
	position: absolute;
	left: 21px;
	top: 15px;
	width: 14px;
	font-family: "SakuraKai";
	font-size: 14px;
	line-height: 16px;
	writing-mode: vertical-lr;
}
.sakura-text .name {
	position: absolute;
	left: 41px;
	top: 15px;
	width: 25px;
	height: 75px;
	font-family: "SakuraFont";
	font-size: 25px;
	line-height: 25px;
}
.mysakura{
	width: 130px;
	height: 165px;
	position: relative;
	margin: 55px auto;
}
.mysakura-tips {
	width: 100%;
	position: absolute;
	color: rgb(67, 67, 67);
	bottom: 60px;
	font-size: 12px;
	font-family: "SakuraKai";
	text-align: center;
}

.ihave-sakura {
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
	bottom: 25px;
	color: #191919;
	font-size: 14px;
	font-weight: bold;
}
.ihave-sakura span {
	color: rgb(255, 29, 95);
	margin: 0 2px;
}
.mysakura-btn {
	position: absolute;
	left: 50%;
	transform: translate(-50%,0);
	bottom: 50px;
	width: 115px;
	height: 38px;
	line-height: 38px;
	font-size: 14px;
	color: #fff;
	border: none;
	background: url('https://s2.wandougongzhu.cn/s/68/toyou_3d05c2.png') no-repeat;
	background-size: 100% 100%;
	margin: 0 auto;
}

.tips {
	font-size: 16px;
	color: rgb(87, 94, 137);
	display: flex;
	/* -webkit-text-stroke: 1rpx #ffffff; */
	text-align: center;
	/* font-weight: bold; */
}
</style>
