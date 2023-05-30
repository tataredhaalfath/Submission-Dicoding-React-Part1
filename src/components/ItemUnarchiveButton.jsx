import React from 'react';

export default function ItemUnarchiveButton({ id, onUnarchive }) {
  return (
    <button
      className="note-item__archive-button"
      type="button"
      onClick={() => onUnarchive(id)}
    >
      Unarvhice
    </button>
  );
}
