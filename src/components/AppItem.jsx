import React from 'react';
import ItemArchiveButton from './ItemArchiveButton';
import ItemBody from './ItemBody';
import ItemDeleteButton from './ItemDeleteButton';
import ItemHeader from './ItemHeader';
import ItemUnarchiveButton from './ItemUnarchiveButton';

export default function AppItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
  onUnarchive,
}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <ItemHeader title={title} createdAt={createdAt} />
        <ItemBody body={body} />
      </div>
      <div className="note-item__action">
        <ItemDeleteButton id={id} onDelete={onDelete} />
        {archived ? (
          <ItemUnarchiveButton id={id} onUnarchive={onUnarchive} />
        ) : (
          <ItemArchiveButton id={id} onArchive={onArchive} />
        )}
      </div>
    </div>
  );
}
