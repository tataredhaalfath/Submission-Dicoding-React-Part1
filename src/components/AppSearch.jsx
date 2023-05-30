import React from 'react';

export default function AppSearch({ onSearch }) {
  return (
    <div className="note-search">
      <input
        onChange={(e) => onSearch(e.target.value)}
        type="search"
        placeholder="Search..."
      />
    </div>
  );
}
