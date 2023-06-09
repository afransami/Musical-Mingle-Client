// import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./style.css";
// import { Parallax, Pagination, Navigation } from "swiper";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
// import banner1 from "../../../assets/banner1.webp";
// import banner2 from "../../../assets/banner2.webp";
// import banner4 from "../../../assets/banner4.webp";
import { Link } from "react-router-dom";
// import "./Banner.css";
import Aos from "aos";
import "aos/dist/aos.css";

  


const Banner = () => {
  SwiperCore.use([Autoplay]);
  useEffect(() => {
    Aos.init();
  }, []);


    return (
      <div>
      <Swiper
        pagination={true}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay
        loop={true}
      >
        <SwiperSlide>
          <div
            className="hero lg:h-[92vh] h-[70vh]"
            style={{
              backgroundImage: `url(https://i.ibb.co/j6PwW58/group-kids-spending-time-after-school-together-handsome-friends-resting-after-classes-before-start-d.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div data-aos="fade-right" className="container mx-auto ml-10">
              <div className=" absolute flex justify-start transform -translate-y-1/2 left-30 top-1/2 text-white">
                <div data-aos="fade-right" className="max-w-md px-5 lg:px-0 ">
                  <h1 className="mb-5 hero-heading lg:text-5xl text-2xl  font-bold">
                    Only We Provides, Second Hand Books With Best Quality.
                  </h1>
                  <p className="text-gray-200 mb-3">
                    Despite the enormous quantity of books, how few people read!
                    And if one reads profitably, one would realize how much
                    stupid stuff the vulgar herd is content to swallow every
                    day.
                  </p>
                  <Link to="/blog">
                    <button className="btn dropShadow btn-primary text-white">
                      Our Blogs
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero lg:h-[92vh] h-[70vh]"
            style={{
              backgroundImage: `url(https://i.ibb.co/LdVMLTZ/two-sound-engineers-working-together.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover", 
            }}
          >
            <div className="container mx-auto ml-10">
              <div className=" absolute flex justify-start transform -translate-y-1/2 left-30 top-1/2 text-white">
                <div data-aos="fade-right" className="max-w-md px-5 lg:px-0">
                  <h1 className="mb-5 hero-heading lg:text-5xl text-2xl font-bold capitalize">
                    Are You a book lover? collections is only for you.
                  </h1>
                  <p className="text-gray-200 mb-3">
                    Despite the enormous quantity of books, how few people read!
                    And if one reads profitably, one would realize how much
                    stupid stuff the vulgar herd is content to swallow every
                    day.
                  </p>
                  <Link to="/blog">
                    <button className="btn dropShadow btn-primary text-white">
                      Our Blogs
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero lg:h-[92vh] h-[70vh]"
            style={{
              backgroundImage: `url(https://i.ibb.co/JkK6yJ0/teaching-how-read-piece-sheet-music-hispanic-kid-learning-play-piano-with-help-male-music-teacher-du.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="container mx-auto ml-10">
              <div className=" absolute flex justify-start transform -translate-y-1/2 left-30 top-1/2 text-white">
                <div data-aos="fade-right" className="max-w-md px-5 lg:px-0">
                  <h1 className="mb-5 hero-heading lg:text-5xl text-2xl font-bold">
                    Find Your Books & Buys With Reasoneable Price.
                  </h1>
                  <p className="text-gray-200 mb-3">
                    Despite the enormous quantity of books, how few people read!
                    And if one reads profitably, one would realize how much
                    stupid stuff the vulgar herd is content to swallow every
                    day.
                  </p>
                  <Link to="/blog">
                    <button className="btn dropShadow btn-primary text-white">
                      Our Blogs
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>





    //     <div>
    //         <>
    //   <Swiper
    //     style={{
    //       "--swiper-navigation-color": "#fff",
    //       "--swiper-pagination-color": "#fff",
    //     }}
    //     speed={600}
    //     parallax={true}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     navigation={true}
    //     modules={[Parallax, Pagination, Navigation]}
    //     className="mySwiper"
    //   >
    //     <div
    //       slot="container-start"
    //       className="parallax-bg"
    //       style={{
    //         "background-image":
    //           "url(https://i.ibb.co/j6PwW58/group-kids-spending-time-after-school-together-handsome-friends-resting-after-classes-before-start-d.jpg)",
    //       }}
    //       data-swiper-parallax="-23%"
    //     ></div>
    //     <SwiperSlide>
    //       <div className="title" data-swiper-parallax="-300">
    //         Slide 1
    //       </div>
    //       <div className="subtitle" data-swiper-parallax="-200">
    //         Subtitle
    //       </div>
    //       <div className="text" data-swiper-parallax="-100">
    //         <p>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
    //           dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
    //           laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
    //           Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
    //           Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
    //           ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
    //           tincidunt ut libero. Aenean feugiat non eros quis feugiat.
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="title" data-swiper-parallax="-300">
    //         Slide 2
    //       </div>
    //       <div className="subtitle" data-swiper-parallax="-200">
    //         Subtitle
    //       </div>
    //       <div className="text" data-swiper-parallax="-100">
    //         <p>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
    //           dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
    //           laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
    //           Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
    //           Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
    //           ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
    //           tincidunt ut libero. Aenean feugiat non eros quis feugiat.
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="title" data-swiper-parallax="-300">
    //         Slide 3
    //       </div>
    //       <div className="subtitle" data-swiper-parallax="-200">
    //         Subtitle
    //       </div>
    //       <div className="text" data-swiper-parallax="-100">
    //         <p>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
    //           dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
    //           laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
    //           Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
    //           Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
    //           ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
    //           tincidunt ut libero. Aenean feugiat non eros quis feugiat.
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //   </Swiper>
    // </>
    //     </div>
    );
};

export default Banner;