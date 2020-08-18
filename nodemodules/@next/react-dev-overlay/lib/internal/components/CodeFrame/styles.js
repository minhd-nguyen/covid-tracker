"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var noop_template_1 = require("../../helpers/noop-template");
var styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  [data-nextjs-codeframe] {\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n  }\n  [data-nextjs-codeframe]::selection,\n  [data-nextjs-codeframe] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-codeframe] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n\n  [data-nextjs-codeframe] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  [data-nextjs-codeframe] > hr {\n    margin: 0;\n    padding: 0;\n\n    border: none;\n    border-style: solid;\n    border-width: 0;\n    border-bottom-width: 1px;\n    border-color: var(--color-ansi-bright-black);\n  }\n\n  [data-nextjs-codeframe] > p {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n  }\n  [data-nextjs-codeframe] > p:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-codeframe] > p > svg {\n    width: auto;\n    height: 1em;\n    margin-left: 0.5rem;\n  }\n"], ["\n  [data-nextjs-codeframe] {\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n  }\n  [data-nextjs-codeframe]::selection,\n  [data-nextjs-codeframe] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-codeframe] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n\n  [data-nextjs-codeframe] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  [data-nextjs-codeframe] > hr {\n    margin: 0;\n    padding: 0;\n\n    border: none;\n    border-style: solid;\n    border-width: 0;\n    border-bottom-width: 1px;\n    border-color: var(--color-ansi-bright-black);\n  }\n\n  [data-nextjs-codeframe] > p {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n  }\n  [data-nextjs-codeframe] > p:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-codeframe] > p > svg {\n    width: auto;\n    height: 1em;\n    margin-left: 0.5rem;\n  }\n"])));
exports.styles = styles;
var templateObject_1;
//# sourceMappingURL=styles.js.map