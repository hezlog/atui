(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("atui/lib/_utils/GlobalMixin"), require("./trigger"), require("./icon"), require("./tag"));
	else if(typeof define === 'function' && define.amd)
		define(["atui/lib/_utils/GlobalMixin", "./trigger", "./icon", "./tag"], factory);
	else if(typeof exports === 'object')
		exports["select"] = factory(require("atui/lib/_utils/GlobalMixin"), require("./trigger"), require("./icon"), require("./tag"));
	else
		root["select"] = factory(root["atui/lib/_utils/GlobalMixin"], root["./trigger"], root["./icon"], root["./tag"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_49__, __WEBPACK_EXTERNAL_MODULE_55__, __WEBPACK_EXTERNAL_MODULE_210__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(207);


/***/ },

/***/ 29:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ },

/***/ 49:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_49__;

/***/ },

/***/ 55:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Select = __webpack_require__(208);

	var _Select2 = _interopRequireDefault(_Select);

	var _Option = __webpack_require__(212);

	var _Option2 = _interopRequireDefault(_Option);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Select2.default.Option = _Option2.default;

	exports.default = _Select2.default;

/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(209)

	/* template */
	var __vue_template__ = __webpack_require__(211)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _GlobalMixin = __webpack_require__(29);

	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);

	var _Icon = __webpack_require__(55);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Tag = __webpack_require__(210);

	var _Tag2 = _interopRequireDefault(_Tag);

	var _Trigger = __webpack_require__(49);

	var _Trigger2 = _interopRequireDefault(_Trigger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Select',

	  mixins: [_GlobalMixin2.default],

	  props: {
	    defaultValue: {
	      type: [String, Number, Array],
	      default: ''
	    },
	    placeholder: {
	      type: String,
	      default: '请选择'
	    },
	    large: Boolean,
	    small: Boolean,
	    style: String,
	    width: {
	      type: String,
	      default: 'auto'
	    },
	    tags: Boolean,
	    multiple: Boolean,
	    limit: {
	      type: Number,
	      default: 1024
	    },
	    disabled: {
	      type: Boolean
	    }
	  },

	  components: {
	    Icon: _Icon2.default,
	    Tag: _Tag2.default,
	    Trigger: _Trigger2.default
	  },

	  created: function created() {
	    var me = this;
	    var value = me.defaultValue;
	    if (me.multiple || me.tags) {
	      me.multipleSelect = true;
	    }
	    value = me.getValue();
	    if (me.defaultValue !== null || me.selectedOptions.length) {
	      me.showPlaceholder = false;
	    }
	    this.value = value;
	    this.$on('option-change', function (option) {
	      me.showPlaceholder = false;

	      if (me.multipleSelect) {
	        var isSelected = me.value.indexOf(option.value) >= 0;
	        if (!isSelected) {
	          me.value.push(option.value);
	        } else {
	          var index = me.value.indexOf(option.value);
	          me.value.splice(index, 1);
	        }
	      } else {
	        me.value = option.value;
	      }
	      if (!this.multipleSelect) {
	        this.$refs.trigger.showPopup = false;
	      }
	      me.searchText = '';
	    });
	  },
	  data: function data() {
	    return {
	      searchText: '',
	      noResult: false,
	      activeIndex: 0,
	      showPlaceholder: true,
	      showNotify: false,
	      show: false,
	      value: [],
	      multipleSelect: false,
	      options: [],
	      selectedOptions: []
	    };
	  },


	  computed: {
	    showText: function showText() {
	      return this.selectedOptions && this.selectedOptions[0] && this.selectedOptions[0].label;
	    },
	    selectClassObj: function selectClassObj() {
	      var prefixCls = this.prefixCls,
	          show = this.show,
	          multipleSelect = this.multipleSelect,
	          large = this.large,
	          small = this.small;

	      var classObj = {};

	      classObj[prefixCls + '-select-cont'] = true;
	      classObj[prefixCls + '-dropdown-open'] = show;
	      classObj[prefixCls + '-select-multipleSelect'] = multipleSelect;
	      classObj[prefixCls + '-select-large'] = large;
	      classObj[prefixCls + '-select-small'] = small;

	      return classObj;
	    }
	  },

	  watch: {
	    defaultValue: function defaultValue(val) {
	      this.value = this.getValue();
	    },
	    value: function value(val) {
	      var _this = this;

	      var me = this;
	      if (!val) {
	        me.showPlaceholder = true;
	        return;
	      }
	      me.showPlaceholder = false;
	      if (me.multipleSelect) {
	        (function () {
	          if (val.length > _this.limit) {
	            me.showNotify = true;
	            me.value.pop();
	            setTimeout(function () {
	              me.showNotify = false;
	            }, 1000);
	          }

	          var options = [];
	          val.forEach(function (v) {
	            var option = me.options.filter(function (opt) {
	              return opt.value === v;
	            });
	            if (option.length) {
	              options.push(option[0]);
	            } else {
	              options.push({
	                label: v,
	                value: v,
	                disabled: false
	              });
	            }
	          });
	          me.$set(_this, 'selectedOptions', options);
	        })();
	      } else {
	        me.$refs.trigger.$children.forEach(function (child) {
	          if (val === child.value && !child.disabled) {
	            var option = {
	              label: child.$el.innerText,
	              value: child.value,
	              disabled: child.disabled
	            };
	            me.selectedOptions = [option];
	            child.chosen = true;
	          }
	        });
	      }
	    },
	    selectedOptions: function selectedOptions(options) {
	      this.$emit('change', this.multipleSelect ? options : options[0]);
	    }
	  },

	  methods: {
	    getValue: function getValue(defaultValue) {
	      var me = this;
	      var value = me.defaultValue;
	      if (me.defaultValue === null) {
	        value = me.multipleSelect ? [] : '';
	      }
	      if (me.multipleSelect && !Array.isArray(me.defaultValue)) {
	        value = [me.defaultValue];
	      }
	      if (!me.multipleSelect && Array.isArray(me.defaultValue)) {
	        value = me.defaultValue.slice(0, 1);
	      }
	      if (me.multipleSelect && me.defaultValue.length > me.limit) {
	        value = me.defaultValue.slice(0, me.limit);
	      }

	      return value;
	    },
	    setValue: function setValue(value) {
	      this.value = value;
	    },
	    closeTag: function closeTag(option) {
	      var index = this.value.indexOf(option.value);
	      this.value.splice(index, 1);
	    },
	    deleteTag: function deleteTag(event) {
	      var input = event.target;
	      var value = input.value;
	      if (value.length === 0) {
	        var index = this.value.indexOf(value);
	        this.value.splice(index, 1);
	      }
	    },
	    onInput: function onInput(event) {
	      var input = event.target;
	      var value = input.value;
	      var width = value.length * 10;
	      this.showPlaceholder = false;
	      input.style.width = width + 10 + 'px';
	    },
	    createTag: function createTag(event) {
	      if (this.tags) {
	        var value = event.target.value;
	        if (!value || !value.trim().length) {
	          return;
	        }
	        if (this.value.indexOf(value) === -1) {
	          this.value.push(value);
	        }
	        this.searchText = '';
	        event.target.style.width = '10px';
	      }
	    },
	    focusInput: function focusInput(ev) {
	      this.$refs.searchField.focus();
	    },
	    selectDown: function selectDown(event) {},
	    selectUp: function selectUp(event) {},
	    togglePopupHandler: function togglePopupHandler(show) {
	      var me = this;
	      if (this.disabled) {
	        this.show = false;
	        return;
	      }
	      this.show = !this.show;
	      if (this.multipleSelect) {
	        this.showPlaceholder = false;
	        setTimeout(function () {
	          return me.$refs.searchField.focus();
	        }, 10);
	      }
	    }
	  }
	};

/***/ },

/***/ 210:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_210__;

/***/ },

/***/ 211:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    class: _vm.selectClassObj,
	    style: (_vm.style)
	  }, [_h('trigger', {
	    ref: "trigger",
	    attrs: {
	      "trigger": "click",
	      "placement": "bottomLeft",
	      "effect": "slide",
	      "popup-hide-when-click-outside": "",
	      "disabled": _vm.disabled,
	      "width": _vm.width,
	      "show": _vm.show,
	      "popup-use-trigger-width": ""
	    },
	    on: {
	      "toggle-popup": _vm.togglePopupHandler
	    }
	  }, [_h('div', _vm._b({
	    class: [_vm.prefixCls + '-select-toggle', _vm.tags && (_vm.prefixCls + '-select-tags')],
	    attrs: {
	      "tabindex": "1"
	    },
	    slot: "trigger"
	  }, 'div', {
	    disabled: _vm.disabled
	  }), [(!_vm.multipleSelect) ? [_h('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showPlaceholder),
	      expression: "showPlaceholder"
	    }],
	    class: [_vm.prefixCls + '-select-placeholder']
	  }, [_vm._s(_vm.placeholder)]), " ", _h('span', {
	    class: [_vm.prefixCls + '-select-btn-content']
	  }, [_vm._s(_vm.showText)]), " ", _h('span', {
	    class: [_vm.prefixCls + '-select-caret', _vm.show && (_vm.prefixCls + '-select-open')]
	  }, [_h('icon', {
	    class: [_vm.prefixCls + '-dropdown-icon'],
	    attrs: {
	      "type": "down",
	      "size": "12"
	    }
	  })])] : _h('div', {
	    on: {
	      "click": _vm.focusInput
	    }
	  }, [_h('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showPlaceholder),
	      expression: "showPlaceholder"
	    }],
	    class: [_vm.prefixCls + '-select-placeholder']
	  }, [_vm._s(_vm.placeholder)]), " ", _vm._l((_vm.selectedOptions), function(option) {
	    return _h('tag', {
	      attrs: {
	        "closable": ""
	      },
	      domProps: {
	        "innerHTML": _vm._s(option.label)
	      },
	      on: {
	        "close": function($event) {
	          _vm.closeTag(option)
	        }
	      }
	    })
	  }), " ", _h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.searchText),
	      expression: "searchText"
	    }],
	    ref: "searchField",
	    class: [_vm.prefixCls + '-select-search-field'],
	    attrs: {
	      "type": "text",
	      "autocomplete": "off"
	    },
	    domProps: {
	      "value": _vm._s(_vm.searchText)
	    },
	    on: {
	      "input": [function($event) {
	        if ($event.target.composing) { return; }
	        _vm.searchText = $event.target.value
	      }, _vm.onInput],
	      "keydown": [function($event) {
	        if (_vm._k($event.keyCode, "delete", [8, 46])) { return; }
	        _vm.deleteTag($event)
	      }, function($event) {
	        if (_vm._k($event.keyCode, "enter", 13)) { return; }
	        $event.preventDefault();
	        _vm.createTag($event)
	      }],
	      "blur": _vm.createTag
	    }
	  })]), " "]), " ", _h('div', {
	    class: [_vm.prefixCls + '-dropdown-menu'],
	    style: ({
	      width: _vm.width
	    }),
	    slot: "popup"
	  }, [_vm._t("default"), " ", _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.noResult),
	      expression: "noResult"
	    }],
	    staticClass: "no-result"
	  }, ["无结果"]), " ", _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showNotify),
	      expression: "showNotify"
	    }],
	    staticClass: "notify",
	    attrs: {
	      "transition": "fadein"
	    }
	  }, ["最多可选 (" + _vm._s(_vm.limit) + ")项."])])])])
	},staticRenderFns: []}

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(213)

	/* template */
	var __vue_template__ = __webpack_require__(214)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },

/***/ 213:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'Option',
	  props: {
	    value: [String, Number],
	    disabled: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  data: function data() {
	    return {
	      active: false
	    };
	  },

	  computed: {
	    chosen: function chosen() {
	      var _this = this;

	      return this.$parent.$parent.selectedOptions.some(function (item) {
	        return item.value === _this.value;
	      });
	    },
	    show: function show() {
	      var searchText = this.$parent.$parent.searchText.trim();
	      if (searchText.length && this.$parent.$parent.multiple) {
	        return this.$el.innerText.indexOf(searchText) >= 0;
	      }
	      return true;
	    },
	    optionClassObj: function optionClassObj() {
	      var prefixCls = this.prefixCls,
	          active = this.active,
	          disabled = this.disabled,
	          chosen = this.chosen;

	      var classObj = {};

	      classObj[prefixCls + '-dropdown-option'] = true;
	      classObj[prefixCls + '-dropdown-option-disabled'] = disabled;
	      classObj[prefixCls + '-dropdown-option-active'] = active;
	      classObj[prefixCls + '-dropdown-option-chosen'] = chosen;

	      return classObj;
	    }
	  },
	  mounted: function mounted() {
	    var option = {
	      label: this.$el.innerText.trim(),
	      value: this.value,
	      disabled: this.disabled
	    };
	    this.$parent.$parent.$data.options.push(option);
	    var value = this.$parent.$parent.value;
	    if (Array.isArray(value) && value.indexOf(this.value) >= 0 || value === this.value) {
	      this.$parent.$parent.selectedOptions.push(option);
	    }
	  },

	  methods: {
	    handleClick: function handleClick() {
	      if (this.disabled) {
	        return;
	      }
	      var option = {
	        label: this.$el.innerText,
	        value: this.value
	      };
	      this.$parent.$parent.$emit('option-change', option);
	    }
	  },
	  events: {
	    valueChange: function valueChange(val) {
	      if (val === this.value && !this.disabled) {
	        var option = {
	          label: this.$el.innerText,
	          value: this.value,
	          disabled: this.disabled
	        };
	        this.$parent.$parent.selectedOptions = [option];
	        this.chosen = true;
	      }
	    }
	  }
	};

/***/ },

/***/ 214:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    class: _vm.optionClassObj,
	    on: {
	      "mouseup": function($event) {
	        $event.preventDefault();
	        $event.stopPropagation();
	        _vm.handleClick($event)
	      }
	    }
	  }, [_vm._t("default")])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;