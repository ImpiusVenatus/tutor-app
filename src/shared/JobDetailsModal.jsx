import PropTypes from "prop-types";
import "./JobDetailsModal.css";

const JobDetailsModal = ({
  job,
  closeModal,
  handleDeleteJob,
  closeJobForApplications,
}) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <h3>Job Details</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <div className="modal-content">
          <p>Title: {job.title}</p>
          <p>Description: {job.description}</p>
          <p>Salary: {job.salary}</p>
          {/* Add more job details here as needed */}
        </div>
        <div className="modal-footer">
          {job.status === "open" && (
            <button onClick={() => closeJobForApplications(job._id)}>
              Close Job
            </button>
          )}
          <button onClick={() => handleDeleteJob(job._id)}>Delete Job</button>
        </div>
      </div>
    </div>
  );
};

JobDetailsModal.propTypes = {
  job: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    status: PropTypes.oneOf(["open", "closed"]).isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
  handleDeleteJob: PropTypes.func.isRequired,
  closeJobForApplications: PropTypes.func.isRequired,
};

export default JobDetailsModal;
