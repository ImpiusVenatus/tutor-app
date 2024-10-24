import { useState, useEffect } from "react";
import { BASE_URL } from "../utils/config";
import "../styles/GuardianProfile.css";
import JobPostModal from "../shared/JobPostModal";
import JobDetailsModal from "../shared/JobDetailsModal"; // Ensure you have this component created
import profilePic from "../assets/images/avatar/placeholder.jpg";

const GuardianProfile = () => {
  const [profile, setProfile] = useState(null);
  const [showJobPostModal, setShowJobPostModal] = useState(false); // State for the job post modal
  const [showJobDetailsModal, setShowJobDetailsModal] = useState(false); // State for the job details modal
  const [currentJob, setCurrentJob] = useState(null); // State to track current job for details

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("guardiantoken");
      try {
        const response = await fetch(`${BASE_URL}/guardians/profile`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching guardian profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const minifyDescription = (description) => {
    const maxLength = 15;
    return description.length > maxLength
      ? `${description.slice(0, maxLength)}...`
      : description;
  };

  // Function to show job details modal
  const showJobDetails = (job) => {
    setCurrentJob(job);
    setShowJobDetailsModal(true);
  };

  // Function to delete a job
  const handleDeleteJob = async (jobId) => {
    const guardiantoken = localStorage.getItem("guardiantoken"); // Ensure this is the correct key
    console.log(guardiantoken);
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (confirmDelete) {
      try {
        const response = await fetch(`${BASE_URL}/jobs/delete/${jobId}`, {
          method: "DELETE",
          headers: {
            // Ensure the token is correctly included in the Authorization header
            Authorization: `${guardiantoken}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          alert("Job successfully deleted");
          setShowJobPostModal(false);
          window.location.reload();
        } else {
          const error = await response.json(); // Get error message from response
          throw new Error(error.message || "Failed to delete the job");
        }
      } catch (error) {
        console.error("Error deleting job:", error);
        alert(error.message);
      }
    }
  };

  // Function to close or open a job for applications
  const toggleJobStatus = async (jobId, newStatus) => {
    console.log(`Changing job ${jobId} status to ${newStatus}`);
    // Logic for toggling the job's status
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <div className="profile-info">
        <h2>Guardian Profile</h2>
        <img src={profilePic} className="profile-picture" alt="Profile" />
        <p>{profile.guardian.username}</p>
        <span>{profile.guardian.email}</span>
        <div className="profile-info-btn">
          <button className="follow-btn">Follow</button>
          <button className="message-btn">Message</button>
        </div>
      </div>

      <div className="profile-details">
        <h3>Posted Jobs</h3>
        <ul className="job-list">
          {profile.jobs.map((job) => (
            <li key={job._id}>
              <div>
                {job.title} - {minifyDescription(job.description)}
              </div>
              <div className="details-btn" onClick={() => showJobDetails(job)}>
                Details
              </div>
            </li>
          ))}
        </ul>
        <button onClick={() => setShowJobPostModal(true)}>Post a Job</button>
        {showJobPostModal && (
          <JobPostModal closeModal={() => setShowJobPostModal(false)} />
        )}
        {showJobDetailsModal && currentJob && (
          <JobDetailsModal
            job={currentJob}
            closeModal={() => {
              setShowJobDetailsModal(false);
              setCurrentJob(null);
            }}
            handleDeleteJob={handleDeleteJob}
            toggleJobStatus={toggleJobStatus}
          />
        )}
      </div>
    </div>
  );
};

export default GuardianProfile;
