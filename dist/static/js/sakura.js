global.webpackJsonp([5],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(6);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	data: function data() {
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
			}, //分享花瓣给好友图了list
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
			showHaveDone: false
		};
	},
	onLoad: function onLoad() {
		this.getRestDay();
		this.option = this.$root.$mp.query;

		if (WMP.globalData.userInfo && WMP.globalData.userInfo.user_id) {
			if (this.user_id == WMP.globalData.userInfo.user_id) {
				wx.showToast({
					title: '不能领取自己分享的花瓣～',
					icon: 'none',
					duration: 1500
				});
			} else {
				this.getUserActInfo();
				if (this.option.sakura_key) {
					this.maskShow = true;
					this.inviteShareSakura = true;
				}
			}
		} else {
			this.showGetSakuraAlert();
			if (this.option.sakura_key) {
				this.maskShow = true;
				this.inviteShareSakura = true;
			}
		}
	},
	onShareAppMessage: function onShareAppMessage(res) {
		var _this = this;

		var self = this;
		console.log(res);
		self.closeAlert(this.sakuraDetailShow);
		if (res.from == 'button' && res.target.dataset.type == '0') {
			//任务三 赠送好友一瓣
			Net.get('Sakura.userGiftSakura', {
				data: {
					user_id: this.user_id,
					sakura_key: self.sakuraDetailKey
				}
			}).then(function (res) {
				if (res.errno == '0') {
					_this.sakura_id = res.data.sakura_id;
					console.log('/pages/sakura/sakura?share_sakura=' + _this.sakuraDetailName + '&user_id=' + _this.user_id + "&sakura_id=" + _this.sakura_id);
				} else {
					wx.showModal({ title: '提示', content: res.errmsg });
				}
			});
			return {
				title: '送你一朵' + this.sakuraDetailName + '，快来和我平分100万现金！',
				path: '/pages/sakura/sakura?share_sakura=' + this.sakuraDetailName + '&user_id=' + this.user_id + "&sakura_id=" + this.sakura_id,
				imageUrl: this.shareImgBtn[this.sakuraDetailKey],
				success: function success() {
					wx.showToast({
						title: '分享成功',
						icon: 'success',
						duration: 2000
					});
					self.getUserActInfo();
				},
				fail: function fail() {
					wx.showToast({
						title: '取消分享',
						icon: 'error',
						duration: 2000
					});
				}
			};
		} else {
			var shareImg = this.shareImg;
			console.log('/pages/sakura/sakura');

			if (res.from == 'menu') {
				return {
					title: '100万现金等你来分！距离分钱仅剩' + this.restDay + '天！',
					path: '/pages/sakura/sakura',
					imageUrl: shareImg,
					success: function success(res) {
						wx.showToast({
							title: '分享成功',
							icon: 'success',
							duration: 2000
						});
						self.getUserActInfo();
					},
					fail: function fail() {
						wx.showToast({
							title: '取消分享',
							icon: 'error',
							duration: 2000
						});
					}
				};
			} else {
				if (res.target.dataset.type && res.target.dataset.type == '1') {
					return {
						title: '100万现金等你来分！距离分钱仅剩' + this.restDay + '天！',
						path: '/pages/sakura/sakura',
						imageUrl: shareImg,
						success: function success(res) {
							//任务二
							Net.get('Sakura.userShareActivity', {
								data: {
									user_id: self.user_id
								}
							}).then(function (res) {
								if (res.errno == '0') {
									wx.showToast({
										title: '分享成功',
										icon: 'success',
										duration: 2000
									});
								} else {
									wx.showModal({ title: '提示', content: res.errmsg });
								}
							});

							self.getUserActInfo();
						},
						fail: function fail() {
							wx.showToast({
								title: '取消分享',
								icon: 'error',
								duration: 2000
							});
						}
					};
				} else if (res.target.dataset.type && res.target.dataset.type == '2') {
					return {
						title: '100万现金等你来分！距离分钱仅剩' + this.restDay + '天！',
						path: '/pages/sakura/sakura?user_id=' + this.user_id,
						imageUrl: shareImg,
						success: function success(res) {
							wx.showToast({
								title: '分享成功',
								icon: 'success',
								duration: 2000
							});
							self.getUserActInfo();
						},
						fail: function fail() {
							wx.showToast({
								title: '取消分享',
								icon: 'error',
								duration: 2000
							});
						}
					};
				}
			}
		}
	},

	methods: {
		showGetSakuraAlert: function showGetSakuraAlert() {
			var _this2 = this;

			Net.get('Sakura.getUserActivityInfoByUserId', {
				data: {
					user_id: '0',
					from_user_id: this.option.user_id,
					sakura_id: this.option.user_id
				}
			}).then(function (res) {
				if (res.errno == '0') {
					_this2.taskList = res.data.day_task;
					var infoList = res.data.info;
					_this2.sakura_A_num = infoList.sakura_a;
					_this2.sakura_B_num = infoList.sakura_b;
					_this2.sakura_C_num = infoList.sakura_c;
					_this2.sakura_D_num = infoList.sakura_d;
					_this2.sakura_E_num = infoList.sakura_e;
					_this2.sakura_W_num = infoList.sakura_w;
					_this2.sakura_H_num = parseInt(infoList.sakura_h);
					_this2.sakura_G_num = infoList.sakura_g;
					if (infoList.sakura_a > 0 && infoList.sakura_b > 0 && infoList.sakura_c > 0 && infoList.sakura_d > 0 && infoList.sakura_e > 0) {
						_this2.is_compose = true;
					} else {
						_this2.is_compose = false;
					}
					_this2.rest_count = infoList.residue_lottery_count;
					// this.user_id = infoList.user_id;
					_this2.totalSakuraNum = res.data.h_sakura_count;
					_this2.inviteCount = res.data.invite_count;
				} else {
					wx.showModal({ title: '提示', content: res.errmsg });
				}
			});
		},
		checkAuth: function checkAuth() {
			var _this3 = this;

			if (WMP.globalData.userInfo && WMP.globalData.userInfo.user_id) {
				Net.get('Sakura.userRecvGiftSakura', {
					data: {
						user_id: this.user_id,
						from_user_id: this.option.user_id,
						sakura_id: this.option.sakura_id
					}
				}).then(function (res) {
					if (res.errno == '0') {
						if (res.data != "" && res.data.from_user_display_name) {
							_this3.inviteUser = res.data.from_user_display_name;
							_this3.inviteShareSakuraName = res.data.sakura_name;
							_this3.maskShow = true;
							_this3.inviteShareSakura = true;
						} else {
							if (_this3.option.user_id == _this3.user_id) {
								wx.showToast({
									title: '不能领取自己分享的花瓣～',
									icon: 'none',
									duration: 2000
								});
							} else {
								_this3.showHaveDone = true;
								_this3.maskShow = true;
							}
						}
					}
				});
			} else {
				WMP.checkAuthPromise(this).then(function () {
					_this3.userInfo = WMP.globalData.userInfo;
					_this3.user_id = _this3.userInfo.user_id;
					_this3.getUserActInfo();
				});
			}
		},
		getUserActInfo: function getUserActInfo() {
			var _this4 = this;

			this.maskShow = false;
			this.inviteShareSakura = false;
			Net.get('Sakura.getUserActivityInfoByUserId', {
				data: {
					user_id: this.user_id
				}
			}).then(function (res) {
				if (res.errno == '0') {
					_this4.taskList = res.data.day_task;
					var infoList = res.data.info;
					_this4.sakura_A_num = infoList.sakura_a;
					_this4.sakura_B_num = infoList.sakura_b;
					_this4.sakura_C_num = infoList.sakura_c;
					_this4.sakura_D_num = infoList.sakura_d;
					_this4.sakura_E_num = infoList.sakura_e;
					_this4.sakura_W_num = infoList.sakura_w;
					_this4.sakura_H_num = parseInt(infoList.sakura_h);
					_this4.sakura_G_num = infoList.sakura_g;
					if (infoList.sakura_a > 0 && infoList.sakura_b > 0 && infoList.sakura_c > 0 && infoList.sakura_d > 0 && infoList.sakura_e > 0) {
						_this4.is_compose = true;
					} else {
						_this4.is_compose = false;
					}
					_this4.rest_count = infoList.residue_lottery_count;
					// this.user_id = infoList.user_id;
					_this4.totalSakuraNum = res.data.h_sakura_count;
					_this4.inviteCount = res.data.invite_count;
					// if (res.data.user_reward_tip == '1') {
					// 	this.sakuraAllShow = true;
					// } else {
					// 	this.sakuraAllShow = false;
					// }
				} else {
					wx.showModal({ title: '提示', content: res.errmsg });
				}
			});
		},
		getRestDay: function getRestDay() {
			var myDate = new Date();
			var m = myDate.getMonth();
			var d = myDate.getDate();
			if (d < 11) {
				this.restDay = 11 - d;
				this.restText = '距离分钱还剩' + this.restDay + '天';
			} else if (d > 10 && d < 14) {
				this.restDay = 0;
				this.restText = '正在撒钱中';
			} else {
				this.restDay = -1;
				this.restText = '活动已结束';
			}
			console.log(this.restDay);
		},
		showHaveDone: function showHaveDone() {
			this.sakuraDetailShow = false;
			this.lotteryResShow = false;
			this.sakuraAllChangeShow = false;
			this.giftRecShow = false;
			this.sakuraAllShow = false;
			this.inviteSakuraAllShow = false;
			this.composeShow = false;

			this.showHaveDone = true;
			this.maskShow = true;
		},
		showSakuraDetail: function showSakuraDetail(key, name, poetry) {
			console.log('key=' + key);
			this.sakuraDetailKey = key;
			this.sakuraDetailName = name;
			this.sakuraDetailPoetry = poetry;
			if (this.sakuraDetailKey == 'sakura_a') {
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
			this.maskShow = true;
			this.sakuraDetailShow = true;
		},
		showComposeAni: function showComposeAni() {
			if (this.is_compose) {
				this.sakuraDetailShow = false;
				this.lotteryResShow = false;
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
				}).then(function (res) {
					if (res.errno == '0') {
						console.log(res.data);
					} else {
						wx.showModal({ title: '提示', content: res.errmsg });
					}
				});
			} else {
				wx.showToast({
					title: '樱花数量不足～',
					icon: 'none',
					duration: 2000
				});
			}
		},

		//万能瓣兑换弹框
		showSakuraW: function showSakuraW() {
			this.sakuraDetailShow = false;
			this.lotteryResShow = false;
			this.composeShow = false;
			this.giftRecShow = false;
			this.sakuraAllShow = false;
			this.inviteSakuraAllShow = false;
			this.showHaveDone = false;
			this.maskShow = true;
			this.sakuraAllChangeShow = true;
		},

		//获得万能瓣弹框
		showSakuraAll: function showSakuraAll() {
			this.sakuraDetailShow = false;
			this.lotteryResShow = false;
			this.composeShow = false;
			this.giftRecShow = false;
			this.sakuraAllChangeShow = false;
			this.inviteSakuraAllShow = false;
			this.showHaveDone = false;
			this.maskShow = true;
			this.sakuraAllShow = true;
		},

		//邀请好友得万能樱弹框
		showinviteSakuraAll: function showinviteSakuraAll() {
			this.sakuraDetailShow = false;
			this.lotteryResShow = false;
			this.composeShow = false;
			this.giftRecShow = false;
			this.sakuraAllChangeShow = false;
			this.sakuraAllShow = false;
			this.showHaveDone = false;
			this.maskShow = true;
			this.inviteSakuraAllShow = true;
		},
		showMoreRule: function showMoreRule() {
			this.ruleShowMore = !this.ruleShowMore;
		},
		showGiftRec: function showGiftRec() {
			var _this5 = this;

			this.sakuraDetailShow = false;
			this.lotteryResShow = false;
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
			}).then(function (res) {
				if (res.errno == '0') {
					console.log(res.data);
					_this5.giftRecList = res.data;
				} else {
					wx.showModal({ title: '提示', content: res.errmsg });
				}
			});
		},
		chooseChangeSakuraA: function chooseChangeSakuraA() {
			this.sakura_b_choosed = false;
			this.sakura_c_choosed = false;
			this.sakura_d_choosed = false;
			this.sakura_e_choosed = false;
			this.sakura_a_choosed = true;
			this.exchange_sakura_key = 'sakura_a';
		},
		chooseChangeSakuraB: function chooseChangeSakuraB() {
			this.sakura_a_choosed = false;
			this.sakura_c_choosed = false;
			this.sakura_d_choosed = false;
			this.sakura_e_choosed = false;
			this.sakura_b_choosed = true;
			this.exchange_sakura_key = 'sakura_b';
		},
		chooseChangeSakuraC: function chooseChangeSakuraC() {
			this.sakura_a_choosed = false;
			this.sakura_b_choosed = false;
			this.sakura_d_choosed = false;
			this.sakura_e_choosed = false;
			this.sakura_c_choosed = true;
			this.exchange_sakura_key = 'sakura_c';
		},
		chooseChangeSakuraD: function chooseChangeSakuraD() {
			this.sakura_a_choosed = false;
			this.sakura_b_choosed = false;
			this.sakura_c_choosed = false;
			this.sakura_e_choosed = false;
			this.sakura_d_choosed = true;
			this.exchange_sakura_key = 'sakura_d';
		},
		chooseChangeSakuraE: function chooseChangeSakuraE() {
			this.sakura_a_choosed = false;
			this.sakura_b_choosed = false;
			this.sakura_c_choosed = false;
			this.sakura_d_choosed = false;
			this.sakura_e_choosed = true;
			this.exchange_sakura_key = 'sakura_e';
		},
		closeAlert: function closeAlert(param) {
			param = false;
			this.maskShow = false;
			this.getUserActInfo();
		},
		shareSakura: function shareSakura() {},
		lotterySakura: function lotterySakura() {
			var _this6 = this;

			Net.post('Sakura.userLotterySakura', {
				user_id: this.user_id
			}).then(function (res) {
				if (res.errno == '0') {
					_this6.sakuraDetailShow = false;
					_this6.sakuraAllChangeShow = false;
					_this6.composeShow = false;
					_this6.sakuraAllShow = false;
					_this6.inviteSakuraAllShow = false;
					_this6.giftRecShow = false;
					_this6.showHaveDone = false;
					_this6.maskShow = true;
					_this6.lotteryResShow = true;

					_this6.lottery_res = res.data;
				} else {
					wx.showModal({ title: '提示', content: res.errmsg });
				}
			});
		},
		changeSakura: function changeSakura() {
			var _this7 = this;

			console.log(this.exchange_sakura_key);
			if (this.exchange_sakura_key) {
				Net.get('Sakura.userExchangeSakuraW', {
					data: {
						user_id: this.user_id,
						exchange_sakura_key: this.exchange_sakura_key
					}
				}).then(function (res) {
					if (res.errno == '0') {
						_this7.sakuraDetailShow = false;
						_this7.composeShow = false;
						_this7.lotteryResShow = false;
						_this7.sakuraAllShow = false;
						_this7.inviteSakuraAllShow = false;
						_this7.giftRecShow = false;
						_this7.showHaveDone = false;
						_this7.maskShow = true;
						_this7.sakuraAllChangeShow = true;
					} else {
						_this7.maskShow = false;
						_this7.sakuraAllChangeShow = false;
						wx.showModal({ title: '提示', content: res.errmsg });
					}
				});
			} else {
				wx.showToast({
					title: '请选择一个花瓣s',
					icon: 'error',
					duration: 1500
				});
			}
		},
		getTask: function getTask(task_id) {
			var _this8 = this;

			var paramTask = task_id;
			Net.post('Sakura.userRecvTask', {
				data: {
					user_id: this.user_id,
					task_id: paramTask
				}
			}).then(function (res) {
				if (res.errno == '0') {
					wx.showToast({
						title: '领取成功',
						icon: 'success',
						duration: 1500
					});
					_this8.getUserActInfo();
				} else {
					wx.showModal({ title: '提示', content: res.errmsg });
				}
			});
		},
		toFinishTask: function toFinishTask(index) {
			if (index == 3) {
				if (this.sakura_A_num == '0' && this.sakura_B_num == '0' && this.sakura_C_num == '0' && this.sakura_D_num == '0' && this.sakura_E_num == '0') {
					wx.showToast({
						title: '当前没有花瓣～',
						icon: 'none',
						duration: 1500
					});
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
		gather: function gather(res) {
			console.log(res);
		}
	}

});

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "w-sakura",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.showSakuraW()
      }
    }
  }, [_c('div', [_vm._v("\n\t\t\t万能樱"), _c('span', [_vm._v(_vm._s(_vm.sakura_W_num))])])]), _vm._v(" "), _c('div', {
    staticClass: "tips"
  }, [_vm._v("\n\t\t每集齐1朵樱花分1份现金，集的越多分的越多\n\t")]), _vm._v(" "), _c('div', {
    staticClass: "tips-2"
  }, [_vm._v("\n\t\t已集齐"), _c('span', {
    staticClass: "num"
  }, [_vm._v(_vm._s(_vm.totalSakuraNum) + "朵")]), _vm._v("樱花 "), _c('span', [_vm._v(_vm._s(_vm.restText))])]), _vm._v(" "), _c('div', {
    staticClass: "reel-box"
  }, [_c('div', {
    staticClass: "my-sakura-box"
  }, [_vm._v("\n\t\t\t合成的樱花"), _vm._l((_vm.sakura_H_num), function(item, index) {
    return _c('div', {
      staticClass: "my-sakura"
    })
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "flower-box"
  }, [_c('div', {
    staticClass: "top"
  }, [_c('div', {
    staticClass: "flower-item",
    class: {
      'disflower': _vm.sakura_A_num == '0'
    }
  }, [_c('span', [_vm._v("八重樱")]), _vm._v(" "), (_vm.sakura_A_num > 0) ? _c('div', {
    staticClass: "click-box",
    attrs: {
      "eventid": '1',
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.showSakuraDetail('sakura_a', '八重樱', '花开时来，花落时也要来。')
      }
    }
  }, [_c('div', {
    staticClass: "num-box"
  }, [_vm._v(_vm._s(_vm.sakura_A_num))]), _vm._v(" "), _vm._m(0)]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "center"
  }, [_c('div', {
    staticClass: "flower-item center-left",
    class: {
      'disflower': _vm.sakura_E_num == '0'
    }
  }, [_c('span', [_vm._v("寒绯樱")]), _vm._v(" "), (_vm.sakura_E_num > 0) ? _c('div', {
    staticClass: "click-box",
    attrs: {
      "eventid": '3',
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.showSakuraDetail('sakura_e', '寒绯樱', '不见方三日，世上滿櫻花。')
      }
    }
  }, [_c('div', {
    staticClass: "num-box"
  }, [_vm._v(_vm._s(_vm.sakura_E_num))]), _vm._v(" "), _vm._m(1)]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "mix-btn",
    class: {
      'new-mix-btn': _vm.is_compose
    },
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.showComposeAni
    }
  }, [_vm._v("合成")]), _vm._v(" "), _c('div', {
    staticClass: "flower-item center-right",
    class: {
      'disflower': _vm.sakura_B_num == '0'
    }
  }, [_c('span', [_vm._v("吉野樱")]), _vm._v(" "), (_vm.sakura_B_num > 0) ? _c('div', {
    staticClass: "click-box",
    attrs: {
      "eventid": '6',
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.showSakuraDetail('sakura_b', '吉野樱', '今日花如雪，山樱如美人。')
      }
    }
  }, [_c('div', {
    staticClass: "num-box"
  }, [_vm._v(_vm._s(_vm.sakura_B_num))]), _vm._v(" "), _vm._m(2)]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div', {
    staticClass: "flower-item bottom-left",
    class: {
      'disflower': _vm.sakura_D_num == '0'
    }
  }, [_c('span', [_vm._v("淡墨樱")]), _vm._v(" "), (_vm.sakura_D_num > 0) ? _c('div', {
    staticClass: "click-box",
    attrs: {
      "eventid": '8',
      "eventid": '9'
    },
    on: {
      "click": function($event) {
        _vm.showSakuraDetail('sakura_d', '淡墨樱', '樱花开处处，想似当年故乡路。')
      }
    }
  }, [_c('div', {
    staticClass: "num-box"
  }, [_vm._v(_vm._s(_vm.sakura_D_num))]), _vm._v(" "), _vm._m(3)]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "flower-item bottom-right",
    class: {
      'disflower': _vm.sakura_C_num == '0'
    }
  }, [_c('span', [_vm._v("大岛樱")]), _vm._v(" "), (_vm.sakura_C_num > 0) ? _c('div', {
    staticClass: "click-box",
    attrs: {
      "eventid": '10',
      "eventid": '11'
    },
    on: {
      "click": function($event) {
        _vm.showSakuraDetail('sakura_c', '大岛樱', '梦中繁花犹再现，樱瓣飘飘然。')
      }
    }
  }, [_c('div', {
    staticClass: "num-box"
  }, [_vm._v(_vm._s(_vm.sakura_C_num))]), _vm._v(" "), _vm._m(4)]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "rest-count"
  }, [_vm._v("\n\t\t\t今日剩余次数"), _c('span', [_vm._v(_vm._s(_vm.rest_count || 0))]), _vm._v("/4\n\t\t")]), _vm._v(" "), (_vm.restDay > 0 || _vm.restDay == '-1') ? _c('div', {
    staticClass: "lottery-btn",
    attrs: {
      "eventid": '12',
      "eventid": '13'
    },
    on: {
      "click": function($event) {
        _vm.lotterySakura()
      }
    }
  }, [_vm._v("\n\t\t\t抽樱花瓣\n\t\t")]) : _vm._e(), _vm._v(" "), (_vm.restDay == '0') ? _c('a', {
    staticClass: "lottery-btn",
    attrs: {
      "href": "/pages/tocash/tocash",
      "eventid": '14',
      "eventid": '15'
    },
    on: {
      "click": function($event) {
        _vm.lotterySakura()
      }
    }
  }, [_vm._v("\n\t\t\t兑换现金\n\t\t")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "task-box"
  }, [_c('div', {
    staticClass: "task-title"
  }, [_vm._v("\n\t\t\t做任务 领奖励\n\t\t")]), _vm._v(" "), _vm._l((_vm.taskList), function(item, index) {
    return _c('div', {
      key: item.task_id,
      staticClass: "task-item"
    }, [_c('div', {
      staticClass: "task-item-evd"
    }, [_vm._v("每日")]), _vm._v(" "), _c('div', {
      staticClass: "task-item-name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _vm._m(5, true), _vm._v(" "), (item.status == '0') ? _c('div', {
      staticClass: "task-item-btn receive",
      attrs: {
        "eventid": '16-' + index,
        "eventid": '17-' + index
      },
      on: {
        "click": function($event) {
          _vm.getTask(item.task_id)
        }
      }
    }, [_vm._v("\n\t\t\t\t领取\n\t\t\t")]) : _vm._e(), _vm._v(" "), (item.status == '1') ? _c('div', {
      staticClass: "task-item-btn done"
    }) : _vm._e(), _vm._v(" "), (item.status == '-1') ? _c('div', {
      staticClass: "task-item-btn",
      attrs: {
        "eventid": '18-' + index,
        "eventid": '19-' + index
      },
      on: {
        "click": function($event) {
          _vm.toFinishTask(index)
        }
      }
    }, [(index == 2) ? _c('button', {
      attrs: {
        "open-type": "share",
        "data-type": 1
      }
    }, [_vm._v("\n\t\t\t\t\t去完成\n\t\t\t\t")]) : _vm._e(), _vm._v(" "), (index != 2) ? _c('div', [_vm._v("\n\t\t\t\t\t去完成\n\t\t\t\t")]) : _vm._e()], 1) : _vm._e()])
  }), _vm._v(" "), _c('div', {
    staticClass: "task-item"
  }, [_c('div', {
    staticClass: "suc-box"
  }, [_vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "suc-box-bot"
  }, [_vm._v("\n\t\t\t\t\t已注册"), _c('span', [_vm._v(_vm._s(_vm.inviteCount || 0))]), _vm._v("人\n\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "task-item-img"
  }, [(_vm.sakura_W_num > 0) ? _c('div', {
    staticClass: "num"
  }, [_vm._v(_vm._s(_vm.sakura_W_num))]) : _vm._e(), _vm._v(" "), _c('img', {
    attrs: {
      "src": "https://s.wandougongzhu.cn/s/0e/_16ec47.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "to-invite",
    class: {
      'task-item-btn': true
    },
    attrs: {
      "eventid": '20'
    },
    on: {
      "click": function($event) {
        _vm.showinviteSakuraAll()
      }
    }
  }, [_vm._v("去邀请")])])], 2), _vm._v(" "), _c('div', {
    staticClass: "rule-box"
  }, [_c('div', {
    staticClass: "rule-title"
  }, [_vm._v("活动规则")]), _vm._v(" "), _c('img', {
    staticClass: "celendar",
    attrs: {
      "src": "https://s4.wandougongzhu.cn/s/5d/_f90015.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "red-umbrella",
    attrs: {
      "src": "https://s4.wandougongzhu.cn/s/4d/shanzi_eee532.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "rule-content"
  }, [_c('div', [_c('p', {
    staticClass: "rule-p-title"
  }, [_vm._v("活动分为两个阶段")]), _vm._v(" "), _c('p', [_vm._v("1.集花瓣阶段：4月1日 - 4月10日，可以通过完成每日任务，获得抽樱花瓣的机会。通过消耗樱花瓣各1个合成樱花。")]), _vm._v(" "), _c('p', [_vm._v("2.分现金阶段：4月11日 - 4月13日，可将合成的樱花兑换现金，或豌豆公主积分。4月11日0点系统会将符合条件的樱花瓣自动合成樱花")]), _vm._v(" "), _c('p', [_vm._v("3.活动期间，完成以下任务可获得抽樱花瓣的机会：访问活动页，分享活动到微信，赠送好友1瓣樱花，浏览豌豆公主首页。每天每个任务每个账号最多完成1次。")]), _vm._v(" "), _c('p', [_vm._v("4.抽樱花次数会在次日0点清空，请在0点前全部用完。")]), _vm._v(" "), _c('p', [_vm._v("5.分现金将在4月11日早10:00开启，于4月13日24:00结束，结束后樱花将无法兑换现金，请务必在活动前完成兑换。")])], 1), _vm._v(" "), _c('div', {
    staticClass: "rule-show-more",
    class: {
      'shouqi': _vm.ruleShowMore
    },
    attrs: {
      "eventid": '21'
    },
    domProps: {
      "textContent": _vm._s(_vm.ruleShowMore ? '收起' : '展开更多')
    },
    on: {
      "click": function($event) {
        _vm.showMoreRule()
      }
    }
  }), _vm._v(" "), (_vm.ruleShowMore) ? _c('div', [_c('p', {
    staticClass: "faq-title"
  }, [_vm._v("FAQ")]), _vm._v(" "), _c('p', {
    staticClass: "faq-q"
  }, [_vm._v("1.我要如何赠送好友樱花瓣")]), _vm._v(" "), _c('p', [_vm._v("当拥有的樱花瓣数量大于1个时，点击樱花瓣或赠送好友1瓣任务，可将樱花瓣发送给好友。")]), _vm._v(" "), _c('p', {
    staticClass: "faq-q"
  }, [_vm._v("2.赠送好友的樱花瓣在何时扣除")]), _vm._v(" "), _c('p', [_vm._v("选择樱花瓣后，无论是否分享或是否有人领取，樱花瓣都将被扣除。请在选择樱花瓣后完成分享流程，中途中止也不会返还樱花瓣。")]), _vm._v(" "), _c('p', {
    staticClass: "faq-q"
  }, [_vm._v("3.4月11日如果还有未合成的樱花瓣该怎么办")]), _vm._v(" "), _c('p', [_vm._v("4月11日0点系统会自动帮您合成樱花瓣，同时集花瓣入口将关闭，所以不满足各5瓣的樱花将无法合成樱花。")]), _vm._v(" "), _c('p', {
    staticClass: "faq-q"
  }, [_vm._v("4.什么是万能樱")]), _vm._v(" "), _c('p', [_vm._v("万能樱是通过完成特殊任务收集到的，可以兑换任意一瓣樱花。")]), _vm._v(" "), _c('p', {
    staticClass: "faq-q"
  }, [_vm._v("5.邀请好友注册如何获得万能樱")]), _vm._v(" "), _c('p', [_vm._v("好友在您的分享页完成注册并验证手机号，您将获得万能樱1个。")])], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "rec-btn",
    attrs: {
      "eventid": '22'
    },
    on: {
      "click": function($event) {
        _vm.showGiftRec()
      }
    }
  }, [_vm._v("\n\t\t\t赠领记录\n\t\t")])]), _vm._v(" "), (_vm.maskShow) ? _c('div', {
    attrs: {
      "id": "mask"
    }
  }, [(_vm.composeShow) ? _c('div', {
    staticClass: "compose-box"
  }, [_c('div', {
    staticClass: "compose-tips"
  }, [_vm._v("\n\t\t\t\t恭喜获得一朵樱花\n\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "compose-ani"
  }), _vm._v(" "), _c('div', {
    staticClass: "compose-ani-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "compose-ani-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "shink"
  }), _vm._v(" "), _c('div', {
    staticClass: "shink2"
  }), _vm._v(" "), _c('div', {
    staticClass: "compose-btn",
    attrs: {
      "eventid": '23',
      "eventid": '24',
      "eventid": '59'
    },
    on: {
      "click": function($event) {
        _vm.closeAlert(_vm.composeShow)
      }
    }
  }, [_vm._v("确定")])]) : _vm._e(), _vm._v(" "), (_vm.sakuraDetailShow) ? _c('div', {
    staticClass: "to-alert-box"
  }, [_c('div', {
    staticClass: "colse",
    attrs: {
      "eventid": '25',
      "eventid": '26',
      "eventid": '60'
    },
    on: {
      "click": function($event) {
        _vm.closeAlert(_vm.sakuraDetailShow)
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "sakura-text"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.sakuraDetailName))]), _vm._v(" "), _c('div', {
    staticClass: "poetry"
  }, [_vm._v(_vm._s(_vm.sakuraDetailPoetry))])]), _vm._v(" "), _c('img', {
    staticClass: "mysakura",
    class: {
      'rotate1': _vm.sakuraDetailKey == 'sakura_b', 'rotate2': _vm.sakuraDetailKey == 'sakura_c', 'rotate3': _vm.sakuraDetailKey == 'sakura_d', 'rotate4': _vm.sakuraDetailKey == 'sakura_e'
    },
    attrs: {
      "src": "https://s5.wandougongzhu.cn/s/e0/myflower1_485615.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mysakura-tips"
  }, [_c('p', [_vm._v("多余的樱花瓣可以赠送给好友哦")]), _vm._v(" "), _c('p', [_vm._v("每天首次赠送可获得1次抽樱花瓣的机会")])], 1), _vm._v(" "), _c('button', {
    staticClass: "mysakura-btn",
    attrs: {
      "open-type": "share",
      "data-type": 0
    }
  }, [_vm._v("\n\t\t\t\t送给好友\n\t\t\t")])], 1) : _vm._e(), _vm._v(" "), (_vm.lotteryResShow) ? _c('div', {
    staticClass: "get-alert-box"
  }, [_c('div', {
    staticClass: "colse",
    attrs: {
      "eventid": '27',
      "eventid": '29',
      "eventid": '61'
    },
    on: {
      "click": function($event) {
        _vm.closeAlert(_vm.lotteryResShow)
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mysakura-text"
  }, [_c('div', {
    staticClass: "congratulation"
  }, [_vm._v("恭喜你，获得了")]), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.lottery_res.sakura_name))])]), _vm._v(" "), _c('div', {
    staticClass: "getsakura"
  }), _vm._v(" "), _c('div', {
    staticClass: "mysakura-btn",
    attrs: {
      "eventid": '28',
      "eventid": '30',
      "eventid": '62'
    },
    on: {
      "click": function($event) {
        _vm.closeAlert(_vm.lotteryResShow)
      }
    }
  }, [_vm._v("\n\t\t\t\t确定\n\t\t\t")])]) : _vm._e(), _vm._v(" "), (_vm.sakuraAllShow) ? _c('div', {
    staticClass: "get-alert-box"
  }, [_vm._m(7), _vm._v(" "), _vm._m(8), _vm._v(" "), _c('div', {
    staticClass: "mysakura-btn"
  }, [_vm._v("\n\t\t\t\t确定\n\t\t\t")])]) : _vm._e(), _vm._v(" "), (_vm.inviteSakuraAllShow) ? _c('div', {
    staticClass: "get-alert-box"
  }, [_c('div', {
    staticClass: "colse",
    attrs: {
      "eventid": '31',
      "eventid": '32',
      "eventid": '63'
    },
    on: {
      "click": function($event) {
        _vm.closeAlert(_vm.inviteSakuraAllShow)
      }
    }
  }), _vm._v(" "), _vm._m(9), _vm._v(" "), _c('img', {
    staticClass: "getsakura invite-sakura",
    attrs: {
      "src": "https://s2.wandougongzhu.cn/s/9f/wan_ebbf7a.png"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "invite-btn",
    attrs: {
      "open-type": "share",
      "data-type": 2
    }
  }, [_vm._v("\n\t\t\t\t去邀请\n\t\t\t")]), _vm._v(" "), _c('div', [_vm._v("花瓣在好友验证手机号后发放")])], 1) : _vm._e(), _vm._v(" "), (_vm.sakuraAllChangeShow) ? _c('div', {
    staticClass: "get-alert-box"
  }, [_c('div', {
    staticClass: "colse",
    attrs: {
      "eventid": '33',
      "eventid": '40',
      "eventid": '64'
    },
    on: {
      "click": function($event) {
        _vm.closeAlert(_vm.sakuraAllChangeShow)
      }
    }
  }), _vm._v(" "), _vm._m(10), _vm._v(" "), _c('div', {
    staticClass: "flower-box universal-flower"
  }, [_c('div', {
    staticClass: "top"
  }, [_c('div', {
    staticClass: "flower-item",
    class: {
      'choosed': _vm.sakura_a_choosed
    },
    attrs: {
      "eventid": '34',
      "eventid": '41',
      "eventid": '65'
    },
    on: {
      "click": function($event) {
        _vm.chooseChangeSakuraA(_vm.sakura_a_choosed)
      }
    }
  }, [_c('span', [_vm._v("八重樱")])])]), _vm._v(" "), _c('div', {
    staticClass: "center"
  }, [_c('div', {
    staticClass: "flower-item center-left",
    class: {
      'choosed': _vm.sakura_e_choosed
    },
    attrs: {
      "eventid": '35',
      "eventid": '42',
      "eventid": '66'
    },
    on: {
      "click": function($event) {
        _vm.chooseChangeSakuraE(_vm.sakura_e_choosed)
      }
    }
  }, [_c('span', [_vm._v("寒绯樱")])]), _vm._v(" "), _c('div', {
    staticClass: "flower-item center-right",
    class: {
      'choosed': _vm.sakura_b_choosed
    },
    attrs: {
      "eventid": '36',
      "eventid": '43',
      "eventid": '67'
    },
    on: {
      "click": function($event) {
        _vm.chooseChangeSakuraB(_vm.sakura_b_choosed)
      }
    }
  }, [_c('span', [_vm._v("吉野樱")])])]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div', {
    staticClass: "flower-item bottom-left",
    class: {
      'choosed': _vm.sakura_d_choosed
    },
    attrs: {
      "eventid": '37',
      "eventid": '44',
      "eventid": '68'
    },
    on: {
      "click": function($event) {
        _vm.chooseChangeSakuraD(_vm.sakura_d_choosed)
      }
    }
  }, [_c('span', [_vm._v("淡墨樱")])]), _vm._v(" "), _c('div', {
    staticClass: "flower-item bottom-right",
    class: {
      'choosed': _vm.sakura_c_choosed
    },
    attrs: {
      "eventid": '38',
      "eventid": '45',
      "eventid": '69'
    },
    on: {
      "click": function($event) {
        _vm.chooseChangeSakuraC(_vm.sakura_c_choosed)
      }
    }
  }, [_c('span', [_vm._v("大岛樱")])])])]), _vm._v(" "), _c('div', {
    staticClass: "mysakura-btn",
    attrs: {
      "eventid": '39',
      "eventid": '46',
      "eventid": '70'
    },
    on: {
      "click": function($event) {
        _vm.changeSakura()
      }
    }
  }, [_vm._v("\n\t\t\t\t兑换\n\t\t\t")])]) : _vm._e(), _vm._v(" "), (_vm.giftRecShow) ? _c('div', {
    staticClass: "get-alert-box"
  }, [_c('div', {
    staticClass: "colse",
    attrs: {
      "eventid": '47',
      "eventid": '49',
      "eventid": '71'
    },
    on: {
      "click": function($event) {
        _vm.closeAlert(_vm.giftRecShow)
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "gift-res-title"
  }, [_vm._v("\n\t\t\t\t赠领记录\n\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "gift-res-content"
  }, [_vm._l((_vm.giftRecList), function(item, index) {
    return (_vm.giftRecList.length > 0) ? _c('div', {
      staticClass: "gift-res-item"
    }, [(item.type == '1') ? _c('div', [(item.from_user_nickname) ? _c('div', {
      staticClass: "rec"
    }, [_vm._v("赠送的"), _c('span', [_vm._v(_vm._s(item.sakura_name))]), _vm._v("被"), _c('span', [_vm._v(_vm._s(item.from_user_nickname))]), _vm._v("领取了")]) : _vm._e(), _vm._v(" "), (!item.from_user_nickname) ? _c('div', {
      staticClass: "rec"
    }, [_vm._v("赠送的"), _c('span', [_vm._v(_vm._s(item.sakura_name))]), _vm._v("待领取")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (item.type == '2') ? _c('div', [_c('div', {
      staticClass: "rec"
    }, [_vm._v("领取了"), _c('span', [_vm._v(_vm._s(item.from_user_nickname))]), _vm._v("的"), _c('span', [_vm._v(_vm._s(item.sakura_name))])])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "time"
    }, [_vm._v(_vm._s(item.mtime))])]) : _vm._e()
  }), _vm._v(" "), (_vm.giftRecList.length == 0) ? _c('div', {
    staticClass: "gift-res-item-null"
  }, [_vm._v("\n\t\t\t\t\t暂时没有赠领记录哦～快去分享给好友吧\n\t\t\t\t")]) : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "mysakura-btn",
    attrs: {
      "eventid": '48',
      "eventid": '50',
      "eventid": '72'
    },
    on: {
      "click": function($event) {
        _vm.closeAlert(_vm.giftRecShow)
      }
    }
  }, [_vm._v("\n\t\t\t\t确定\n\t\t\t")])]) : _vm._e(), _vm._v(" "), (_vm.inviteShareSakura) ? _c('div', {
    staticClass: "get-alert-box"
  }, [_c('div', {
    staticClass: "colse",
    attrs: {
      "eventid": '51',
      "eventid": '53',
      "eventid": '73'
    },
    on: {
      "click": function($event) {
        _vm.closeAlert(_vm.inviteShareSakura)
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mysakura-text"
  }, [_c('div', {
    staticClass: "congratulation"
  }, [_vm._v("好友"), _c('span', [_vm._v(_vm._s(_vm.inviteUser))]), _vm._v("送你一朵")]), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.inviteShareSakuraName))])]), _vm._v(" "), _c('div', {
    staticClass: "getsakura"
  }), _vm._v(" "), _c('div', {
    staticClass: "mysakura-btn",
    attrs: {
      "eventid": '52',
      "eventid": '54',
      "eventid": '74'
    },
    on: {
      "click": function($event) {
        _vm.checkAuth()
      }
    }
  }, [_vm._v("\n\t\t\t\t确定\n\t\t\t")])]) : _vm._e(), _vm._v(" "), (_vm.showHaveDone) ? _c('div', {
    staticClass: "get-alert-box suc-alert-box"
  }, [_c('div', {
    staticClass: "colse",
    attrs: {
      "eventid": '55',
      "eventid": '57',
      "eventid": '75'
    },
    on: {
      "click": function($event) {
        _vm.closeAlert(_vm.showHaveDone)
      }
    }
  }), _vm._v(" "), _vm._m(11), _vm._v(" "), _c('div', {
    staticClass: "mysakura-btn",
    attrs: {
      "eventid": '56',
      "eventid": '58',
      "eventid": '76'
    },
    on: {
      "click": function($event) {
        _vm.closeAlert(_vm.showHaveDone)
      }
    }
  }, [_vm._v("\n\t\t\t\t确定\n\t\t\t")])]) : _vm._e()]) : _vm._e()])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dot-box"
  }, [_c('div', {
    staticClass: "dot dot-1"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-4"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-5"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-6"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-7"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-8"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-9"
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dot-box"
  }, [_c('div', {
    staticClass: "dot dot-1"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-4"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-5"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-6"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-7"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-8"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-9"
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dot-box"
  }, [_c('div', {
    staticClass: "dot dot-1"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-4"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-5"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-6"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-7"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-8"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-9"
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dot-box"
  }, [_c('div', {
    staticClass: "dot dot-1"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-4"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-5"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-6"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-7"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-8"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-9"
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dot-box"
  }, [_c('div', {
    staticClass: "dot dot-1"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-4"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-5"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-6"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-7"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-8"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-9"
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "task-item-img"
  }, [_c('img', {
    attrs: {
      "src": "https://s3.wandougongzhu.cn/s/bc/_157403.png",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "suc-box-top"
  }, [_c('div', {
    staticClass: "task-item-evd task-item-suc"
  }, [_vm._v("成就")]), _vm._v(" "), _c('span', {
    staticClass: "task-item-name"
  }, [_vm._v("邀请好友注册")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mysakura-text"
  }, [_c('div', {
    staticClass: "congratulation"
  }, [_vm._v("恭喜你，获得了")]), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("万能樱")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "universal"
  }, [_c('div', {
    staticClass: "dot-box"
  }, [_c('div', {
    staticClass: "dot dot-1"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-4"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-5"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-6"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-7"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-8"
  }), _vm._v(" "), _c('div', {
    staticClass: "dot dot-9"
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "invite-text"
  }, [_c('div', {
    staticClass: "invite-title"
  }, [_vm._v("邀请好友注册得万能樱")]), _vm._v(" "), _c('div', [_vm._v("万能樱可兑换任意一朵花瓣")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mysakura-text"
  }, [_c('div', {
    staticClass: "universal-compose"
  }, [_vm._v("万能樱兑换")]), _vm._v(" "), _c('div', {
    staticClass: "universal-tips"
  }, [_vm._v("使用1个万能樱可以兑换任意1朵花瓣")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mysakura-text"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v("手慢了，花瓣已被别人领取")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2da408fc", esExports)
  }
}

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2da408fc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(32);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(26)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2da408fc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2da408fc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/sakura/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2da408fc", Component.options)
  } else {
    hotAPI.reload("data-v-2da408fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[13]);
//# sourceMappingURL=sakura.js.map