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
    function default_1(props) {
        var _this = _super.call(this, props) || this;
        _this.renderTimespanElm = function (data) {
            return data.map(function (d) { return React.createElement("li", { key: d.id }, d.label); });
        };
        _this.state = {};
        return _this;
    }
    default_1.prototype.render = function () {
        var _a = this.props, content = _a.content, footer = _a.footer, header = _a.header;
        return (React.createElement(styles_1.Switcher, null,
            header && React.createElement("header", null, header),
            React.createElement("ul", null, content && this.renderTimespanElm(content)),
            footer && React.createElement("footer", null, footer)));
    };
    return default_1;
}(React.Component));
exports["default"] = default_1;
