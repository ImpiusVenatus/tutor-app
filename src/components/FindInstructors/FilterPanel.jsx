import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./FilterPanel.css";

const FilterPanel = ({ onApplyFilters, onClearAll }) => {
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedTeachingMethod, setSelectedTeachingMethod] = useState("");
  const [isUniversityDropdownActive, setIsUniversityDropdownActive] =
    useState(false);
  const [isSubjectDropdownActive, setIsSubjectDropdownActive] = useState(false);
  const [isTeachingMethodDropdownActive, setIsTeachingMethodDropdownActive] =
    useState(false);
  const universityDropdownRef = useRef(null);
  const subjectDropdownRef = useRef(null);
  const teachingMethodDropdownRef = useRef(null);

  const handleApplyFilters = () => {
    const filters = {
      university: selectedUniversity,
      preferredSubjects: selectedSubject,
      experience: selectedExperience,
      teachingMethod: selectedTeachingMethod,
    };
    onApplyFilters(filters);
  };

  const handleClearAll = () => {
    setSelectedUniversity("");
    setSelectedSubject("");
    setSelectedExperience("");
    setSelectedTeachingMethod("");
    onClearAll();
  };

  const handleDropdownChange = (value, type) => {
    if (type === "university") {
      setSelectedUniversity(value);
      setIsUniversityDropdownActive(false);
    } else if (type === "subject") {
      setSelectedSubject(value);
      setIsSubjectDropdownActive(false);
    } else if (type === "teachingMethod") {
      setSelectedTeachingMethod(value);
      setIsTeachingMethodDropdownActive(false);
    }
  };

  const handleClickOutside = (e) => {
    if (
      universityDropdownRef.current &&
      !universityDropdownRef.current.contains(e.target)
    ) {
      setIsUniversityDropdownActive(false);
    }
    if (
      subjectDropdownRef.current &&
      !subjectDropdownRef.current.contains(e.target)
    ) {
      setIsSubjectDropdownActive(false);
    }
    if (
      teachingMethodDropdownRef.current &&
      !teachingMethodDropdownRef.current.contains(e.target)
    ) {
      setIsTeachingMethodDropdownActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const universities = ["CUET", "University of Example"];
  const subjects = ["Math", "Physics", "History"];
  const teachingMethods = ["Online", "Offline", "Both"];

  return (
    <div className="filter-panel">
      <div className="filter-group">
        <label htmlFor="university-select">University</label>
        <div ref={universityDropdownRef} className="dropdown">
          <div
            onClick={() =>
              setIsUniversityDropdownActive(!isUniversityDropdownActive)
            }
            className="dropdown-btn"
          >
            {selectedUniversity || "Choose university"}
            <i
              className={
                isUniversityDropdownActive
                  ? "ri-arrow-up-s-line"
                  : "ri-arrow-down-s-line"
              }
            />
          </div>
          <div
            className={`dropdown-content ${
              isUniversityDropdownActive ? "dropdown-active" : ""
            }`}
          >
            {universities.map((uni) => (
              <div
                key={uni}
                className="item"
                onClick={() => handleDropdownChange(uni, "university")}
              >
                {uni}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="filter-group">
        <label htmlFor="subject-select">Subject</label>
        <div ref={subjectDropdownRef} className="dropdown">
          <div
            onClick={() => setIsSubjectDropdownActive(!isSubjectDropdownActive)}
            className="dropdown-btn"
          >
            {selectedSubject || "Choose subject"}
            <i
              className={
                isSubjectDropdownActive
                  ? "ri-arrow-up-s-line"
                  : "ri-arrow-down-s-line"
              }
            />
          </div>
          <div
            className={`dropdown-content ${
              isSubjectDropdownActive ? "dropdown-active" : ""
            }`}
          >
            {subjects.map((subject) => (
              <div
                key={subject}
                className="item"
                onClick={() => handleDropdownChange(subject, "subject")}
              >
                {subject}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="filter-group">
        <label htmlFor="teaching-method-select">Teaching Method</label>
        <div ref={teachingMethodDropdownRef} className="dropdown">
          <div
            onClick={() =>
              setIsTeachingMethodDropdownActive(!isTeachingMethodDropdownActive)
            }
            className="dropdown-btn"
          >
            {selectedTeachingMethod || "Choose teaching method"}
            <i
              className={
                isTeachingMethodDropdownActive
                  ? "ri-arrow-up-s-line"
                  : "ri-arrow-down-s-line"
              }
            />
          </div>
          <div
            className={`dropdown-content ${
              isTeachingMethodDropdownActive ? "dropdown-active" : ""
            }`}
          >
            {teachingMethods.map((method) => (
              <div
                key={method}
                className="item"
                onClick={() => handleDropdownChange(method, "teachingMethod")}
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="filter-actions">
          <button onClick={handleApplyFilters}>Apply Filters</button>
          <button onClick={handleClearAll}>Clear All Filters</button>
        </div>
      </div>
    </div>
  );
};

FilterPanel.propTypes = {
  onApplyFilters: PropTypes.func.isRequired,
  onClearAll: PropTypes.func.isRequired,
};

export default FilterPanel;
