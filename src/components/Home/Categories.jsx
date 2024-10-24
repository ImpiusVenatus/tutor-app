import "./Categories.css";
import img1 from "../../assets/images/categories/it-programming.jpg";
import img2 from "../../assets/images/categories/artsmusic.jpg";
import img3 from "../../assets/images/categories/basic.jpg";
import img4 from "../../assets/images/categories/oalevel.jpg";
import img5 from "../../assets/images/categories/short.jpg";
import img6 from "../../assets/images/categories/spoken.jpg";
import img7 from "../../assets/images/categories/sports.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories-container">
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
              fill="currentColor"
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
        <div className="categories-slider">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="category-card">
                <li className="category_item">
                  <a className="category_content" href="">
                    <figure className="category_info">
                      <img src={img1} alt="" />
                      <figcaption>
                        <div className="categoryicon">
                          <i className="icon icon-plus"></i>
                        </div>
                        <div className="category_title">
                          <h5>Baisc &amp; primary</h5>
                          <span>46 Listings</span>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="category-card">
                <li className="category_item">
                  <a className="category_content" href="">
                    <figure className="category_info">
                      <img src={img2} alt="" />
                      <figcaption>
                        <div className="categoryicon">
                          <i className="icon icon-plus"></i>
                        </div>
                        <div className="category_title">
                          <h5>Baisc &amp; primary</h5>
                          <span>46 Listings</span>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="category-card">
                <li className="category_item">
                  <a className="category_content" href="">
                    <figure className="category_info">
                      <img src={img3} alt="" />
                      <figcaption>
                        <div className="categoryicon">
                          <i className="icon icon-plus"></i>
                        </div>
                        <div className="category_title">
                          <h5>Baisc &amp; primary</h5>
                          <span>46 Listings</span>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="category-card">
                <li className="category_item">
                  <a className="category_content" href="">
                    <figure className="category_info">
                      <img src={img4} alt="" />
                      <figcaption>
                        <div className="categoryicon">
                          <i className="icon icon-plus"></i>
                        </div>
                        <div className="category_title">
                          <h5>Baisc &amp; primary</h5>
                          <span>46 Listings</span>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="category-card">
                <li className="category_item">
                  <a className="category_content" href="">
                    <figure className="category_info">
                      <img src={img5} alt="" />
                      <figcaption>
                        <div className="categoryicon">
                          <i className="icon icon-plus"></i>
                        </div>
                        <div className="category_title">
                          <h5>Baisc &amp; primary</h5>
                          <span>46 Listings</span>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="category-card">
                <li className="category_item">
                  <a className="category_content" href="">
                    <figure className="category_info">
                      <img src={img6} alt="" />
                      <figcaption>
                        <div className="categoryicon">
                          <i className="icon icon-plus"></i>
                        </div>
                        <div className="category_title">
                          <h5>Baisc &amp; primary</h5>
                          <span>46 Listings</span>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="category-card">
                <li className="category_item">
                  <a className="category_content" href="">
                    <figure className="category_info">
                      <img src={img7} alt="" />
                      <figcaption>
                        <div className="categoryicon">
                          <i className="icon icon-plus"></i>
                        </div>
                        <div className="category_title">
                          <h5>Basic &amp; primary</h5>
                          <span>46 Listings</span>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </li>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="explore-btn-group">
          <a href="/find-instructors">
            <button className="explore-button">
              Explore all categories <i className="ri-arrow-right-s-line"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
