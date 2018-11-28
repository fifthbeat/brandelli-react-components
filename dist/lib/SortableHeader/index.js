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
var SortArrows_1 = require("./SortArrows");
var styles_1 = require("./styles");
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            sort: null
        };
        return _this;
    }
    default_1.prototype.componentDidMount = function () {
        var sort = this.state.sort;
        var _a = this.props, defaultSort = _a.defaultSort, contentToSort = _a.contentToSort;
        if (!sort && defaultSort && defaultSort.length === contentToSort.length) {
            this.setState({ sort: defaultSort });
        }
        else if (!sort) {
            this.setState({ sort: this.createSort(contentToSort) });
        }
    };
    default_1.prototype.renderHeaderTitle = function (data, sort, arrowColor) {
        var _this = this;
        return data.map(function (d, index) { return (React.createElement("div", { key: d.id, onClick: function () { return d.label !== "" && _this.sortFunc(d.id - 1); } },
            d.label !== "" && (React.createElement(SortArrows_1["default"], { sort: sort[d.id - 1], arrowColor: arrowColor })),
            React.createElement("span", null, d.label))); });
    };
    default_1.prototype.sortFunc = function (index) {
        var newSort = this.createSort(this.props.contentToSort);
        if (newSort && this.state.sort) {
            newSort[index] = (this.state.sort[index] + 1) % 3;
            if (newSort[index] === 0) {
                newSort[index] += 1;
            }
            this.setState({
                sort: newSort
            });
        }
        if (this.state.sort) {
            this.props.action(this.state.sort.slice());
        }
    };
    default_1.prototype.createSort = function (data) {
        var newSort = [];
        data.forEach(function (data) {
            // NOTE: In order to use forEach statement and have not compiling errors we use push(data.id - data.id) instead of push(0)
            newSort.push(data.id - data.id);
        });
        return newSort;
    };
    default_1.prototype.render = function () {
        var sort = this.state.sort;
        var _a = this.props, contentToSort = _a.contentToSort, customClass = _a.customClass, arrowColor = _a.arrowColor;
        if (!sort) {
            return null;
        }
        return (React.createElement(styles_1.SortableHeader, { customClass: customClass, contentToSort: contentToSort, arrowColor: arrowColor }, this.renderHeaderTitle(contentToSort, sort, arrowColor)));
    };
    return default_1;
}(React.Component));
exports["default"] = default_1;
