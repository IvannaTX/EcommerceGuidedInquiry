import React,{ Component } from "react";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
export default class App extends 
Component{
    render(){
        return 
        <React.Fragment>
            <NavBar/>
            <Products/>
        </React.Fragment>
    }
}