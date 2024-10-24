import PropTypes from "prop-types";
import "./InstructorCard.css";
import img1 from "../../assets/images/avatar/placeholder.jpg";
import { Link } from "react-router-dom";

const averageRating = (ratings) => {
  if (!ratings || ratings.length === 0) return "No ratings";
  const sum = ratings.reduce((acc, curr) => acc + curr, 0);
  return (sum / ratings.length).toFixed(1);
};

const InstructorCard = ({ instructor }) => {
  const {
    _id,
    name,
    university,
    preferredSubjects,
    experience,
    teachingMethod,
    ratings,
  } = instructor;

  return (
    <div className="instructor-card">
      <div className="instructor-image">
        {/* Update this part to use an actual image if I start storing images */}
        <img src={img1} alt={name} />
        <button>
          <Link to={`/instructor/${_id}}`}>View Profile</Link>
        </button>
      </div>
      <div className="instructor-info">
        <div>
          <h3 className="instructor-name">{name}</h3>
          <p className="instructor-details">
            <strong>
              <i className="ri-graduation-cap-line"></i>
            </strong>{" "}
            {university}
            <p className="instructor-details">
              <i className="ri-star-fill star"></i>
              {averageRating(ratings)}
            </p>
          </p>
        </div>
        <p className="instructor-details">
          {teachingMethod === "Online" && (
            <i className="ri-video-on-line online"></i>
          )}
          {teachingMethod === "Offline" && (
            <i className="ri-map-pin-2-line offline"></i>
          )}
          {teachingMethod === "Both" && (
            <i className="ri-map-pin-2-line both"></i>
          )}
          {teachingMethod}
        </p>
        <p className="instructor-details">
          {preferredSubjects.map((subject, index) => (
            <span key={index} className="subject-box">
              {subject}
            </span>
          ))}
        </p>

        <p className="instructor-details">
          <strong>Experience:</strong> {experience} years
        </p>
      </div>
    </div>
  );
};

InstructorCard.propTypes = {
  instructor: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
    preferredSubjects: PropTypes.arrayOf(PropTypes.string).isRequired,
    experience: PropTypes.number.isRequired,
    teachingMethod: PropTypes.oneOf(["Online", "Offline", "Both"]).isRequired,
    ratings: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

export default InstructorCard;
