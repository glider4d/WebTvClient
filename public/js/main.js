//Swiper

// var swiper = new Swiper('.popular-content', {
//     loop: true,
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
//     navigation: {

//     },
//     slidesPerView: 3,
//     paginationClickable: true,
//     spaceBetween: 20,
//     breakpoints: {
//         1920: {
//             slidesPerView: 3,
//             spaceBetween: 30
//         },
//         1028: {
//             slidesPerView: 2,
//             spaceBetween: 30
//         },
//         480: {
//             slidesPerView: 1,
//             spaceBetween: 10
//         }
//     }
// });

var swiper = new Swiper(".popular-content", {
    slidesPerView:1,
    spaceBetween: 10,
    // centeredSlides: true,
    autoplay: {
        delay: 755500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    keyboard: {
        enable: true
    },
    breakpoints: {
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
    }
});

//Show Video
// let playButton = document.querySelector('.play-movie')
// let video = document.querySelector('.video-container')
// let myvideo = document.querySelector("#myvideo")
// let closebtn = document.querySelector('.close-video')

// playButton.onclick = () => {
//     video.classList.add("show-video")
//     //Auto Play When Click On Button
//     myvideo.play()
// }

// closebtn.onclick = () => {
//     video.classList.remove("show-video")
//     // Pause on close video
//     myvideo.pause()
// }