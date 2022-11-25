import * as React from 'react';  // import all from react and use TheModule as "React"
import * as ReactDOM from 'react-dom';

export const alertMsg = (msg: String) => {
    alert(`${msg}`)
}

export function start() {

    interface Prop{
        href: String;
        description: String;
    }
    
    class NavBar extends React.Component<Prop> { // extend React.Component to contain interface Prop that gets defined below
        render() {
            return (
                React.createElement("li", {},
                    React.createElement("a",
                        { href: this.props.href },
                        this.props.description
                    )
                )
            );
        }
    }

// this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性。它表示组件的所有子节点
    // React.createElement(type, {props}, [...children])
    const rootElement =
        React.createElement("header", {}, // parent tag encapsulates all tags underneath
            React.createElement("h1", {},), // child 1
            React.createElement("nav", {}, // child 2
                React.createElement("ul", {}, //unordered list is a child of child 2
                    React.createElement(
                        NavBar, {
                        href: "",  // second parameter is props
                        description: "Home"
                    }
                    ), React.createElement(
                        NavBar, {
                        href: "Education.html",
                        description:
                            "Education"
                    }
                    ), React.createElement(
                        NavBar, {
                        href: "Projects.html",
                        description:
                            "Projects"
                    }
                    ), React.createElement(
                        NavBar, {
                        href: "Experience.html",
                        description:
                            "Experience"
                    }
                    )
                )
            )
        );


    const sayHi = (greeting: String): void =>{             // arrow notation
        alert(`${greeting}`);
    }
    sayHi("Welcome to my Website!\n\nDeveloped by Stella Ma");

    ReactDOM.render(rootElement,                           // render page
        document.getElementById("mainContainer")
    );
}