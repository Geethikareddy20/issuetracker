import React from 'react';

const IssueFilter = () => {
  return (
    <div className="filter-container">
      {/* This is a placeholder for filtering logic */}
      <button onClick={() => console.log('Filtering logic goes here')}>
        All Issues
      </button>
      <button onClick={() => console.log('Filter by Open')}>
        Open Issues
      </button>
    </div>
  );
};

export default IssueFilter;