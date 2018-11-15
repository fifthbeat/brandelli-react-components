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
require("normalize.css");
var React = require("react");
var styles_1 = require("./styles");
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            radio: [true, false, false],
            activeDefault: 0
        };
        _this.createRadio = function () {
            var content = _this.props.content;
            var radio = _this.state.radio;
            for (var i = radio.length; i < _this.renderTimespanElm(content).length; i++) {
                radio.push(false);
            }
            return radio;
        };
        _this.selectItem = function (index) {
            var radio = _this.state.radio;
            var newRadio = radio;
            for (var i = 0; i < radio.length; i++) {
                if (index == i) {
                    radio[i] = true;
                }
                else {
                    radio[i] = false;
                }
            }
            _this.setState({ radio: newRadio });
            //this.props.action(index);
        };
        _this.renderTimespanElm = function (data, customClass) {
            return data.map(function (d, index) { return (React.createElement(styles_1.Item, { onClick: function () { return _this.selectItem(index); }, active: _this.state.radio[index], key: d.id, customClass: customClass }, d.label)); });
        };
        return _this;
    }
    default_1.getDerivedStateFromProps = function (props, state) {
        if (props.elementActive && props.elementActive !== state.activeDefault) {
            var newRadio = state.radio;
            for (var i = 0; i < state.radio.length; i++) {
                if (props.elementActive == i) {
                    state.radio[i] = true;
                }
                else {
                    state.radio[i] = false;
                }
            }
            return { radio: newRadio, activeDefault: props.elementActive };
        }
        return { state: state };
    };
    default_1.prototype.componentDidMount = function () {
        this.createRadio();
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
