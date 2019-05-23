"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
// import colors from '../../constants/colors'
// import breakpoints from '../../constants/breakpoints'
// import fonts from '../../constants/fonts'
exports.Switcher = styled_components_1["default"].div.attrs(function (props) { return ({
    className: props.customClass
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid lightgray;\n  & > header {\n    border-bottom: 1px solid lightgray;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  & > ul {\n    display: flex;\n    flex-direction: row;\n    height: 30px;\n    width: 100%;\n    border-bottom: 1px solid lightgray;\n    margin: 0;\n    padding: 0;\n  }\n  & > footer {\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid lightgray;\n  & > header {\n    border-bottom: 1px solid lightgray;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  & > ul {\n    display: flex;\n    flex-direction: row;\n    height: 30px;\n    width: 100%;\n    border-bottom: 1px solid lightgray;\n    margin: 0;\n    padding: 0;\n  }\n  & > footer {\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])));
exports.Item = styled_components_1["default"].li.attrs(function (props) { return ({
    className: [props.active ? "active" : "inactive", props.customClass].join(" ")
}); })(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  border-right: 1px solid lightgray;\n  ", ";\n  &:last-of-type {\n    border: none;\n  }\n"], ["\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  border-right: 1px solid lightgray;\n  ",
    ";\n  &:last-of-type {\n    border: none;\n  }\n"])), function (props) {
    return props.active
        ? styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          background-color: black;\n          color: white;\n        "], ["\n          background-color: black;\n          color: white;\n        "]))) : styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          background-color: white;\n          color: black;\n        "], ["\n          background-color: white;\n          color: black;\n        "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
