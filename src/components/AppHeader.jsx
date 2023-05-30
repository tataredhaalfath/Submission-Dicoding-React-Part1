import React from 'react';
import AppSearch from './AppSearch';

export default function AppHeader({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>DAILY-NOTES</h1>
      <AppSearch onSearch={onSearch} />
    </div>
  );
}
