global.webpackJsonp([4],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(7);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
	},

	created: function created() {
		var _this = this;

		WMP.checkAuthPromise(this).then(function () {
			_this.userInfo = WMP.globalData.userInfo;
			_this.user_id = _this.userInfo.user_id;
			_this.getUserActInfo();
		});
	},

	methods: {
		bindViewTap: function bindViewTap() {
			var url = '../logs/logs';
			wx.navigateTo({ url: url });
		},
		getUserActInfo: function getUserActInfo() {
			var _this2 = this;

			Net.get('Sakura.getUserActivityInfoByUserId', {
				user_id: this.user_id
			}).then(function (res) {
				_this2.toCashNum = res.data.user_exchange_price;
				_this2.toScoreNum = res.data.user_exchange_score;
				_this2.scoreToCash = res.data.score_to_cash;
			});
		},
		showChangeScore: function showChangeScore() {
			var _this3 = this;

			Net.get('Sakura.userExchange', {
				data: {
					user_id: this.user_id,
					type: '0'
				}
			}).then(function (res) {
				_this3.type = '0';
				_this3.maskShow = false;
				_this3.sucResShow = true;
			});
		},
		showChangeCash: function showChangeCash() {
			var _this4 = this;

			Net.get('Sakura.userExchange', {
				data: {
					user_id: this.user_id,
					type: '1'
				}
			}).then(function (res) {
				_this4.type = '1';
				_this4.maskShow = true;
				_this4.sucResShow = true;
			});
		},

		// userExchange
		closeAlert: function closeAlert() {
			this.maskShow = false;
		}
	}
});

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "cash-box"
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "https://s5.wandougongzhu.cn/s/ca/xianjin_82b0bb.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "cash-content"
  }, [_c('div', {
    staticClass: "tips2"
  }, [_c('span', [_vm._v(_vm._s(_vm.toCashNum || 12))]), _vm._v("元\n\t\t\t\t"), _c('div', {
    staticClass: "mini-tip"
  }, [_vm._v("24小时内存入微信零钱")])]), _vm._v(" "), _c('div', {
    staticClass: "to-cash-btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.showChangeCash()
      }
    }
  }, [_vm._v("\n\t\t\t\t兑换现金\n\t\t\t")])])]), _vm._v(" "), _c('div', {
    staticClass: "score-box"
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "https://s3.wandougongzhu.cn/s/ad/jifen_964890.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "score-content"
  }, [_c('div', {
    staticClass: "tips2"
  }, [_vm._v("\n\t\t\t\t价值"), _c('span', [_vm._v(_vm._s(_vm.scoreToCash))]), _vm._v("元 (" + _vm._s(_vm.toScoreNum) + ")积分\n\t\t\t\t"), _c('div', {
    staticClass: "mini-tip"
  }, [_vm._v("下单可直接抵现" + _vm._s(_vm.scoreToCash) + "元")])]), _vm._v(" "), _c('div', {
    staticClass: "to-score-btn"
  }, [_vm._v("\n\t\t\t\t兑换积分\n\t\t\t")])])]), _vm._v(" "), (_vm.maskShow) ? _c('div', {
    attrs: {
      "id": "mask"
    }
  }, [_c('div', {
    staticClass: "to-alert-box"
  }, [_c('div', {
    staticClass: "colse",
    attrs: {
      "eventid": '1',
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.closeAlert(_vm.maskShow)
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mysakura-tips"
  }, [_c('p', [_vm._v("即将为您兑换豌豆公主"), _c('span'), _vm._v("积分，")]), _vm._v(" "), _c('p', [_vm._v("可抵现"), _c('span'), _vm._v("元，下单时可抵现。")])], 1), _vm._v(" "), _c('div', {
    staticClass: "btn-box"
  }, [_c('div', {
    staticClass: "mysakura-btn dis-btn",
    attrs: {
      "eventid": '2',
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.closeAlert(_vm.maskShow)
      }
    }
  }, [_vm._v("\n\t\t\t\t\t取消\n\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "mysakura-btn",
    attrs: {
      "eventid": '3',
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.showChangeScore()
      }
    }
  }, [_vm._v("\n\t\t\t\t\t去兑换\n\t\t\t\t")])])])]) : _vm._e(), _vm._v(" "), (_vm.sucResShow) ? _c('div', {
    attrs: {
      "id": "suc"
    }
  }, [_c('div', {
    staticClass: "suc-title"
  }, [_vm._v("恭喜您，"), (_vm.type == '0') ? _c('span', [_vm._v("积分")]) : _vm._e(), _vm._v(" "), (_vm.type == '1') ? _c('span', [_vm._v("现金")]) : _vm._e(), _vm._v("兑换成功！")]), _vm._v(" "), (_vm.type == '0') ? _c('div', {
    staticClass: "suc-tips"
  }, [_vm._v("积分已经放入豌豆公主账号"), _c('span', [_vm._v(_vm._s(_vm.phone))])]) : _vm._e(), _vm._v(" "), (_vm.type == '1') ? _c('div', {
    staticClass: "suc-tips"
  }, [_vm._v("现金24小时内会存入您的微信钱包")]) : _vm._e(), _vm._v(" "), (_vm.type == '0') ? _c('div', {
    staticClass: "suc-res"
  }, [_vm._v(_vm._s(_vm.toScoreNum)), _c('span', [_vm._v("积分")])]) : _vm._e(), _vm._v(" "), (_vm.type == '1') ? _c('div', {
    staticClass: "suc-res"
  }, [_vm._v(_vm._s(_vm.toCashNum)), _c('span', [_vm._v("现金")])]) : _vm._e(), _vm._v(" "), (_vm.type == '1' && _vm.toCashNum < 1) ? _c('div', [_c('div', {
    staticClass: "suc-tips"
  }, [_vm._v(_vm._s(_vm.toCashTip))]), _vm._v(" "), _c('img', {
    staticClass: "to-cash-tip",
    attrs: {
      "src": "https://s4.wandougongzhu.cn/s/f3/613_360bb0.png",
      "alt": ""
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "suc-banner"
  }), _vm._v(" "), _c('a', {
    staticClass: "suc-btn",
    attrs: {
      "href": "/page/index/index"
    }
  }, [_vm._v("去逛逛")])]) : _vm._e()])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tips"
  }, [_c('div', [_vm._v("我的樱花")]), _vm._v(" "), _c('div', {
    staticClass: "mysakura"
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1d876289", esExports)
  }
}

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1d876289_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(24)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1d876289"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1d876289_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/tocash/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d876289", Component.options)
  } else {
    hotAPI.reload("data-v-1d876289", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[14]);
//# sourceMappingURL=tocash.js.map