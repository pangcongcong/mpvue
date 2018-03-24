<template>
	<div class="container">
		<div class="tips">
			<div>我的樱花</div>
			<div class="mysakura"></div>
		</div>
		<div class="cash-box">
			<img class="icon" src="https://s5.wandougongzhu.cn/s/ca/xianjin_82b0bb.png" alt="">
			<div class="cash-content">
				<div class="tips2">
					<span>{{toCashNum || 12}}</span>元
					<div class="mini-tip">24小时内存入微信零钱</div>
				</div>
				<div class="to-cash-btn" @click="showChangeCash()">
					兑换现金
				</div>
			</div>
		</div>
		
		<div class="score-box">
			<img class="icon" src="https://s3.wandougongzhu.cn/s/ad/jifen_964890.png" alt="">
			<div class="score-content">
				<div class="tips2">
					价值<span>{{scoreToCash}}</span>元 ({{toScoreNum}})积分
					<div class="mini-tip">下单可直接抵现{{scoreToCash}}元</div>
				</div>
				<div class="to-score-btn">
					兑换积分
				</div>
			</div>
		</div>
		<div id="mask" v-if="maskShow">
			<div class="to-alert-box">
				<div class="colse" @click="closeAlert(maskShow)"></div>
				<div class="mysakura-tips">
					<p>即将为您兑换豌豆公主<span></span>积分，</p>
					<p>可抵现<span></span>元，下单时可抵现。</p>
				</div>
				<div class="btn-box">
					<div class="mysakura-btn dis-btn" @click="closeAlert(maskShow)">
						取消
					</div>
					<div class="mysakura-btn" @click="showChangeScore()">
						去兑换
					</div>
				</div>
			</div>
		</div>
		<div id="suc" v-if="sucResShow">
			<div class="suc-title">恭喜您，<span v-if="type == '0'">积分</span> <span v-if="type == '1'">现金</span>兑换成功！</div>
			<div class="suc-tips" v-if="type == '0'">积分已经放入豌豆公主账号<span>{{phone}}</span></div>
			<div class="suc-tips" v-if="type == '1'">现金24小时内会存入您的微信钱包</div>
			<div class="suc-res" v-if="type == '0'">{{toScoreNum}}<span>积分</span></div>
			<div class="suc-res" v-if="type == '1'">{{toCashNum}}<span>现金</span></div>
			<!-- toCashTip -->
			<div v-if="type == '1' && toCashNum < 1">
				<div class="suc-tips">{{toCashTip}}</div>
				<img class="to-cash-tip" src="https://s4.wandougongzhu.cn/s/f3/613_360bb0.png" alt="">
			</div>
			<div class="suc-banner"></div>
			<a href="/page/index/index" class="suc-btn">去逛逛</a>
		</div>
	</div>
</template>

<script>
import card from '@/components/card';

export default {
	data() {
		return {
			user_id: '',
			userInfo: {},
			toCashNum: 0,
			toScoreNum: 0,
			maskShow: false,
			sucResShow: false,
			scoreToCash: 0,
			toCashTip: '',
			type: '0',
			phone: '',
			realMoney: ''
		};
	},

	components: {
		card
	},

	created() {
		WMP.checkAuthPromise(this).then(()=>{
			this.userInfo = WMP.globalData.userInfo;
			this.user_id = this.userInfo.user_id;
			this.getUserActInfo();
		});
	},
	methods: {
		bindViewTap() {
			const url = '../logs/logs';
			wx.navigateTo({ url });
		},
		getUserActInfo() {
			Net.get('Sakura.getUserActivityInfoByUserId', {
				user_id: this.user_id
			}).then(res=>{
				this.toCashNum = res.data.user_exchange_price;
				this.toScoreNum = res.data.user_exchange_score;
				this.scoreToCash = res.data.score_to_cash;
			});
		},
		showChangeScore() {
			Net.get('Sakura.userExchange', {
				data: {
					user_id: this.user_id,
					type: '0'
				}
			}).then(res=>{
				this.type = '0';
				this.maskShow = false;
				this.sucResShow = true;
			});
		},
		showChangeCash() {
			Net.get('Sakura.userExchange', {
				data: {
					user_id: this.user_id,
					type: '1'
				}
			}).then(res=>{
				this.type = '1';
				this.maskShow = true;
				this.sucResShow = true;
			});
		},
		// userExchange
		closeAlert () {
			this.maskShow = false;
		}
	}
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
	color: #191919;
}
.btn-box {
	display: flex;
}
.colse {
	position: absolute;
	top: -45px;
	right: 0px;
	width: 30px;
	height: 50px;
	background: url('https://s2.wandougongzhu.cn/s/5f/_977ab3.png') no-repeat;
	z-index: 2;
	background-size: contain;
	cursor: pointer;
}
.mysakura-btn,.suc-btn {
	bottom: 10px;
	width: 100px;
	height: 35px;
	line-height: 38px;
	font-size: 14px;
	color: #fff;
	background: url('https://s2.wandougongzhu.cn/s/68/toyou_3d05c2.png') no-repeat;
	background-size: 100% 100%;
	margin: 0 auto;
}
.dis-btn {
	background: url('https://s3.wandougongzhu.cn/s/01/_2fd8c9.png') no-repeat;
	background-size: 100% 100%;
}
.to-alert-box {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	width: 280px;
	height: 172px;
	font-size: 14px;
	text-align: center;
	background: url('https://s3.wandougongzhu.cn/s/3d/alertmin_05569c.png') no-repeat;
	background-size: 100% 100%;
}
.to-cash-tip {
	width: 200px;
	height: 60px;
	margin: 0 auto;
}
#mask,#suc {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,.7);
}
#suc {
	text-align: center;
	background: url('https://s3.wandougongzhu.cn/s/1f/sucbg_ee24f9.jpg') no-repeat;
	background-size: cover;
}

#suc .suc-title {
	font-size: 22px;
	margin-top: 80px;
	color:rgb(237, 61, 98);
	-webkit-text-stroke:1rpx #ffffff;
	text-align:center;
	font-weight:bold;
	font-family: "sakuraKai";
}
#suc .suc-tips {
	font-size: 14px;
	color: #191919;
}

#suc .suc-res {
	font-size: 32px;
	color: rgb(234, 60, 98);
	font-weight: bold;
	margin: 40px auto 5px auto;
}
.suc-banner {
	width: 345px;
	height: 200px;
	background: url('https://s5.wandougongzhu.cn/s/98/banner_c52dba.jpg') no-repeat;
	background-size: 100% 100%;
	margin: 0 auto;
}
.suc-res span {
	font-size: 12px;
}
.suc-btn {
	display: block;
	margin-top: 30px;
}
.container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	font-family: "SakuraKai";
	text-align: center;
	background: url('https://s1.wandougongzhu.cn/s/b8/bg2_df61bf.jpg') no-repeat;
	background-size: 100% 100%;
	background-color: #f3f2f1;
}
.mysakura-tips {
	width: 230px;
	height: 60px;
	margin: 40px auto 10px auto;
}
.mysakura {
	width: 15px;
	height: 15px;
	margin: 3px auto;
	background: url('https://s3.wandougongzhu.cn/s/7e/4_88421d.png') no-repeat;
	background-size: cover;
}
.cash-box,.score-box {
	position: absolute;
	top: 180px;
	width: 275px;
	height: 80px;
	background: url('https://s5.wandougongzhu.cn/s/52/xianjinbtn_254e29.png') no-repeat;
	background-size: 100% 100%;
	margin: 10px auto;
	color: #ffffff;
	font-family: "sakuraKai";
}
.cash-box .icon ,.score-box .icon{
	width: 35px;
	height: 20px;
	position: absolute;
	left: -5px;
}

.cash-content,.score-content {
	display: flex;
	align-items: center;
	justify-content: center;
}
.score-box {
	top: 300px;
	background: url('https://s4.wandougongzhu.cn/s/60/jifenbtn_3e240f.png') no-repeat;
	background-size: cover;
}
.tips2 {
	font-size: 12px;
	color: #fff;
	width: 170px;
	height: 50px;
}
.tips2 span {
	font-size: 28px;
}
.mini-tip {
	font-size: 12px;
}
.tips {
	font-size: 16px;
	color: rgb(87, 94, 137);
	/* display: flex; */
	/* -webkit-text-stroke: 1rpx #ffffff; */
	text-align: center;
	/* font-weight: bold; */
}
.to-cash-btn,.to-score-btn {
	width: 80px;
	height: 30px;
	font-size: 12px;
	line-height: 30px;
	color: rgb(63, 4, 4);
	margin: 25px auto;
	background: url('https://s5.wandougongzhu.cn/s/f8/ing_fe1225.png') no-repeat;
	background-size: 100% 100%;
}

#mask {
	/* visibility: hidden; */
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

