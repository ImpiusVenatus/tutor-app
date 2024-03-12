import sideImage from "../assets/images/auth/login-img.png";
import logo from "../assets/images/logo/logo.png";
import "../styles/Auth.css";

const SignIn = () => {
  return (
    <div className="auth-container">
      <div className="left-side">
        <img src={logo} alt="Side Image" className="logo" />
        <img src={sideImage} alt="Side Image" />
        <h2>Yes! we&apos;re making progress</h2>
        <span>every minute & every second</span>
      </div>
      <div className="right-side">
        <h1>Welcome!</h1>
        <p>It&apos;s really nice to see you</p>
        <form>
          <input
            placeholder="Enter your email *"
            type="email"
            id="username"
            required
          />
          <input
            placeholder="Enter your password *"
            type="password"
            id="password"
            required
          />
          <button type="submit">
            Submit <i className="ri-arrow-right-s-line"></i>
          </button>
          <div className="or-container">
            <span>OR</span>
          </div>
          <button className="google-auth-button">Sign in with Google</button>
        </form>

        <div className="progress-container">
          <div className="lost-password-container">
            <a href="#">Lost password?</a>
          </div>
          <div className="join-us-container">
            <a href="/signup">Join us today</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
