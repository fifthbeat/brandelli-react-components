"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
exports.List = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 100%;\n  box-sizing: border-box;\n\n  & > * {\n    box-sizing: border-box;\n  }\n\n  & > ul {\n    display: flex;\n    flex-direction: ", ";\n    width: 100%;\n    height: ", ";\n    padding: 0;\n    border-radius: 4px;\n    overflow-y: scroll;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    ", ";\n\n    list-style-type: none;\n    & > li {\n      display: flex;\n      align-items: center;\n      border-bottom: 1px solid lightgrey;\n      padding: 0 16px;\n      line-height: 1.2;\n\n      &:last-of-type {\n        border-bottom: none;\n      }\n\n      justify-content: ", ";\n\n      min-height: ", ";\n    }\n  }\n"], ["\n  height: 100%;\n  box-sizing: border-box;\n\n  & > * {\n    box-sizing: border-box;\n  }\n\n  & > ul {\n    display: flex;\n    flex-direction: ",
    ";\n    width: 100%;\n    height: ", ";\n    padding: 0;\n    border-radius: 4px;\n    overflow-y: scroll;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    ",
    ";\n\n    list-style-type: none;\n    & > li {\n      display: flex;\n      align-items: center;\n      border-bottom: 1px solid lightgrey;\n      padding: 0 16px;\n      line-height: 1.2;\n\n      &:last-of-type {\n        border-bottom: none;\n      }\n\n      justify-content: ",
    ";\n\n      min-height: ",
    ";\n    }\n  }\n"])), function (props) {
    return props.direction ? props.direction : "column";
}, function (props) { return props.listHeight; }, function (props) {
    return props.border && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        border: 1px solid lightgrey;\n      "], ["\n        border: 1px solid lightgrey;\n      "])));
}, function (props) {
    switch (props.contentPosition) {
        case "end":
            return "flex-end";
        case "center":
            return "center";
        default:
            return "flex-start";
    }
}, function (props) {
    switch (props.size) {
        case "small":
            return "32px";
        case "large":
            return "64px";
        default:
            return "40px";
    }
});
exports.Item = styled_components_1["default"].li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  align-items: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid lightgrey;\n  :last-of-type {\n    border: none;\n  }\n"], ["\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  align-items: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid lightgrey;\n  :last-of-type {\n    border: none;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
