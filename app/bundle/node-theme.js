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
	__vue_script__ = __webpack_require__(1)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/node-theme.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(26)
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
	  var id = "_v-ab522aca/node-theme.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	    section: {
	        label: 'Theme',
	        priority: 90
	    },

	    props: ['node'],

	    data: function data() {
	        return {
	            activeSection: {
	                top: 'a',
	                bottom: 'a'
	            },
	            layout: null
	        };
	    },

	    computed: {
	        isMenuCenter: function isMenuCenter() {
	            var isCenter = this.node.theme.navbar.layout.center.indexOf('menu') >= 0;
	            if (!isCenter) this.node.theme.navbar.centered_split_menu = false;
	            return isCenter;
	        }
	    },

	    created: function created() {

	        this.layout = _.clone(this.node.theme.navbar.layout);

	        this.$asset({
	            js: ['app/assets/uikit/js/components/sortable.min.js']
	        });
	    },

	    ready: function ready() {

	        this.sortable = {
	            left: UIkit.sortable($('#sortable-navbar-left'), { group: 'navbar' }),
	            center: UIkit.sortable($('#sortable-navbar-center'), { group: 'navbar' }),
	            right: UIkit.sortable($('#sortable-navbar-right'), { group: 'navbar' })
	        };

	        $(this.$el).on('change.uk.sortable', this.updateNavbarLayout);
	    },

	    methods: {

	        isActiveSection: function isActiveSection(type, position) {
	            return this.activeSection[type] == position;
	        },

	        selectSection: function selectSection(type, position) {
	            this.activeSection[type] = position;
	        },

	        updateNavbarLayout: function updateNavbarLayout() {
	            var vm = this,
	                arr = [];

	            _.each(vm.sortable, function (sortable, position) {
	                _.each(sortable.element.children(), function (el) {
	                    arr.push($(el).data('child'));
	                });
	                vm.node.theme.navbar.layout[position] = arr.join();
	                arr = [];
	            });
	        }
	    },

	    components: {
	        'input-section': __webpack_require__(2)
	    }

	};

	Vue.component('input-grid', __webpack_require__(5));
	Vue.component('input-width', __webpack_require__(8));
	Vue.component('input-bg', __webpack_require__(11));
	Vue.component('input-inverse', __webpack_require__(14));
	Vue.component('input-heading', __webpack_require__(17));
	Vue.component('input-text', __webpack_require__(20));
	Vue.component('input-media', function (resolve, reject) {
	    Vue.asset({
	        js: ['app/assets/uikit/js/components/upload.min.js', 'app/system/modules/finder/app/bundle/panel-finder.js']
	    }).then(function () {
	        resolve(__webpack_require__(23));
	    });
	});

	window.Site.components['node-theme'] = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(3)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/input-section.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(4)
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
	  var id = "_v-51e07695/input-section.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {

	    props: ['type', 'position', 'section'],

	    computed: {
	        hasGrid: function hasGrid() {
	            return _.has(this.section, 'grid');
	        }
	    }
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "\n\n<div class=\"uk-margin-bottom\">\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\">{{ 'Style' | trans }}</label>\n        <div class=\"uk-form-controls\">\n            <select class=\"uk-margin-right\" v-model=\"section.style\">\n                <option value=\"\">{{ 'None' | trans }}</option>\n                <option value=\"default\">{{ 'Default' | trans }}</option>\n                <option value=\"muted\">{{ 'Muted' | trans }}</option>\n                <option value=\"primary\">{{ 'Primary' | trans }}</option>\n                <option value=\"secondary\">{{ 'Secondary' | trans }}</option>\n            </select>\n            <input type=\"checkbox\" v-model=\"section.preserve_color\"> {{ 'Preserve color' | trans }}\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\">{{ 'Size' | trans }}</label>\n        <div class=\"uk-form-controls\">\n            <select v-model=\"section.size\">\n                <option value=\"xsmall\">{{ 'X-Small' | trans }}</option>\n                <option value=\"small\">{{ 'Small' | trans }}</option>\n                <option value=\"\">{{ 'Default' | trans }}</option>\n                <option value=\"large\">{{ 'Large' | trans }}</option>\n                <option value=\"xlarge\">{{ 'X-Large' | trans }}</option>\n            </select>\n        </div>\n    </div>\n\n    <input-bg :value.sync=\"section.bg\" :color=\"false\"></input-bg>\n\n    <input-inverse :value.sync=\"section.inverse\"></input-inverse>\n    \n    <input-grid v-if=\"hasGrid\" :grid.sync=\"section.grid\" :child=\"true\" :title=\"'Widget grid' | trans\"></input-grid>\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\">{{ 'Container size' | trans }}</label>\n        <div class=\"uk-form-controls\">\n            <select v-model=\"section.container_size\">\n                <option value=\"small\">{{ 'Small' | trans }}</option>\n                <option value=\"\">{{ 'Default' | trans }}</option>\n                <option value=\"large\">{{ 'Large' | trans }}</option>\n                <option value=\"expand\">{{ 'Expand' | trans }}</option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\">{{ 'Custom class' | trans }}</label>\n        <div class=\"uk-form-controls\">\n            <input type=\"text\" class=\"uk-form-width-large\" v-model=\"section.class\">\n        </div>\n    </div>\n\n</div>\n";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(6)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/input-grid.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(7)
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
	  var id = "_v-41205b74/input-grid.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {

	    props: {
	        grid: Object,
	        title: {
	            type: String,
	            default: 'Grid'
	        }
	    }

	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = "\n\n<div class=\"uk-form-row\">\n    <label class=\"uk-form-label\">{{ title }}</label>\n    <div class=\"uk-form-controls\">\n        <input-width :value.sync=\"grid.width\" :child=\"true\"></input-width>\n        <p class=\"uk-margin-top uk-form-controls-condensed uk-form-controls-condensed-text\">\n            {{ 'Gutter' | trans }}\n            <select class=\"uk-form-small uk-margin-small-left uk-margin-large-right\" v-model=\"grid.gutter\">\n                <option value=\"small\">{{ 'Small' | trans }}</option>\n                <option value=\"medium\">{{ 'Medium' | trans }}</option>\n                <option value=\"\">{{ 'Default' | trans }}</option>\n                <option value=\"large\">{{ 'Large' | trans }}</option>\n                <option value=\"collapse\">{{ 'Collapse' | trans }}</option>\n            </select>\n            <input type=\"checkbox\" v-model=\"grid.divider\"><label> {{ 'Use divider' | trans }}</label>\n            <input class=\"uk-margin-left\" type=\"checkbox\" v-model=\"grid.match\"><label> {{ 'Match height' | trans }}</label>\n        </p>\n        <p class=\"uk-form-controls-condensed uk-form-controls-condensed-text\">\n            {{ 'Custom class' | trans }} <input class=\"uk-margin-small-left uk-form-width-large\" type=\"text\" v-model=\"grid.class\">\n        </p>\n    </div>\n</div>\n\n";

/***/ }),
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(12)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/input-bg.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(13)
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
	  var id = "_v-b0c91476/input-bg.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = {
	    props: {
	        value: Object,
	        color: {
	            type: Boolean,
	            default: true
	        }
	    }
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"uk-form-row\">\n    <label class=\"uk-form-label\">{{ 'Background' | trans }}</label>\n    <div class=\"uk-form-controls\">\n        <input-media :value.sync=\"value.src\"></input-media>\n        <template v-if=\"value.src\">\n            <p class=\"uk-form-controls-condensed\" v-if=\"color\">\n                {{ 'Color' | trans }}\n                <select class=\"uk-form-small uk-margin-small-left\" v-model=\"value.color\">\n                    <option value=\"\">{{ 'None' | trans }}</option>\n                    <option value=\"default\">{{ 'Default' | trans }}</option>\n                    <option value=\"muted\">{{ 'Muted' | trans }}</option>\n                    <option value=\"primary\">{{ 'Primary' | trans }}</option>\n                    <option value=\"secondary\">{{ 'Secondary' | trans }}</option>\n                </select>\n            </p>\n            <p class=\"uk-form-controls-condensed\">\n                {{ 'Size' | trans }}\n                <select class=\"uk-form-small uk-margin-small-left\" v-model=\"value.size\">\n                    <option value=\"\">{{ '- Select -' | trans }}</option>\n                    <option value=\"cover\">{{ 'Cover' | trans }}</option>\n                    <option value=\"contain\">{{ 'Contain' | trans }}</option>\n                </select>\n            </p>\n            <p class=\"uk-form-controls-condensed\">\n                {{ 'Show background image only on screens large than' | trans }}\n                <select class=\"uk-form-small uk-margin-small-left\" v-model=\"value.responsive\">\n                    <option value=\"\">{{ '- Select -' | trans }}</option>\n                    <option value=\"@s\">{{ '640px' | trans }}</option>\n                    <option value=\"@m\">{{ '960px' | trans }}</option>\n                    <option value=\"@l\">{{ '1200px' | trans }}</option>\n                    <option value=\"@xl\">{{ '1600px' | trans }}</option>\n                </select>\n            </p>\n            <p class=\"uk-form-controls-condensed\">\n                {{ 'Position' | trans }}\n                <select class=\"uk-form-small uk-margin-small-left uk-margin-large-right\" v-model=\"value.position\">\n                    <option value=\"\">{{ '- Select -' | trans }}</option>\n                    <option value=\"top-left\">{{ 'Top Left' | trans }}</option>\n                    <option value=\"top-center\">{{ 'Top Center' | trans }}</option>\n                    <option value=\"top-right\">{{ 'Top Right' | trans }}</option>\n                    <option value=\"center-left\">{{ 'Center Left' | trans }}</option>\n                    <option value=\"center-center\">{{ 'Center' | trans }}</option>\n                    <option value=\"center-right\">{{ 'Center Right' | trans }}</option>\n                    <option value=\"bottom-left\">{{ 'Bottom Left' | trans }}</option>\n                    <option value=\"bottom-center\">{{ 'Bottom Center' | trans }}</option>\n                    <option value=\"bottom-right\">{{ 'Bottom Right' | trans }}</option>\n                    <option value=\"cover\">{{ 'Cover' | trans }}</option>\n                </select>\n                <input type=\"checkbox\" v-model=\"value.fixed\" value=\"fixed\"><label> {{ 'Fixed' | trans }}</label>\n                <input class=\"uk-margin-left\" type=\"checkbox\" v-model=\"value.norepeat\" value=\"norepeat\"><label> {{ 'Norepeat' | trans }}</label>\n            </p>\n            <p class=\"uk-form-controls-condensed\">\n                {{ 'Blend mode' | trans }}\n                <select class=\"uk-form-small uk-margin-small-left\" v-model=\"value.blend\">\n                    <option value=\"\">{{ '- Select -' | trans }}</option>\n                    <option value=\"multiply\">{{ 'Mulitply' | trans }}</option>\n                    <option value=\"screen\">{{ 'Screen' | trans }}</option>\n                    <option value=\"overlay\">{{ 'Overlay' | trans }}</option>\n                    <option value=\"darken\">{{ 'Darken' | trans }}</option>\n                    <option value=\"lighten\">{{ 'Lighten' | trans }}</option>\n                    <option value=\"color-dodge\">{{ 'Color dodge' | trans }}</option>\n                    <option value=\"color-burn\">{{ 'Color burn' | trans }}</option>\n                    <option value=\"hard-light\">{{ 'Hard light' | trans }}</option>\n                    <option value=\"soft-light\">{{ 'Soft light' | trans }}</option>\n                    <option value=\"difference\">{{ 'Difference' | trans }}</option>\n                    <option value=\"exclusion\">{{ 'Exclusion' | trans }}</option>\n                    <option value=\"hue\">{{ 'Hue' | trans }}</option>\n                    <option value=\"saturation\">{{ 'Saturation' | trans }}</option>\n                    <option value=\"color\">{{ 'Color' | trans }}</option>\n                    <option value=\"luminosity\">{{ 'Luminosity' | trans }}</option>\n                </select>\n            </p>\n        </template>\n    </div>\n</div>\n";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(15)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/input-inverse.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(16)
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
	  var id = "_v-36549540/input-inverse.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	    props: ['value']
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = "\n\n<div class=\"uk-form-row\">\n    <label class=\"uk-form-label\">{{ 'Text color' | trans }}</label>\n    <div class=\"uk-form-controls\">\n        <p class=\"uk-form-controls-condensed\">\n            <select v-model=\"value\">\n                <option value=\"\">{{ 'Auto' | trans }}</option>\n                <option value=\"uk-dark\">{{ 'Dark' | trans }}</option>\n                <option value=\"uk-light\">{{ 'Light' | trans }}</option>\n            </select> \n        </p>\n    </div>\n</div>\n\n";

/***/ }),
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
/* 26 */
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"uk-grid pk-grid-large\" data-uk-grid-margin>\n    <div class=\"pk-width-sidebar\">\n        <div class=\"uk-panel\">\n            <ul class=\"uk-nav uk-nav-side pk-nav-large\" data-uk-tab=\"{ connect: '#theme-settings' }\">\n                <li><a>{{ 'Navbar' | trans }}</a></li>\n                <li><a>{{ 'Hero' | trans }}</a></li>\n                <li><a>{{ 'Top' | trans }}</a></li>\n                <li><a>{{ 'Main' | trans }}</a></li>\n                <li><a>{{ 'Bottom' | trans }}</a></li>\n                <li><a>{{ 'Footer' | trans }}</a></li>\n                <li><a>{{ 'Extras' | trans }}</a></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"pk-width-content\">\n        <ul id=\"theme-settings\" class=\"uk-form uk-form-horizontal uk-switcher\">\n\n            <li>\n\n                <div class=\"uk-form-row\">\n                    <label for=\"form-sidebar-layout\" class=\"uk-form-label\">{{ 'Type' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <p class=\"uk-form-controls-condensed\">\n                            <select v-model=\"node.theme.navbar.type\">\n                                <option value=\"\">{{ 'Hidden' | trans }}</option>\n                                <option value=\"default\">{{ 'Default' | trans }}</option>\n                                <option value=\"transparent\">{{ 'Transparent' | trans }}</option>\n                            </select>\n                        </p>\n                    </div>\n                </div>\n\n                <div class=\"uk-form-row\">\n                    <label class=\"uk-form-label\">{{ 'Layout' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <div class=\"uk-grid uk-grid-width-1-3 uk-margin\">\n                            <div v-for=\"(pos,str) in layout\">\n                                <p class=\"uk-text-bold uk-text-capitalize\">{{ pos }}</p>\n                                <div id=\"sortable-navbar-{{pos}}\"class=\"uk-sortable uk-margin\">\n                                    <template v-if=\"str.length\">\n                                        <div v-for=\"child in str.split(',')\" class=\"uk-margin\" :data-child=\"child\">\n                                            <div class=\"uk-panel uk-panel-box uk-text-capitalize\">{{ child.replace('_',' ') }}</div>\n                                        </div>\n                                    </template>\n                                </div>\n                            </div>\n                        </div>\n                        <p class=\"uk-form-controls-condensed\">\n                            <label><input type=\"checkbox\" v-model=\"node.theme.navbar.centered_split_menu\" :disabled=\"!isMenuCenter\"> {{ 'Create a split menu with a centered logo'| trans }}</label><br>\n                            <label><input type=\"checkbox\" v-model=\"node.theme.navbar.always_responsive\"> {{ 'Use always responsive layout.'| trans }}</label><br>\n                            <label><input type=\"checkbox\" v-model=\"node.theme.navbar.expand\"> {{ 'Expand to full width' | trans }}</label>\n                        </p>\n                    </div>\n                </div>\n\n                <input-inverse :value.sync=\"node.theme.navbar.inverse\"></input-inverse>\n\n                <div class=\"uk-form-row\">\n                    <label for=\"form-sidebar-layout\" class=\"uk-form-label\">{{ 'Drop' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <p class=\"uk-form-controls-condensed uk-form-controls-text\">\n                            <label class=\"uk-margin-right\"><input type=\"checkbox\" v-model=\"node.theme.navbar['uk-navbar']['dropbar']\"> {{ 'Use dropbar' | trans }}</label>\n                            <span v-if=\"node.theme.navbar['uk-navbar']['dropbar']\">\n                                {{ 'Mode' | trans }}\n                                <select class=\"uk-form-small\" v-model=\"node.theme.navbar['uk-navbar']['dropbar-mode']\">\n                                    <option value=\"slide\">{{ 'Slide' | trans }}</option>\n                                    <option value=\"push\">{{ 'Push' | trans }}</option>\n                                </select>\n                            </span>\n                        </p>\n                    </div>\n                </div>\n\n                <div class=\"uk-form-row\">\n                    <label for=\"form-sidebar-layout\" class=\"uk-form-label\">{{ 'Offcanvas' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <p class=\"uk-form-controls-condensed\">\n                            {{ 'Mode' | trans }}\n                            <select class=\"uk-form-small\" v-model=\"node.theme.navbar['uk-offcanvas'].mode\">\n                                <option value=\"\">{{ 'None' | trans }}</option>\n                                <option value=\"slide\">{{ 'Slide' | trans }}</option>\n                                <option value=\"push\">{{ 'Push' | trans }}</option>\n                                <option value=\"reveal\">{{ 'Reveal' | trans }}</option>\n                            </select>\n                            <label><input class=\"uk-margin-left\" type=\"checkbox\" v-model=\"node.theme.navbar['uk-offcanvas'].flip\"> {{ 'Flip' | trans }}</label>\n                            <label><input class=\"uk-margin-left\" type=\"checkbox\" v-model=\"node.theme.navbar['uk-offcanvas'].enable\"> {{ 'Overlay' | trans }}</label>\n                        </p>\n                    </div>\n                </div>\n                \n                <div class=\"uk-form-row\">\n                    <label for=\"form-sidebar-layout\" class=\"uk-form-label\">{{ 'Sticky' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <p class=\"uk-form-controls-condensed uk-form-controls-text\">\n                            <label><input type=\"checkbox\" v-model=\"node.theme.navbar.sticky\"> {{ 'Enable sticky navbar' | trans }}</label>\n                        </p>\n                        <template v-if=\"node.theme.navbar.sticky\">\n                            <p class=\"uk-form-controls-condensed\">\n                                {{ 'Animation' | trans }}\n                                <select class=\"uk-form-small\" v-model=\"node.theme.navbar['uk-sticky'].animation\">\n                                    <option value=\"\">{{ 'None' | trans }}</option>\n                                    <option value=\"fade\">{{ 'Fade' | trans }}</option>\n                                    <option value=\"slide-top\">{{ 'Slide top' | trans }}</option>\n                                </select>\n                            </p>\n                            <p class=\"uk-form-controls-condensed\">\n                                {{ 'Show after'}}\n                                <input  class=\"uk-form-small uk-form-width-mini\" v-model=\"node.theme.navbar['uk-sticky'].top\" type=\"number\" min=\"0\" step=\"50\">\n                                {{ 'of scrolling' | trans }}\n                            </p>\n                            <p class=\"uk-form-controls-condensed\">\n                                <label><input type=\"checkbox\" v-model=\"node.theme.navbar['uk-sticky'].showonup\"> {{ 'Only show on scrolling up' | trans }}</label>\n                            </p>\n                        </template>\n                    </div>\n                </div>\n                \n            </li>\n\n            <li>\n                <div class=\"uk-form-row\">\n                    <label class=\"uk-form-label\">{{ 'Cover' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <select v-model=\"node.theme.hero.type\">\n                            <option value=\"img\">{{ 'Image' | trans }}</option>\n                            <option value=\"video\">{{ 'Video' | trans }}</option>\n                            <option value=\"iframe\">{{ 'iFrame' | trans }}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"uk-form-row\" v-if=\"node.theme.hero.type == 'img'\">\n                    <label for=\"form-hero-img\" class=\"uk-form-label\">{{ 'Image' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <input-media :value.sync=\"node.theme.hero.img\" type=\"image\"></input-image>\n                    </div>\n                </div>\n                <div class=\"uk-form-row\" v-if=\"node.theme.hero.type == 'video'\">\n                    <label for=\"form-hero-video\" class=\"uk-form-label\">{{ 'Video' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <input-media :source.sync=\"node.theme.hero.video\" type=\"video\"></input-media>\n                    </div>\n                </div>\n                <div class=\"uk-form-row\" v-if=\"node.theme.hero.type == 'iframe'\">\n                    <label for=\"form-hero-iframe\" class=\"uk-form-label\">{{ 'iFrame' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <input class=\"uk-form-width-large\" type=\"url\" v-model=\"node.theme.hero.iframe\">\n                    </div>\n                </div>\n                <div class=\"uk-form-row\" v-if=\"node.theme.hero.type == 'img' || node.theme.hero.type == 'video'\">\n                    <label for=\"form-hero-iframe\" class=\"uk-form-label\">{{ 'Blend mode' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <select class=\"uk-form-small uk-margin-small-left\" v-model=\"node.theme.hero.blend\">\n                            <option value=\"\">{{ '- Select -' | trans }}</option>\n                            <option value=\"multiply\">{{ 'Mulitply' | trans }}</option>\n                            <option value=\"screen\">{{ 'Screen' | trans }}</option>\n                            <option value=\"overlay\">{{ 'Overlay' | trans }}</option>\n                            <option value=\"darken\">{{ 'Darken' | trans }}</option>\n                            <option value=\"lighten\">{{ 'Lighten' | trans }}</option>\n                            <option value=\"color-dodge\">{{ 'Color dodge' | trans }}</option>\n                            <option value=\"color-burn\">{{ 'Color burn' | trans }}</option>\n                            <option value=\"hard-light\">{{ 'Hard light' | trans }}</option>\n                            <option value=\"soft-light\">{{ 'Soft light' | trans }}</option>\n                            <option value=\"difference\">{{ 'Difference' | trans }}</option>\n                            <option value=\"exclusion\">{{ 'Exclusion' | trans }}</option>\n                            <option value=\"hue\">{{ 'Hue' | trans }}</option>\n                            <option value=\"saturation\">{{ 'Saturation' | trans }}</option>\n                            <option value=\"color\">{{ 'Color' | trans }}</option>\n                            <option value=\"luminosity\">{{ 'Luminosity' | trans }}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"uk-form-row\">\n                    <label for=\"form-hero-height\" class=\"uk-form-label\">{{ 'Height' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <select  v-model=\"node.theme.hero.height\">\n                            <option value=\"viewport\">{{ 'Viewport' | trans }}</option>\n                            <option value=\"small\">{{ 'Small' | trans }}</option>\n                            <option value=\"medium\">{{ 'Medium' | trans }}</option>\n                            <option value=\"large\">{{ 'Large' | trans }}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"uk-form-row\">\n                    <label for=\"form-hero-height\" class=\"uk-form-label\">{{ 'Position' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <p class=\"uk-form-controls-condensed\">\n                            <select class=\"uk-margin-right\" v-model=\"node.theme.hero.position\">\n                                <option value=\"top-left\">{{ 'Top Left' | trans }}</option>\n                                <option value=\"top-center\">{{ 'Top Center' | trans }}</option>\n                                <option value=\"top-right\">{{ 'Top Right' | trans }}</option>\n                                <option value=\"center-left\">{{ 'Center Left' | trans }}</option>\n                                <option value=\"center\">{{ 'Center' | trans }}</option>\n                                <option value=\"center-right\">{{ 'Center Right' | trans }}</option>\n                                <option value=\"bottom-left\">{{ 'Bottom Left' | trans }}</option>\n                                <option value=\"bottom-center\">{{ 'Bottom Center' | trans }}</option>\n                                <option value=\"bottom-right\">{{ 'Bottom Right' | trans }}</option>\n                                <option value=\"cover\">{{ 'Cover' | trans }}</option>\n                            </select>\n                            {{ 'Size' | trans }}\n                            <select class=\"uk-margin-small-left uk-form-small\" v-model=\"node.theme.hero.position_modifier\">\n                                <option value=\"\">{{ 'None' | trans }}</option>\n                                <option value=\"small\">{{ 'Small' | trans }}</option>\n                                <option value=\"medium\">{{ 'Medium' | trans }}</option>\n                            </select>\n                        </p>\n                    </div>\n                </div>\n                <input-inverse :value.sync=\"node.theme.hero.inverse\"></input-inverse>\n            </li>\n\n            <li>\n                <div class=\"uk-form-row\">\n                    <ul class=\"uk-subnav uk-subnav-pill uk-text-capitalize\">\n                        <li class=\"uk-disabled\">\n                            <span>{{ 'Widget Positon: Top' | trans }}</span>\n                        </li>\n                        <li v-for=\"(pos,section) in node.theme['top']\" :class=\"{'uk-active': isActiveSection('top',pos)}\">\n                            <a @click=\"selectSection('top',pos)\">{{ pos }}</a>\n                        </li>\n                    </ul>\n                </div>\n                <input-section v-for=\"(pos,section) in node.theme['top']\" v-show=\"isActiveSection('top',pos)\" type=\"top\" :position=\"pos\" :section=\"section\"></input-section>\n            </li>\n\n            <li>\n                <input-section type=\"main\" position=\"main\" :section=\"node.theme['main']\"></input-section>\n                <input-heading :value.sync=\"node.theme.main.heading\"></input-heading>\n                <input-text :value.sync=\"node.theme.main.alignment\"></input-text>\n\n                <div class=\"uk-form-row\">\n                    <label class=\"uk-form-label\">{{ 'Sidebar' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <p class=\"uk-form-controls-condensed\">\n                            {{ 'Layout' | trans }}\n                            <select class=\"uk-margin-left uk-form-small\" v-model=\"node.theme.main.sidebar.layout\">\n                                <option value=\"ssm\">{{ 'Sidebar A | Sidebar B | Main' | trans }}</option>\n                                <option value=\"sms\">{{ 'Sidebar A | Main | Sidebar B' | trans }}</option>\n                                <option value=\"mss\">{{ 'Main | Sidebar A | Sidebar B' | trans }}</option>\n                            </select>\n                        </p>\n                        <p class=\"uk-form-controls-condensed\">\n                            {{ 'Sticky' | trans }}\n                            <label><input class=\"uk-margin-left\" type=\"checkbox\" v-model=\"node.theme.main.sticky_sidebar_a\"> {{ 'Sidebar B' | trans }}</label>\n                            <label><input class=\"uk-margin-left\" type=\"checkbox\" v-model=\"node.theme.main.sticky_sidebar_b\"> {{ 'Sidebar B' | trans }}</label>\n                        </p>\n                        <p class=\"uk-form-controls-condensed\">\n                            {{ 'Width Sidebar A' | trans }}\n                            <input-width :value.sync=\"node.theme.main.sidebar.width_a\" :child=\"true\"></input-width>\n                        </p>\n                        <p class=\"uk-form-controls-condensed\">\n                            {{ 'Width Sidebar B' | trans }}\n                            <input-width :value.sync=\"node.theme.main.sidebar.width_b\" :child=\"true\"></input-width>\n                        </p>\n                    </div>\n                </div>\n                \n                <input-grid :grid=\"node.theme.main.top.grid\" :child=\"true\" :title=\"'Main top widget grid' | trans\"></input-grid>\n                <input-grid :grid=\"node.theme.main.bottom.grid\" :child=\"true\" :title=\"'Main bottom widget grid' | trans\"></input-grid>\n\n            </li>\n\n            <li>\n                <div class=\"uk-form-row\">\n                    <ul class=\"uk-subnav uk-subnav-pill uk-text-capitalize\">\n                        <li class=\"uk-disabled\">\n                            <span>{{ 'Widget Position: Bottom' | trans }}</span>\n                        </li>\n                        <li v-for=\"(pos,section) in node.theme['bottom']\" :class=\"{'uk-active': isActiveSection('bottom',pos)}\">\n                            <a @click=\"selectSection('bottom',pos)\">{{ pos }}</a>\n                        </li>\n                    </ul>\n                </div>\n                <input-section v-for=\"(pos,section) in node.theme['bottom']\" v-show=\"isActiveSection('bottom',pos)\" type=\"bottom\" :position=\"pos\" :section.sync=\"section\"></input-section>\n            </li>\n\n            <li>\n                <input-section type=\"footer\" position=\"footer\" :section.sync=\"node.theme['footer']\"></input-section>\n            </li>\n\n            <li>\n                <div class=\"uk-form-row\">\n                    <label for=\"form-hero-height\" class=\"uk-form-label\">{{ 'Widget position fixed' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <p class=\"uk-form-controls-condensed\">\n                            <select v-model=\"node.theme.fixed.position\">\n                                <option value=\"top-left\">{{ 'Top Left' | trans }}</option>\n                                <option value=\"top-right\">{{ 'Top Right' | trans }}</option>\n                                <option value=\"center-left\">{{ 'Center Left' | trans }}</option>\n                                <option value=\"center-right\">{{ 'Center Right' | trans }}</option>\n                                <option value=\"bottom-left\">{{ 'Bottom Left' | trans }}</option>\n                                <option value=\"bottom-right\">{{ 'Bottom Right' | trans }}</option>\n                            </select>\n                            <select v-model=\"node.theme.fixed.position_modifier\">\n                                <option value=\"\">{{ 'None' | trans }}</option>\n                                <option value=\"small\">{{ 'Small' | trans }}</option>\n                                <option value=\"medium\">{{ 'Medium' | trans }}</option>\n                            </select>\n                        </p>\n                    </div>\n                </div>\n            </li>\n\n        </ul>\n    </div>\n</div>\n\n\n</div>\n\n";

/***/ })
/******/ ]);