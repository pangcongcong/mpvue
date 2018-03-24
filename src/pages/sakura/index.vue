<template>
	<div class="container">
		<div class="w-sakura" @click="showSakuraW()">
			<div>
				万能樱<span>{{sakura_W_num}}</span>
			</div>
		</div>
		<div class="tips">
			每集齐1朵樱花分1份现金，集的越多分的越多
		</div>
		<div class="tips-2">
			已集齐<span class="num">{{totalSakuraNum}}朵</span>樱花&nbsp;<span>{{restText}}</span>
		</div>
		<div class="reel-box">
			<!-- v-if="sakura_H_num > 0" -->
			<div class="my-sakura-box" >
				合成的樱花<div v-for="item in sakura_H_num" class="my-sakura"></div>
			</div>
			<div class="flower-box">
				<div class="top">
					<div class="flower-item" :class="{'disflower': sakura_A_num == '0'}">
						<span>八重樱</span>
						<div v-if="sakura_A_num > 0" class="click-box" @click="showSakuraDetail('sakura_a','八重樱','花开时来，花落时也要来。')">
							<div class="num-box">{{sakura_A_num}}</div>
							<div class="dot-box">
								<div class="dot dot-1"></div>
								<div class="dot dot-2"></div>
								<div class="dot dot-3"></div>
								<div class="dot dot-4"></div>
								<div class="dot dot-5"></div>
								<div class="dot dot-6"></div>
								<div class="dot dot-7"></div>
								<div class="dot dot-8"></div>
								<div class="dot dot-9"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="center">
					<div class="flower-item center-left" :class="{'disflower': sakura_E_num == '0'}">
						<span>寒绯樱</span>
						<div  v-if="sakura_E_num > 0" class="click-box" @click="showSakuraDetail('sakura_e','寒绯樱','不见方三日，世上滿櫻花。')">
							<div class="num-box">{{sakura_E_num}}</div>
							<div class="dot-box">
								<div class="dot dot-1"></div>
								<div class="dot dot-2"></div>
								<div class="dot dot-3"></div>
								<div class="dot dot-4"></div>
								<div class="dot dot-5"></div>
								<div class="dot dot-6"></div>
								<div class="dot dot-7"></div>
								<div class="dot dot-8"></div>
								<div class="dot dot-9"></div>
							</div>
						</div>
					</div>
					<div class="mix-btn" :class="{'new-mix-btn': is_compose}" @click="showComposeAni">合成</div>
					<div class="flower-item center-right" :class="{'disflower': sakura_B_num == '0'}">
						<span>吉野樱</span>
						<div  v-if="sakura_B_num > 0" class="click-box" @click="showSakuraDetail('sakura_b','吉野樱','今日花如雪，山樱如美人。')">
							<div class="num-box">{{sakura_B_num}}</div>
							<div class="dot-box">
								<div class="dot dot-1"></div>
								<div class="dot dot-2"></div>
								<div class="dot dot-3"></div>
								<div class="dot dot-4"></div>
								<div class="dot dot-5"></div>
								<div class="dot dot-6"></div>
								<div class="dot dot-7"></div>
								<div class="dot dot-8"></div>
								<div class="dot dot-9"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="bottom">
					<div class="flower-item bottom-left" :class="{'disflower': sakura_D_num == '0'}">
						<span>淡墨樱</span>
						<div  v-if="sakura_D_num > 0" class="click-box" @click="showSakuraDetail('sakura_d','淡墨樱','樱花开处处，想似当年故乡路。')">
							<div class="num-box">{{sakura_D_num}}</div>
							<div class="dot-box">
								<div class="dot dot-1"></div>
								<div class="dot dot-2"></div>
								<div class="dot dot-3"></div>
								<div class="dot dot-4"></div>
								<div class="dot dot-5"></div>
								<div class="dot dot-6"></div>
								<div class="dot dot-7"></div>
								<div class="dot dot-8"></div>
								<div class="dot dot-9"></div>
							</div>
						</div>
					</div>
					<div class="flower-item bottom-right" :class="{'disflower': sakura_C_num == '0'}">
						<span>大岛樱</span>
						<div v-if="sakura_C_num > 0" class="click-box" @click="showSakuraDetail('sakura_c','大岛樱','梦中繁花犹再现，樱瓣飘飘然。')">
							<div class="num-box">{{sakura_C_num}}</div>
							<div class="dot-box">
								<div class="dot dot-1"></div>
								<div class="dot dot-2"></div>
								<div class="dot dot-3"></div>
								<div class="dot dot-4"></div>
								<div class="dot dot-5"></div>
								<div class="dot dot-6"></div>
								<div class="dot dot-7"></div>
								<div class="dot dot-8"></div>
								<div class="dot dot-9"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="rest-count">
				今日剩余次数<span>{{rest_count || 0}}</span>/4
			</div>
			<div class="lottery-btn" v-if="restDay > 0 || restDay == '-1'" @click="lotterySakura()">
				抽樱花瓣
			</div>
			<a href="/pages/tocash/tocash" class="lottery-btn" v-if="restDay == '0' " @click="lotterySakura()">
				兑换现金
			</a>
			<!-- <div class="lottery-btn" v-if="restDay == '-1'">
				活动已结束
			</div> -->
		</div>
		<div class="task-box">
			<div class="task-title">
				做任务&nbsp;领奖励
			</div>
			<div class="task-item" v-for="(item, index) in taskList" :key="item.task_id">
				<div class="task-item-evd">每日</div>
				<div class="task-item-name">{{item.name}}</div>
				<div class="task-item-img">
					<img src="https://s3.wandougongzhu.cn/s/bc/_157403.png" alt="">
				</div>
				<div v-if="item.status == '0'" class="task-item-btn receive" @click="getTask(item.task_id)">
					领取
				</div>
				<div v-if="item.status == '1'" class="task-item-btn done">
					
				</div>
				<div v-if="item.status == '-1'" class="task-item-btn" @click="toFinishTask(index)">
					<button v-if="index == 2" open-type="share" :data-type="1">
						去完成
					</button>
					<div v-if="index != 2">
						去完成
					</div>
				</div>
				<!-- <div @click="getTask(item.task_id)" v-bind:class="{'task-item-btn': true, 'receive': item.status == '0', 'done': item.status == '1'}">{{item.action_name ? item.action_name : ''}}</div> -->
			</div>
			<div class="task-item">
				<div class="suc-box">
					<div class="suc-box-top">
						<div class="task-item-evd task-item-suc">成就</div>
						<span class="task-item-name">邀请好友注册</span>
					</div>
					<div class="suc-box-bot">
						已注册<span>{{inviteCount ? inviteCount : 0 }}</span>人
					</div>
				</div>
				<div class="task-item-img">
					<div v-if="sakura_W_num > 0" class="num">{{sakura_W_num}}</div>
					<img src="https://s.wandougongzhu.cn/s/0e/_16ec47.png" alt="">
				</div>
				<div class="to-invite" v-bind:class="{'task-item-btn': true}" @click="showinviteSakuraAll()">去邀请</div>
			</div>
		</div>
		<div class="rule-box">
			<div class="rule-title">活动规则</div>
			<img class="celendar" src="https://s4.wandougongzhu.cn/s/5d/_f90015.png" alt="">
			<img class="red-umbrella" src="https://s4.wandougongzhu.cn/s/4d/shanzi_eee532.png" alt="">
			<div class="rule-content">
				<div>
					<p class="rule-p-title">活动分为两个阶段</p>
					<p>1.集花瓣阶段：4月1日 - 4月10日，可以通过完成每日任务，获得抽樱花瓣的机会。通过消耗樱花瓣各1个合成樱花。</p>
					<p>2.分现金阶段：4月11日 - 4月13日，可将合成的樱花兑换现金，或豌豆公主积分。4月11日0点系统会将符合条件的樱花瓣自动合成樱花</p>
					<p>3.活动期间，完成以下任务可获得抽樱花瓣的机会：访问活动页，分享活动到微信，赠送好友1瓣樱花，浏览豌豆公主首页。每天每个任务每个账号最多完成1次。</p>
					<p>4.抽樱花次数会在次日0点清空，请在0点前全部用完。</p>
					<p>5.分现金将在4月11日早10:00开启，于4月13日24:00结束，结束后樱花将无法兑换现金，请务必在活动前完成兑换。</p>
				</div>
				<!--  -->
				<div class="rule-show-more" v-bind:class="{'shouqi': ruleShowMore}" @click="showMoreRule()" v-text="ruleShowMore ? '收起' :'展开更多'"></div>
				<div v-if="ruleShowMore">
					<p class="faq-title">FAQ</p>
					<p class="faq-q">1.我要如何赠送好友樱花瓣</p>
					<p>当拥有的樱花瓣数量大于1个时，点击樱花瓣或赠送好友1瓣任务，可将樱花瓣发送给好友。</p>
					<p class="faq-q">2.赠送好友的樱花瓣在何时扣除</p>
					<p>选择樱花瓣后，无论是否分享或是否有人领取，樱花瓣都将被扣除。请在选择樱花瓣后完成分享流程，中途中止也不会返还樱花瓣。</p>
					<p class="faq-q">3.4月11日如果还有未合成的樱花瓣该怎么办</p>
					<p>4月11日0点系统会自动帮您合成樱花瓣，同时集花瓣入口将关闭，所以不满足各5瓣的樱花将无法合成樱花。</p>
					<p class="faq-q">4.什么是万能樱</p>
					<p>万能樱是通过完成特殊任务收集到的，可以兑换任意一瓣樱花。</p>
					<p class="faq-q">5.邀请好友注册如何获得万能樱</p>
					<p>好友在您的分享页完成注册并验证手机号，您将获得万能樱1个。</p>
				</div>
			</div>
			<div class="rec-btn" @click="showGiftRec()">
				赠领记录
			</div>
		</div>
		<div id="mask" v-if="maskShow">
			<!-- 合成樱花 -->
			<div class="compose-box" v-if="composeShow">
				<div class="compose-tips">
					恭喜获得一朵樱花
				</div>
				<div class="compose-ani"></div>
				<div class="compose-ani-2"></div>
				<div class="compose-ani-3"></div>
				<div class="shink"></div>
				<div class="shink2"></div>
				<div class="compose-btn" @click="closeAlert(composeShow)">确定</div>
			</div>
			<!-- 点击**樱花瓣弹框 -->
			<div class="to-alert-box" v-if="sakuraDetailShow">
				<div class="colse" @click="closeAlert(sakuraDetailShow)"></div>
				<div class="sakura-text">
					<div class="name">{{sakuraDetailName}}</div>
					<div class="poetry">{{sakuraDetailPoetry}}</div>
				</div>
				<!-- <div class="mysakura" v-bind:style="{transform: 'rotate('+sakuraDetailRotate+'deg)'}"></div> -->
				<img class="mysakura" v-bind:class="{'rotate1': sakuraDetailKey == 'sakura_b','rotate2': sakuraDetailKey == 'sakura_c','rotate3': sakuraDetailKey == 'sakura_d','rotate4': sakuraDetailKey == 'sakura_e'}" src="https://s5.wandougongzhu.cn/s/e0/myflower1_485615.png">
				<div class="mysakura-tips">
					<p>多余的樱花瓣可以赠送给好友哦</p>
					<p>每天首次赠送可获得1次抽樱花瓣的机会</p>
				</div>
				<button open-type="share" :data-type="0" class="mysakura-btn">
					送给好友
				</button>
			</div>
			<!-- 恭喜你获得了**樱 -->
			<div class="get-alert-box" v-if="lotteryResShow">
				<div class="colse" @click="closeAlert(lotteryResShow)"></div>
				<div class="mysakura-text">
					<div class="congratulation">恭喜你，获得了</div>
					<div class="name">{{lottery_res.sakura_name}}</div>
				</div>
				<div class="getsakura">

				</div>
				<!-- <img class="getsakura" src="https://s5.wandougongzhu.cn/s/e0/myflower1_485615.png"> -->
				<div class="mysakura-btn" @click="closeAlert(lotteryResShow)">
					确定
				</div>
			</div>
			 <!-- 恭喜获得万能樱 -->
			<div class="get-alert-box" v-if="sakuraAllShow">
				<div class="mysakura-text">
					<div class="congratulation">恭喜你，获得了</div>
					<div class="name">万能樱</div>
				</div>
				<div class="universal">
					<div class="dot-box">
						<div class="dot dot-1"></div>
						<div class="dot dot-2"></div>
						<div class="dot dot-3"></div>
						<div class="dot dot-4"></div>
						<div class="dot dot-5"></div>
						<div class="dot dot-6"></div>
						<div class="dot dot-7"></div>
						<div class="dot dot-8"></div>
						<div class="dot dot-9"></div>
					</div>
					<!-- <img class="getsakura" src="https://s5.wandougongzhu.cn/s/e0/myflower1_485615.png"> -->
				</div>
				<div class="mysakura-btn">
					确定
				</div>
			</div>
			 <!-- 邀请好友得万能樱 -->
			<div class="get-alert-box" v-if="inviteSakuraAllShow">
				<div class="colse" @click="closeAlert(inviteSakuraAllShow)"></div>
				<div class="invite-text">
					<div class="invite-title">邀请好友注册得万能樱</div>
					<div>万能樱可兑换任意一朵花瓣</div>
				</div>
				<img class="getsakura invite-sakura" src="https://s2.wandougongzhu.cn/s/9f/wan_ebbf7a.png">
				<button class="invite-btn" open-type="share" :data-type="2">
					去邀请
				</button>
				<div>花瓣在好友验证手机号后发放</div>
			</div>
			<!-- 万能樱兑换 -->
			<div class="get-alert-box" v-if="sakuraAllChangeShow">
				<div class="colse" @click="closeAlert(sakuraAllChangeShow)"></div>
				<div class="mysakura-text">
					<div class="universal-compose">万能樱兑换</div>
					<div class="universal-tips">使用1个万能樱可以兑换任意1朵花瓣</div>
				</div>
				<div class="flower-box universal-flower">
					<div class="top">
						<div class="flower-item" :class="{'choosed': sakura_a_choosed}" @click="chooseChangeSakuraA(sakura_a_choosed)">
							<span>八重樱</span>
						</div>
					</div>
					<div class="center">
						<div class="flower-item center-left" :class="{'choosed': sakura_e_choosed}" @click="chooseChangeSakuraE(sakura_e_choosed)">
							<span>寒绯樱</span>
						</div>
						<div class="flower-item center-right" :class="{'choosed': sakura_b_choosed}" @click="chooseChangeSakuraB(sakura_b_choosed)">
							<span>吉野樱</span>
						</div>
					</div>
					<div class="bottom">
						<div class="flower-item bottom-left" :class="{'choosed': sakura_d_choosed}" @click="chooseChangeSakuraD(sakura_d_choosed)">
							<span>淡墨樱</span>
						</div>
						<div class="flower-item bottom-right" :class="{'choosed': sakura_c_choosed}" @click="chooseChangeSakuraC(sakura_c_choosed)">
							<span>大岛樱</span>
						</div>
					</div>
				</div>
				<div class="mysakura-btn" @click="changeSakura()">
					兑换
				</div>
			</div>
			<!-- 赠领记录 -->
			<div class="get-alert-box" v-if="giftRecShow">
				<div class="colse" @click="closeAlert(giftRecShow)"></div>
				<div class="gift-res-title">
					赠领记录
				</div>
				<div class="gift-res-content">
					<div class="gift-res-item" v-if="giftRecList.length > 0" v-for="item in giftRecList">
						<div v-if="item.type == '1'">
							<div v-if="item.from_user_nickname" class="rec">赠送的<span>{{item.sakura_name}}</span>被<span>{{item.from_user_nickname}}</span>领取了</div> 
							<div v-if="!item.from_user_nickname" class="rec">赠送的<span>{{item.sakura_name}}</span>待领取</div> 
						</div> 
						<div v-if="item.type == '2'">
							<div class="rec">领取了<span>{{item.from_user_nickname}}</span>的<span>{{item.sakura_name}}</span></div> 
						</div> 
						<div class="time">{{item.mtime}}</div>
					</div>
					<div class="gift-res-item-null" v-if="giftRecList.length == 0">
						暂时没有赠领记录哦～快去分享给好友吧
					</div>
				</div>
				<div class="mysakura-btn" @click="closeAlert(giftRecShow)">
					确定
				</div>
			</div>
			<!-- 好友送你一朵**樱 -->
			<div class="get-alert-box" v-if="inviteShareSakura">
				<div class="colse" @click="closeAlert(inviteShareSakura)"></div>
				<div class="mysakura-text">
					<div class="congratulation">好友<span>{{inviteUser}}</span>送你一朵</div>
					<div class="name">{{inviteShareSakuraName}}</div>
				</div>
				<div class="getsakura">

				</div>
				<!-- <img class="getsakura" src="https://s5.wandougongzhu.cn/s/e0/myflower1_485615.png"> -->
				<div class="mysakura-btn" @click="checkAuth()">
					确定
				</div>
			</div>
			<!-- 来晚了樱花已经被领取了 -->
			<div class="get-alert-box suc-alert-box" v-if="showHaveDone">
				<div class="colse" @click="closeAlert(showHaveDone)"></div>
				<div class="mysakura-text">
					<div class="name">手慢了，花瓣已被别人领取</div>
				</div>
				<div class="mysakura-btn" @click="closeAlert(showHaveDone)">
					确定
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			user_id: '',
			userInfo: {},
			flowerStatus: '0',
			status: '-1',
			text: '',
			sakura_A_num: 0, //八重樱
			sakura_B_num: 0, //吉野樱
			sakura_C_num: 0, //大岛樱 
			sakura_D_num: 0, //淡墨樱
			sakura_E_num: 0, //寒绯樱
			sakura_W_num: 0, //万能樱数量
			sakura_G_num: 0, //赠送花瓣数量
			sakura_H_num: 0, //合成樱花数量
			is_compose: false, //是否可以合成樱花
			rest_count: 0, //剩余抽奖次数
			lottery_res: {}, //抽取樱花瓣结果
			lotteryResShow: false, //抽取花瓣显示弹框
			maskShow: false, //蒙层
			taskList: [],
			totalSakuraNum: 0,
			restDay: 10,
			restText: '',
			lock: false,
			sakuraDetailShow: false, //点击某个花瓣显示的弹框
			composeShow: false, //合成动画效果显示
			sakuraDetailKey: 'sakura_a',
			sakuraDetailRotate: 0, //旋转角度
			sakuraDetailName: '八重樱',
			sakuraDetailPoetry: '花开时来，花落时也要来。',
			shareImg: 'https://s4.wandougongzhu.cn/s/e4/__1_17ae88.jpg', //分享图
			shareImgBtn: {
				'sakura_a': 'https://s2.wandougongzhu.cn/s/7d/__1_de53f5.jpg',
				'sakura_b': 'https://s.wandougongzhu.cn/s/c8/__2_209e10.jpg',
				'sakura_c': 'https://s5.wandougongzhu.cn/s/58/__3_b21b66.jpg',
				'sakura_d': 'https://s.wandougongzhu.cn/s/10/__4_6eaacb.jpg',
				'sakura_e': 'https://s5.wandougongzhu.cn/s/41/__5_4165fc.jpg'
			},//分享花瓣给好友图了list
			shareSakura: 'sakura_a',
			sakura_All_num: 0, //万能花瓣数量
			sakuraAllChangeShow: false, //万能樱兑换其他花瓣弹框
			sakura_a_choosed: false,
			sakura_b_choosed: false,
			sakura_c_choosed: false,
			sakura_d_choosed: false,
			sakura_e_choosed: false,
			exchange_sakura_key: '', //要兑换的花瓣
			inviteCount: 0, //邀请好友数量
			ruleShowMore: false,
			ruleShowText: '展开更多',
			giftRecShow: false, //显示赠领记录
			giftRecList: [], //赠领记录
			sakuraAllShow: false, //恭喜获得万能樱/是否新人？
			invite_sakura: '', //通过邀请来领取的花瓣key
			invite_user_id: '', //邀请人id
			inviteSakuraAllShow: false, //邀请好友得万能樱弹框
			option: '',
			inviteUser: '', //好友昵称
			inviteShareSakura: false, //好友送的樱花弹框
			inviteShareSakuraName: '', //好友送的**盈
			sakura_id: '',
			checkInfo: '',
			haveDone: false,
			showHaveDone: false,
			recv_id: '',
		};
	},
	onLoad() {
		this.getRestDay();
		this.option = this.$root.$mp.query;
		console.log(this.option);

		if (!WMP.globalData.userInfo || !WMP.globalData.userInfo.user_id) {
			this.showGetSakuraAlert();
			if (this.option.sakura_id) {
				this.maskShow = true;
				this.inviteShareSakura = true;
			}
		} else {
			if (this.option.user_id == WMP.globalData.userInfo.user_id) {
				wx.showToast({
					title: '不能领取自己分享的花瓣～',
					icon: 'none',
					duration: 1500
				});
			} else {
				this.getUserActInfo();
				if (this.option.sakura_id) {
					this.maskShow = true;
					this.inviteShareSakura = true;
				}
			}
		}
	},
	onShareAppMessage (res) {
		let self = this;
		console.log(res);
		self.closeAlert(this.sakuraDetailShow);
		if (res.from == 'button' && res.target.dataset.type == '0') {
			//任务三 赠送好友一瓣
			Net.get('Sakura.userGiftSakura', {
				data: {
					user_id: this.user_id,
					sakura_key: this.sakuraDetailKey
				}
			}).then(res=>{
				if(res.errno=='0') {
					this.sakura_id = res.data.sakura_id;
					console.log('/pages/sakura/sakura?sakura_key=' + this.sakuraDetailKey +'&user_id=' + this.user_id+"&sakura_id=" + this.sakura_id);
					
				} else {
					wx.showModal({title:'提示', content: res.errmsg});
				}
			});
			return {
				title: '送你一朵'+this.sakuraDetailName+'，快来和我平分100万现金！',
				path: '/pages/sakura/sakura?sakura_key=' + this.sakuraDetailKey +'&user_id=' + this.user_id +"&sakura_id=" + this.sakura_id,
				imageUrl: this.shareImgBtn[this.sakuraDetailKey],
				success: function () {
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
			
		} else {
			let shareImg = this.shareImg;
			console.log('/pages/sakura/sakura');

			if (res.from == 'menu') {
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
			} else {
				if (res.target.dataset.type && res.target.dataset.type == '1') {
					return {
						title: '100万现金等你来分！距离分钱仅剩'+this.restDay+'天！',
						path: '/pages/sakura/sakura',
						imageUrl: shareImg,
						success: function (res) {
							//任务二
							Net.get('Sakura.userShareActivity', {
								data: {
									user_id: self.user_id
								}
							}).then(res=>{
								if(res.errno=='0') {
									wx.showToast({
										title: '分享成功',
										icon: 'success',
										duration: 2000
									});
								} else {
									wx.showModal({title:'提示', content: res.errmsg});
								}
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
				} else if (res.target.dataset.type && res.target.dataset.type == '2') {
					return {
						title: '100万现金等你来分！距离分钱仅剩'+this.restDay+'天！',
						path: '/pages/sakura/sakura?user_id=' + this.user_id,
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
			}
			
		}
	},
	methods: {
		showGetSakuraAlert() {
			Net.get('Sakura.getUserActivityInfoByUserId', {
				data: {
					user_id: '0',
					from_user_id:  this.option.user_id,
					sakura_id: this.option.sakura_id
				}
			}).then(res=>{
				if(res.errno=='0') {
					console.log(this.option);
					this.taskList = res.data.day_task;
					let infoList = res.data.info;
					this.sakura_A_num = infoList.sakura_a;
					this.sakura_B_num = infoList.sakura_b;
					this.sakura_C_num = infoList.sakura_c;
					this.sakura_D_num = infoList.sakura_d;
					this.sakura_E_num = infoList.sakura_e;
					this.sakura_W_num = infoList.sakura_w;
					this.sakura_H_num = parseInt(infoList.sakura_h);
					this.sakura_G_num = infoList.sakura_g;
					if (infoList.sakura_a > 0 && infoList.sakura_b > 0 && infoList.sakura_c > 0 && infoList.sakura_d > 0 && infoList.sakura_e >0 ) {
						this.is_compose = true;
					} else {
						this.is_compose = false;
					}				
					this.rest_count = infoList.residue_lottery_count;
					// this.user_id = infoList.user_id;
					this.totalSakuraNum = res.data.h_sakura_count;
					this.inviteCount = res.data.invite_count;
					this.inviteUser = res.data.gift_sakura.gift_user_name;
					this.inviteShareSakuraName = res.data.gift_sakura.sakura_name;
					this.recv_id = res.data.gift_sakura.recv_user_id;
				} else {
					wx.showModal({title:'提示', content: res.errmsg});
				}
			});
		},
		checkAuth() {
			console.log(this.option);
			if (WMP.globalData.userInfo && WMP.globalData.userInfo.user_id) {
				Net.get('Sakura.userRecvGiftSakura', {
					data: {
						user_id: this.user_id,
						from_user_id: this.option.user_id,
						sakura_id: this.option.sakura_id
					}
				}).then(res=>{
					if(res.errno=='0') {
						if(res.data != "" && res.data.from_user_display_name) {
							this.inviteUser = res.data.from_user_display_name;
							this.inviteShareSakuraName = res.data.sakura_name;
							this.maskShow = true;
							this.inviteShareSakura = false;
							this.showHaveDone = true;
						} else {
							if (this.option.user_id == this.user_id) {
								wx.showToast({
									title: '不能领取自己分享的花瓣～',
									icon: 'none',
									duration: 2000
								});
							} else {
								if (this.recv_id != '0') {
									this.showHaveDone = true;
									this.inviteShareSakura = false;
									this.maskShow = true;
								} else {
									wx.showToast({
										title: '领取成功',
										icon: 'success',
										duration: 2000
									});
								}
							}
						}
					} 
				});
			} else {
				WMP.checkAuthPromise(this).then(()=>{
					this.userInfo = WMP.globalData.userInfo;
					this.user_id = this.userInfo.user_id;
					this.getUserActInfo();
				});
			}
		},
		getUserActInfo() {
			this.maskShow = false;
			this.inviteShareSakura = false;
			this.userInfo = WMP.globalData.userInfo;
			this.user_id = this.userInfo.user_id;
			console.log(this.option);
			Net.get('Sakura.getUserActivityInfoByUserId', {
				data: {
					user_id: this.user_id,
					from_user_id:  this.option.user_id,
					sakura_id: this.option.sakura_id
				}
			}).then(res=>{
				if(res.errno=='0') {
					this.taskList = res.data.day_task;
					let infoList = res.data.info;
					this.sakura_A_num = infoList.sakura_a;
					this.sakura_B_num = infoList.sakura_b;
					this.sakura_C_num = infoList.sakura_c;
					this.sakura_D_num = infoList.sakura_d;
					this.sakura_E_num = infoList.sakura_e;
					this.sakura_W_num = infoList.sakura_w;
					this.sakura_H_num = parseInt(infoList.sakura_h);
					this.sakura_G_num = infoList.sakura_g;
					if (infoList.sakura_a > 0 && infoList.sakura_b > 0 && infoList.sakura_c > 0 && infoList.sakura_d > 0 && infoList.sakura_e >0 ) {
						this.is_compose = true;
					} else {
						this.is_compose = false;
					}				
					this.rest_count = infoList.residue_lottery_count;
					// this.user_id = infoList.user_id;
					this.totalSakuraNum = res.data.h_sakura_count;
					this.inviteCount = res.data.invite_count;
					this.inviteUser = res.data.gift_sakura.gift_user_name;
					this.inviteShareSakuraName = res.data.gift_sakura.sakura_name;
				} else if (errno == '2008') {
					WMP.checkAuthPromise(this);
				} else {
					wx.showModal({title:'提示', content: res.errmsg});
				}
			});
		},
		getRestDay() {
			let myDate = new Date();
			let m = myDate.getMonth();
			let d = myDate.getDate();
			if (d < 11) {
				this.restDay = 11 - d;
				this.restText = '距离分钱还剩'+this.restDay+'天';
			} else if (d > 10 && d < 14) {
				this.restDay = 0;
				this.restText = '正在撒钱中';
			} else {
				this.restDay = -1;
				this.restText = '活动已结束';
			}
			console.log(this.restDay);
		},
		showHaveDone() {
			this.sakuraDetailShow = false;
			this.lotteryResShow =false;
			this.sakuraAllChangeShow = false;
			this.giftRecShow = false;
			this.sakuraAllShow = false;
			this.inviteSakuraAllShow = false;
			this.composeShow = false;

			this.showHaveDone = true;
			this.maskShow = true;
		},
		showSakuraDetail(key, name, poetry) {
			console.log('key=' + key);
			this.sakuraDetailKey = key;
			this.sakuraDetailName = name;
			this.sakuraDetailPoetry = poetry;
			if(this.sakuraDetailKey == 'sakura_a') {
				this.sakuraDetailRotate = 0;
			} else if (this.sakuraDetailKey == 'sakura_b') {
				this.sakuraDetailRotate = 72;
			} else if (this.sakuraDetailKey == 'sakura_c') {
				this.sakuraDetailRotate = 144;
			} else if (this.sakuraDetailKey == 'sakura_d') {
				this.sakuraDetailRotate = -144;
			} else if (this.sakuraDetailKey == 'sakura_e') {
				this.sakuraDetailRotate = -72;
			}
			this.sakuraAllChangeShow = false;
			this.composeShow = false;
			this.giftRecShow = false;
			this.lotteryResShow = false;
			this.sakuraAllShow = false;
			this.inviteSakuraAllShow = false;
			this.showHaveDone = false;

			this.maskShow = true;
			this.sakuraDetailShow = true;
		},
		showComposeAni() {
			if (this.is_compose) {
				this.sakuraDetailShow = false;
				this.lotteryResShow =false;
				this.sakuraAllChangeShow = false;
				this.giftRecShow = false;
				this.sakuraAllShow = false;
				this.inviteSakuraAllShow = false;
				this.showHaveDone = false;
				this.maskShow = true;
				this.composeShow = true;
				Net.get('Sakura.userComposeSakura', {
					data: {
						user_id: this.user_id
					}
				}).then(res=>{
					if(res.errno=='0') {
						console.log(res.data);
					} else {
						wx.showModal({title:'提示', content: res.errmsg});
					}
				}) 
			} else {
				wx.showToast({
					title: '樱花数量不足～',
					icon: 'none',
					duration: 2000
				});
			}
		},
		//万能瓣兑换弹框
		showSakuraW() {
			this.sakuraDetailShow = false;
			this.lotteryResShow =false;
			this.composeShow = false;
			this.giftRecShow = false;
			this.sakuraAllShow = false;
			this.inviteSakuraAllShow = false;
			this.showHaveDone = false;
			this.maskShow = true;
			this.sakuraAllChangeShow = true;
		},
		//获得万能瓣弹框
		showSakuraAll() {
			this.sakuraDetailShow = false;
			this.lotteryResShow =false;
			this.composeShow = false;
			this.giftRecShow = false;
			this.sakuraAllChangeShow = false;
			this.inviteSakuraAllShow = false;
			this.showHaveDone = false;
			this.maskShow = true;
			this.sakuraAllShow = true;
		},
		//邀请好友得万能樱弹框
		showinviteSakuraAll() {
			this.sakuraDetailShow = false;
			this.lotteryResShow =false;
			this.composeShow = false;
			this.giftRecShow = false;
			this.sakuraAllChangeShow = false;
			this.sakuraAllShow = false;
			this.showHaveDone = false;
			this.maskShow = true;
			this.inviteSakuraAllShow = true;
		},
		showMoreRule() {
			this.ruleShowMore = !this.ruleShowMore;
		},
		showGiftRec() {
			this.sakuraDetailShow = false;
			this.lotteryResShow =false;
			this.composeShow = false;
			this.sakuraAllChangeShow = false;
			this.sakuraAllShow = false;
			this.inviteSakuraAllShow = false;
			this.showHaveDone = false;
			this.maskShow = true;
			this.giftRecShow = true;
			Net.get('Sakura.getUserGiftSakuraList', {
				data: {
					user_id: this.user_id
				}
			}).then(res=>{
				if(res.errno=='0') {
					console.log(res.data);
					this.giftRecList = res.data;
				} else {
					wx.showModal({title:'提示', content: res.errmsg});
				}
			}) 
		},
		chooseChangeSakuraA() {
			this.sakura_b_choosed = false;
			this.sakura_c_choosed = false;
			this.sakura_d_choosed = false;
			this.sakura_e_choosed = false;
			this.sakura_a_choosed = true;
			this.exchange_sakura_key = 'sakura_a';
		},
		chooseChangeSakuraB() {
			this.sakura_a_choosed = false;
			this.sakura_c_choosed = false;
			this.sakura_d_choosed = false;
			this.sakura_e_choosed = false;
			this.sakura_b_choosed = true;
			this.exchange_sakura_key = 'sakura_b';	
		},
		chooseChangeSakuraC() {
			this.sakura_a_choosed = false;
			this.sakura_b_choosed = false;
			this.sakura_d_choosed = false;
			this.sakura_e_choosed = false;
			this.sakura_c_choosed = true;
			this.exchange_sakura_key = 'sakura_c';
		},
		chooseChangeSakuraD() {
			this.sakura_a_choosed = false;
			this.sakura_b_choosed = false;
			this.sakura_c_choosed = false;
			this.sakura_e_choosed = false;
			this.sakura_d_choosed = true;
			this.exchange_sakura_key = 'sakura_d';
		},
		chooseChangeSakuraE() {
			this.sakura_a_choosed = false;
			this.sakura_b_choosed = false;
			this.sakura_c_choosed = false;
			this.sakura_d_choosed = false;
			this.sakura_e_choosed = true;
			this.exchange_sakura_key = 'sakura_e';
		},
		closeAlert (param) {
			param = false;
			this.maskShow = false;
			this.getUserActInfo();
		},
		shareSakura() {

		},
		_lotterySakura() {
			Net.post('Sakura.userLotterySakura', {
				user_id: this.user_id
			}).then(res=>{
				if(res.errno=='0') {
					this.sakuraDetailShow = false;
					this.sakuraAllChangeShow = false;
					this.composeShow = false;
					this.sakuraAllShow = false;
					this.inviteSakuraAllShow = false;
					this.giftRecShow = false;
					this.showHaveDone = false;
					this.maskShow = true;
					this.lotteryResShow = true;

					this.lottery_res = res.data;
				} else {
					wx.showModal({title:'提示', content: res.errmsg});
				}
			});
		},
		lotterySakura() {
			let self = this;
			WMP.checkAuthPromise(this).then(()=>{
				this.userInfo = WMP.globalData.userInfo;
				this.user_id = this.userInfo.user_id;
				this._lotterySakura();
			})
		},
		changeSakura() {
			console.log(this.exchange_sakura_key);
			if (this.exchange_sakura_key) {
				if (this.sakura_W_num > 0) {
					Net.get('Sakura.userExchangeSakuraW', {
						data: {
							user_id: this.user_id,
							exchange_sakura_key: this.exchange_sakura_key
						}
					}).then(res=>{
						if(res.errno=='0') {
							this.sakuraDetailShow = false;
							this.composeShow = false;
							this.lotteryResShow = false;
							this.sakuraAllShow = false;
							this.inviteSakuraAllShow = false;
							this.giftRecShow = false;
							this.showHaveDone = false;
							this.maskShow = true;
							this.sakuraAllChangeShow = true;
							this.getUserActInfo();
						} else {
							this.maskShow = false;
							this.sakuraAllChangeShow = false;
							wx.showModal({title:'提示', content: res.errmsg});
						}
					});
				} else {
					wx.showToast({
						title: '万能樱不足～',
						icon: 'error',
						duration: 1500,
					})
				}
			} else {
				wx.showToast({
					title: '请选择一个花瓣',
					icon: 'error',
					duration: 1500,
				});
			}
		},
		getTask(task_id) {
			var paramTask = task_id;
			Net.post('Sakura.userRecvTask',{
				data: {
					user_id: this.user_id,
					task_id: paramTask
				}
			}).then(res=>{
				if(res.errno=='0') {
					wx.showToast({
						title: '领取成功',
						icon: 'success',
						duration: 1500,
					});
					this.getUserActInfo();
				} else {
					wx.showModal({title:'提示', content: res.errmsg});
				}
			});
		},
		toFinishTask(index) {
			if (index == 3) {
				if (this.sakura_A_num == '0' && this.sakura_B_num == '0' && this.sakura_C_num == '0' && this.sakura_D_num == '0' && this.sakura_E_num == '0') {
					wx.showToast({
						title: '当前没有花瓣～',
						icon: 'none',
						duration: 1500,
					})
				} else {
					wx.navigateTo({
						url: '/pages/togift/togift'
					});
				}
			} else if (index == 4) {
				wx.switchTab({
					url: '/page/index/index'
				});
			}
		},
		gather(res) {
			console.log(res);
		},
	},

};
</script>

<style scoped>
button::after {
	display: none;
}
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
.invite-text {
	font-family: "sakuraKai";
	font-size: 12px;
	color: rgb(67, 67, 67);
	margin: 30px auto;
}
.invite-text .invite-title {
	font-size: 15px;
}
.rule-p-title {
	font-size: 12px;
	font-weight: bold;
}
.rule-show-more { 
	width: 60px;
	height: 20px;
	margin: 0 auto;
	text-align: center;
	padding-right: 10px;
	background: url('https://s3.wandougongzhu.cn/s/94/arrow_44a7ec.png') no-repeat;
	background-position: right center;
	background-size: 10px;
}
.shouqi {
	background: url('https://s3.wandougongzhu.cn/s/f8/arraw_2b1964.png') no-repeat;
	background-position: right center;
	background-size: 10px;
}
.faq-title {
	 font-size: 14px;
	 font-weight: bold;
}
.faq-q {
	color: rgb(243, 81, 109);
}
.my-sakura-box {
	font-size: 14px;
	color: rgb(88, 94, 141);
	font-weight: bold;
	font-family: "sakuraKai";
	text-align: left;
	margin: 20px 0 0 40px;
	display: flex;
}
.my-sakura {
	width: 15px;
	height: 15px;
	margin: 3px;
	background: url('https://s3.wandougongzhu.cn/s/7e/4_88421d.png') no-repeat;
	background-size: cover;
}
.w-sakura {
	position: absolute;
	font-family: "sakuraKai";
	right: 15px;
	top: 0;
	width: 30px;
	height: 80px;
	background: url('https://s5.wandougongzhu.cn/s/f9/_5b6c81.png') no-repeat;
	background-size: 100% 100%;
	animation: flutter 3s linear 2.8s infinite alternate;
	margin: 0;
	padding: 0;
}
.w-sakura div {
	width: 20px;
	height: 60px;
	margin: 20px 5px 0 5px;
	font-size: 15px;
	line-height: 15px;
	color: rgb(76, 38, 24);
}
.w-sakura div span {
	color: rgb(255, 29, 95);
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
.num-box, .task-item-img .num {
	width: 20px;
	height: 20px;
	text-align: center;
	line-height: 20px;
	color: #fff;
	background: url('https://s1.wandougongzhu.cn/s/00/5_b08501.png') no-repeat;
	background-size: cover;
	font-size:14px;
	position:absolute;
	right:0;
}
.to-alert-box,.get-alert-box,.compose-box {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	width: 280px;
	height: 345px;
	font-size: 14px;
	text-align: center;
	background: url('https://s3.wandougongzhu.cn/s/65/alertbg_701e5c.png') no-repeat;
	background-size: cover;
}
.get-alert-box {
	background: url('https://s2.wandougongzhu.cn/s/f9/alertbg2_587294.png') no-repeat;
	background-size: cover;
}
.suc-alert-box {
	height: 190px;
	background: url('https://s.wandougongzhu.cn/s/e8/alert_230438.png') no-repeat;
	background-size: 100% 100%;
}
.suc-alert-box  .mysakura-text .name {
	font-size: 12px;
	margin-top: 20px;
}
.compose-box {
	position: absolute;
	width: 375px;
	height: 400px;
	background: none;
}

.compose-tips {
	font-size: 28px;
	font-family: "sakuraKai";
	color: #fff;
	margin: 0 auto;
	top: 0;
	-webkit-animation: showtext 0.5s ease-in-out;
	animation: showtext 0.5s ease-in-out;
	animation-delay: 4s;
}
.compose-btn {
	z-index: 10;
	position: absolute;
	left: 50%;
	bottom: 0;
	font-family: "sakuraKai";
	transform: translate(-50%, 0);
	width: 115px;
	height: 38px;
	line-height: 38px;
	font-size: 14px;
	color: #fff;
	margin: 0 auto;
	background: url('https://s2.wandougongzhu.cn/s/68/toyou_3d05c2.png') no-repeat;
	background-size: cover;
	-webkit-animation: showtext 0.5s ease-in-out;
	animation: showtext 0.5s ease-in-out;
	animation-delay: 4s;
}
.universal {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	width: 375px;
	height: 400px;
	z-index: 1;
	background: url('https://s5.wandougongzhu.cn/s/c8/_8612fe.png') no-repeat;
	background-size: 375px 400px;
	background-position: center;
}
.universal .dot-box {
	width: 80px;
	height: 50px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%) scale(1.5);
}

.universal-compose {
	font-size: 23px;
}
.sakura-text {
	display: flex;
}
.congratulation,.universal-tips {
	font-size: 12px;
	line-height: 20px;
}
.gift-res-title {
	font-size: 24px;
	font-weight: bold;
	margin-top: 25px;
}
.gift-res-content {
	height: 230px;
	overflow-y: scroll;
	font-size: 12px;
	text-align: left;
	margin: 0 20px;
}
.gift-res-item {
	overflow: hidden;
	height: 50px;
	border-bottom: 1px solid rgba(233, 233, 233,.5);
}
.gift-res-item .rec {
	height: 30px;
	display: inline-block;
	line-height: 30px;
	font-size: 14px;
	white-space: nowrap;
}
.gift-res-item .rec span {
	color: rgb(234, 60, 98);
}
.gift-res-item .time {
	line-height: 20px;
	color: rgb(153, 153, 153);
}
.gift-res-item-null {
	font-size: 12px;
	margin: 50px auto;
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
	left: 20px;
	top: 15px;
	width: 14px;
	font-family: "SakuraKai";
	font-size: 14px;
	line-height: 16px;
	writing-mode: vertical-lr;
}
.sakura-text .name {
	position: absolute;
	left: 40px;
	top: 15px;
	width: 25px;
	height: 75px;
	font-family: "SakuraFont";
	font-size: 25px;
	line-height: 25px;
}
.mysakura,.getsakura{
	width: 120px;
	height: 160px;
	position: relative;
	margin: 50px auto;
	background: url('https://s5.wandougongzhu.cn/s/e0/myflower1_485615.png') no-repeat;
	background-size: cover;
}
.mysakura-tips {
	width: 100%;
	position: absolute;
	color: rgb(67, 67, 67);
	bottom: 65px;
	font-size: 12px;
	font-family: "SakuraKai";
	text-align: center;
}
.mysakura-btn {
	position: absolute;
	left: 50%;
	transform: translate(-50%,0);
	bottom: 10px;
	width: 115px;
	height: 38px;
	line-height: 38px;
	font-size: 14px;
	color: #fff;
	background: url('https://s2.wandougongzhu.cn/s/68/toyou_3d05c2.png') no-repeat;
	background-size: 100% 100%;
	margin: 0 auto;
}
.invite-sakura {
	width: 100px;
	height: 150px;
	margin: 0px auto;
	background: none;
}
.invite-btn {
	width: 115px;
	height: 38px;
	line-height: 38px;
	color: #fff;
	position: relative;
	border: none;
	border-radius: 0;
	background: url('https://s2.wandougongzhu.cn/s/68/toyou_3d05c2.png') no-repeat;
	background-size: 100% 100%;
	margin: 10px auto 0 auto;
}
.rule-box {
	position: relative;
	width: 100%;
	background: url('https://s3.wandougongzhu.cn/s/72/botbg_f5add6.png') no-repeat;
	background-position: bottom;
	background-size: 100%;
}
.celendar {
	width: 350px;
	height: 240px;
	margin: 0 auto;
	z-index: 1;
}
.red-umbrella {
	position: absolute;
	left: 0;
	top: 0;
	width: 32px;
	height: 110px;
	z-index: 0;
}
.rule-content {
	font-family: "SakuraKai";
	font-size: 13px;
	color: #191919;
	line-height: 1.6;
	text-align: left;
	margin: 0 15px;
}
.rec-btn {
	width: 117px;
	height: 35px;
	line-height: 35px;
	margin: 70px auto 40px auto;
	color: #fff;
	border: 1px solid rgba(66, 80, 128,.5);
	background-color: rgb(95, 109, 156);
	background: url('https://s3.wandougongzhu.cn/s/01/_2fd8c9.png') no-repeat;
	background-size: cover;
}
#mask {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,.7);
}
.container {
	width: 100%;
	height: 100%;
	font-family: "SakuraKai";
	text-align: center;
	padding: 0;
	margin: 0;
	background: url('https://s5.wandougongzhu.cn/s/83/_24bedc.jpg') no-repeat;
	background-size: 100% auto;
	background-color: #f3f2f1;
}

.tips {
	margin-top: 90px;
	font-size: 16px;
	color: rgb(237, 61, 98);
	-webkit-text-stroke: 1rpx #ffffff;
	text-align: center;
	font-weight: bold;
}
.tips-2 {
	margin: 5px auto 10px auto;
	font-size: 13px;
	color: rgb(88, 94, 141);
}
.tips-2 .num {
	color: rgb(237, 61, 98);
}
.reel-box {
	width: 360px;
	height: 450px;
	background: url('https://s.wandougongzhu.cn/s/27/all_786bff.png') no-repeat;
	background-size: cover;
	margin: 0 auto;
	position: relative;
}
.flower-box {
	margin-top: 20px;
	font-family: "sakuraFont";
}
.flower-box .flower-item {
	width: 75px;
	height: 100px;
	text-align: center;
}
.flower-box .top {
	text-align: center;
}
.flower-box .top .flower-item {
	margin: 0 auto;
	position: relative;
}
.flower-item {
	width: 75px;
	height: 100px;
	background: url(https://s5.wandougongzhu.cn/s/6a/flower_d713db.png) no-repeat;
	background-size: cover;
	background-position: center;
} 
.flower-item .click-box{
	width:inherit;
	height:inherit;
}
.flower-item span {
	font-size: 14px;
	color: #fff;
	position:absolute;
	bottom:20px;
	left:50%;
	transform:translate(-50%,0);
	width:50px;

}
.flower-item.disflower {
	background: url('https://s.wandougongzhu.cn/s/ab/disFlower_c08dae.png') no-repeat;
	background-size: cover;
	background-position: center;
}
.flower-item.disflower span {
	color: rgba(255, 255, 255, 0.2);
}
.flower-item.bottom-left span,.flower-item.bottom-right span{
	transform: rotate(180deg);
	margin-left: -25px;
}

.universal-flower {
	margin-top: 20px;
	font-family: "sakuraFont";
}
.universal-flower .flower-item {
	width: 60px;
	height: 80px;
	background: url(' https://s5.wandougongzhu.cn/s/e6/disflower-no_67817f.png') no-repeat;
	background-size: cover;
	background-position: center;
}
.universal-flower .flower-item.choosed {
	background: url('https://s5.wandougongzhu.cn/s/e0/myflower1_485615.png') no-repeat;
	background-size: cover;
	background-position: center;
}
.dot{
	position:relative;
	width: 4px;
	height: 4px;
	background: #FFFFFF;
    border-radius: 50%;
	background: radial-gradient(rgba(255,255,255,1),rgba(255,255,255,0));
	animation: twinkling 1.5s infinite ease-in-out;
	-webkit-animation: twinkling 1.5s infinite ease-in-out;
 } 
 .dot-1 {
	 transform: scale(0.8);
	 top: 40px;
	 left: 25px;
	 animation-delay: 0.8s;
 } 
 .dot-2 {
	 transform: scale(1.2);
	 top: 25px;
	 left: 45px;
	 animation-delay: 1s;
 } 
 .dot-3 {
	 top: 35px;
	 left: 50px;
 } 
 .dot-4 {
	 transform: scale(1.3);
	 top: 30px;
	 left: 35px;
	 animation-delay: 0.5s;
 } 
 .dot-5 {
	 top: 35px;
	 left: 60px;
	 animation-delay: 1s;
 } 
 .dot-6 {
	 top: 35px;
	 left: 20px;
 } 
 .dot-7 {
	 top: 35px;
	 left: 35px;
	 animation-delay: 0.3s;
 } 
 .dot-8 {
	 transform: scale(1.6);
	 top: 40px;
	 left: 50px;
	 animation-delay: 1.3s;
 } 
 .dot-9 {
	 transform: scale(1.5);
	 top: 40px;
	 left: 25px;
 } 
 @keyframes twinkling{  
    0%{  
        opacity: 0;  
    }
	20% {
		opacity: 0.4;
	}
	50% {
		opacity: 1;
	}
	80% {
		opacity: 0.4;
	}
    100%{  
        opacity: 0;  
    }  
} 
 @-webkit-keyframes twinkling{  
    0%{  
        opacity: 0;  
    }
	20% {
		opacity: 0.4;
	}
	50% {
		opacity: 1;
	}
	80% {
		opacity: 0.4;
	}
    100%{  
        opacity: 0;  
    }  
} 
.center {
	display: flex;
	justify-content: center;
}
.center-left {
	position: relative;
	top: -40px;
	left: -10px;
	transform: rotate(-72deg);
}
.center-left .num-box {
	transform: rotate(72deg);
}
.center-right {
	position: relative;
	top: -40px;
	left: 10px;
	transform: rotate(72deg);
}
.center-right .num-box {
	left: 0;
	transform: rotate(-72deg);
}
.mix-btn {
	width: 75px;
	height: 75px;
	color: #fff;
	font-size: 20px;
	line-height: 75px;
	background: url('https://s1.wandougongzhu.cn/s/d1/_ca6d40.png') no-repeat;
	background-size: cover;
	font-family: "sakuraKai";
}
.new-mix-btn {
	background: url('https://s4.wandougongzhu.cn/s/a0/2_77ea79.png') no-repeat;
	background-size: cover;
}
.flower-box .bottom {
	display: flex;
	justify-content: center;
}
.bottom-left {
	position: relative;
	top: -38px;
	left: -10px;
	transform: rotate(-144deg);
}
.bottom-left .num-box {
	transform: rotate(144deg);
}
.bottom-right {
	position: relative;
	top: -36px;
	left: 15px;
	transform: rotate(144deg);
}
.bottom-right .num-box {
	left: 0;
	transform: rotate(-144deg);
}
.universal-flower .center-left {
	left:-40rpx;
}
.universal-flower .center-right {
	left:40rpx;
}
.universal-flower .bottom-left {
	top: -60px;
	left: 2px;
}
.universal-flower .bottom-right {
	top: -60px;
	left: 4px;
}
.rest-count {
	color: rgb(88, 94, 141);
	font-size: 13px;
	text-align: center;
	margin-bottom: 10px;
}
.lottery-btn {
	display: block;
	width: 140px;
	height: 35px;
	line-height: 35px;
	color: #fff;
	text-align: center;
	background: url('https://s3.wandougongzhu.cn/s/e6/_e4b383.png') no-repeat;
	background-size: cover;
	margin: 0 auto;
}
.task-title,.rule-title {
	width: 375px;
	/* height: 60px; */
	line-height: 40px;
	margin: 0 auto;
	font-size: 21px;
	color: #191919;
	font-weight: bold;
	background: url('https://s4.wandougongzhu.cn/s/20/taskbg_4bad66.png') no-repeat;
	background-size: 100%;
}
.rule-title {
	/* background: none; */
	background: url('https://s2.wandougongzhu.cn/s/e6/13_687fb2.png') no-repeat;
	background-size: 100%;
}
.task-item {
	width: 345px;
	height: 60px;
	font-size: 15px;
	line-height: 60px;
	color: #191919;
	margin: 10px auto;
	display: flex;
	background: url('https://s5.wandougongzhu.cn/s/88/_849809.png') no-repeat;
	background-size: 100% 100%;
}
.task-item-evd,.task-item-suc {
	width: 37px;
	height: 20px;
	font-size: 12px;
	line-height: 20px;
	margin: 20px;
	background: url('https://s.wandougongzhu.cn/s/82/evd_641d28.png') no-repeat;
	background-size: cover;
	text-align: center;
	color: #fff;
}
.task-item-suc {
	margin:  5px 20px;
	background: url('https://s2.wandougongzhu.cn/s/2c/_2e897d.png') no-repeat;
	background-size: cover;
}
.suc-box {
	line-height: 30px;
	display: flex;
	flex-direction: column;
}
.suc-box-top {
	display: flex;
}
.suc-box-bot {
	margin-left: 20px;
	text-align: left;
}
.task-item-name {
	/* margin-left: 5px; */
}
.task-item-img {
	position: absolute;
	right: 110px;
	margin: 3px 0;
}
.task-item-img img {
	width: 50px;
	height: 54px;
}
.task-item-btn {
	position: absolute;
	right: 10px;
	width: 65px;
	height: 30px;
	margin: 15px;
	font-size: 14px;
	line-height: 30px;
	/* color: rgb(73, 15, 0); */
	color: #fff;
	text-align: center;
	background: url('https://s1.wandougongzhu.cn/s/f2/done_be011c.png') no-repeat;
	background-size: 100%;
}
.task-item-btn.done {
	background: url('https://s5.wandougongzhu.cn/s/f0/havedone_cc8f95.png')
		no-repeat;
	background-size: contain;
}
.task-item-btn.receive {
	color: #fff;
	background: url('https://s1.wandougongzhu.cn/s/f2/done_be011c.png') no-repeat;
	background-size: 100% 100%;
}
.task-item-btn button {
	font-size: 14px;
	line-height: 30px;
	padding: 0;
	/* color: rgb(73, 15, 0); */
	color: #fff;
	background-color:rgba(255,255,255,0);
	border: none;
}
.to-invite {
	color: rgb(73, 15, 0);
	background: url('https://s5.wandougongzhu.cn/s/f8/ing_fe1225.png') no-repeat;
	background-size: 100% 100%;
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
#mask {
	/* visibility: hidden; */
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
}
.compose-ani, .compose-ani-2, .compose-ani-3,.shink,.shink2 {
	opacity: 0;
	position: absolute;
	width: 300px;
	height: 300px;
	margin: 10px 37px;
	background: url('https://s3.wandougongzhu.cn/s/ac/3_d1bd5d.png') no-repeat;
	background-size: cover;
	-webkit-animation: compose 3s ease-in-out;
	animation: compose 3s ease-in-out;
}
.compose-ani-2 {
	opacity: 0;
	z-index: 2;
	background: url('https://s2.wandougongzhu.cn/s/c8/cool6_6d080f.png') no-repeat;
	background-size: cover;
	-webkit-animation: compose-2 4s;
	animation: compose-2 4s;
	transform: scale(2);
	/* animation-delay: 2s; */
}
.compose-ani-3 {
	opacity: 1;
	z-index: 3;
	background: url('https://s1.wandougongzhu.cn/s/73/hua_11b087.png') no-repeat;
	background-size: cover;
	-webkit-animation: compose-3 4s;
	animation: compose-3 4s;
	/* animation-delay: 3s; */
}
.shink {
	z-index: 2;
	background: url('https://s5.wandougongzhu.cn/s/93/shink2_7a1dbd.png') no-repeat;
	background-size: cover;
	transform: scale(2);
	-webkit-animation: shink 0.5s infinite ease-in-out;
	animation: shink 0.5s infinite ease-in-out;
	animation-delay: 4s;
}
.shink2 {
	z-index: 2;
	background: url('https://s3.wandougongzhu.cn/s/bb/shink3_9c3028.png') no-repeat;
	background-size: cover;
	transform: scale(2);
	-webkit-animation: shink2 0.5s infinite ease-in-out;
	animation: shink2 0.5s infinite ease-in-out;
	animation-delay: 4s;
}
@keyframes shink{
    0%{  
        opacity: 1;
    }
    100%{  
        opacity: 0;
    }  
} 
@-webkit-keyframes shink{
    0%{  
        opacity: 1;
    }
    100%{  
        opacity: 0;
    }  
} 
@keyframes showtext {
	0%{  
        opacity: 0;
    }
    100%{  
        opacity: 1;
    } 
}
@-webkit-keyframes showtext{
    0%{  
        opacity: 0;
    }
    100%{  
        opacity: 1;
    }  
} 

@keyframes shink2{
    0%{  
        opacity: 0;
    }
    100%{  
        opacity: 1;
    }  
} 
@-webkit-keyframes shink2{
    0%{  
        opacity: 0;
    }
    100%{  
        opacity: 1;
    }  
} 
@keyframes compose{
    0%{  
        opacity: 1;
		transform: scale(1) rotate(0);
    }
	/* 66.6% {
		opacity: 1;
		transform: scale(1) rotate(720deg);
	} */
    100%{  
        opacity: 0;  
		transform: scale(0.2) rotate(1080deg);
    }  
} 
 @-webkit-keyframes compose{  
    0%{  
        opacity: 1;
		transform: scale(0.2) rotate(0);
    }
	/* 66.6% {
		opacity: 1;
		transform: scale(1) rotate(720deg);
	} */
    100%{  
        opacity: 0.2;  
		transform: scale(0.2) rotate(720deg);
    }  
} 
@keyframes compose-2{
    0%{  
        opacity: 0;
		transform: scale(0.4) rotate(0);
    }
	50%{
		opacity: 0.2;
		transform: scale(0.4) rotate(720deg);
	}
    100%{  
        opacity: 1;  
		transform: scale(2) rotate(1440deg);
    }  
}
@-webkit-keyframes compose-2{
    0%{  
        opacity: 0;
		transform: scale(0.4) rotate(0);
    }
	50%{
		opacity: 0.2;
		transform: scale(0.4) rotate(720deg);
	}
    100%{  
        opacity: 1;  
		transform: scale(2) rotate(1440deg);
    } 
}
@keyframes compose-3{
    0%{  
        opacity: 0;
		transform: scale(0.2);
    }
	75%{
		opacity: 0;
		transform: scale(0.2);
	}
    100%{  
        opacity: 1;  
		transform: scale(1);
    }  
}
@-webkit-keyframes compose-3{
   	0%{  
        opacity: 0;
		transform: scale(0.2);
    }
	75%{
		opacity: 0;
		transform: scale(0.2);
	}
    100%{  
        opacity: 1;  
		transform: scale(1);
    } 
}
@-webkit-keyframes flutter
{
    0% {
        transform: rotate(2deg);
        -webkit-transform: rotate(2deg);
        transform-origin: 50% 0;
        -webkit-transform-origin: 50% 0;
    }
    20% {
        transform: rotate(10deg);
        -webkit-transform: rotate(10deg);
        transform-origin: 50% 0;
        -webkit-transform-origin: 50% 0;
    }
    40% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform-origin: 50% 0;
        -webkit-transform-origin: 50% 0;
    }
    60% {
        transform: rotate(-2deg);
        -webkit-transform: rotate(-2deg);
        transform-origin: 50% 0;
        -webkit-transform-origin: 50% 0;
    }
    80% {
        transform: rotate(-10deg);
        -webkit-transform: rotate(-10deg);
        transform-origin: 50% 0;
        -webkit-transform-origin: 50% 0;
    }
    100% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform-origin: 50% 0;
        -webkit-transform-origin: 50% 0;
    }
}
@keyframes flutter
{
    0% {
        transform: rotate(2deg);
        -webkit-transform: rotate(2deg);
        transform-origin: 50% 0;
        -webkit-transform-origin: 50% 0;
    }
    20% {
        transform: rotate(10deg);
        -webkit-transform: rotate(10deg);
        transform-origin: 50% 0;
        -webkit-transform-origin: 50% 0;
    }
    40% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform-origin: 50% 0;
        -webkit-transform-origin: 50% 0;
    }
    60% {
        transform: rotate(-2deg);
        -webkit-transform: rotate(-2deg);
        transform-origin: 50% 0;
        -webkit-transform-origin: 50% 0;
    }
    80% {
        transform: rotate(-10deg);
        -webkit-transform: rotate(-10deg);
        transform-origin: 50% 0;
        -webkit-transform-origin: 50% 0;
    }
    100% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform-origin: 50% 0;
        -webkit-transform-origin: 50% 0;
    }
}
</style>

