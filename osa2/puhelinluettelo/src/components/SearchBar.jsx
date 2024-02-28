import React from 'react';

const SearchBar = ({ searchQuery, handleSearchChange }) => {
  return (
    <div>
      filter shown with <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by name..."
      />
    </div>
  );
};

export default SearchBar;
