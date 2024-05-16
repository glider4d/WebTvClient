import React from "react";
import './PlayContainer.css';

class PlayContainer extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                    {/* <!-- Play Movie Container --> */}
                    <div className="play-container container">
                        {/* <!-- Play Image --> */}
                        {/* src={require("../Assets/PopularMovie/popular-movie-1.jpg")} */}
                        <img src={require("../Assets/play-page/play-background.jpg")} alt="" className="play-img"/>
                        {/* <!-- Play Text --> */}

                        <div className="play-text">
                            <h2>
                                Lorem ipsum dolor sit amet consectetur.
                            </h2>
                        
                            {/* <!-- Ratings --> */}
                            <div className="rating">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star-half"></i>
                            </div>
                            {/* <!-- Tags --> */}
                            <div className="tags">
                                <span>Action</span>
                                <span>Adventures</span>
                                <span>4K</span>
                            </div>
                            {/* <!-- Trailer button --> */}
                            <a href="playpage" className="watch-btn">
                                <i className="bx bx-right-arrow"></i>
                                <span>Watch the trailer</span>
                            </a>
                        </div>
                        {/* <!-- Play btn --> */}
                        <i className="bx bx-right-arrow play-movie" onClick={()=>
                            {
                                let video = document.querySelector('.video-container')
                                let myvideo = document.querySelector("#myvideo")
                                video.classList.add('show-video')
                                myvideo.play()
                        }}></i>
                        {/* <!-- Video Container --> */}
                        <div className="video-container">
                            {/* <!-- Video Box --> */}
                            <div className="video-box">
                                <video id="myvideo" src={require("../Assets/play-page/Jumanji.mp4")} controls></video>
                                {/* <!-- Close Video Icon --> */}
                                <i className="bx bx-x close-video" onClick={()=>{
                                    let myvideo = document.querySelector("#myvideo")
                                    let video = document.querySelector('.video-container')
                                    video.classList.remove("show-video")
                                    myvideo.pause()
                                }}></i>
                            </div>
                        </div>
                    </div>

            </>
        )
    }
}

export default PlayContainer