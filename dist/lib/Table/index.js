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
exports.__esModule = true;
var React = require("react");
var styles_1 = require("./styles");
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    default_1.prototype.renderHeader = function (headData) {
        return headData.map(function (d, i) { return React.createElement("th", { key: d.id }, d.label); });
    };
    default_1.prototype.renderContent = function (content) {
        return content.map(function (d, i) { return (React.createElement("tr", { key: d.id }, d.data.map(function (f) { return (React.createElement("td", { key: f.id }, f.label)); }))); });
    };
    default_1.prototype.render = function () {
        var _a = this.props, headData = _a.headData, content = _a.content, customClass = _a.customClass;
        return (React.createElement(styles_1.Table, { headData: headData, content: content, customClass: customClass },
            React.createElement("tr", null, this.renderHeader(headData)),
            React.createElement("tbody", null, this.renderContent(content))));
    };
    return default_1;
}(React.Component));
exports["default"] = default_1;
