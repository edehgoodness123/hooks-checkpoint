
import React from 'react';

const Filter = ({ onTitleFilterChange, onRatingFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => onTitleFilterChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        onChange={(e) => onRatingFilterChange(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;
