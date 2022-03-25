import React, { Component } from "react";

export default class Products extends Component{
    state = { 
        pageTitle:"Products", 
        products:[
            {title:1,price:"$4.00", description:"Mat"},
            {title:2,price:"$4.00", description:"Mat"},
            {title:3,price:"$4.00", description:"Mat"},
            {title:4,price:"$4.00", description:"Mat"},
        ]
    };

    render(){
        return <div>
            <h4 className="border-bottom m-1 p-1">
                {this.state.pageTitle}
            </h4>
                {/* <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title"><title></title></h5>
                        <p class="card-text">description</p>
                        <p class="card-text">price</p>
                        <a href="#" class="btn btn-primary">Order Now</a>
                    </div>
                </div> */}
            <table className="table">
                <thead>
                    <tr>
                        <th>title</th>
                        <th>price</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.products.map((prod)=>{
                        return(
                            <tr key={prod.title}>
                                <td>{prod.title}</td>
                                <td>{prod.price}</td>
                                <td>{prod.description}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    }

    //Execute when the user clicks on Refresh Button
    onRefreshClick =()=>{
        this.setState({productsCount: 7});
        console.log("Refresh clicked");
    }

}
