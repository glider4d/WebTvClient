import React from "react";
import './SliderContainer.css';
import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Pagination, Navigation } from "swiper/modules";



import "swiper/css";


class SliderContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            swiper : {}
        }
    }


    render() {
        
        
        let appendNumber = 4;
        let prependNumber = 1;
      
        

        return (
        <>
                    {/* // <!-- Popular Section Start --> */}
            <section className="popular container" id="popular">
                 {/* <!-- Hearing --> */}
                    <div className="heading">
                        <h2 className="heading-title">Popular Movies</h2>
                        <div className="swiper-btn">
                            <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                        </div>
                    </div>
                    <Swiper
                        // keyboard={{enabled:true}}
                        slidesPerView={1}
                        spaceBetween={10}
                        keyboard={{
                            enabled: true
                          }}          
                        navigation={true}
                        modules={[Keyboard, Pagination, Navigation]}                  
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                            280: {
                                slidesPerView:1,
                                spaceBetween: 10
                            },
                            320: {
                                slidesPerView:2,
                                spaceBetween: 10
                            },
                            510: {
                                slidesPerView:2,
                                spaceBetween: 10
                            },
                            758: {
                                slidesPerView:3,
                                spaceBetween: 15,
                            },
                            900: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            }
                        }}
                        // modules={[Pagination]}
                        className="mySwiper popular-content">
                        <SwiperSlide>
                            <div className="movie-box">
                                 <img src={require("../Assets/PopularMovie/popular-movie-1.jpg")} alt="" className="movie-box-img"/>
                                 <div className="box-text">
                                     <h2 className="movie-title">Spider-Man: No Way Home</h2>
                                     <span className="movie-type">Action</span>
                                     {/* <i onClick={() => {this.props.onRoute('play-page')}}  className="watch-btn play-btn"> */}
                                     <a href='playpage'  className="watch-btn play-btn">
                                        {/* onClick={this.props.onRoute('play-page')} */}
                                         <i className="bx bx-right-arrow"></i>
                                      </a>
                                     {/* </i> */}
        
                                 </div>
                             </div>
                        </SwiperSlide>
                        <SwiperSlide>
                         <div className="swiper-slide">
                             <div className="movie-box">
                                 <img src={require("../Assets/PopularMovie/popular-movie-2.jpg")} alt="" className="movie-box-img"/>
                                 <div className="box-text">
                                     <h2 className="movie-title">Spider-Man: No Way Home</h2>
                                     <span className="movie-type">Action</span>
                                     <a href="" className="watch-btn play-btn">
                                         <i className="bx bx-right-arrow"></i>
                                     </a>
        
                                 </div>
                             </div>
                         </div>
                        </SwiperSlide>
                        <SwiperSlide>
                             <div className="swiper-slide">
                                <div className="movie-box">
                                    <img src={require("../Assets/PopularMovie/popular-movie-3.jpg")} alt="" className="movie-box-img"/>
                                    <div className="box-text">
                                        <h2 className="movie-title">Spider-Man: No Way Home</h2>
                                        <span className="movie-type">Action</span>
                                        <a href="" className="watch-btn play-btn">
                                            <i className="bx bx-right-arrow"></i>
                                        </a>
            
                                    </div>
                                </div>
                                </div>
                         </SwiperSlide>
                         <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="movie-box">
                                    <img src={require("../Assets/PopularMovie/popular-movie-4.jpg")} alt="" className="movie-box-img"/>
                                    <div className="box-text">
                                        <h2 className="movie-title">Spider-Man: No Way Home</h2>
                                        <span className="movie-type">Action</span>
                                        <a href="" className="watch-btn play-btn">
                                            <i className="bx bx-right-arrow"></i>
                                        </a>
            
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="movie-box">
                                    <img src={require("../Assets/PopularMovie/popular-movie-5.jpg")} alt="" className="movie-box-img"/>
                                    <div className="box-text">
                                        <h2 className="movie-title">Spider-Man: No Way Home</h2>
                                        <span className="movie-type">Action</span>
                                        <a href="" className="watch-btn play-btn">
                                            <i className="bx bx-right-arrow"></i>
                                        </a>
            
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                         <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="movie-box">
                                    <img src={require("../Assets/PopularMovie/popular-movie-6.jpg")} alt="" className="movie-box-img"/>
                                    <div className="box-text">
                                        <h2 className="movie-title">Spider-Man: No Way Home</h2>
                                        <span className="movie-type">Action</span>
                                        <a href="" className="watch-btn play-btn">
                                            <i className="bx bx-right-arrow"></i>
                                        </a>
            
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="movie-box">
                                <img src={require("../Assets/PopularMovie/popular-movie-7.jpg")} alt="" className="movie-box-img"/>
                                    <div className="box-text">
                                        <h2 className="movie-title">Spider-Man: No Way Home</h2>
                                        <span className="movie-type">Action</span>
                                        <a href="" className="watch-btn play-btn">
                                            <i className="bx bx-right-arrow"></i>
                                        </a>
        
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="movie-box">
                                    <img src={require("../Assets/PopularMovie/popular-movie-8.jpg")} alt="" className="movie-box-img"/>
                                    <div className="box-text">
                                        <h2 className="movie-title">Spider-Man: No Way Home</h2>
                                        <span className="movie-type">Action</span>
                                        <a href="" className="watch-btn play-btn">
                                            <i className="bx bx-right-arrow"></i>
                                        </a>
        
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>
        </>
        )

    }
}

export default SliderContainer