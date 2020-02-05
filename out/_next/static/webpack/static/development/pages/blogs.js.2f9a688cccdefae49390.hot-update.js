webpackHotUpdate("static\\development\\pages\\blogs.js",{

/***/ "./components/BlogList.js":
/*!********************************!*\
  !*** ./components/BlogList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\brock\\Desktop\\nextjs-site\\components\\BlogList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var BlogList = function BlogList(props) {
  function reformatDate(fullDate) {
    var date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "container",
    style: {
      display: 'block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.allBlogs.length > 0 && props.allBlogs.map(function (post) {
    return __jsx("div", {
      key: post.slug,
      className: "block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, console.log(post.slug), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: {
        pathname: "/posts/".concat(post.slug)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("a", {
      style: {
        textDecoration: 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("h2", {
      className: "red-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, post.document.data.title), __jsx("h4", {
      className: "red",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, " ", post.document.data.author, " | ", reformatDate(post.document.data.date)), __jsx("p", {
      className: "gray-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, post.document.data.summary))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogList);

/***/ })

})
//# sourceMappingURL=blogs.js.2f9a688cccdefae49390.hot-update.js.map