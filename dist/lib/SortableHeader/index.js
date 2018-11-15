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
var SortArrows_1 = require("./SortArrows");
var styles_1 = require("./styles");
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            sort: null
        };
        _this.renderHeaderTitle = function (data, sort) {
            return data.map(function (d, index) { return (React.createElement("div", { key: d.id, onClick: function () { return _this.sortFunc(d.id - 1); } },
                sort && React.createElement(SortArrows_1["default"], { sort: sort[d.id - 1] }),
                React.createElement("span", null, d.label))); });
        };
        return _this;
    }
    default_1.prototype.componentDidMount = function () {
        var sort = this.state.sort;
        var _a = this.props, defaultSort = _a.defaultSort, contentToSort = _a.contentToSort;
        if (sort === null) {
            this.setState({ sort: this.createSort(contentToSort) });
        }
        if (sort === null && defaultSort && defaultSort.length === contentToSort.length) {
            this.setState({ sort: defaultSort });
        }
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
        // this.props.action(index);
    };
    default_1.prototype.render = function () {
        var sort = this.state.sort;
        var contentToSort = this.props.contentToSort;
        return (React.createElement(styles_1.SortableHeader, __assign({}, this.props), contentToSort && sort && this.renderHeaderTitle(contentToSort, sort)));
    };
    default_1.prototype.createSort = function (data) {
        if (data) {
            var newSort = [];
            for (var i = 0; i < data.length; i++) {
                newSort.push(0);
            }
            return newSort;
        }
        return null;
    };
    return default_1;
}(React.Component));
exports["default"] = default_1;
