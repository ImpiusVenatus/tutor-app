import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/config";
import "../styles/JobList.css";
import img from "../assets/images/job/job-icon.png";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/jobs`)
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div className="jobListContainer">
      <h2 className="jobListTitle">Available Jobs</h2>
      <div className="jobsContainer">
        {jobs.map((job) => (
          <div key={job._id} className="jobCard">
            <div className="jobContent">
              <div className="jobIcon">
                <img src={img} />
              </div>
              <div className="jobDetails">
                <h3>{job.title}</h3>
                <div className="detailsText">
                  <p>
                    <i className="ri-currency-fill"></i> ${job.salary}
                  </p>
                  <p>
                    <i className="ri-book-open-fill"></i> {job.subject}
                  </p>
                  <p>
                    <i className="ri-map-pin-2-line"></i> {job.location}
                  </p>
                </div>
                <div className="jobType">
                  {job.teachingMethod === "online" && (
                    <i className="ri-video-on-line online">Online</i>
                  )}
                  {job.teachingMethod === "offline" && (
                    <i className="ri-map-pin-2-line offline">Offline</i>
                  )}
                </div>
              </div>
            </div>
            <div className="jobBtn">
              <Link to={`/jobs/${job._id}`}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
