import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/config";
import "../styles/TeacherRegistration.css";

const TeacherRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    university: "",
    preferredSubject: "",
    experience: "",
    introClass: "",
    teachingMethod: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${BASE_URL}/teachers/register`,
        formData
      );
      console.log(data);
      alert("Registration successful!");
      // Redirect or further actions here
    } catch (error) {
      console.error("Registration failed:", error.response.data);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {/* Add form fields here */}
      <input
        className="input-field"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        className="input-field"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        className="input-field"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <input
        className="input-field"
        name="university"
        value={formData.university}
        onChange={handleChange}
        placeholder="University"
        required
      />
      <input
        className="input-field"
        name="preferredSubject"
        value={formData.preferredSubject}
        onChange={handleChange}
        placeholder="Preferred Subject"
        required
      />
      <input
        className="input-field"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        placeholder="Experience"
        required
      />
      <input
        className="input-field"
        name="introClass"
        value={formData.introClass}
        onChange={handleChange}
        placeholder="Intro Class"
        required
      />
      <input
        className="input-field"
        name="teachingMethod"
        value={formData.teachingMethod}
        onChange={handleChange}
        placeholder="teachingMethod"
        required
      />
      <button type="submit" className="submit-button">
        Register
      </button>
    </form>
  );
};

export default TeacherRegistration;
