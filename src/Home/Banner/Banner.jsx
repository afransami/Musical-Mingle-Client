import "./style.css";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
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
                    Lifelong Learning:
                  </h1>
                  <p className="text-gray-200 mb-3 text-xl">
                    Music is a lifelong journey of learning and growth.
                    Practicing music allows individuals to continually challenge
                    themselves, set new goals, and expand their musical
                    horizons. It fosters a lifelong love and appreciation for
                    music.
                  </p>
                  <Link to="/blog">
                    <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110">
                      See more
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
                    Creativity and Artistry:
                  </h1>
                  <p className="text-gray-200 mb-3 text-xl">
                    Regular practice nurtures musicians' creativity and
                    encourages them to explore new musical ideas and styles. It
                    allows for improvisation, experimentation, and the
                    development of a unique musical voice.
                  </p>
                  <Link to="/blog">
                    <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110">
                      See more
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
                    Expressive Communication:
                  </h1>
                  <p className="text-gray-200 mb-3 text-xl">
                    Music is a powerful form of self-expression. By practicing
                    music, individuals learn to convey emotions and tell stories
                    through their playing or singing. It allows musicians to
                    communicate and connect with others on a deeper level.
                  </p>
                  <Link to="/blog">
                    <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 hover:scale-110">
                      See more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
