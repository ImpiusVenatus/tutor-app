import "./Featured.css";
import img1 from "../../assets/images/avatar/avatar-1.png";
import img2 from "../../assets/images/avatar/avatar-2.png";
import img3 from "../../assets/images/avatar/avatar-3.png";

import gallery1 from "../../assets/images/featured/gallery-1.jpg";
import gallery2 from "../../assets/images/featured/gallery-2.jpg";
import gallery3 from "../../assets/images/featured/gallery-3.jpg";
import gallery4 from "../../assets/images/featured/gallery-4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-container">
        <div className="categories-header">
          <svg
            width="54"
            height="10"
            viewBox="0 0 54 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.5 10C35.6 10 33.5 8 31.9 6.4C30.4 5 29.3 4 27 4C24.7 4 23.6 5 22.1 6.4C20.5 8 18.4 10 14.5 10C10.6 10 8.5 8 6.9 6.4C5.4 5 4.3 4 2 4C0.9 4 0 3.1 0 2C0 0.9 0.9 0 2 0C5.9 0 8 2 9.6 3.6C11.1 5 12.2 6 14.5 6C16.8 6 17.9 5 19.4 3.6C21 2 23.1 0 27 0C30.9 0 33 2 34.6 3.6C36.1 5 37.2 6 39.5 6C41.8 6 42.9 5 44.4 3.6C46 2 48.1 0 52 0C53.1 0 54 0.9 54 2C54 3.1 53.1 4 52 4C49.7 4 48.6 5 47.1 6.4C45.5 8 43.4 10 39.5 10Z"
              fill="#F97316"
            />
          </svg>

          <h2>Let’s make a quick start today</h2>
          <h1>Our top visited categories</h1>
          <p>
            Accusamus et iusidio dignissimos ducimus blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores etmquasa molestias
            epturi sint occaecati cupiditate non providente mikume.
          </p>
        </div>
        <div className="featured-container">
          <Swiper
            slidesPerView={2}
            spaceBetween={50}
            grabCursor={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="featured-card">
                <div className="profile-pic">
                  <img src={gallery1}></img>
                </div>
                <div className="featured-content">
                  <div className="user">
                    <div className="avatar">
                      <img src={img1}></img>
                    </div>
                    <div className="username">
                      <h4>Arianne Kearns</h4>
                      <p>Charlotte, OK</p>
                    </div>
                  </div>
                  <div className="details">
                    <span>
                      Starting from: <em>$69.00/hr</em>
                    </span>
                    <span>
                      Mobile: <em>06796435</em>
                    </span>
                    <span>
                      Whatsapp: <em>643634758</em>
                    </span>
                    <span>
                      Qualification: <em>BSc.</em>
                    </span>
                  </div>
                  <div className="featured-footer">
                    <div className="rating">
                      <p>5.0</p>
                      <i className="ri-star-fill"></i>
                      <span>(06)</span>
                    </div>
                    <div className="fav-btn">
                      <i className="ri-heart-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featured-card">
                <div className="profile-pic">
                  <img src={gallery2}></img>
                </div>
                <div className="featured-content">
                  <div className="user">
                    <div className="avatar">
                      <img src={img2}></img>
                    </div>
                    <div className="username">
                      <h4>Arianne Kearns</h4>
                      <p>Charlotte, OK</p>
                    </div>
                  </div>
                  <div className="details">
                    <span>
                      Starting from: <em>$69.00/hr</em>
                    </span>
                    <span>
                      Mobile: <em>06796435</em>
                    </span>
                    <span>
                      Whatsapp: <em>643634758</em>
                    </span>
                    <span>
                      Qualification: <em>BSc.</em>
                    </span>
                  </div>
                  <div className="featured-footer">
                    <div className="rating">
                      <p>5.0</p>
                      <i className="ri-star-fill"></i>
                      <span>(06)</span>
                    </div>
                    <div className="fav-btn">
                      <i className="ri-heart-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featured-card">
                <div className="profile-pic">
                  <img src={gallery3}></img>
                </div>
                <div className="featured-content">
                  <div className="user">
                    <div className="avatar">
                      <img src={img3}></img>
                    </div>
                    <div className="username">
                      <h4>Arianne Kearns</h4>
                      <p>Charlotte, OK</p>
                    </div>
                  </div>
                  <div className="details">
                    <span>
                      Starting from: <em>$69.00/hr</em>
                    </span>
                    <span>
                      Mobile: <em>06796435</em>
                    </span>
                    <span>
                      Whatsapp: <em>643634758</em>
                    </span>
                    <span>
                      Qualification: <em>BSc.</em>
                    </span>
                  </div>
                  <div className="featured-footer">
                    <div className="rating">
                      <p>5.0</p>
                      <i className="ri-star-fill"></i>
                      <span>(06)</span>
                    </div>
                    <div className="fav-btn">
                      <i className="ri-heart-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featured-card">
                <div className="profile-pic">
                  <img src={gallery4}></img>
                </div>
                <div className="featured-content">
                  <div className="user">
                    <div className="avatar">
                      <img src={img1}></img>
                    </div>
                    <div className="username">
                      <h4>Arianne Kearns</h4>
                      <p>Charlotte, OK</p>
                    </div>
                  </div>
                  <div className="details">
                    <span>
                      Starting from: <em>$69.00/hr</em>
                    </span>
                    <span>
                      Mobile: <em>06796435</em>
                    </span>
                    <span>
                      Whatsapp: <em>643634758</em>
                    </span>
                    <span>
                      Qualification: <em>BSc.</em>
                    </span>
                  </div>
                  <div className="featured-footer">
                    <div className="rating">
                      <p>5.0</p>
                      <i className="ri-star-fill"></i>
                      <span>(06)</span>
                    </div>
                    <div className="fav-btn">
                      <i className="ri-heart-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev" role="button">
            <i className="ri-arrow-left-s-line"></i>
          </div>
          <div className="swiper-button-next" role="button">
            <i className="ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
