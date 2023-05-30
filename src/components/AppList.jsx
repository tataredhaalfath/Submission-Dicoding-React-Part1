import React from 'react';
import AppItem from './AppItem';

export default function AppList({
  notes,
  onDelete,
  onArchive,
  onUnarchive,
  keyword,
}) {
  return (
    <div className="notes-list">
      {notes
        .filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()))
        .map((note) => (
          <AppItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            onUnarchive={onUnarchive}
            {...note}
          />
        ))}
    </div>
  );
}
