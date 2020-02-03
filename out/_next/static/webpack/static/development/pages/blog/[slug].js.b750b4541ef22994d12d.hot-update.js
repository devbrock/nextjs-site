webpackHotUpdate("static\\development\\pages\\blog\\[slug].js",{

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogTemplate; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gray-matter */ "./node_modules/gray-matter/index.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");








var _jsxFileName = "C:\\Users\\brock\\Desktop\\nextjs-site\\pages\\blog\\[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





function BlogTemplate(props) {
  function reformatDate(fullDate) {
    var date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  var markdownBody = props.content;
  var frontmatter = props.data;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
    siteTitle: props.siteTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("article", {
    className: "jsx-3016328653" + " " + "blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-3016328653" + " " + "blog__hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    src: frontmatter.hero_image,
    alt: "blog_hero_".concat(frontmatter.title),
    className: "jsx-3016328653",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3016328653" + " " + "blog__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3016328653",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, frontmatter.title), __jsx("h3", {
    className: "jsx-3016328653",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, reformatDate(frontmatter.date))), __jsx("div", {
    className: "jsx-3016328653" + " " + "blog__body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_11___default.a, {
    source: markdownBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("h2", {
    className: "jsx-3016328653" + " " + "blog__footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Written By: ", frontmatter.author)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "3016328653",
    __self: this
  }, ".blog.jsx-3016328653 h1.jsx-3016328653{margin-bottom:.7rem;}.blog__hero.jsx-3016328653{min-height:300px;height:60vh;width:100%;margin:0;overflow:hidden;}.blog__hero.jsx-3016328653 img.jsx-3016328653{margin-bottom:0;object-fit:cover;min-height:100%;min-width:100%;object-position:center;}.blog__info.jsx-3016328653{padding:1.5rem 1.25rem;width:100%;max-width:768px;margin:0 auto;}.blog__info.jsx-3016328653 h1.jsx-3016328653{margin-bottom:0.66rem;}.blog__info.jsx-3016328653 h3.jsx-3016328653{margin-bottom:0;}.blog__body.jsx-3016328653{width:100%;padding:0 1.25rem;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.blog__body.jsx-3016328653 a.jsx-3016328653{padding-bottom:1.5rem;}.blog__body.jsx-3016328653:last-child{margin-bottom:0;}.blog__body.jsx-3016328653 h1.jsx-3016328653 h2.jsx-3016328653 h3.jsx-3016328653 h4.jsx-3016328653 h5.jsx-3016328653 h6.jsx-3016328653 p.jsx-3016328653{font-weight:normal;}.blog__body.jsx-3016328653 p.jsx-3016328653{color:inherit;}.blog__body.jsx-3016328653 ul.jsx-3016328653{list-style:initial;}.blog__body.jsx-3016328653 ul.jsx-3016328653 ol.jsx-3016328653{margin-left:1.25rem;margin-bottom:1.25rem;padding-left:1.45rem;}.blog__footer.jsx-3016328653{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:1.5rem 1.25rem;width:100%;max-width:800px;margin:0 auto;}.blog__footer.jsx-3016328653 h2.jsx-3016328653{margin-bottom:0;}.blog__footer.jsx-3016328653 a.jsx-3016328653{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.blog__footer.jsx-3016328653 a.jsx-3016328653 svg.jsx-3016328653{width:20px;}@media (min-width:768px){.blog.jsx-3016328653{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.blog__body.jsx-3016328653{max-width:800px;padding:0 2rem;}.blog__body.jsx-3016328653 span.jsx-3016328653{width:100%;margin:1.5rem auto;}.blog__body.jsx-3016328653 ul.jsx-3016328653 ol.jsx-3016328653{margin-left:1.5rem;margin-bottom:1.5rem;}.blog__hero.jsx-3016328653{min-height:600px;height:75vh;}.blog__info.jsx-3016328653{text-align:center;padding:2rem 0;}.blog__info.jsx-3016328653 h1.jsx-3016328653{max-width:500px;margin:0 auto 0.66rem auto;}.blog__footer.jsx-3016328653{padding:2.25rem;}}@media (min-width:1440px){.blog__hero.jsx-3016328653{height:70vh;}.blog__info.jsx-3016328653{padding:3rem 0;}.blog__footer.jsx-3016328653{padding:2rem 2rem 3rem 2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYnJvY2tcXERlc2t0b3BcXG5leHRqcy1zaXRlXFxwYWdlc1xcYmxvZ1xcW3NsdWddLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DaUIsQUFHK0IsQUFJSCxBQU9ELEFBUU8sQUFNRCxBQUdOLEFBSUwsQUFRVyxBQUdOLEFBR0csQUFHTCxBQUdLLEFBR0MsQUFNUCxBQVNHLEFBR0gsQUFLRixBQUtJLEFBSUcsQUFJTCxBQUlRLEFBSUYsQUFJQyxBQUlGLEFBSUEsQUFNSixBQUdHLEFBR2EsV0ExRlosQUE4Q3BCLEFBYXVCLENBMEJyQixFQXBFRixDQXVFRSxDQTdHaUIsQUFpQm5CLEFBZUEsQUEyQkEsQUFpQm1CLEFBb0JZLEFBSTdCLENBM0dZLEFBK0ZFLENBSUcsQ0F6RG5CLEFBTUEsQUEyQ3lCLENBL0Z6QixBQXVEd0IsRUE5QnhCLEFBZUEsQ0FyQmEsS0F3R1gsQ0F0SFcsQUE0QkcsQUFtRWQsQ0FSQSxDQUpBLEVBNUVnQixBQTRGaEIsQ0FwRmdCLE1BZFAsQUEwRlQsRUF4Q3FCLENBdEJSLEFBMEViLE1BckdnQixBQU1ELENBUUQsYUFvQ2hCLENBM0N5QixBQVF6QixDQWRBLFNBcURnQyxBQVlBLEFBVU4sYUFwRTFCLDhCQW9Cd0IsbUNBaUR0QixxQ0F0Qm1CLEFBWUEsTUF0Q0ksdUZBMkJBLEFBWXpCLFlBdENBLFdBMkJhLFdBQ0ssZ0JBQ0YsY0FDaEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxicm9ja1xcRGVza3RvcFxcbmV4dGpzLXNpdGVcXHBhZ2VzXFxibG9nXFxbc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1RlbXBsYXRlKHByb3BzKSB7XHJcbiAgICBmdW5jdGlvbiByZWZvcm1hdERhdGUoZnVsbERhdGUpIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZnVsbERhdGUpXHJcbiAgICAgICAgcmV0dXJuIGRhdGUudG9EYXRlU3RyaW5nKCkuc2xpY2UoNCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXJrZG93bkJvZHkgPSBwcm9wcy5jb250ZW50XHJcbiAgICBjb25zdCBmcm9udG1hdHRlciA9IHByb3BzLmRhdGFcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgc2l0ZVRpdGxlPXtwcm9wcy5zaXRlVGl0bGV9PlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJibG9nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImJsb2dfX2hlcm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZnJvbnRtYXR0ZXIuaGVyb19pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgYmxvZ19oZXJvXyR7ZnJvbnRtYXR0ZXIudGl0bGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfX2luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e2Zyb250bWF0dGVyLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPntyZWZvcm1hdERhdGUoZnJvbnRtYXR0ZXIuZGF0ZSl9PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX19ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXttYXJrZG93bkJvZHl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJibG9nX19mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBXcml0dGVuIEJ5OiB7ZnJvbnRtYXR0ZXIuYXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAuYmxvZyBoMSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuN3JlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmJsb2dfX2hlcm8ge1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ibG9nX19oZXJvIGltZyB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5ibG9nX19pbmZvIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAxLjI1cmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDc2OHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ibG9nX19pbmZvIGgxIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNjZyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ibG9nX19pbmZvIGgzIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5ibG9nX19ib2R5IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAxLjI1cmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmxvZ19fYm9keSBhIHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ibG9nX19ib2R5Omxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJsb2dfX2JvZHkgaDEgaDIgaDMgaDQgaDUgaDYgcCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmxvZ19fYm9keSBwIHtcclxuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmxvZ19fYm9keSB1bCB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBpbml0aWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmxvZ19fYm9keSB1bCBvbCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNDVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5ibG9nX19mb290ZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMS4yNXJlbTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmxvZ19fZm9vdGVyIGgyIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ibG9nX19mb290ZXIgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJsb2dfX2Zvb3RlciBhIHN2ZyB7XHJcbiAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuYmxvZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmxvZ19fYm9keSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ibG9nX19ib2R5IHNwYW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxLjVyZW0gYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ibG9nX19ib2R5IHVsIG9sIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJsb2dfX2hlcm8ge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3NXZoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJsb2dfX2luZm8ge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ibG9nX19pbmZvIGgxIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMC42NnJlbSBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJsb2dfX2Zvb3RlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIuMjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgICAgICAgIC5ibG9nX19oZXJvIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJsb2dfX2luZm8ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmxvZ19fZm9vdGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnJlbSAycmVtIDNyZW0gMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcblxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbkJsb2dUZW1wbGF0ZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IGN0eC5xdWVyeVxyXG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IGltcG9ydChgLi4vLi4vcG9zdHMvJHtzbHVnfS5tZGApXHJcbiAgICBjb25zdCBkYXRhID0gbWF0dGVyKGNvbnRlbnQuZGVmYXVsdCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmRhdGFcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\brock\\\\Desktop\\\\nextjs-site\\\\pages\\\\blog\\\\[slug].js */"));
}

BlogTemplate.getInitialProps = function _callee(ctx) {
  var slug, content, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          slug = ctx.query.slug;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(__webpack_require__("./posts lazy recursive ^\\.\\/.*\\.md$")("./".concat(slug, ".md")));

        case 3:
          content = _context.sent;
          data = gray_matter__WEBPACK_IMPORTED_MODULE_10___default()(content["default"]);
          return _context.abrupt("return", _objectSpread({}, data));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

/***/ })

})
//# sourceMappingURL=[slug].js.b750b4541ef22994d12d.hot-update.js.map