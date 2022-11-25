import "./style.css" // bundle
import * as TheModule from "./MyModule"

TheModule.start(); //from TheModule get class navbar and assign it to NavBar
TheModule.alertMsg("Developed in Webpack with Modules")