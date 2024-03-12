import "../styles/Auth.css";
import sideImage from "../assets/images/auth/login-img.png";
import logo from "../assets/images/logo/logo.png";
import { BASE_URL } from "../utils/config";
import { useEffect, useState } from "react";

const SignupForm = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("");
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    university: "",
    preferredSubjects: [],
    experience: "",
    teachingMethod: "",
  });

  //REMOVE THIS LINE AFTER CODE IS COMPLETE!!!!!
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setFormError("");
  };

  const handleDropdownChange = (method) => {
    setIsSelected(method);
    setFormData((prev) => ({ ...prev, teachingMethod: method }));
    setIsActive(false);
  };

  const handleSubjectInputKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      event.preventDefault();
      if (!formData.preferredSubjects.includes(event.target.value.trim())) {
        setFormData({
          ...formData,
          preferredSubjects: [
            ...formData.preferredSubjects,
            event.target.value.trim(),
          ],
        });
      }
      event.target.value = "";
    }
  };

  const removeSubject = (subjectToRemove) => {
    setFormData({
      ...formData,
      preferredSubjects: formData.preferredSubjects.filter(
        (subject) => subject !== subjectToRemove
      ),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/teachers/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Registration successful", data);
      } else {
        throw new Error(data.message || "Failed to register.");
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Full name *"
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Enter your email address *"
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Enter password *"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="University *"
            type="text"
            id="university"
            value={formData.university}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Years of Experience *"
            type="number"
            min={0}
            id="experience"
            value={formData.experience}
            onChange={handleInputChange}
            required
          />
          <div className="subjects-container">
            {formData.preferredSubjects.map((subject, index) => (
              <div key={index} className="subject-tag">
                {subject}
                <span
                  className="remove-subject"
                  onClick={() => removeSubject(subject)}
                >
                  {" "}
                  <i className="ri-close-line"></i>{" "}
                </span>
              </div>
            ))}
          </div>
          <input
            type="text"
            onKeyDown={handleSubjectInputKeyDown}
            placeholder="Add preferred subjects"
          />
          {formError && <p className="error-message">{formError}</p>}
          <div className="dropdown">
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="dropdown-btn"
            >
              {selected || "Choose teaching method"}
              <i
                className={
                  isActive ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                }
              />
            </div>
            <div
              className={`dropdown-content ${
                isActive ? "dropdown-active" : ""
              }`}
            >
              <div
                onClick={() => {
                  handleDropdownChange("Online");
                }}
                className="item"
              >
                Online
              </div>
              <div
                className="item"
                onClick={() => handleDropdownChange("Offline")}
              >
                Offline
              </div>
              <div
                className="item"
                onClick={() => handleDropdownChange("Both")}
              >
                Both
              </div>
            </div>
          </div>
          <button type="submit">
            Join Now <i className="ri-arrow-right-s-line"></i>
          </button>
        </form>
        <div className="or-container">
          <span>OR</span>
        </div>
        <button className="google-auth-button">Sign in with Google</button>

        <div className="progress-container">
          <div className="lost-password-container">
            <a href="#">Lost password?</a>
          </div>
          <div className="join-us-container">
            <a href="/signin">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
