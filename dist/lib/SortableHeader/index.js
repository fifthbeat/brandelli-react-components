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
        if (!sort) {
            this.setState({ sort: this.createSort(contentToSort) });
        }
        else if (!sort &&
            defaultSort &&
            defaultSort.length === contentToSort.length) {
            this.setState({ sort: defaultSort });
        }
    };
    default_1.prototype.renderHeaderTitle = function (data, sort) {
        var _this = this;
        return data.map(function (d, index) { return (React.createElement("div", { key: d.id, onClick: function () { return _this.sortFunc(d.id - 1); } },
            React.createElement(SortArrows_1["default"], { sort: sort[d.id - 1] }),
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
        this.props.action(index);
    };
    default_1.prototype.createSort = function (data) {
        var newSort = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var index = data_1[_i];
            newSort.push(0);
        }
        return newSort;
    };
    default_1.prototype.render = function () {
        var sort = this.state.sort;
        var _a = this.props, contentToSort = _a.contentToSort, customClass = _a.customClass;
        if (!sort) {
            return null;
        }
        return (React.createElement(styles_1.SortableHeader, { customClass: customClass, contentToSort: contentToSort }, this.renderHeaderTitle(contentToSort, sort)));
    };
    return default_1;
}(React.Component));
exports["default"] = default_1;
