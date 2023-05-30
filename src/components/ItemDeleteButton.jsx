import React from 'react';

export default function ItemDeleteButton({ id, onDelete }) {
  return (
    <button
      className="note-item__delete-button"
      type="button"
      onClick={() => onDelete(id)}
    >
      Delete
    </button>
  );
}
