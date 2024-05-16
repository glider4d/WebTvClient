import React from "react";
import './Header.css'
import Navbar from "./Navbar/Navbar";

class Header extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
        <header>
                {/* Nav */}
                <div className="nav container">
                    {/* Logo */}
                    <a href="index.html" className="logo">
                        SAKHA<span>MOVIE</span>
                    </a>
                    {/* Search box */}
                    <div className="search-box">
                        <input type="search" name="" id="search-input" placeholder="Search movie"/>
                        <i className="bx bx-search"></i>
                    </div>
                    {/* User */}
                    <a href="#" className="user">
                        <img src={require("../Assets/user.jpg")} alt="" className="user-img"/>
                        {/* ../Assets/user.jpg */}
                    </a>
                    {/* NavBar */}
                    <Navbar onQrScanner={this.props.onQrScanner}/>
                </div>

                    
            </header>
        )
    
    }
}

export default Header