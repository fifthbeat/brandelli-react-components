"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
exports.IListWrap = styled_components_1["default"].ul(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: ", ";\n  width: calc(100% - 32px);\n  height: ", ";\n  padding: 0;\n  border-radius: 4px;\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  ", ";\n\n  & > li {\n    list-style-type: none;\n    justify-content: ", ";\n\n    ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: ", ";\n  width: calc(100% - 32px);\n  height: ", ";\n  padding: 0;\n  border-radius: 4px;\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  ",
    ";\n\n  & > li {\n    list-style-type: none;\n    justify-content: ",
    ";\n\n    ",
    ";\n  }\n"])), function (props) { return props.direction; }, function (props) { return props.listHeight; }, function (props) {
    return props.border && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      border: 1px solid lightgrey;\n    "], ["\n      border: 1px solid lightgrey;\n    "])));
}, function (props) {
    switch (props.contentPosition) {
        case 'end':
            return 'flex-end';
        case 'center':
            return 'center';
        default:
            return 'flex-start';
    }
}, function (props) {
    switch (props.size) {
        case 'small':
            return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            padding: 4px 16px;\n            min-height: 40px;\n          "], ["\n            padding: 4px 16px;\n            min-height: 40px;\n          "])));
        case 'large':
            return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            padding: 16px 16px;\n            min-height: 80px;\n          "], ["\n            padding: 16px 16px;\n            min-height: 80px;\n          "])));
        default:
            return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            padding: 16px 16px;\n            min-height: 60px;\n          "], ["\n            padding: 16px 16px;\n            min-height: 60px;\n          "])));
    }
});
exports.ScrollArea = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 100%;\n"], ["\n  height: 100%;\n"])));
exports.IItemWrap = styled_components_1["default"].li(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  align-items: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid lightgrey;\n  :last-of-type {\n    border: none;\n  }\n"], ["\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  align-items: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid lightgrey;\n  :last-of-type {\n    border: none;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
