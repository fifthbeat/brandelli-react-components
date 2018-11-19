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
require("normalize.css");
var React = require("react");
var styles_1 = require("./styles");
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeDefault: 0,
            radio: [true, false, false]
        };
        return _this;
    }
    default_1.prototype.componentDidMount = function () {
        this.createRadio();
    };
    default_1.getDerivedStateFromProps = function (props, state) {
        if (props.elementActive && props.elementActive !== state.activeDefault) {
            var newRadio = state.radio;
            for (var i = 0; i < state.radio.length; i++) {
                if (props.elementActive === i) {
                    state.radio[i] = true;
                }
                else {
                    state.radio[i] = false;
                }
            }
            return __assign({}, state, { radio: newRadio, activeDefault: props.elementActive });
        }
        return __assign({}, state);
    };
    default_1.prototype.createRadio = function () {
        var content = this.props.content;
        var radio = this.state.radio;
        for (var i = radio.length; i < content.length; i++) {
            radio.push(false);
        }
        return radio;
    };
    default_1.prototype.selectItem = function (index) {
        var newRadio = this.state.radio.slice();
        // STEP: populate the
        for (var i = 0; i < newRadio.length; i++) {
            if (index === i) {
                newRadio[i] = true;
            }
            else {
                newRadio[i] = false;
            }
        }
        this.setState({ radio: newRadio });
        this.props.action(index);
    };
    default_1.prototype.renderTimespanElm = function (data, customClass) {
        var _this = this;
        return data.map(function (d, index) { return (React.createElement(styles_1.Item, { onClick: function (event) {
                return _this.selectItem(index);
            }, active: _this.state.radio[index], key: d.id, customClass: customClass }, d.label)); });
    };
    default_1.prototype.render = function () {
        var _a = this.props, content = _a.content, footer = _a.footer, header = _a.header, customClass = _a.customClass;
        // console.log(this.state.radio);
        return (React.createElement(styles_1.Switcher, null,
            header && React.createElement("header", null, header),
            React.createElement("ul", null, content && this.renderTimespanElm(content, customClass)),
            footer && React.createElement("footer", null, footer)));
    };
    return default_1;
}(React.Component));
exports["default"] = default_1;
