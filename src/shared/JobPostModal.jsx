import { useState } from "react";
import PropTypes from "prop-types";
import "./JobPostModal.css";
import { BASE_URL } from "../utils/config";

const JobPostModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    teachingMedium: "",
    salary: "",
    studentQuantity: "",
    requiredGender: "",
    teachingMethod: "",
    location: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("guardiantoken");
      const response = await fetch(`${BASE_URL}/jobs`, {
        method: "POST",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.location.reload();
        closeModal();
      } else {
        const error = await response.json();
        throw new Error(error.message || "Failed to post the job");
      }
    } catch (error) {
      console.error("Error posting job:", error);
      alert(error.message);
    }
  };

  return (
    <div className="job-post-modal">
      <div className="job-post-modal-content">
        <span className="job-post-modal-close" onClick={closeModal}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
          <label>Teaching Medium</label>
          <select
            name="teachingMedium"
            value={formData.teachingMedium}
            onChange={handleChange}
            required
          >
            <option value="">Select Teaching Medium</option>
            <option value="English">English</option>
            <option value="Bangla">Bangla</option>
          </select>
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
          <label>Student Quantity</label>
          <input
            type="number"
            name="studentQuantity"
            value={formData.studentQuantity}
            onChange={handleChange}
            required
          />
          <label>Required Gender</label>
          <select
            name="requiredGender"
            value={formData.requiredGender}
            onChange={handleChange}
            required
          >
            <option value="">Select Required Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="any">Any</option>
          </select>
          <label>Teaching Method</label>
          <select
            name="teachingMethod"
            value={formData.teachingMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select Teaching Method</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <button type="submit">Post Job</button>
        </form>
      </div>
    </div>
  );
};

JobPostModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default JobPostModal;
