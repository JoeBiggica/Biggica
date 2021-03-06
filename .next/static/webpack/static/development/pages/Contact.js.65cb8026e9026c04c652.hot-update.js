webpackHotUpdate("static/development/pages/Contact.js",{

/***/ "./components/herobanner/HeroBanner.jsx":
/*!**********************************************!*\
  !*** ./components/herobanner/HeroBanner.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HeroBanner.scss */ "./components/herobanner/HeroBanner.scss");
/* harmony import */ var _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_HeroBanner_scss__WEBPACK_IMPORTED_MODULE_10__);












var HeroBanner =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HeroBanner, _PureComponent);

  function HeroBanner() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeroBanner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HeroBanner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderButton", function (button, index) {
      var button_container_classname = _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_10___default()('button-container', {
        'border': _this.props.button_border
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: button_container_classname
      }, button.label && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_10___default()('label')
      }, button.label), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_10___default()('button')
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: button.url,
        target: button.target,
        onClick: button.onClick
      }, button.text)));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeroBanner, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          title = _this$props.title,
          title_border = _this$props.title_border,
          text_position = _this$props.text_position,
          buttons = _this$props.buttons,
          button_border = _this$props.button_border,
          image = _this$props.image,
          full_height = _this$props.full_height;
      var container_classname = _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_10___default()('container', {
        'justify-top': text_position === 'top',
        'justify-bottom': text_position === 'bottom',
        'full-height': full_height
      });
      var text_container_classname = _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_10___default()('text-container', {
        'border': title_border
      });
      var image_style = {
        backgroundImage: image
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(container_classname, className)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: text_container_classname
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_10___default()('title')
      }, this.props.title)), buttons && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_10___default()('buttons-container')
      }, buttons.map(this.renderButton)), image && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_10___default()('image-container'),
        onClick: image.onClick
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: _HeroBanner_scss__WEBPACK_IMPORTED_MODULE_10___default()('image'),
        src: image.src
      })));
    }
  }]);

  return HeroBanner;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(HeroBanner, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  title_border: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  text_position: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  buttons: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
  button_border: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  image: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  full_height: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(HeroBanner, "defaultProps", {
  full_height: true
});

/* harmony default export */ __webpack_exports__["default"] = (HeroBanner);

/***/ })

})
//# sourceMappingURL=Contact.js.65cb8026e9026c04c652.hot-update.js.map