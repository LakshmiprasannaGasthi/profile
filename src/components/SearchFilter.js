import React from "react";

const SearchFilter = ({ profiles, setFilteredProfiles }) => {
  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setFilteredProfiles(profiles.filter((p) => p.name.toLowerCase().includes(searchText)));
  };

  return <input type="text" placeholder="Search profiles..." onChange={handleSearch} />;
};

export default SearchFilter;
