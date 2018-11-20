"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
exports.SortableHeader = styled_components_1["default"].div.attrs({
    className: function (props) { return props.customClass; }
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: ", ";\n  border: 1px solid lightgray;\n  & > div {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 0 8px;\n    border-right: 1px solid lightgrey;\n    :last-of-type {\n      border: none;\n    }\n    & > span {\n      text-transform: uppercase;\n    }\n  }\n"], ["\n  display: grid;\n  grid-template-columns: ",
    ";\n  border: 1px solid lightgray;\n  & > div {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 0 8px;\n    border-right: 1px solid lightgrey;\n    :last-of-type {\n      border: none;\n    }\n    & > span {\n      text-transform: uppercase;\n    }\n  }\n"])), function (props) {
    return "40% repeat(" + (props.contentToSort.length - 1) + ", 1fr)";
});
exports.SortArrows = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  height: 30px;\n  width: 13px;\n  align-items: center;\n  margin: 0 8px 0 0;\n  padding: 6px 0;\n\n  & > div {\n    height: 8px;\n    /* :first-of-type {\n      ", ";\n    }\n    :last-of-type {\n      ", ";\n    } */\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  height: 30px;\n  width: 13px;\n  align-items: center;\n  margin: 0 8px 0 0;\n  padding: 6px 0;\n\n  & > div {\n    height: 8px;\n    /* :first-of-type {\n      ", ";\n    }\n    :last-of-type {\n      ", ";\n    } */\n  }\n"])), function (props) { return props.sort === 1 && props.arrowColor; }, function (props) { return props.sort === 2 && props.arrowColor; });
var templateObject_1, templateObject_2;
