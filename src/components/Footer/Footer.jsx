import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <div className="about-left">
            <h1 className="logo-text">Tuturn</h1>
            <p>
              Accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum...
            </p>
            <div className="socials">
              <ul className="social-media-icons">
                <li>
                  <a className="social-icons">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a className="social-icons">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a className="social-icons">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </li>
                <li>
                  <a className="social-icons">
                    <i className="ri-instagram-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-right">
            <h4>Feel free to share your question</h4>
            <p>
              <i className="ri-phone-fill"></i> +62 877 77263549 ( Mon to Sun
              9am - 11pm GMT )
            </p>
            <p>
              <i className="ri-mail-fill"></i> something@gmail.com
            </p>
            <p>
              <i className="ri-whatsapp-fill"></i>+62 877 77263549 ( Mon to Sun
              9am - 11pm GMT )
            </p>
          </div>
        </div>
        <div className="footer-section tution-section">
          <div className="tutions">
            <h2>Explore tutors by categories</h2>
            <div className="links">
              <div className="links-left">
                <ul>
                  <li>
                    <a>Math</a>
                  </li>
                  <li>
                    <a>English</a>
                  </li>
                  <li>
                    <a>Bengali</a>
                  </li>
                  <li>
                    <a>Higher Math</a>
                  </li>
                </ul>
              </div>
              <div className="links-middle">
                <ul>
                  <li>
                    <a>Math</a>
                  </li>
                  <li>
                    <a>English</a>
                  </li>
                  <li>
                    <a>Bengali</a>
                  </li>
                  <li>
                    <a>Higher Math</a>
                  </li>
                </ul>
              </div>
              <div className="links-right">
                <ul>
                  <li>
                    <a>Math</a>
                  </li>
                  <li>
                    <a>English</a>
                  </li>
                  <li>
                    <a>Bengali</a>
                  </li>
                  <li>
                    <a>Higher Math</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="online-classes">
            <h2>Online classes</h2>
            <div className="classes">
              <div className="links-left">
                <ul>
                  <li>
                    <a>Math</a>
                  </li>
                  <li>
                    <a>English</a>
                  </li>
                  <li>
                    <a>Bengali</a>
                  </li>
                  <li>
                    <a>Higher Math</a>
                  </li>
                </ul>
              </div>
              <div className="links-right">
                <ul>
                  <li>
                    <a>Higher Mathematics</a>
                  </li>
                  <li>
                    <a>Physics First Paper</a>
                  </li>
                  <li>
                    <a>Bengali</a>
                  </li>
                  <li>
                    <a>Higher Math</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-section newsletter">
          <h2>Signup for newsletter</h2>
          <p>
            Corrupti quolores etmquasa molestias epturite sinteam occaecati amet
            cupiditate mikume molareshe.
          </p>
          <div className="inputbtn">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-control"
            />
            <a href="" className="subscribe-btn">
              <i className="ri-send-plane-fill"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
