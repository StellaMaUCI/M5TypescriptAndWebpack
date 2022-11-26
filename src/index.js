
import "./style.css" // put .css file in index.js to bundle together
import * as MyModule from "./MyModule"

MyModule.start(); //from mymodule get class navbar and assign it to NavBar
MyModule.alertMsg("Developed in Webpack with Modules!")
