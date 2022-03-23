import React,{ Component } from "react";
import Products from "./Products";

class NavBar extends Component{
    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-lg nav-tabs navbar-dark bg-dark navbar-style">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/#">Products</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Products/>
            </React.Fragment>
        )
    }
}

export default NavBar;