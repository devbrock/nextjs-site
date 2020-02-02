webpackHotUpdate("static\\development\\pages\\blogs.js",{

/***/ "./pages/blogs.js":
/*!************************!*\
  !*** ./pages/blogs.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blogs; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_BlogList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BlogList */ "./components/BlogList.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gray-matter */ "./node_modules/gray-matter/index.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\brock\\Desktop\\nextjs-site\\pages\\blogs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function blogs(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h1", {
    className: "blue ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Read My Blog Posts")), __jsx("div", {
    className: "container",
    style: {
      marginTop: '2em',
      justifyContent: 'flex-start'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_BlogList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    allBlogs: props.allBlogs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })))));
} // src/pages/index.js

blogs.getInitialProps = function _callee() {
  var posts;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // get all .md files from the src/posts dir
          posts = function (context) {
            // grab all the files matching this context
            var keys = context.keys(); // grab the values from these files

            var values = keys.map(context); // go through each file

            var data = keys.map(function (key, index) {
              // Create slug from filename
              var slug = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.'); // get the current file value

              var value = values[index]; // Parse frontmatter & markdownbody for the current file

              var document = gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(value["default"]); // return the .md content & pretty slug

              return {
                document: document,
                slug: slug
              };
            }); // return all the posts

            return data;
          }(__webpack_require__("./posts sync recursive \\.md$"));

          return _context.abrupt("return", {
            allBlogs: posts
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

/***/ })

})
//# sourceMappingURL=blogs.js.0aca98849cc5ba402524.hot-update.js.map