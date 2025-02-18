import { useState } from "react";
import sideImage from "../assets/images/auth/login-img.png";
import logo from "../assets/images/logo/logo.png";
import "../styles/Auth.css";
import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/teachers/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        // Redirect user to dashboard or desired page upon successful login
        navigate("/");
      } else {
        // Handle invalid credentials or other errors
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="left-side">
        <a href="/">
          <img src={logo} alt="Side Image" className="logo" />
        </a>
        <img src={sideImage} alt="Side Image" />
        <h2>Yes! we&apos;re making progress</h2>
        <span>every minute & every second</span>
      </div>
      <div className="right-side">
        <h1>Welcome!</h1>
        <p>It&apos;s really nice to see you</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
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
