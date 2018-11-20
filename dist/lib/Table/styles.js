"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
exports.Table = styled_components_1["default"].table.attrs({
    className: function (props) { return props.customClass; }
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  & > tr {\n    display: grid;\n    grid-template-columns: ", ";\n    height: 32px;\n    align-items: center;\n    border-bottom: 1px solid black;\n    padding: 0 4px;\n    :first-of-type {\n      height: 24px;\n      background-color: gray;\n      color: white;\n    }\n    & > th {\n      justify-self: flex-start;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  & > tr {\n    display: grid;\n    grid-template-columns: ",
    ";\n    height: 32px;\n    align-items: center;\n    border-bottom: 1px solid black;\n    padding: 0 4px;\n    :first-of-type {\n      height: 24px;\n      background-color: gray;\n      color: white;\n    }\n    & > th {\n      justify-self: flex-start;\n    }\n  }\n"])), function (props) {
    return "3fr repeat(" + (props.headData.length - 1) + ", 1fr)";
});
var templateObject_1;
