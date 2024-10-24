import { useState, useEffect } from "react";
import SearchHeader from "../components/FindInstructors/SearchHeader";
import SearchBar from "../components/FindInstructors/SearchBar";
import FilterPanel from "../components/FindInstructors/FilterPanel";
import ResultsGrid from "../components/FindInstructors/ResultsGrid";
import "../styles/FindInstructors.css";
import { BASE_URL } from "../utils/config";

const FindInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [searchParams, setSearchParams] = useState({
    searchTerm: "",
    category: "",
  });
  const [filters, setFilters] = useState({});
  const [sortOrder, setSortOrder] = useState(""); // Assuming sortOrder is a string representing the current sort order

  useEffect(() => {
    const fetchInstructors = async () => {
      // Construct query parameters, excluding empty filters
      const queryParams = new URLSearchParams();
      Object.entries({ ...searchParams, ...filters }).forEach(
        ([key, value]) => {
          if (value) {
            queryParams.append(key, value);
          }
        }
      );

      let query = `${BASE_URL}/teachers/filter${
        queryParams.toString() ? `?${queryParams}` : ""
      }`;

      try {
        const response = await fetch(query);
        const result = await response.json();
        setInstructors(result.data);
        console.log(result);
      } catch (error) {
        console.error("Failed to fetch instructors:", error);
      }
    };

    fetchInstructors();
  }, [filters, searchParams, sortOrder]);

  const handleSearch = (searchTerm, category) => {
    setSearchParams({ searchTerm, category });
    setFilters({});
  };

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearAllFilters = () => {
    setFilters({});
  };

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  return (
    <div className="find-instructors">
      <SearchHeader
        resultsCount={instructors.length}
        onSortChange={handleSortChange}
      />
      <SearchBar onSearch={handleSearch} />
      <div className="find-main">
        <FilterPanel
          onApplyFilters={handleApplyFilters}
          onClearAll={handleClearAllFilters}
        />
        {instructors.length > 0 ? (
          <ResultsGrid instructors={instructors} />
        ) : (
          <div className="no-results-placeholder">
            No instructors found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default FindInstructors;
