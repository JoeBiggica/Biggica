webpackHotUpdate("static/development/pages/Projects.js",{

/***/ "./components/feature/Feature.jsx":
/*!****************************************!*\
  !*** ./components/feature/Feature.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Feature_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Feature.scss */ "./components/feature/Feature.scss");
/* harmony import */ var _Feature_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Feature_scss__WEBPACK_IMPORTED_MODULE_9__);











var Feature =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Feature, _PureComponent);

  function Feature() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Feature);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Feature).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Feature, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          title = _this$props.title,
          description = _this$props.description,
          color = _this$props.color,
          background_image = _this$props.background_image,
          image = _this$props.image,
          url = _this$props.url,
          text_position = _this$props.text_position,
          title_border = _this$props.title_border;
      var container_style = {
        backgroundImage: background_image && "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(".concat(background_image, ")")
      };
      var image_style = {
        backgroundImage: image && "url(".concat(image, ")"),
        border: image && "3px solid ".concat(color)
      };
      var inner_container_style = {
        flexDirection: text_position === 'right' ? 'row-reverse' : 'row'
      };
      var title_description_style = {
        textAlign: text_position === 'right' ? 'right' : 'left',
        paddingLeft: text_position === 'right' && '20px',
        paddingRight: text_position === 'left' && '20px'
      };
      var title_style = {
        border: title_border && "2px solid ".concat(color),
        padding: '12px 14px'
      };
      var hover_background_style = {
        boxShadow: "0 0 10px 10px ".concat(color)
      };
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_Feature_scss__WEBPACK_IMPORTED_MODULE_9___default()('container'), className),
        style: container_style
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _Feature_scss__WEBPACK_IMPORTED_MODULE_9___default()('inner-container'),
        style: inner_container_style
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _Feature_scss__WEBPACK_IMPORTED_MODULE_9___default()('title-description'),
        style: title_description_style
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: _Feature_scss__WEBPACK_IMPORTED_MODULE_9___default()('title'),
        style: title_style
      }, title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: _Feature_scss__WEBPACK_IMPORTED_MODULE_9___default()('description')
      }, description)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _Feature_scss__WEBPACK_IMPORTED_MODULE_9___default()('image-container')
      }, url ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: url,
        target: "_blank",
        className: _Feature_scss__WEBPACK_IMPORTED_MODULE_9___default()('image'),
        style: image_style
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _Feature_scss__WEBPACK_IMPORTED_MODULE_9___default()('hover-background'),
        style: hover_background_style
      })) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _Feature_scss__WEBPACK_IMPORTED_MODULE_9___default()('image'),
        style: image_style
      }))));
    }
  }]);

  return Feature;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Feature, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  background_image: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  url: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  text_position: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  title_border: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Feature, "defaultProps", {
  color: '#ffffff',
  text_position: 'right'
});

/* harmony default export */ __webpack_exports__["default"] = (Feature);

/***/ })

})
//# sourceMappingURL=Projects.js.a10bec7fc46955d3b729.hot-update.js.map