"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var Item_1 = require("./Item");
var styles_1 = require("./styles");
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderDefalut = function (content) {
            return content.map(function (d) { return React.createElement("li", { key: d.id }, d.label); });
        };
        _this.renderItem = function (content, item) {
            return content.map(function (d) { return item(d); });
        };
        return _this;
    }
    default_1.prototype.render = function () {
        var _a = this.props, content = _a.content, renderItem = _a.renderItem;
        return (React.createElement(styles_1.List, __assign({}, this.props), renderItem ? (this.renderItem(content, renderItem)) : (React.createElement("ul", null, this.renderDefalut(content)))));
    };
    default_1.Item = Item_1["default"];
    return default_1;
}(React.Component));
exports["default"] = default_1;
