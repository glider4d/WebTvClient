import React from "react";
import './AboutMovie.css'
import MovieCasts from "../MovieCasts/MovieCasts";

class AboutMovie extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            // <!-- About  -->
            <div className="about-movie container">
                <h2>Jumanji: Welcome to the Jungle</h2>
                <p>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Quod quidem doloribus officiis. 
                    Doloribus modi laborum dolore deserunt tempora fuga quis.</p>
                <MovieCasts />
            </div>
        )
    
    }
}

export default AboutMovie