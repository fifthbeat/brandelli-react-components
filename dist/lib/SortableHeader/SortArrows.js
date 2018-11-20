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
var Icon_1 = require("../Icon");
var icons_1 = require("../Icon/icons");
var styles_1 = require("./styles");
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    default_1.prototype.render = function () {
        var _a = this.props, sort = _a.sort, arrowColor = _a.arrowColor;
        return (React.createElement(styles_1.SortArrows, { arrowColor: arrowColor, sort: sort },
            React.createElement(Icon_1["default"], { img: icons_1.SortUp(), color: sort === 1 ? arrowColor : "grey", theme: "fill" }),
            React.createElement("div", null),
            React.createElement(Icon_1["default"], { img: icons_1.SortDown(), color: sort === 2 ? arrowColor : "grey", theme: "fill" })));
    };
    return default_1;
}(React.Component));
exports["default"] = default_1;
