import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./ApplicationForm.css";
import { BASE_URL } from "../utils/config";

const ApplicationForm = ({ jobId }) => {
  const [coverLetter, setCoverLetter] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signin");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/jobs/${jobId}/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({ coverLetter }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Application submitted successfully");
        console.log(data);
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      // Handle error
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <textarea
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          placeholder="Cover Letter (optional)"
        />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

ApplicationForm.propTypes = {
  jobId: PropTypes.string.isRequired,
};

export default ApplicationForm;
