import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand" >Call-API</h1>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li >
                            <Link to="/" className="nav-link">Trang chủ</Link>
                        </li>
            
                        <li >
                            <Link to="/product-list" className="nav-link">Quản lý sản phẩm</Link>
                        </li>
                    
                    </ul>
                </div>
          </nav>
        );
    }
}

export default Menu;

