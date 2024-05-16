import React from "react";
import './MovieCasts.css';

class MovieCasts extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            {/* // <!-- Movie Cast --> */}
                <h2 className="cast-heading">Movie Cast</h2>
                <div className="cast">
                    <div className="cast-box">
                        <img src={require("../Assets/play-page/cast1.jpg")}  alt="" className="cast-img"/>
                        <span className="cast-title">Dwayne Johnson</span>
                    </div>
                    <div className="cast-box">
                        <img src={require("../Assets/play-page/cast2.jpg")} alt="" className="cast-img"/>
                        <span className="cast-title">Dwayne Johnson</span>
                    </div>
                    <div className="cast-box">
                        <img src={require("../Assets/play-page/cast3.jpg")} alt="" className="cast-img"/>
                        <span className="cast-title">Dwayne Johnson</span>
                    </div>
                    <div className="cast-box">
                        <img src={require("../Assets/play-page/cast4.jpg")} alt="" className="cast-img"/>
                        <span className="cast-title">Dwayne Johnson</span>
                    </div>
                    <div className="cast-box">
                        <img src={require("../Assets/play-page/cast5.jpg")} alt="" className="cast-img"/>
                        <span className="cast-title">Dwayne Johnson</span>
                    </div>

                </div>
            </>
        )
    }
}

export default MovieCasts