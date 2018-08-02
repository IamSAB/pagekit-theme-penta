/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(29)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/widget-theme.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(33)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-d572e1c6/widget-theme.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(9)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/input-width.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(10)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7c745a14/input-width.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {

	    props: {
	        value: String,
	        title: {
	            type: Boolean,
	            default: 'Width'
	        },
	        child: {
	            type: Boolean,
	            default: false
	        }
	    },

	    data: function data() {
	        return {
	            data: {
	                all: '', s: '', m: '', l: '', xl: ''
	            },
	            sizes: { s: '640px', m: '960px', l: '1200px', xl: '1600px' }
	        };
	    },

	    created: function created() {
	        var arr = this.value.split(','),
	            vm = this,
	            temp = [];
	        _.each(arr, function (el) {
	            temp = el.split('@');
	            if (temp.length == 1) temp.push('all');
	            vm.data[temp[1]] = temp[0];
	            temp = [];
	        });
	    },

	    watch: {
	        data: {
	            handler: function handler() {
	                var arr = [];
	                _.each(this.data, function (value, key) {
	                    if (value) arr.push(value + (key == 'all' ? '' : '@' + key));
	                });
	                this.value = arr.join();
	            },
	            deep: true
	        }
	    },

	    computed: {
	        widths: function widths() {
	            var arr = [{ value: 'auto', label: 'Auto' }, { value: 'expand', label: 'Expand' }];
	            for (var i = 1; i < 6; i++) {
	                for (var j = i; j <= 6; j++) {
	                    if (i != 1) {
	                        if (this.child || j % i == 0 || i == 4 && j == 6) continue;
	                    }
	                    arr.push({
	                        value: i + '-' + j,
	                        label: i + '-' + j + ' / ' + _.round(i / j * 100) + '%'
	                    });
	                }
	            }
	            return arr;
	        }
	    }
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = "\n\n<div>\n    <p class=\"uk-form-controls-condensed\">\n        <select class=\"uk-margin-right uk-form-small\" v-model=\"data.all\">\n            <option v-if=\"!child\"value=\"\">{{ '- Select -' | trans }}</option>\n            <option v-for=\"width in widths\" :value=\"width.value\">{{ width.label }}</option>\n        </select>\n        {{ 'On screens larger than' | trans }}\n    </p>\n    <div class=\"uk-grid uk-grid-small\">\n        <div v-for=\"(key,label) in sizes\" class=\"uk-flex-item-none\">\n            <p class=\"uk-form-controls-condensed\">\n                {{ label }}\n                <select class=\"uk-margin-small-left uk-form-small\" v-model=\"data[key]\">\n                    <option value=\"\">{{ '- Select -' | trans }}</option>\n                    <option v-for=\"width in widths\" :value=\"width.value\">{{ width.label }}</option>\n                </select>\n            </p>\n        </div>\n    </div>\n</div>\n\n";

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(18)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/input-heading.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(19)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-43599f32/input-heading.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	    props: ['value']
	};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"uk-form-row\">\n    <label class=\"uk-form-label\">{{ 'Heading' | trans }}</label>\n    <div class=\"uk-form-controls\">\n        <p class=\"uk-form-controls-condensed\">\n            {{ 'Style' | trans }}\n            <select class=\"uk-form-small uk-margin-small-left\" v-model=\"value.style\">\n                <option value=\"hide\">{{ 'Hide' | trans }}</option>\n                <option value=\"\">{{ 'Default' | trans }}</option>\n                <option value=\"uk-heading-primary\">{{ 'Primary' | trans }}</option>\n                <option value=\"uk-heading-hero\">{{ 'Hero' | trans }}</option>\n                <option value=\"uk-heading-divider\">{{ 'Divider' | trans }}</option>\n                <option value=\"uk-heading-bullet\">{{ 'Bullet' | trans }}</option>\n                <option value=\"uk-heading-line\">{{ 'Line' | trans }}</option>\n            </select>\n        </p>\n        <p class=\"uk-form-controls-condensed\">\n            {{ 'Tag' | trans }}\n            <select class=\"uk-form-small uk-margin-small-left\" v-model=\"value.tag\">\n                <option value=\"h1\">{{ 'H1' | trans }}</option>\n                <option value=\"h2\">{{ 'H2' | trans }}</option>\n                <option value=\"h3\">{{ 'H3' | trans }}</option>\n                <option value=\"h4\">{{ 'H4' | trans }}</option>\n                <option value=\"h5\">{{ 'H5' | trans }}</option>\n                <option value=\"h6\">{{ 'H6' | trans }}</option>\n            </select>\n        </p>\n    </div>\n</div>\n";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(21)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/input-text.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(22)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-deaf7ea6/input-text.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {

	    props: ['value'],

	    data: function data() {
	        return {
	            data: {
	                all: '', s: '', m: '', l: '', xl: ''
	            },
	            sizes: { s: '640px', m: '960px', l: '1200px', xl: '1600px' }
	        };
	    },

	    created: function created() {
	        var arr = this.value.split(','),
	            vm = this,
	            temp = [];
	        _.each(arr, function (el) {
	            temp = el.split('@');
	            if (temp.length == 1) temp.push('all');
	            vm.data[temp[1]] = temp[0];
	            temp = [];
	        });
	    },

	    watch: {
	        data: {
	            handler: function handler() {
	                var arr = [];
	                _.each(this.data, function (value, key) {
	                    if (value) arr.push(value + (key == 'all' ? '' : '@' + key));
	                });
	                this.value = arr.join();
	            },
	            deep: true
	        }
	    }
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = "\n\n<div class=\"uk-form-row\">\n    <label class=\"uk-form-label\">{{ 'Alignment' | trans }}</label>\n    <div class=\"uk-form-controls\">\n        <p class=\"uk-form-controls-condensed\">\n            <select class=\"uk-margin-right uk-form-small\" v-model=\"data.all\">\n                <option value=\"\">{{ '- Select -' | trans }}</option>\n                <option value=\"left\">{{ 'Left' | trans }}</option>\n                <option value=\"center\">{{ 'Center' | trans }}</option>\n                <option value=\"right\">{{ 'Right' | trans }}</option>\n                <option value=\"justify\">{{ 'Justify' | trans }}</option>\n            </select>\n            {{ 'On screens larger than' | trans }}\n        </p>\n        <div class=\"uk-grid\">\n            <div v-for=\"(key,label) in sizes\" class=\"uk-flex-item-none\">\n                <p class=\"uk-form-controls-condensed\">\n                    {{ label }}\n                    <select class=\"uk-margin-small-left uk-form-small\" v-model=\"data[key]\">\n                        <option value=\"\">{{ '- Select -' | trans }}</option>\n                        <option value=\"left\">{{ 'Left' | trans }}</option>\n                        <option value=\"center\">{{ 'Center' | trans }}</option>\n                        <option value=\"right\">{{ 'Right' | trans }}</option>\n                    </select>\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n\n";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(24)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/input-media.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(25)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-446cd614/input-media.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	    props: {
	        class: {
	            type: String,
	            default: ''
	        },
	        type: {
	            type: String,
	            default: 'image'
	        },
	        value: String
	    },
	    data: function data() {
	        return _.merge({ source: '' }, $pagekit);
	    },
	    ready: function ready() {
	        this.$set('value', this.value || '');
	        this.$set('source', this.value);
	    },
	    methods: {
	        pick: function pick() {
	            this.source = this.value;
	            this.$refs.modal.open();
	        },
	        update: function update() {
	            this.value = this.source;
	            this.$refs.modal.close();
	        },
	        remove: function remove() {
	            this.source = '';
	            this.value = '';
	        }
	    }
	};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = "\n\n<div class=\"uk-form-width-large\">\n\n    <a class=\"uk-placeholder uk-text-center uk-display-block uk-margin-remove\" v-if=\"!value\" @click.prevent=\"pick\">\n        <img v-if=\"type == 'image'\" width=\"60\" height=\"60\" :alt=\"'Placeholder Image' | trans\" :src=\"$url('app/system/assets/images/placeholder-image.svg')\">\n        <img v-if=\"type == 'video'\" width=\"60\" height=\"60\" :alt=\"'Placeholder Video' | trans\" :src=\"$url('app/system/assets/images/placeholder-video.svg')\">\n        <p class=\"uk-text-muted uk-margin-small-top\">{{ 'Add '+type | trans }}</p>\n    </a>\n\n    <div class=\"uk-overlay uk-overlay-hover uk-visible-hover\" :class=\"class\" v-else>\n\n        <img v-if=\"type == 'image'\" :src=\"$url(value)\">\n        <video class=\"uk-width-1-1\" :src=\"$url(value)\" v-if=\"type == 'video' && value\"></video>\n\n        <div class=\"uk-overlay-panel uk-overlay-background uk-overlay-fade\"></div>\n\n        <a class=\"uk-position-cover\" @click.prevent=\"pick\"></a>\n\n        <div class=\"uk-panel-badge pk-panel-badge uk-hidden\">\n            <ul class=\"uk-subnav pk-subnav-icon\">\n                <li>\n                    <a class=\"pk-icon-delete pk-icon-hover\" :title=\"'Delete' | trans\" data-uk-tooltip=\"{delay: 500}\" @click.prevent=\"remove\"></a>\n                </li>\n            </ul>\n        </div>\n\n    </div>\n\n    <v-modal v-ref:modal>\n        <form class=\"uk-form uk-form-stacked\" @submit=\"update\">\n\n            <div class=\"uk-modal-header\">\n                <h2 class=\"uk-text-capitalize\">{{ type | trans }}</h2>\n            </div>\n\n            <div class=\"uk-form-row\">\n                <input-image v-if=\"type == 'image'\" :source.sync=\"source\"></input-image>\n                <input-video v-if=\"type == 'video'\" :source.sync=\"source\"></input-video>\n            </div>\n\n            <div class=\"uk-form-row\">\n                <label for=\"form-src\" class=\"uk-form-label\">{{ 'URL' | trans }}</label>\n                <div class=\"uk-form-controls\">\n                    <input id=\"form-src\" class=\"uk-width-1-1\" type=\"text\" v-model=\"source\" lazy>\n                </div>\n            </div>\n\n            <div class=\"uk-modal-footer uk-text-right\">\n                <button class=\"uk-button uk-button-link uk-modal-close\" type=\"button\">{{ 'Cancel' | trans }}</button>\n                <button class=\"uk-button uk-button-link\" type=\"button\" @click.prevent=\"update\">{{ 'Update' | trans }}</button>\n            </div>\n\n        </form>\n    </v-modal>\n</div>\n\n";

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	    section: {
	        label: 'Theme',
	        priority: 90
	    },

	    props: ['widget', 'config'],

	    components: {
	        'input-width': __webpack_require__(8),
	        'input-heading': __webpack_require__(17),
	        'input-text': __webpack_require__(20),
	        'input-visibility': __webpack_require__(30)
	    }

	};

	Vue.component('input-media', function (resolve, reject) {
	    Vue.asset({
	        js: ['app/assets/uikit/js/components/upload.min.js', 'app/system/modules/finder/app/bundle/panel-finder.js']
	    }).then(function () {
	        resolve(__webpack_require__(23));
	    });
	});

	window.Widgets.components['theme'] = module.exports;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(31)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/input-visibility.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(32)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-794893dc/input-visibility.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {

	    props: ['value'],

	    data: function data() {
	        return {
	            visibleon: false,
	            hideon: false,
	            hidescreen: false
	        };
	    }

	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = "\n\n<div class=\"uk-form-row\">\n\n    <label class=\"uk-form-label\">{{ 'Visibility' | trans }}</label>\n\n    <div class=\"uk-form-controls uk-form-controls-text\">\n\n        <p class=\"uk-form-controls-condensed\">\n            {{ 'Visible on screens larger than' | trans }}\n            <select class=\"uk-form-small uk-margin-small-left\" v-model=\"value.visible\">\n                <option value=\"\">{{ '- Select -' | trans }}</option>\n                <option value=\"@s\">{{ '640px' | trans }}</option>\n                <option value=\"@m\">{{ '960px' | trans }}</option>\n                <option value=\"@l\">{{ '1200px' | trans }}</option>\n                <option value=\"@xl\">{{ '1600px' | trans }}</option>\n            </select>\n        </p>\n\n        <p class=\"uk-form-controls-condensed\">\n            {{ 'Hide on screens larger than' | trans }}\n            <select class=\"uk-form-small uk-margin-small-left\" v-model=\"value.hidden\">\n                <option value=\"\">{{ '- Select -' | trans }}</option>\n                <option value=\"@s\">{{ '640px' | trans }}</option>\n                <option value=\"@m\">{{ '960px' | trans }}</option>\n                <option value=\"@l\">{{ '1200px' | trans }}</option>\n                <option value=\"@xl\">{{ '1600px' | trans }}</option>\n            </select>\n        </p>\n\n        <p class=\"uk-form-controls-condensed\">\n            {{ 'Hide on' | trans }}\n            <select class=\"uk-form-small uk-margin-small-left\" v-model=\"value.screen\">\n                <option value=\"\">{{ '- Select -' | trans }}</option>\n                <option value=\"touch\">{{ 'Touch' | trans }}</option>\n                <option value=\"notouch\">{{ 'Notouch' | trans }}</option>\n            </select>\n        </p>\n        \n    </div>\n\n</div>\n\n";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = "\n\n<div class=\"uk-form-horizontal\">\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\">{{ 'Style' | trans }}</label>\n        <div class=\"uk-form-controls\">\n            <p class=\"uk-form-controls-condensed\">\n                <select v-model=\"widget.theme.style\">\n                    <option value=\"\">{{ 'None' | trans }}</option>\n                    <option value=\"uk-card-default\">{{ 'Default' | trans }}</option>\n                    <option value=\"uk-card-primary\">{{ 'Primary' | trans }}</option>\n                    <option value=\"uk-card-secondary\">{{ 'Secondary' | trans }}</option>\n                    <option value=\"uk-overlay-default\">{{ 'Overlay light' | trans }}</option>\n                    <option value=\"uk-overlay-primary\">{{ 'Overlay dark' | trans }}</option>\n                </select>\n            </p>\n            <p class=\"uk-form-controls-condensed\">\n                <label><input type=\"checkbox\" v-model=\"widget.theme.hover\"> {{ 'Enable hover effect' | trans }}</label>\n            </p>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\">{{ 'Size' | trans }}</label>\n        <div class=\"uk-form-controls\">\n            <p class=\"uk-form-controls-condensed\">\n                <select v-model=\"widget.theme.size\">\n                    <option value=\"small\">{{ 'Small' | trans }}</option>\n                    <option value=\"\">{{ 'Default' | trans }}</option>\n                    <option value=\"large\">{{ 'Large' | trans }}</option>\n                </select>\n            </p>\n        </div>\n    </div>\n\n    <input-heading :value.sync=\"widget.theme.heading\"></input-heading>\n\n    <input-text :value.sync=\"widget.theme.alignment\"></input-text>\n\n    <div class=\"uk-form-row\">\n        <label for=\"form-theme-media\" class=\"uk-form-label\">{{ 'Width' | trans }}</label>\n        <div class=\"uk-form-controls\">\n            <input-width :value.sync=\"widget.theme.width\" :child=\"false\"></input-width>\n        </div>\n    </div>\n\n    <input-visibility :value.sync=\"widget.theme.visibility\"></input-visibility>\n\n    <div class=\"uk-form-row\">\n        <label for=\"form-theme-media\" class=\"uk-form-label\">{{ 'Media' | trans }}</label>\n        <div class=\"uk-form-controls\">\n            <input-media :value.sync=\"widget.theme.media_img\"></input-media>\n            <p class=\"uk-form-controls-condensed\">\n                {{ 'Position' | trans }}\n                <select class=\"uk-form-small uk-margin-small-left\" v-model=\"widget.theme.media_pos\">\n                    <option value=\"top\">{{ 'Top' | trans }}</option>\n                    <option value=\"bottom\">{{ 'Bottom' | trans }}</option>\n                    <option value=\"left\">{{ 'Left' | trans }}</option>\n                    <option value=\"right\">{{ 'Right' | trans }}</option>\n                </select>\n            </p>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\">{{ 'Badge' | trans }}</label>\n        <div class=\"uk-form-controls uk-form-controls-text\">\n            <p class=\"uk-form-controls-condensed\">\n                <input type=\"text\" :placeholder=\"'Text' | trans\" v-model=\"widget.theme.badge_text\">\n            </P>\n            <p class=\"uk-form-controls-condensed\">\n                {{ 'Style' | trans }}\n                <select class=\"uk-margin-small-left\" v-model=\"widget.theme.badge_style\">\n                    <option value=\"\">{{ 'Default' | trans }}</option>\n                    <option value=\"success\">{{ 'Success' | trans }}</option>\n                    <option value=\"warning\">{{ 'Warning' | trans }}</option>\n                    <option value=\"danger\">{{ 'Danger' | trans }}</option>\n                </select>\n            </P>\n        </div>\n    </div>\n\n</div>\n\n";

/***/ })
/******/ ]);