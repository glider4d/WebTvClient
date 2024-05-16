import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './playpage.css'

import PlayContainer from "../components/PlayContainer/PlayContainer";
import AboutMovie from "../components/AboutMovie/AboutMovie";

class Playpage extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <Header />
                <PlayContainer />
                <AboutMovie />
                <Footer></Footer>

            </>
        )
    }
}

export default Playpage