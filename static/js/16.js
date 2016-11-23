webpackJsonp([16,50],{

/***/ 3:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'props'
	    },
	    head: Array,
	    content: Array,
	    apis: Array,
	    title: {
	      type: String,
	      default: "API"
	    }
	  },
	  ready: function ready() {
	    if (!this.head) {
	      switch (this.type) {
	        case 'props':
	          this.$set('head', ['参数', '说明', '类型', '默认值']);break;
	        case 'events':
	          this.$set('head', ['事件名', '说明', '参数']);break;
	        case 'methods':
	          this.$set('head', ['方法名', '说明', '参数', '返回值']);break;
	      }
	    }
	  }
	};

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, ".markdown > table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  empty-cells: show;\n  border: 1px solid #e9e9e9;\n  width: 100%;\n  margin-bottom: 24px;\n}\n.markdown > table th {\n  white-space: nowrap;\n  color: #5c6b77;\n  font-weight: 600;\n  background: #f7f7f7;\n}\n.markdown > table td,\n.markdown > table th {\n  border: 1px solid #e9e9e9;\n  padding: 8px 16px;\n  text-align: left;\n}\n.markdown.api-container table {\n  font-family: Consolas,Menlo,Courier,monospace;\n  font-size: 13px;\n}\n", ""]);

	// exports


/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./apiTable.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./apiTable.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 6:
/***/ function(module, exports) {

	module.exports = "\n<section class=\"markdown api-container\">\n  <h2>{{ title }}</h2>\n  <slot></slot>\n  <table>\n    <thead>\n      <tr>\n        <th v-for=\"text in head\" v-html=\"text\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr v-for=\"item in content\">\n        <td v-for=\"text in item\" v-html=\"text\" track-by=\"$index\"></td>\n      </tr>\n      <tr v-for=\"api in apis\">\n        <td v-for=\"text in api\" v-html=\"text\" track-by=\"$index\"></td>\n      </tr>\n    </tbody>\n  </table>\n</section>\n";

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(5)
	__vue_script__ = __webpack_require__(3)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\apiTable.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(6)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },

/***/ 8:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    title: String,
	    describe: String,
	    code: String
	  },
	  data: function data() {
	    return {
	      open: false
	    };
	  },
	  ready: function ready() {
	    var _this = this;

	    var children = this._slotContents.default.childNodes;

	    children = Array.prototype.filter.call(children, function (node) {
	      return node.nodeType === 1;
	    });

	    if (!this.code) {
	      this.code = children.map(function (dom) {
	        return dom.outerHTML.replace(/\t| {4}/g, '');
	      }).join('\n');
	    }

	    this.$nextTick(function () {
	      hljs.highlightBlock(_this.$el.querySelector('pre code'));
	    });
	  },

	  methods: {
	    handleOpen: function handleOpen() {
	      this.open = !this.open;
	    }
	  }
	};

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, ".code-box {\n  border: 1px solid #e9e9e9;\n  border-radius: 6px;\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  margin: 0 0 16px;\n  -webkit-transition: all .2s ease;\n  transition: all .2s ease;\n}\n.code-box .collapse {\n  position: absolute;\n  right: 16px;\n  bottom: 16px;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  line-height: 18px;\n  opacity: .5;\n  text-align: center;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  color: #999;\n  background: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 100%;\n}\n.code-box .collapse:hover {\n  opacity: 1;\n}\n.code-box:hover {\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 10;\n  background: #fff;\n}\n.code-box:hover .code-box-title {\n  background: #fbfbfb;\n  box-shadow: 0 -1.2px 0 #e9e9e9;\n}\n.code-box:hover .code-box-meta {\n  background: #fbfbfb;\n}\n.code-box .code-box-demo {\n  border-bottom: 1px solid #e9e9e9;\n  padding: 42px 20px 50px;\n}\n.code-box .highlight-wrapper {\n  max-height: 0;\n  opacity: 0;\n  overflow: auto;\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease;\n  border-radius: 0 0 6px 6px;\n}\n.code-box .highlight-wrapper-expand {\n  max-height: 500px;\n  opacity: 1;\n}\n.code-box.expand .collapse {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.code-box.expand .code-box-meta {\n  border-radius: 0;\n  border-bottom: 1px dashed #e9e9e9;\n}\n.code-box-meta {\n  position: relative;\n  padding: 16px;\n  border-radius: 0 0 6px 6px;\n  -webkit-transition: background-color 0.4s ease;\n  transition: background-color 0.4s ease;\n  width: 100%;\n  font-size: 12px;\n}\n.code-box-meta p {\n  margin: 0;\n}\n.code-box-title {\n  position: absolute;\n  top: -14px;\n  padding: 1px 1.1em;\n  color: #777;\n  border-radius: 6px;\n  background: #fff;\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease;\n}\n.code-box-title:before {\n  font-family: anticon;\n  content: \"\\E6D2\";\n  font-size: 16px;\n  vertical-align: middle;\n  line-height: 22px;\n  position: relative;\n  margin-right: 8px;\n  top: -2px;\n  color: #ccc;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  display: inline-block;\n}\n.code-box .code-box-title a,\n.code-box .code-box-title a:hover {\n  color: #666;\n  font-size: 14px;\n}\n.highlight {\n  line-height: 1.5;\n}\n.highlight pre {\n  margin: 0;\n  padding: 0;\n  background: #fff;\n  width: auto;\n}\n.highlight pre code {\n  display: block;\n  color: #666;\n  line-height: 1.7;\n  border: 1px solid #e9e9e9;\n  padding: 10px 15px;\n  border-radius: 6px;\n  font-size: 13px;\n  border: none;\n  background: #fff;\n}\n.hljs {\n  background: none;\n}\n", ""]);

	// exports


/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./codeBox.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./codeBox.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 11:
/***/ function(module, exports) {

	module.exports = "\n\n<section class=\"code-box\" :class=\"{'expand': open}\">\n  <section class=\"code-box-demo\">\n    <slot></slot>\n  </section>\n  <section class=\"code-box-meta markdown\">\n    <div class=\"code-box-title\"><a>{{ title }}</a></div>\n    <div><p>{{ describe }}</p></div>\n    <span class=\"collapse anticon anticon-circle-o-right\" @click=\"handleOpen\"></span>\n  </section>\n  <section class=\"highlight-wrapper\" :class=\"{'highlight-wrapper-expand': open}\">\n    <div class=\"highlight\">\n      <pre>\n        <code class=\"html\"><slot name=\"preCode\"></slot>{{ code }}<slot name=\"postCode\"></slot></code>\n      </pre>\n    </div>\n  </section>\n</section>\n\n";

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(10)
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\codeBox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _pagination = __webpack_require__(53);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _codeBox = __webpack_require__(12);

	var _codeBox2 = _interopRequireDefault(_codeBox);

	var _apiTable = __webpack_require__(7);

	var _apiTable2 = _interopRequireDefault(_apiTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      current: 1,
	      apis: [{ "parameter": "current", "explain": "当前页数", "type": "Number", "default": "无" }, { "parameter": "defaultCurrent", "explain": "默认的当前页数", "type": "Number", "default": "1" }, { "parameter": "total", "explain": "数据总数", "type": "Number", "default": "0" }, { "parameter": "defaultPageSize", "explain": "初始的每页条数", "type": "Number", "default": "10" }, { "parameter": "pageSize", "explain": "每页条数", "type": "Number", "default": "" }, { "parameter": "onChange", "explain": "页码改变的回调，参数是改变后的页码", "type": "Function", "default": "noop" }, { "parameter": "showSizeChanger", "explain": "是否可以改变 pageSize", "type": "Bool", "default": "false" }, { "parameter": "pageSizeOptions", "explain": "指定每页可以显示多少条", "type": "Array", "default": "['10', '20', '30', '40']" }, { "parameter": "onShowSizeChange", "explain": "pageSize 变化的回调", "type": "Function", "default": "noop" }, { "parameter": "showQuickJumper", "explain": "是否可以快速跳转至某页", "type": "Bool", "default": "false" }, { "parameter": "size", "explain": "当为「small」时，是小尺寸分页", "type": "String", "default": "\"\"" }, { "parameter": "simple", "explain": "当添加该属性时，显示为简单分页", "type": "Object", "default": "无" }, { "parameter": "showTotal", "explain": "用于显示总共有多少条数据", "type": "Function", "default": "无" }]
	    };
	  },

	  watch: {
	    current: function current() {
	      console.log(this.current);
	    }
	  },
	  methods: {
	    loadPage: function loadPage(i) {
	      console.log('cb' + i);
	    },
	    showTotal: function showTotal(total) {
	      return '全部 ' + total + ' 条';
	    },
	    pageSizeChange: function pageSizeChange(current, size) {
	      console.log(current, size);
	    }
	  },
	  components: {
	    vPagination: _pagination2.default,
	    codeBox: _codeBox2.default,
	    apiTable: _apiTable2.default
	  }
	};

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(402);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./pagination.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./pagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 580:
/***/ function(module, exports) {

	module.exports = "\r\n<div>\r\n\t\t<section class=\"markdown\">\r\n      <h1>Pagination 分页</h1>\r\n      <p>\r\n        采用分页的形式分隔长列表，每次只加载一个页面。\r\n      </p>\r\n      <h2>何时使用</h2>\r\n      <ul>\r\n        <li>当加载/渲染所有数据将花费很多时间时；</li>\r\n        <li>可切换页码浏览数据。</li>\r\n      </ul>\r\n      <h2>组件演示</h2>\r\n    </section>\r\n    <div class=\"ant-col-lg-12 code-boxes-col-2-1\">\r\n    \t<code-box\r\n        title=\"基本\"\r\n        describe=\"基础分页。\"\r\n        code=''> \r\n        <v-pagination \r\n\t\t\t  \t:default-current=\"1\"\r\n\t\t\t  \t:total=\"50\"></v-pagination>\r\n      </code-box>\r\n\r\n      <code-box\r\n        title=\"改变\"\r\n        describe=\"改变每页显示条目数。\"\r\n        code=''> \r\n        <v-pagination \r\n\t\t\t  \t:default-current=\"1\"\r\n\t\t\t  \t:show-size-changer=\"true\"\r\n\t\t\t  \t:on-show-size-change=\"pageSizeChange\"\r\n\t\t\t  \t:total=\"50\"></v-pagination>\r\n      </code-box>\r\n\r\n      <code-box\r\n        title=\"改变\"\r\n        describe=\"改变每页显示条目数。\"\r\n        code=''> \r\n        <v-pagination \r\n\t\t\t  \t:default-current=\"1\"\r\n\t        size=\"small\"\r\n\t\t\t  \t:total=\"50\"></v-pagination>\r\n\t\t\t  <br>\r\n        <v-pagination \r\n\t\t\t  \t:current.sync=\"current\" \r\n\t\t\t  \t:default-current=\"1\"\r\n\t\t\t  \t:total=\"100\"\r\n\t\t\t  \t:default-page-size=\"5\"\r\n\t\t\t  \t:page-size=\"10\"\r\n\t\t\t  \t:on-change=\"loadPage\"\r\n\t\t\t  \t:show-size-changer=\"true\"\r\n\t\t\t  \t:on-show-size-change=\"pageSizeChange\"\r\n\t\t\t  \t:show-quick-jumper=\"true\"\r\n\t\t\t  \tsize=\"small\"\r\n\t\t\t  \t:simple=\"false\"></v-pagination>\r\n\t\t\t  <br>\r\n\t\t  \t<v-pagination \r\n\t\t\t  \t:current.sync=\"current\" \r\n\t\t\t  \t:default-current=\"1\"\r\n\t\t\t  \t:total=\"50\"\r\n\t\t\t  \t:default-page-size=\"5\"\r\n\t\t\t  \t:page-size=\"10\"\r\n\t\t\t  \t:on-change=\"loadPage\"\r\n\t\t\t  \tsize=\"small\"\r\n\t\t\t  \t:simple=\"false\"\r\n\t\t\t  \t:show-total=\"showTotal\"></v-pagination>\r\n      </code-box>\r\n\r\n      <code-box\r\n        title=\"受控\"\r\n        describe=\"受控制的页码。\"\r\n        code=''> \r\n        <v-pagination \r\n\t\t\t  \t:default-current=\"3\"\r\n\t\t\t  \t:total=\"50\"></v-pagination>\r\n      </code-box>\r\n    </div>\r\n    <div class=\"ant-col-lg-12 code-boxes-col-2-1\">\r\n    \t<code-box\r\n        title=\"更多\"\r\n        describe=\"更多分页\"\r\n        code=''> \r\n        <v-pagination \r\n\t\t\t  \t:default-current=\"1\"\r\n\t\t\t  \t:total=\"500\"></v-pagination>\r\n      </code-box>\r\n\r\n      <code-box\r\n        title=\"更多\"\r\n        describe=\"更多分页\"\r\n        code=''> \r\n        <v-pagination \r\n\t\t\t  \t:default-current=\"1\"\r\n\t\t\t  \t:show-quick-jumper=\"true\"\r\n\t\t\t  \t:total=\"500\"></v-pagination>\r\n      </code-box>\r\n\r\n      <code-box\r\n        title=\"更多\"\r\n        describe=\"更多分页\"\r\n        code=''> \r\n        <v-pagination \r\n\t\t\t  \t:default-current=\"1\"\r\n\t\t\t  \t:simple=\"true\"\r\n\t\t\t  \t:total=\"500\"></v-pagination>\r\n      </code-box>\r\n\r\n      <code-box\r\n        title=\"总数\"\r\n        describe=\"通过设置 showTotal 展示总共有多少数据。\"\r\n        code=''> \r\n        <v-pagination \r\n\t\t\t  \t:default-current=\"1\"\r\n\t\t\t  \t:show-total=\"showTotal\"\r\n\t\t\t  \t:total=\"50\"></v-pagination>\r\n      </code-box>\r\n    </div>\r\n\t  <!-- <v-pagination \r\n\t  \t:current.sync=\"current\" \r\n\t  \t:default-current=\"1\"\r\n\t  \t:total=\"100\"\r\n\t  \t:default-page-size=\"5\"\r\n\t  \t:page-size=\"10\"\r\n\t  \t:on-change=\"loadPage\"\r\n\t  \t:show-size-changer=\"true\"\r\n\t  \t:on-show-size-change=\"pageSizeChange\"\r\n\t  \t:show-quick-jumper=\"false\"\r\n\t  \tsize=\"\"\r\n\t  \t:simple=\"false\"\r\n\t  \t:show-total=\"showTotal\"></v-pagination> -->\r\n\t  <api-table :apis=\"apis\"></api-table>\r\n</div>\r\n";

/***/ },

/***/ 699:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(461)
	__vue_script__ = __webpack_require__(292)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\pagination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(580)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ }

});