webpackHotUpdate("static/development/pages/Contact.js",{

/***/ "./pages/Contact.jsx":
/*!***************************!*\
  !*** ./pages/Contact.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/header */ "./components/header/index.js");
/* harmony import */ var _components_herobanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/herobanner */ "./components/herobanner/index.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_10__);








 //import { toggleTap, incrementCount, decrementCount } from '../redux/actions';





var Contact =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Contact, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Contact, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var reduxStore = _ref.reduxStore,
          req = _ref.req;
      var isServer = !!req;
      return {};
    }
  }]);

  function Contact(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Contact);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Contact).call(this, props));
    _this.banner_buttons = [{
      text: 'github.com/JoeBiggica',
      url: 'https://github.com/JoeBiggica',
      target: '_blank',
      label: 'GitHub'
    }, {
      text: 'joe@biggica.com',
      url: 'mailto:joe@biggica.com',
      label: 'Email'
    }, {
      text: 'linkedin.com/in/joebiggica',
      url: 'https://www.linkedin.com/in/joebiggica',
      target: '_blank',
      label: 'LinkedIn'
    }];
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Contact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_herobanner__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Contact",
        title_border: true,
        text_position: "top",
        buttons: this.banner_buttons
      })));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=Contact.js.8b9007e805d7ef655429.hot-update.js.map