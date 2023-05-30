import React from 'react';

export default function ItemArchiveButton({ id, onArchive }) {
  return (
    <button
      className="note-item__archive-button"
      type="button"
      onClick={() => onArchive(id)}
    >
      Archive
    </button>
  );
}
