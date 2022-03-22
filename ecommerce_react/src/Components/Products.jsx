import React, { Component } from "react";

export default class Products extends Component{
    state = { pageTitle:"Products", productsCount: 12 };

    render(){
        return <div>
            <h4 className="border-bottom m-1 p-1">
                {this.state.pageTitle}
                <span className="badge badge-secondary m-2">
                {this.state.productsCount}</span>
                <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
            </h4>
        </div>
    }

    //Execute when the user clicks on Refresh Button
    onRefreshClick =()=>{
        this.setState({productsCount: 7});
        console.log("Refresh clicked");
    }

}
