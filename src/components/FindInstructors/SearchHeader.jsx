import "./SearchHeader.css";
import PropTypes from "prop-types";

const SearchHeader = ({ resultsCount }) => {
  return (
    <div className="search-header">
      <span className="results-count">{resultsCount} search results found</span>
    </div>
  );
};

SearchHeader.propTypes = {
  resultsCount: PropTypes.number.isRequired,
};

export default SearchHeader;
