"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.start = exports.alertMsg = void 0;
var React = require("react"); // import all from react and use TheModule as "React"
var ReactDOM = require("react-dom");
var alertMsg = function (msg) {
    alert("".concat(msg));
};
exports.alertMsg = alertMsg;
function start() {
    var NavBar = /** @class */ (function (_super) {
        __extends(NavBar, _super);
        function NavBar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NavBar.prototype.render = function () {
            return (React.createElement("li", {}, React.createElement("a", { href: this.props.href }, this.props.description)));
        };
        return NavBar;
    }(React.Component));
    // this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性。它表示组件的所有子节点
    // React.createElement(type, {props}, [...children])
    var rootElement = React.createElement("header", {}, // parent tag encapsulates all tags underneath
    React.createElement("h1", {}), // child 1
    React.createElement("nav", {}, // child 2
    React.createElement("ul", {}, //unordered list is a child of child 2
    React.createElement(NavBar, {
        href: "",
        description: "Home"
    }), React.createElement(NavBar, {
        href: "Education.html",
        description: "Education"
    }), React.createElement(NavBar, {
        href: "Projects.html",
        description: "Projects"
    }), React.createElement(NavBar, {
        href: "Experience.html",
        description: "Experience"
    }))));
    var sayHi = function (greeting) {
        alert("".concat(greeting));
    };
    sayHi("Welcome to my Website!\n\nDeveloped by Stella Ma");
    ReactDOM.render(rootElement, // render page
    document.getElementById("mainContainer"));
}
exports.start = start;
//# sourceMappingURL=MyModule.js.map