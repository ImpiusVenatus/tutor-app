import PropTypes from "prop-types";
import InstructorCard from "./InstructorCard";
import "./ResultsGrid.css";

const ResultsGrid = ({ instructors }) => {
  return (
    <div className="results-grid">
      {instructors.map((instructor) => (
        <InstructorCard key={instructor._id} instructor={instructor} />
      ))}
    </div>
  );
};

ResultsGrid.propTypes = {
  instructors: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ResultsGrid;
