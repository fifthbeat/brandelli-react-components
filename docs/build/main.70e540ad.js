(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/react-styleguidist/loaders/examples-loader.js!./src/lib/List/README.md":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-styleguidist/loaders/examples-loader.js!./src/lib/List/README.md ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\n\nvar requireMap = {\n    './Item': __webpack_require__(/*! ./Item */ \"./src/lib/List/Item.tsx\"),\n    'react': __webpack_require__(/*! react */ \"./node_modules/react/index.js\")\n};\nvar requireInRuntimeBase = __webpack_require__(/*! ./node_modules/react-styleguidist/loaders/utils/client/requireInRuntime */ \"./node_modules/react-styleguidist/loaders/utils/client/requireInRuntime.js\");\nvar requireInRuntime = requireInRuntimeBase.bind(null, requireMap);\nvar evalInContextBase = __webpack_require__(/*! ./node_modules/react-styleguidist/loaders/utils/client/evalInContext */ \"./node_modules/react-styleguidist/loaders/utils/client/evalInContext.js\");\nvar evalInContext = evalInContextBase.bind(null, \"var React = require('react');\", requireInRuntime);\n\nmodule.exports = [\n    {\n        'type': 'markdown',\n        'content': '## How to use\\n\\nReact component example:'\n    },\n    {\n        'type': 'code',\n        'content': '<List border={true} direction={\\'column\\'} size={\\'large\\'} listHeight={\\'200px\\'} />',\n        'settings': {},\n        'evalInContext': evalInContext\n    },\n    {\n        'type': 'markdown',\n        'content': 'List with items'\n    },\n    {\n        'type': 'code',\n        'content': 'const Item = require(\\'./Item\\');\\n<List\\n  border={true}\\n  direction={\\'column\\'}\\n  size={\\'large\\'}\\n  listHeight={\\'200px\\'}\\n  content={[\\n    {id: 1, label: \\'san gennaro\\'},\\n    {id: 2, label: \\'san giuseppe\\'},\\n    {id: 3, label: \\'san francesco\\'},\\n  ]}\\n/>;',\n        'settings': {},\n        'evalInContext': evalInContext\n    }\n]\n\t\n\n//# sourceURL=webpack:///./src/lib/List/README.md?./node_modules/react-styleguidist/loaders/examples-loader.js");

/***/ }),

/***/ "./node_modules/react-styleguidist/loaders/examples-loader.js!./src/lib/Switcher/README.md":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-styleguidist/loaders/examples-loader.js!./src/lib/Switcher/README.md ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\n\nvar requireMap = { 'react': __webpack_require__(/*! react */ \"./node_modules/react/index.js\") };\nvar requireInRuntimeBase = __webpack_require__(/*! ./node_modules/react-styleguidist/loaders/utils/client/requireInRuntime */ \"./node_modules/react-styleguidist/loaders/utils/client/requireInRuntime.js\");\nvar requireInRuntime = requireInRuntimeBase.bind(null, requireMap);\nvar evalInContextBase = __webpack_require__(/*! ./node_modules/react-styleguidist/loaders/utils/client/evalInContext */ \"./node_modules/react-styleguidist/loaders/utils/client/evalInContext.js\");\nvar evalInContext = evalInContextBase.bind(null, \"var React = require('react');\", requireInRuntime);\n\nmodule.exports = [\n    {\n        'type': 'markdown',\n        'content': '## Description\\n\\nA radio switcher that display content\\n\\n## How to use\\n\\nComponent example:'\n    },\n    {\n        'type': 'code',\n        'content': 'const displayContent = [{id: \\'item1\\', label: \\'Item 1\\'}, {id: \\'item2\\', label: \\'Item 2\\'}, {id: \\'item3\\', label: \\'Item 3\\'}];\\n\\n<Switcher content={displayContent} header=\"Header text\" footer=\"Footer text\" />;',\n        'settings': {},\n        'evalInContext': evalInContext\n    }\n]\n\t\n\n//# sourceURL=webpack:///./src/lib/Switcher/README.md?./node_modules/react-styleguidist/loaders/examples-loader.js");

/***/ }),

/***/ "./node_modules/react-styleguidist/loaders/props-loader.js!./src/lib/List/index.tsx":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-styleguidist/loaders/props-loader.js!./src/lib/List/index.tsx ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\n\nmodule.exports = {\n    'description': '',\n    'displayName': 'List',\n    'methods': [],\n    'props': [\n        {\n            'defaultValue': null,\n            'description': 'component inside the list',\n            'name': 'content',\n            'parent': {\n                'fileName': 'brandelli-react-components/src/lib/List/List.tsx',\n                'name': 'IProps'\n            },\n            'required': true,\n            'type': { 'name': 'object[]' },\n            'tags': {}\n        },\n        {\n            'defaultValue': null,\n            'description': 'add a border to the list',\n            'name': 'border',\n            'parent': {\n                'fileName': 'brandelli-react-components/src/lib/List/List.tsx',\n                'name': 'IProps'\n            },\n            'required': false,\n            'type': { 'name': 'boolean' },\n            'tags': {}\n        },\n        {\n            'defaultValue': null,\n            'description': 'define the item\\'s content position',\n            'name': 'contentPosition',\n            'parent': {\n                'fileName': 'brandelli-react-components/src/lib/List/List.tsx',\n                'name': 'IProps'\n            },\n            'required': false,\n            'type': { 'name': '\"end\" | \"center\"' },\n            'tags': {}\n        },\n        {\n            'defaultValue': null,\n            'description': 'define list items direction',\n            'name': 'direction',\n            'parent': {\n                'fileName': 'brandelli-react-components/src/lib/List/List.tsx',\n                'name': 'IProps'\n            },\n            'required': false,\n            'type': { 'name': '\"row\" | \"column\"' },\n            'tags': {}\n        },\n        {\n            'defaultValue': null,\n            'description': 'define height of the list',\n            'name': 'listHeight',\n            'parent': {\n                'fileName': 'brandelli-react-components/src/lib/List/List.tsx',\n                'name': 'IProps'\n            },\n            'required': false,\n            'type': { 'name': 'string' },\n            'tags': {}\n        },\n        {\n            'defaultValue': null,\n            'description': 'define size of the list item',\n            'name': 'size',\n            'parent': {\n                'fileName': 'brandelli-react-components/src/lib/List/List.tsx',\n                'name': 'IProps'\n            },\n            'required': false,\n            'type': { 'name': '\"small\" | \"large\"' },\n            'tags': {}\n        }\n    ],\n    'doclets': {},\n    'examples': __webpack_require__(/*! !./node_modules/react-styleguidist/loaders/examples-loader.js!./src/lib/List/README.md */ \"./node_modules/react-styleguidist/loaders/examples-loader.js!./src/lib/List/README.md\")\n}\n\t\n\n//# sourceURL=webpack:///./src/lib/List/index.tsx?./node_modules/react-styleguidist/loaders/props-loader.js");

/***/ }),

/***/ "./node_modules/react-styleguidist/loaders/props-loader.js!./src/lib/Switcher/index.tsx":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-styleguidist/loaders/props-loader.js!./src/lib/Switcher/index.tsx ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\n\nmodule.exports = {\n    'description': '',\n    'displayName': 'Switcher',\n    'methods': [],\n    'props': [\n        {\n            'defaultValue': null,\n            'description': 'Generate the content of the radio switcher',\n            'name': 'content',\n            'parent': {\n                'fileName': 'brandelli-react-components/src/lib/Switcher/Switcher.tsx',\n                'name': 'IProps'\n            },\n            'required': true,\n            'type': { 'name': 'object[]' },\n            'tags': {}\n        },\n        {\n            'defaultValue': null,\n            'description': 'Append some text at the bottom',\n            'name': 'footer',\n            'parent': {\n                'fileName': 'brandelli-react-components/src/lib/Switcher/Switcher.tsx',\n                'name': 'IProps'\n            },\n            'required': false,\n            'type': { 'name': 'string' },\n            'tags': {}\n        },\n        {\n            'defaultValue': null,\n            'description': 'Append some text at the top',\n            'name': 'header',\n            'parent': {\n                'fileName': 'brandelli-react-components/src/lib/Switcher/Switcher.tsx',\n                'name': 'IProps'\n            },\n            'required': false,\n            'type': { 'name': 'string' },\n            'tags': {}\n        }\n    ],\n    'doclets': {},\n    'examples': __webpack_require__(/*! !./node_modules/react-styleguidist/loaders/examples-loader.js!./src/lib/Switcher/README.md */ \"./node_modules/react-styleguidist/loaders/examples-loader.js!./src/lib/Switcher/README.md\")\n}\n\t\n\n//# sourceURL=webpack:///./src/lib/Switcher/index.tsx?./node_modules/react-styleguidist/loaders/props-loader.js");

/***/ }),

/***/ "./src/lib/List/Item.tsx":
/*!*******************************!*\
  !*** ./src/lib/List/Item.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ \"./src/lib/List/styles.tsx\");\n\n\n\n\n\n\n\n\nvar Item =\n/*#__PURE__*/\nfunction (_React$Component) {\n  Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Item, _React$Component);\n\n  function Item(props) {\n    var _this;\n\n    Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Item);\n\n    _this = Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Item).call(this, props));\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Item, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](_styles__WEBPACK_IMPORTED_MODULE_6__[\"IItemWrap\"], this.props, this.props.children);\n    }\n  }]);\n\n  return Item;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);\n\n//# sourceURL=webpack:///./src/lib/List/Item.tsx?");

/***/ }),

/***/ "./src/lib/List/List.tsx":
/*!*******************************!*\
  !*** ./src/lib/List/List.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Item */ \"./src/lib/List/Item.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ \"./src/lib/List/styles.tsx\");\n\n\n\n\n\n\n\n\n\nvar List =\n/*#__PURE__*/\nfunction (_React$Component) {\n  Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(List, _React$Component);\n\n  function List(props) {\n    var _this;\n\n    Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, List);\n\n    _this = Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(List).call(this, props));\n\n    _this.renderItems = function (data) {\n      if (data && data.length > 0) {\n        return data.map(function (d) {\n          return react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            key: d.id\n          }, d.label);\n        });\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](\"li\", null, \"Ciao sono una lista vuota\");\n    };\n\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(List, [{\n    key: \"render\",\n    value: function render() {\n      var content = this.props.content;\n      return react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](_styles__WEBPACK_IMPORTED_MODULE_7__[\"ScrollArea\"], null, react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](_styles__WEBPACK_IMPORTED_MODULE_7__[\"IListWrap\"], this.props, this.renderItems(content)));\n    }\n  }]);\n\n  return List;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\n//# sourceURL=webpack:///./src/lib/List/List.tsx?");

/***/ }),

/***/ "./src/lib/List/index.tsx":
/*!********************************!*\
  !*** ./src/lib/List/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ \"./src/lib/List/List.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_List__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/lib/List/index.tsx?");

/***/ }),

/***/ "./src/lib/List/styles.tsx":
/*!*********************************!*\
  !*** ./src/lib/List/styles.tsx ***!
  \*********************************/
/*! exports provided: IListWrap, ScrollArea, IItemWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IListWrap\", function() { return IListWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollArea\", function() { return ScrollArea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IItemWrap\", function() { return IItemWrap; });\n/* harmony import */ var _Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject7() {\n  var data = Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  list-style-type: none;\\n  display: flex;\\n  flex-direction: row;\\n  width: 100%;\\n  align-items: center;\\n  box-sizing: border-box;\\n  border-bottom: 1px solid lightgrey;\\n  :last-of-type {\\n    border: none;\\n  }\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: 100%;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n            padding: 16px 16px;\\n            min-height: 60px;\\n          \"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n            padding: 16px 16px;\\n            min-height: 80px;\\n          \"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n            padding: 4px 16px;\\n            min-height: 40px;\\n          \"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      border: 1px solid lightgrey;\\n    \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: \", \";\\n  width: calc(100% - 32px);\\n  height: \", \";\\n  padding: 0;\\n  border-radius: 4px;\\n  overflow-y: scroll;\\n  &::-webkit-scrollbar {\\n    display: none;\\n  }\\n\\n  \", \";\\n\\n  & > li {\\n    list-style-type: none;\\n    justify-content: \", \";\\n\\n    \", \";\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n // import colors from '../../constants/colors'\n// import breakpoints from '../../constants/breakpoints'\n// import fonts from '../../constants/fonts'\n\nvar IListWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ul(_templateObject(), function (props) {\n  return props.direction;\n}, function (props) {\n  return props.listHeight;\n}, function (props) {\n  return props.border && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject2());\n}, function (props) {\n  switch (props.contentPosition) {\n    case 'end':\n      return 'flex-end';\n\n    case 'center':\n      return 'center';\n\n    default:\n      return 'flex-start';\n  }\n}, function (props) {\n  switch (props.size) {\n    case 'small':\n      return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject3());\n\n    case 'large':\n      return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject4());\n\n    default:\n      return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject5());\n  }\n});\nvar ScrollArea = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6());\nvar IItemWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].li(_templateObject7());\n\n//# sourceURL=webpack:///./src/lib/List/styles.tsx?");

/***/ }),

/***/ "./src/lib/Switcher/Switcher.tsx":
/*!***************************************!*\
  !*** ./src/lib/Switcher/Switcher.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ \"./src/lib/Switcher/styles.tsx\");\n\n\n\n\n\n\n\n\nvar Switcher =\n/*#__PURE__*/\nfunction (_React$Component) {\n  Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Switcher, _React$Component);\n\n  function Switcher(props) {\n    var _this;\n\n    Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Switcher);\n\n    _this = Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Switcher).call(this, props));\n\n    _this.renderTimespanElm = function (data) {\n      return data.map(function (d) {\n        return react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](\"li\", {\n          key: d.id\n        }, d.label);\n      });\n    };\n\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Switcher, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          content = _this$props.content,\n          footer = _this$props.footer,\n          header = _this$props.header;\n      return react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](_styles__WEBPACK_IMPORTED_MODULE_6__[\"Wrap\"], null, header && react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](\"header\", null, header), react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](\"ul\", null, content && this.renderTimespanElm(content)), footer && react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](\"footer\", null, footer));\n    }\n  }]);\n\n  return Switcher;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Switcher);\n\n//# sourceURL=webpack:///./src/lib/Switcher/Switcher.tsx?");

/***/ }),

/***/ "./src/lib/Switcher/index.tsx":
/*!************************************!*\
  !*** ./src/lib/Switcher/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Switcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Switcher */ \"./src/lib/Switcher/Switcher.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Switcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/lib/Switcher/index.tsx?");

/***/ }),

/***/ "./src/lib/Switcher/styles.tsx":
/*!*************************************!*\
  !*** ./src/lib/Switcher/styles.tsx ***!
  \*************************************/
/*! exports provided: Wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrap\", function() { return Wrap; });\n/* harmony import */ var _Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject() {\n  var data = Object(_Users_mattiamagi_Developer_brandelli_react_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  border-radius: 4px;\\n  border: 1px solid lightgray;\\n  & > header {\\n    border-bottom: 1px solid lightgray;\\n    height: 30px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n  & > ul {\\n    display: flex;\\n    flex-direction: row;\\n    height: 30px;\\n    width: 100%;\\n    border-bottom: 1px solid lightgray;\\n    margin: 0;\\n    padding: 0;\\n    & > li {\\n      display: flex;\\n      height: 100%;\\n      width: 100%;\\n      flex: 1;\\n      justify-content: center;\\n      align-items: center;\\n      text-transform: uppercase;\\n      border-right: 1px solid lightgray;\\n      :last-of-type {\\n        border: none;\\n      }\\n    }\\n  }\\n  & > footer {\\n    height: 30px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n // import colors from '../../constants/colors'\n// import breakpoints from '../../constants/breakpoints'\n// import fonts from '../../constants/fonts'\n\nvar Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\n\n//# sourceURL=webpack:///./src/lib/Switcher/styles.tsx?");

/***/ }),

/***/ 0:
/*!*********************************************************!*\
  !*** multi ./node_modules/react-styleguidist/lib/index ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/mattiamagi/Developer/brandelli-react-components/node_modules/react-styleguidist/lib/index */\"./node_modules/react-styleguidist/lib/index.js\");\n\n\n//# sourceURL=webpack:///multi_./node_modules/react-styleguidist/lib/index?");

/***/ })

},[[0,"runtime~main",0]]]);