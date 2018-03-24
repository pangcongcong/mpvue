global.webpackJsonp([3],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(8);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 23:
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

/* harmony default export */ __webpack_exports__["a"] = ({
	data: function data() {
		return {
			user_id: '',
			userInfo: {},
			sakuraList: [], //已有樱花数量
			shareImgBtn: '', //分享花瓣给好友图
			shareImg: 'https://s4.wandougongzhu.cn/s/e4/__1_17ae88.jpg', //分享图
			sakuraDetailRotate: 0, //旋转角度
			shareSakuraKey: '', //分享的樱花key
			shareSakuraName: '', //分享的樱花name
			sakura_id: ''
		};
	},
	onShow: function onShow() {
		this.userInfo = WMP.globalData.userInfo;
		this.user_id = this.userInfo.user_id;
		this.getUserActInfo();
	},

	// created() {
	// 	this.userInfo = WMP.globalData.userInfo;
	// 	this.user_id = this.userInfo.user_id;
	// 	this.getUserActInfo();
	// },
	onShareAppMessage: function onShareAppMessage(res) {
		var _this = this;

		var self = this;

		if (res.from == 'button') {
			Net.get('Sakura.userGiftSakura', {
				data: {
					user_id: this.user_id,
					sakura_key: this.shareSakuraKey || this.sakuraList[0].sakura_key
				}
			}).then(function (res) {
				if (res.errno == '0') {
					_this.sakura_id = res.data.sakura_id;
					_this.shareSakuraName = _this.sakuraList[0].sakura_name;
					console.log('/pages/sakura/sakura?share_sakura=' + _this.shareSakuraName + '&user_id=' + _this.user_id + "&sakura_id=" + _this.sakura_id);
				} else {
					wx.showModal({ title: '提示', content: res.errmsg });
				}
			});
			return {
				title: '送你一朵' + this.shareSakuraName + '，快来和我平分100万现金！',
				path: '/pages/sakura/sakura?share_sakura=' + this.shareSakuraName + '&user_id=' + this.user_id + "&sakura_id=" + this.sakura_id,
				imageUrl: this.shareImgBtn,
				success: function success(res) {
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
		}
	},

	methods: {
		swiperChange: function swiperChange(res) {
			var current = res.target.current;
			this.shareSakuraKey = this.sakuraList[current].sakura_key || this.sakuraList[0].sakura_key;
			this.shareSakuraName = this.sakuraList[current].sakura_name || this.sakuraList[0].sakura_name;
			this.shareImgBtn = this.sakuraList[current].share_img || this.sakuraList[0].share_img;
		},
		getUserActInfo: function getUserActInfo() {
			var _this2 = this;

			Net.get('Sakura.getUserActivityInfoByUserId', {
				user_id: this.user_id
			}).then(function (res) {
				var sakuraitem = res.data.info;
				var list = [];
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
				_this2.sakuraList = list;
			});
		},
		closeAlert: function closeAlert(param) {
			param = false;
			this.maskShow = false;
		}
	}

});

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("请选择要赠送的花瓣")]), _vm._v(" "), _c('swiper', {
    staticClass: "swiper-box",
    attrs: {
      "next-margin": "35px",
      "previous-margin": "35px",
      "eventid": '0'
    },
    on: {
      "change": _vm.swiperChange
    }
  }, _vm._l((_vm.sakuraList), function(item, index) {
    return _c('swiper-item', {
      key: item.index,
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('div', {
      staticClass: "to-alert-box"
    }, [_c('div', {
      staticClass: "sakura-text"
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.sakura_name))]), _vm._v(" "), _c('div', {
      staticClass: "poetry"
    }, [_vm._v(_vm._s(item.poetry))])]), _vm._v(" "), _c('img', {
      staticClass: "mysakura",
      class: {
        'rotate1': item.sakura_key == 'sakura_b', 'rotate2': item.sakura_key == 'sakura_c', 'rotate3': item.sakura_key == 'sakura_d', 'rotate4': item.sakura_key == 'sakura_e'
      },
      attrs: {
        "src": "https://s5.wandougongzhu.cn/s/e0/myflower1_485615.png"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "mysakura-tips"
    }, [_c('p', [_vm._v("多余的樱花瓣可以赠送给好友哦")]), _vm._v(" "), _c('p', [_vm._v("每天首次赠送可获得1次抽樱花瓣的机会")])], 1), _vm._v(" "), _c('div', {
      staticClass: "ihave-sakura"
    }, [_vm._v("拥有"), _c('span', [_vm._v(_vm._s(item.sakura_num))]), _vm._v("瓣")])])])
  })), _vm._v(" "), _c('button', {
    staticClass: "mysakura-btn",
    attrs: {
      "open-type": "share"
    }
  }, [_vm._v(" \n\t\t送给好友\n\t")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a06c8f74", esExports)
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a06c8f74_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(36);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(30)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a06c8f74"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a06c8f74_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/togift/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a06c8f74", Component.options)
  } else {
    hotAPI.reload("data-v-a06c8f74", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[15]);
//# sourceMappingURL=togift.js.map