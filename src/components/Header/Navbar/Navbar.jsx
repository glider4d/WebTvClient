import React from "react";
import QrScanner from "../../QrScanner/QrScanner"
import './Navbar.css'


class Navbar extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="navbar">
                <a href="index#home" className="nav-link nav-active">
                    <i className="bx bx-home"></i>
                    <span className="nav-link-title">Home</span>
                </a>
                <a href="#popular" className="nav-link">
                    <i className="bx bxs-hot"></i>
                    <span className="nav-link-title">Trending</span>
                </a>
                <a href="#movies" className="nav-link">
                    <i className="bx bx-compass"></i>
                    <span className="nav-link-title">Explore</span>
                </a>
                <a href="playpage" className="nav-link">
                    <i className="bx bx-tv"></i>
                    <span className="nav-link-title">Movies</span>
                </a>
                <a href="#home" className="nav-link">
                    <i className="bx bx-heart"></i>
                    <span className="nav-link-title">Favourite</span>
                </a>
                <i onClick={()=>{this.props.onQrScanner()}} className="nav-link">
                    <i className="bx bx-plus"></i>
                    <span className="nav-link-title">Attach</span>
                </i>
            </div>        
        )    
    }
}

export default Navbar