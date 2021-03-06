webpackHotUpdate("static/development/pages/Projects.js",{

/***/ "./components/header/Header.jsx":
/*!**************************************!*\
  !*** ./components/header/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hamburgerbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hamburgerbutton */ "./components/header/hamburgerbutton/index.js");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Header.scss */ "./components/header/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_11__);













var Header =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Header, _PureComponent);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Header).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      menu_active: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onClick", function () {
      _this.setState({
        menu_active: !_this.state.menu_active
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderMenuItem", function (item) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        key: "".concat(item.id)
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/".concat(item.id)
      }, item.name));
    });

    _this.menu_items = [{
      name: 'Resumè',
      id: 'resume'
    }, {
      name: 'Projects',
      id: 'projects'
    }, {
      name: 'Contact',
      id: 'contact'
    }];
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          text = _this$props.text;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: _Header_scss__WEBPACK_IMPORTED_MODULE_11___default()('container')
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Header_scss__WEBPACK_IMPORTED_MODULE_11___default()('inner')
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Header_scss__WEBPACK_IMPORTED_MODULE_11___default()('logo')
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/"
      }, "Joe Biggica")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Header_scss__WEBPACK_IMPORTED_MODULE_11___default()('menu-container')
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_hamburgerbutton__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: _Header_scss__WEBPACK_IMPORTED_MODULE_11___default()('button'),
        onClick: this.onClick
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: _Header_scss__WEBPACK_IMPORTED_MODULE_11___default()('menu', {
          'active': this.state.menu_active
        })
      }, this.menu_items.map(this.renderMenuItem)))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=Projects.js.c79f3c8d8eb444318241.hot-update.js.map