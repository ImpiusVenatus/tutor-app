// JobDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApplicationForm from "./ApplicationForm";
import { BASE_URL } from "../utils/config";
import "../styles/JobDetail.css";

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/jobs/${jobId}`)
      .then((response) => response.json())
      .then((data) => setJob(data))
      .catch((error) => console.error("Error fetching job details:", error));
  }, [jobId]);

  return (
    <div className="job-detail-container">
      {job ? (
        <>
          <h2>{job.title}</h2>
          <div className="job-details">
            <h4>Description</h4>
            <p>{job.description}</p>
            <div className="salary-detail-boxes">
              <div className="salary">
                <p>৳{job.salary}</p>
              </div>
              <div className="medium">
                <i className="ri-book-open-fill"></i>
                <p>{job.teachingMedium} Medium</p>
              </div>
              <div className="quantity">
                <i className="ri-graduation-cap-line"></i>
                <p>{job.studentQuantity} Student(s)</p>
              </div>
              <div className="gender">
                {job.requiredGender === "any" && (
                  <i className="ri-men-line"></i>
                )}
                {job.requiredGender === "female" && (
                  <i className="ri-women-line"></i>
                )}
                {job.requiredGender === "male" && (
                  <i className="ri-men-line"></i>
                )}
                <p>{job.requiredGender} tutor preferred</p>
              </div>
              <div className="method">
                {job.teachingMethod === "online" && (
                  <i className="ri-video-on-line"></i>
                )}
                <p>{job.teachingMethod}</p>
              </div>
            </div>
            <p>
              <i className="ri-map-pin-2-line"></i> {job.location}
            </p>
            <p className="subject">
              <i className="ri-book-open-fill"></i> {job.subject}
            </p>
            {/* More details can be added as needed */}
            <ApplicationForm jobId={jobId} />
          </div>
        </>
      ) : (
        <p>Loading job details...</p>
      )}
    </div>
  );
};

export default JobDetail;
