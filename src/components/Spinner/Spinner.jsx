import React from "react";
import './Spinner.css'


class Spinner extends React.Component {
    render(){
        return (
            <div className="spinner">
                <div className ="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}


export default Spinner