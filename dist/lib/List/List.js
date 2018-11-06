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
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List(props) {
        var _this = _super.call(this, props) || this;
        _this.renderItems = function (data) {
            if (data && data.length > 0) {
                return data.map(function (d) { return React.createElement(Item_1["default"], { key: d.id }, d.label); });
            }
            return React.createElement("li", null, "Ciao sono una lista vuota");
        };
        _this.state = {};
        return _this;
    }
    List.prototype.render = function () {
        var content = this.props.content;
        return (React.createElement(styles_1.ScrollArea, null,
            React.createElement(styles_1.IListWrap, __assign({}, this.props), this.renderItems(content))));
    };
    return List;
}(React.Component));
exports["default"] = List;
