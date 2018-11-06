"use strict";

var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
/**
 * A radical List component
 *
 * @version 0.0.1
 *
 * @author [Nicola Bertelloni](https://github.com/wanbinkimoon)
 * @author [Mattia Magi](https://github.com/megio)
 */
var React = require("react");
var styles_1 = require("./styles");
var List = /** @class */function (_super) {
    __extends(List, _super);
    function List(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    List.prototype.render = function () {
        return React.createElement(styles_1.Wrap, null, this.props.children);
    };
    return List;
}(React.Component);
exports["default"] = List;