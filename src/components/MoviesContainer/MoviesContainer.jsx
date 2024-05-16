import React from "react";
import './MoviesContainer.css'

class MoviesContainer extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <section className="movies container" id="movies">
                <div className="heading">
                    <h2 className="heading-title">Movies and Shows</h2>
                </div>
                <div className="movies-content">
                    <div className="movie-box">
                        <img src={require("../Assets/movie-1.jpg")} alt="" className="movie-box-img"/>
                        <div className="box-text">
                            <h2 className="movie-title">Spider-Man: No Way Home</h2>
                            <span className="movie-type">Action</span>
                            <i className="watch-btn play-btn">
                                {/* onClick={this.props.onRoute('play-page')} */}
                                <i className="bx bx-right-arrow"></i>
                            </i>

                        </div>
                    </div>

                    <div className="movie-box">
                        <img src={require("../Assets/movie-2.jpg")} alt="" className="movie-box-img"/>
                        <div className="box-text">
                            <h2 className="movie-title">Spider-Man: No Way Home</h2>
                            <span className="movie-type">Action</span>
                            <a href="" className="watch-btn play-btn">
                                <i className="bx bx-right-arrow"></i>
                            </a>

                        </div>
                    </div>

                    <div className="movie-box">
                        <img src={require("../Assets/movie-3.jpg")} alt="" className="movie-box-img"/>
                        <div className="box-text">
                            <h2 className="movie-title">Spider-Man: No Way Home</h2>
                            <span className="movie-type">Action</span>
                            <a href="" className="watch-btn play-btn">
                                <i className="bx bx-right-arrow"></i>
                            </a>

                        </div>
                    </div>

                    <div className="movie-box">
                        <img src={require("../Assets/movie-4.jpg")} alt="" className="movie-box-img"/>
                        <div className="box-text">
                            <h2 className="movie-title">Spider-Man: No Way Home</h2>
                            <span className="movie-type">Action</span>
                            <a href="" className="watch-btn play-btn">
                                <i className="bx bx-right-arrow"></i>
                            </a>

                        </div>
                    </div>

                    <div className="movie-box">
                        <img src={require("../Assets/movie-5.jpg")} alt="" className="movie-box-img"/>
                        <div className="box-text">
                            <h2 className="movie-title">Spider-Man: No Way Home</h2>
                            <span className="movie-type">Action</span>
                            <a href="" className="watch-btn play-btn">
                                <i className="bx bx-right-arrow"></i>
                            </a>

                        </div>
                    </div>

                    <div className="movie-box">
                        <img src={require("../Assets/movie-6.jpg")} alt="" className="movie-box-img"/>
                        <div className="box-text">
                            <h2 className="movie-title">Spider-Man: No Way Home</h2>
                            <span className="movie-type">Action</span>
                            <a href="" className="watch-btn play-btn">
                                <i className="bx bx-right-arrow"></i>
                            </a>

                        </div>
                    </div>
                    
                    <div className="movie-box">
                        <img src={require("../Assets/movie-7.jpg")} alt="" className="movie-box-img"/>
                        <div className="box-text">
                            <h2 className="movie-title">Spider-Man: No Way Home</h2>
                            <span className="movie-type">Action</span>
                            <a href="" className="watch-btn play-btn">
                                <i className="bx bx-right-arrow"></i>
                            </a>
                        </div>
                    </div>

                    <div className="movie-box">
                        <img src={require("../Assets/movie-8.jpg")} alt="" className="movie-box-img"/>
                        <div className="box-text">
                            <h2 className="movie-title">Spider-Man: No Way Home</h2>
                            <span className="movie-type">Action</span>
                            <a href="" className="watch-btn play-btn">
                                <i className="bx bx-right-arrow"></i>
                            </a>
                        </div>
                    </div>

                    <div className="movie-box">
                        <img src={require("../Assets/movie-1.jpg")} alt="" className="movie-box-img"/>
                        <div className="box-text">
                            <h2 className="movie-title">Spider-Man: No Way Home</h2>
                            <span className="movie-type">Action</span>
                            <a href="" className="watch-btn play-btn">
                                <i className="bx bx-right-arrow"></i>
                            </a>
                        </div>
                    </div>

                    <div className="movie-box">
                        <img src={require("../Assets/movie-2.jpg")} alt="" className="movie-box-img"/>
                        <div className="box-text">
                            <h2 className="movie-title">Spider-Man: No Way Home</h2>
                            <span className="movie-type">Action</span>
                            <a href="" className="watch-btn play-btn">
                                <i className="bx bx-right-arrow"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default MoviesContainer