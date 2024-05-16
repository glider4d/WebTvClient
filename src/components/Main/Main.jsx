import React from "react";
import './Main.css'
import Header from "../Header/Header";
import Advposter from "../Advposter/Advposter";

class Main extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <>
                <Advposter></Advposter>
            </>
        )
    }
}

export default Main