"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
// @ts-ignore
var disabled_1 = __importDefault(require("ally.js/maintain/disabled"));
// @ts-ignore
var tab_focus_1 = __importDefault(require("ally.js/maintain/tab-focus"));
var React = __importStar(require("react"));
var body_locker_1 = require("./body-locker");
var Overlay = function Overlay(_a) {
    var className = _a.className, children = _a.children, fixed = _a.fixed;
    React.useEffect(function () {
        body_locker_1.lock();
        return function () {
            body_locker_1.unlock();
        };
    }, []);
    var _b = __read(React.useState(null), 2), overlay = _b[0], setOverlay = _b[1];
    var onOverlay = React.useCallback(function (el) {
        setOverlay(el);
    }, []);
    React.useEffect(function () {
        if (overlay == null) {
            return;
        }
        var handle1 = disabled_1["default"]({ filter: overlay });
        var handle2 = tab_focus_1["default"]({ context: overlay });
        return function () {
            handle1.disengage();
            handle2.disengage();
        };
    }, [overlay]);
    return (React.createElement("div", { "data-nextjs-dialog-overlay": true, className: className, ref: onOverlay },
        React.createElement("div", { "data-nextjs-dialog-backdrop": true, "data-nextjs-dialog-backdrop-fixed": fixed ? true : undefined }),
        children));
};
exports.Overlay = Overlay;
//# sourceMappingURL=Overlay.js.map