import "./Hero.css";
import circle from "../../assets/images/hero/circle.png";
import banner from "../../assets/images/hero/banner.png";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="banner">
        <div className="particles">
          <div id="particlev2">
            <canvas
              className="particles-canvas"
              style={{ width: "100%", height: "100%" }}
              width="1188"
              height="850"
            ></canvas>
          </div>
        </div>
        <div className="banner_image">
          <img src={banner}></img>
        </div>
        <div className="linedimage">
          <img src={circle}></img>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1>
              A good <span>#education</span> is always a base of a bright future
            </h1>
            <p>
              Consectur adipiscing elitsedo eiusmod tempor incididuntem
              utaborate dolore magna aliqua ad minim veniamque.
            </p>
            <ul className="btn-group">
              <li>
                <div className="starthere">
                  <span>Start from here</span>
                  <img
                    src="https://demos.wp-guppy.com/tuturn/wp-content/plugins/tuturn/public/images/knob_line.svg"
                    alt="image"
                  />
                </div>
                <a href="" className="primbtn gradient">
                  <span>Start as student</span>
                  <i className="icon icon-chevron-right"></i>
                </a>
              </li>
              <li>
                <a href="" className="secbtn">
                  <span>Join as Instructor</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
