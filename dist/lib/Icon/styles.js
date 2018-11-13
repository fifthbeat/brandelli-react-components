"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
exports.Icon = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: grid;\n  grid-template-rows: ", ";\n  grid-template-columns: ", ";\n  align-items: center;\n  transition: all 200ms ease-out;\n  & > svg {\n    justify-self: center;\n    ", ";\n  }\n  & > span {\n    font-size: 16px;\n    align-self: center;\n    justify-self: center;\n    color: ", ";\n    grid-row: ", ";\n    grid-column: ", ";\n  }\n"], ["\n  display: grid;\n  grid-template-rows: ",
    ";\n  grid-template-columns: ",
    ";\n  align-items: center;\n  transition: all 200ms ease-out;\n  & > svg {\n    justify-self: center;\n    ",
    ";\n  }\n  & > span {\n    font-size: 16px;\n    align-self: center;\n    justify-self: center;\n    color: ", ";\n    grid-row: ",
    ";\n    grid-column: ",
    ";\n  }\n"])), function (props) {
    switch (props.label && props.label.pos) {
        case "up":
            return "auto " + props.size;
        case "down":
            return props.size + " auto";
        default:
            return "" + props.size;
    }
}, function (props) {
    switch (props.label && props.label.pos) {
        case "left":
            return "auto " + props.size;
        case "right":
            return props.size + " auto";
        default:
            return "" + props.size;
    }
}, function (props) {
    if (props.theme === "fill") {
        return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          fill: ", ";\n        "], ["\n          fill: ", ";\n        "])), props.color);
    }
    return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        fill: none;\n        stroke: ", ";\n      "], ["\n        fill: none;\n        stroke: ", ";\n      "])), props.color);
}, function (props) { return (props.color ? props.color : "black"); }, function (props) {
    switch (props.label && props.label.pos) {
        case "down":
            return 2;
        default:
            return 1;
    }
}, function (props) {
    switch (props.label && props.label.pos) {
        case "right":
            return 2;
        default:
            return 1;
    }
});
var templateObject_1, templateObject_2, templateObject_3;
